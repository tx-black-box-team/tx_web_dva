
import React from 'react';
import { connect } from 'dva';
import HomeLogo from '../../components/home/logo';
import HomeInput from '../../components/home/input';

import styles from './index.scss';

const mapStateToProps = ({ home }) => {
  return home;
};

class Home extends React.Component {
  render () {
    return (
      <div className={styles['home']}>
        <HomeLogo />
        <HomeInput />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Home);
