import React from 'react';
import { Router, Switch, Route } from 'dva/router';
import Main from './main/router';
import Preview from './preview';
import { createBrowserHistory } from 'history';

function RouterConfig() {
  const history = createBrowserHistory();
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
