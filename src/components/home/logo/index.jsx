import React from 'react';
import { connect } from 'dva';
import styles from './index.scss'

class Logo extends React.Component {
  render () {
    return <div className={`${styles['logo-con']} ${styles['render']}`}>
      <i></i>
      <p>天下3小黑盒</p>
    </div>
  }
}

export default connect()(Logo)
