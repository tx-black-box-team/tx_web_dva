import React from 'react';
import { connect } from 'dva';
import { withRouter } from 'dva/router';
import TXHeader from '../../components/header'

const $ = require('jquery');

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.main_bg = React.createRef();
  }

  componentDidMount () {
    const num = Math.floor(Math.random() * 23) + 1
    $(this.main_bg.current).attr('class', `flur-box login-bg${num}`);
  }

  render () {
    return (
      <div className="main">
        <div className="flur-box" ref={this.main_bg}></div>
        <TXHeader />
        <div className="main-body">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default withRouter(connect()(Main))
