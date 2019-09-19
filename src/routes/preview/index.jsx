import React from 'react';
import { connect } from 'dva';
import { Spin, Icon } from 'antd';
import { withRouter } from 'dva/router';
import PropTypes from 'prop-types';
import styles from './index.scss';
import { getPreviewDispatch } from '../../beans';

const mapStateToProps = ({ preview }) => preview;
const mapDispatchToProps = dispatch => ({
  ...getPreviewDispatch([
    'redirect'
  ], dispatch)
});

class Preview extends React.Component {
  componentDidMount () {
    const { redirect } = this.props;
    redirect({});
  }

  static propTypes = {
    redirect: PropTypes.func.isRequired,
    ready: PropTypes.bool.isRequired,
    children: PropTypes.object.isRequired,
  }

  antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

  render () {
    const { ready } = this.props;
    return (
      <div className={styles['preview-main']}>
        { !ready &&
          <div className={styles['loading-spain']}>
            <Spin indicator={this.antIcon} tip="启动中，请稍后"/>
          </div>
        }
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Preview));
