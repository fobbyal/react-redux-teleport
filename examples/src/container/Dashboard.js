import React from 'react';
import { createPortal } from 'react-redux-teleport';

const MainPort = createPortal('main');

const Dashboard = ({ children }) => (
  <div>
    <h1 style={{ textAlign:'center' }} >Module Dashboard</h1>
    {children}
    <MainPort/>
  </div>
);

export default Dashboard;
