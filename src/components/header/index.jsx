import React from 'react';
import { connect } from 'dva';
import { withRouter } from 'dva/router';
import { Menu } from 'antd';
import styles from './index.scss';
import { MENU_MAP } from '../../beans';

class Header extends React.Component {
  render() {
    return (
      <div className={styles['header-main']}>
        <div className={styles['logo']}>
          <i></i>
          <p>天下3小黑盒</p>
        </div>
        <div className={styles['menu-box']}>
          <Menu className={styles['menu-con']} mode="horizontal">
            {MENU_MAP.map(item => (
              <Menu.Item key={item.path}>{item.name}</Menu.Item>
            ))}
          </Menu>
        </div>
        <div className={styles['user-box']}></div>
      </div>
    );
  }
}

export default withRouter(connect()(Header));
