import React from 'react';
import { connect } from 'dva';
import { withRouter } from 'dva/router';

class Home extends React.Component {
  render () {
    return (
      <div>
        222
      </div>
    )
  }
}

export default withRouter(connect()(Home));
