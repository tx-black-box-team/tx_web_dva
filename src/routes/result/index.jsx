import React from 'react';
import { connect } from 'dva';
import styles from './index.scss';

const mapStateToProps = ({ result }) => result;

// const mapDispatchToProps = dispatch => ({});

class Result extends React.Component {
  render() {
    return (
      <div className={styles['result-main']}>
        <div className={styles['result-header']}></div>
        <div className={styles['result-body']}></div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Result);
