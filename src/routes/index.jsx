/* eslint-disable react/prop-types */

import React from 'react';
import { Router, Switch, Route } from 'dva/router';
import Main from './main/router';
import Preview from './preview';

function RouterConfig ({ history }) {
  return <Router history={history}>
    <Switch>
      <Preview>
        <Route path="/main" component={Main} />
      </Preview>
    </Switch>
  </Router>;
}

export default RouterConfig;
