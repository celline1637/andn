import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Main from './pages/main/Main';
import Mypage from './pages/mypage/Mypage';
import Change from './pages/change/Change';
import Password from './pages/change/Password';

const Routes = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/mypage" component={Mypage} />
        <Route exact path="/mypage_change" component={Change} />
        <Route exact path="/mypage_change_password" component={Password} />
      </Switch>
    </Router>
  );
};
export default Routes;
