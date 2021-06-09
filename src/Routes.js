import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Main from './pages/Main';
import Campaign from './pages/mypage/Campaign';
import More from './pages/mypage/More';
import Mypage from './pages/mypage/Mypage';

const Routes = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/mypage" component={Mypage} />
        <Route exact path="/mypage_campaign" component={Campaign} />
        <Route exact path="/mypage_campaign_more/:id" component={More} />
      </Switch>
    </Router>
  );
};
export default Routes;
