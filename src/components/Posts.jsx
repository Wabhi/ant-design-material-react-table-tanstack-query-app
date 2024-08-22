import React, { useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { MaterialReactTable } from 'material-react-table';
import { Select, Spin, Alert } from 'antd';
import 'antd/dist/reset.css';
import { fetchPosts, fetchUsers } from '../apis/fetchApi';

const { Option } = Select;

const Posts = () => {
  const [selectedUserId, setSelectedUserId] = useState(null);

  const {
    data: postsData,
    error: postsError,
    isLoading: postsLoading,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  const {
    data: usersData,
    error: usersError,
    isLoading: usersLoading,
  } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  // Filter posts by the selected userId
  const filteredPosts = selectedUserId
    ? postsData?.filter((post) => post.userId === selectedUserId) || []
    : postsData || [];

  const columns = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: 'Post ID',
        size: 100,
      },
      {
        accessorKey: 'title',
        header: 'Title',
        size: 250,
      },
      {
        accessorKey: 'body',
        header: 'Body',
        size: 400,
      },
    ],
    []
  );

  if (postsLoading || usersLoading) return <Spin size="large" />;
  if (postsError)
    return (
      <Alert message="Error" description={postsError.message} type="error" />
    );
  if (usersError)
    return (
      <Alert message="Error" description={usersError.message} type="error" />
    );

  return (
    <div>
      <h4>User's Posts</h4>
      <Select
        placeholder="Select a user"
        onChange={(value) => setSelectedUserId(value)}
        value={selectedUserId || undefined}
        style={{ width: 200, marginBottom: 16 }}
      >
        <Option value="">All Users</Option>
        {usersData?.map((user) => (
          <Option key={user.id} value={user.id}>
            {user.username}
          </Option>
        ))}
      </Select>
      <MaterialReactTable columns={columns} data={filteredPosts} />
    </div>
  );
};

export default Posts;
