import React from 'react';
import { connect } from 'dva';
import { Switch, Route } from 'dva/router';
import Main from '.';
import Home from '../home'

class MainRoute extends React.Component {
  render () {
    const {
      location,
      match
    } = this.props

    return (
      <Main>
        <Switch location={location}>
          <Route path={`${match.path}/home`} component={Home} />
        </Switch>
      </Main>
    )
  }
}

export default connect()(MainRoute)
