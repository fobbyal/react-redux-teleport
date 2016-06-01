import React from 'react';
import { Route,IndexRedirect } from 'react-router';
import Dashboard from './container/Dashboard';
import Example from './container/Example';

const AppRoutes = () => (
  <Route path ="/" component ={Dashboard}>
  {
    // <IndexRedirect to="MarginCost/96622104"/>
  }
    <IndexRedirect to="/example"/>
    <Route path="example" component ={Example}/>
  </Route>
);

export default AppRoutes;
