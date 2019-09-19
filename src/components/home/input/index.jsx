import React from 'react';
import { connect } from 'dva';
import {
  AutoComplete,
  Tag,
  Input,
  Icon
} from 'antd';
import PropTypes from 'prop-types';
import styles from './index.scss';
import { ROLE_TYPE } from '../../../beans';

class HomeInput extends React.Component {
  constructor (props) {
    super(props);
    console.log(props);
  }

  static propTypes = {
    list: PropTypes.array.isRequired,
  }

  options = (item, index) => {
    return (
      <AutoComplete.Option
        key={index}
        text={item.Name}>
        <div className={styles['top-info']}>
          <Tag color={ROLE_TYPE[item.Type].color} >
            {ROLE_TYPE[item.Type].value}
          </Tag>
          <Tag color={ROLE_TYPE[item.Type].color}>
            Lv.{item.DengJi}
          </Tag>
          <div className={styles['name']} dangerouslySetInnerHTML={item.Name}></div>
        </div>
        <div className={styles['bottom-info']}>
          <div className={styles['service-indo']}>
            {item.YXQ}
          </div>
          <div className={styles['create-time']}>
            {item.CreateTime}
          </div>
        </div>
      </AutoComplete.Option>
    );
  }

  render () {
    const {
      list = []
    } = this.props;
    return (
      <div
        className={`${styles['search-box']} ${styles['render']}`}
        ref="search_area"
      >
        <AutoComplete
          className={styles['search-area']}
          dataSource={list.map(this.options)}
          onSelect={this.handle_select}
          onSearch={this.query_search}
          placeholder="请输入你想搜索的内容"
          optionLabelProp="text">
          <Input prefix={ <Icon type="search" /> } />
        </AutoComplete>
      </div>
    );
  }
}

export default connect()(HomeInput);
