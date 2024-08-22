import React, { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import { fetchUsers } from '../apis/fetchApi';

const Users = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  const columns = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: 'id',
        size: 150,
      },
      {
        accessorKey: 'name',
        header: 'Name',
        size: 150,
      },
      {
        accessorKey: 'username',
        header: 'Username',
        size: 150,
      },
      {
        accessorKey: 'email',
        header: 'Email',
        size: 200,
      },
      {
        accessorKey: 'address.street',
        header: 'Street',
        size: 200,
      },
      {
        accessorKey: 'address.city',
        header: 'City',
        size: 150,
      },
      {
        accessorKey: 'address.zipcode',
        header: 'Zip Code',
        size: 150,
      },
      {
        accessorKey: 'phone',
        header: 'Phone',
        size: 150,
      },
      {
        accessorKey: 'website',
        header: 'Website',
        size: 150,
      },
      {
        accessorKey: 'company.name',
        header: 'Company',
        size: 150,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: data || [],
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <h4>User's Details</h4>
      <MaterialReactTable table={table} />
    </>
  );
};

export default Users;
