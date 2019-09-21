import React from 'react';
import { Input, Button } from 'antd';
import PropTypes from 'prop-types';
import styles from './index.scss';
import { withRouter } from 'react-router';

class Header extends React.Component {
  static propTypes = {
    searchValue: PropTypes.string.isRequired,
    setSearchValue: PropTypes.func.isRequired,
    routeGo: PropTypes.func.isRequired,
    backHome: PropTypes.func.isRequired,
  };

  handle_change = ({ target: { value } }) => {
    const { setSearchValue } = this.props;
    setSearchValue(value);
  };

  search_list = () => {
    const { searchValue, routeGo, backHome } = this.props;
    searchValue && routeGo(searchValue);
    !searchValue && backHome();
  };

  render() {
    const { searchValue = '' } = this.props;
    return (
      <div className={styles['result-header']}>
        <Input
          className={styles['search-input']}
          value={searchValue}
          onChange={this.handle_change}
          allowClear
        />
        <Button
          className={styles['search-btn']}
          type="primary"
          onClick={this.search_list}
        >
          搜索
        </Button>
      </div>
    );
  }
}

export default withRouter(Header);
