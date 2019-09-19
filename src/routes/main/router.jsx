import React from 'react';
import { connect } from 'dva';
import { Switch, Route, withRouter } from 'dva/router';
import PropTypes from 'prop-types';
import Main from '.';
import Home from '../home';

class MainRoute extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
  }

  render () {
    const {
      location,
      match
    } = this.props;

    return (
      <Main>
        <Switch location={location}>
          <Route path={`${match.path}/home`} component={Home} />
        </Switch>
      </Main>
    );
  }
}

export default withRouter(connect()(MainRoute));
