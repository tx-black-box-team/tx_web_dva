import React from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import HomeLogo from '../../components/home/logo';
import HomeInput from '../../components/home/input';
import { getHomeDispatch } from '../../beans';

import styles from './index.scss';

const mapStateToProps = ({ home }) => home;

const mapDispatchToProps = dispatch => ({
  ...getHomeDispatch(['serach_list', 'search'], dispatch),
});

class Home extends React.Component {
  static propTypes = {
    list: PropTypes.array.isRequired,
    search: PropTypes.func.isRequired,
  };

  render() {
    const { list, search } = this.props;
    const home_logo_props = {};
    const home_input_props = {
      list,
      search,
    };
    return (
      <div className={styles['home']}>
        <HomeLogo {...home_logo_props} />
        <HomeInput {...home_input_props} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
