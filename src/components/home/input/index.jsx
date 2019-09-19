import React from 'react';
import { connect } from 'dva';
import { AutoComplete, Tag, Input, Icon } from 'antd';
import PropTypes from 'prop-types';
import _ from 'lodash';
import styles from './index.scss';
import { ROLE_TYPE } from '../../../beans';
import { date_formart } from '../../../utils';

class HomeInput extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    list: PropTypes.array.isRequired,
    search: PropTypes.func.isRequired,
  };

  createMarkup = html => ({ __html: html });

  options = (item, index) => {
    return (
      <AutoComplete.Option
        className={styles['result-list']}
        key={index}
        text={item.Name}
      >
        <div className={styles['top-info']}>
          <Tag color={ROLE_TYPE[item.Type].color}>
            {ROLE_TYPE[item.Type].value}
          </Tag>
          <Tag color={ROLE_TYPE[item.Type].color}>Lv.{item.DengJi}</Tag>
          <div
            className={styles['name']}
            dangerouslySetInnerHTML={this.createMarkup(item.Name)}
          ></div>
        </div>
        <div className={styles['bottom-info']}>
          <div className={styles['service-indo']}>{item.YXQ}</div>
          <div className={styles['create-time']}>
            {date_formart(item.CreateTime, 'date_time')}
          </div>
        </div>
      </AutoComplete.Option>
    );
  };

  debounceSearch = _.debounce((value, search) => {
    search({
      Name: value,
      PageIndex: 1,
    });
  }, 500);

  query_search = value => {
    const { search } = this.props;
    this.debounceSearch(value, search);
  };

  render() {
    const { list = [] } = this.props;
    return (
      <div className={`${styles['search-box']} ${styles['render']}`}>
        <AutoComplete
          allowClear
          className={styles['search-area']}
          dataSource={list.map(this.options)}
          onSelect={this.handle_select}
          onChange={this.query_search}
          placeholder="请输入你想搜索的内容"
          optionLabelProp="text"
        >
          <Input prefix={<Icon type="search" />} />
        </AutoComplete>
      </div>
    );
  }
}

export default connect()(HomeInput);
