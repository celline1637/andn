import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Main from './pages/Main';
import Mypage from './pages/mypage/Mypage';

const Routes = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/mypage" component={Mypage} />
      </Switch>
    </Router>
  );
};
export default Routes;
