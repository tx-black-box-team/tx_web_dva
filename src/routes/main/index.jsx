import React from 'react';
import { connect } from 'dva';
import { withRouter } from 'dva/router';
import { Button } from 'antd';

class Main extends React.Component {
  render () {
    return (
      <div className="main">
        <Button>22</Button>
        {this.props.children}
      </div>
    )
  }
}

export default withRouter(connect()(Main))
