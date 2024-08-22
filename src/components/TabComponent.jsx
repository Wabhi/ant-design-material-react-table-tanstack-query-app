// TabComponent.js
import React from 'react';
import { Tabs } from 'antd';
import './TabComponent.css';

const { TabPane } = Tabs;

const TabComponent = ({ activeTab, onTabChange }) => {
  return (
    <div className="tab-container">
      <Tabs activeKey={activeTab} onChange={onTabChange} centered>
        <TabPane tab="Users" key="1" />
        <TabPane tab="Posts" key="2" />
      </Tabs>
    </div>
  );
};

export default TabComponent;
