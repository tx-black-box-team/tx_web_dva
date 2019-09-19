import React from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import HomeLogo from '../../components/home/logo';
import HomeInput from '../../components/home/input';
import { getHomeDispatch } from '../../beans';

import styles from './index.scss';

const mapStateToProps = ({ home }) => {
  return home;
};

const mapDispatchToProps = dispatch => ({
  ...getHomeDispatch(['serach_list'], dispatch),
});

class Home extends React.Component {
  constructor(props) {
    super(props);
    const { list } = this.props;
    this.home_logo_props = {};
    this.home_input_props = {
      list,
    };
  }

  static propTypes = {
    list: PropTypes.array.isRequired,
  };

  render() {
    return (
      <div className={styles['home']}>
        <HomeLogo {...this.home_logo_props} />
        <HomeInput {...this.home_input_props} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
