/* eslint-disable react/prop-types */

import React from 'react';
import { Router, Switch, Route } from 'dva/router';
import Main from './main/router';

function RouterConfig ({ history }) {
  return <Router history={history}>
    <Switch>
      <Route path="/main" component={Main}></Route>
    </Switch>
  </Router>;
}

export default RouterConfig;
