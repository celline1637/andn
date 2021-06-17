import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Main from './pages/main/Main';
import Campaign from './pages/mypage/Campaign';
import More from './pages/mypage/More';
import Mypage from './pages/mypage/Mypage';
import AdminCamp from './pages/admin/AdminCamp';
import AdminLogin from './pages/admin/AdminLogin';
import AdminMain from './pages/admin/AdminMain';
import AdminOrder from './pages/admin/AdminOrder';
import Change from './pages/change/Change';
import Password from './pages/change/Password';
import Pay from './pages/main/pay/Pay';
import Login from './pages/login/Login';
import Detail from './pages/main/detail/Detail';

const Routes = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/pay" component={Pay} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/detail/:id" component={Detail} />
        <Route exact path="/mypage" component={Mypage} />
        <Route exact path="/mypage_campaign" component={Campaign} />
        <Route exact path="/mypage_campaign_more/:id" component={More} />
        <Route exact path="/mypage_change" component={Change} />
        <Route exact path="/mypage_change_password" component={Password} />
        <Route exact path="/admin_main" component={AdminMain} />
        <Route exact path="/admin_login" component={AdminLogin} />
        <Route exact path="/admin_camp" component={AdminCamp} />
        <Route exact path="/admin_order/:id" component={AdminOrder} />
      </Switch>
    </Router>
  );
};
export default Routes;
