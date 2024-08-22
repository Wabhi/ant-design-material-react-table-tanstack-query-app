import React, { useState } from 'react';
import TabComponent from './components/TabComponent'; 
import Users from './components/Users';
import Posts from './components/Posts';




const App = () => {
  const [activeTab, setActiveTab] = useState('1');

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  return (
    <div>
      <TabComponent activeTab={activeTab} onTabChange={handleTabChange} />
      {activeTab === '1' && <Users/>}
      {activeTab === '2' && <Posts/>}
    </div>
  );
};

export default App;
