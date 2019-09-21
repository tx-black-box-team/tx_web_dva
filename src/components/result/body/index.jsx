import React from 'react';
import { connect } from 'dva';
import { Tabs } from 'antd';
import styles from './index.scss';

class Body extends React.Component {
  render() {
    return (
      <div className={styles['result-body']}>
        <Tabs className={styles['tabs']} type="card">
          <Tabs.TabPane tab="Tab 1" key="1">
            Content of tab 1
          </Tabs.TabPane>
          <Tabs.TabPane tab="Tab 2" key="2">
            Content of tab 2
          </Tabs.TabPane>
          <Tabs.TabPane tab="Tab 3" key="3">
            Content of tab 3
          </Tabs.TabPane>
        </Tabs>
      </div>
    );
  }
}

export default connect()(Body);
