import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const Nav = lazy(() => import('./components/Nav'));
const Home = lazy(() => import('./pages/main/Main'));
const Pay = lazy(() => import('./pages/main/pay/Pay'));
const Login = lazy(() => import('./pages/login/Login'));
const Detail = lazy(() => import('./pages/main/detail/Detail'));
const Mypage = lazy(() => import('./pages/mypage/Mypage'));
const Campaign = lazy(() => import('./pages/mypage/Campaign'));
const More = lazy(() => import('./pages/mypage/More'));
const AdminCamp = lazy(() => import('./pages/admin/AdminCamp'));
const AdminLogin = lazy(() => import('./pages/admin/AdminLogin'));
const AdminMain = lazy(() => import('./pages/admin/AdminMain'));
const AdminOrder = lazy(() => import('./pages/admin/AdminOrder'));
const Change = lazy(() => import('./pages/change/Change'));
const Password = lazy(() => import('./pages/change/Password'));

const Routes = () => {
  return (
    <Router>
      <Nav />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
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
      </Suspense>
    </Router>
  );
};
export default Routes;
