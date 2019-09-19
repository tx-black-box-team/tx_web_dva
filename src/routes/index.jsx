
import React from 'react';
import { Router, Switch, Route } from 'dva/router';
import Main from './main/router';
import createBrowHistory from 'history/createBrowserHistory';

function RouterConfig () {
  return <Router history={createBrowHistory()}>
    <Switch>
      <Route path="/main" component={Main}></Route>
    </Switch>
  </Router>;
}

export default RouterConfig;
