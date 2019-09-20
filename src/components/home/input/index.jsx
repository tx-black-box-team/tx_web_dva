import React from 'react';
import { AutoComplete, Tag, Input, Icon, Button } from 'antd';
import PropTypes from 'prop-types';
import _ from 'lodash';
import styles from './index.scss';
import { ROLE_TYPE } from '../../../beans';
import { date_formart } from '../../../utils';

export default class HomeInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search_value: '',
    };
  }

  static propTypes = {
    list: PropTypes.array.isRequired,
    search: PropTypes.func.isRequired,
    to_result: PropTypes.func.isRequired,
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
          />
        </div>
        <div className={styles['bottom-info']}>
          <div className={styles['service-info']}>{item.YXQ}</div>
          <div className={styles['create-time']}>
            {date_formart(item.CreateTime, 'date_time')}
          </div>
        </div>
      </AutoComplete.Option>
    );
  };

  _debounce_search = _.debounce((value, search) => {
    search({
      Name: value,
      PageIndex: 1,
    });
  }, 500);

  query_search = value => {
    const { search } = this.props;
    this.setState({ search_value: value });
    this._debounce_search(value, search);
  };

  handle_key = () => {
    const { search_value } = this.state;
    const { to_result } = this.props;
    to_result(search_value);
  };

  render() {
    const { list = [] } = this.props;
    const { search_value = '' } = this.state;
    return (
      <div className={`${styles['search-box']} ${styles['render']}`}>
        <AutoComplete
          className={styles['search-area']}
          dataSource={list.map(this.options)}
          onSelect={this.handle_select}
          onChange={this.query_search}
          placeholder="请输入你想搜索的内容"
          optionLabelProp="text"
        >
          <Input
            value={search_value}
            prefix={<Icon type="search" />}
            suffix={
              <Button
                type="primary"
                shape="circle"
                icon="search"
                onClick={this.handle_key}
              />
            }
          />
        </AutoComplete>
      </div>
    );
  }
}
