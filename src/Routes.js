import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AdminCamp from './pages/admin/AdminCamp';
import AdminLogin from './pages/admin/AdminLogin';
import AdminMain from './pages/admin/AdminMain';
import AdminOrder from './pages/admin/AdminOrder';
import Main from './pages/main/Main';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/admin_main" component={AdminMain} />
        <Route exact path="/admin_login" component={AdminLogin} />
        <Route exact path="/admin_camp" component={AdminCamp} />
        <Route exact path="/admin_order/:id" component={AdminOrder} />
      </Switch>
    </Router>
  );
};
export default Routes;
