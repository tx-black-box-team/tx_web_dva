import React from 'react';
import { Router, Switch, Route } from 'dva/router';
import Main from './main/router';
import Preview from './preview';

// eslint-disable-next-line react/prop-types
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Preview>
          <Route path="/main" component={Main} />
        </Preview>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
