import React from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import ResultHeader from '../../components/result/header';
import ResultBody from '../../components/result/body';
import { getResultDispatch } from '../../beans';
import styles from './index.scss';

const mapStateToProps = ({ result }) => result;

const mapDispatchToProps = dispatch => ({
  ...getResultDispatch(
    ['setFinished', 'changePage', 'setSearchValue', 'routeGo', 'backHome'],
    dispatch,
  ),
});

class Result extends React.Component {
  static propTypes = {
    tableList: PropTypes.array.isRequired,
    pageIndex: PropTypes.number.isRequired,
    setFinished: PropTypes.func.isRequired,
    changePage: PropTypes.func.isRequired,
    setSearchValue: PropTypes.func.isRequired,
    searchValue: PropTypes.string.isRequired,
    routeGo: PropTypes.func.isRequired,
    backHome: PropTypes.func.isRequired,
  };

  render() {
    const {
      tableList = [],
      pageIndex = 1,
      setFinished,
      changePage,
      searchValue,
      setSearchValue,
      routeGo,
      backHome,
    } = this.props;
    const header_props = {
      setFinished,
      setSearchValue,
      searchValue,
      routeGo,
      backHome,
    };
    const body_props = {
      setFinished,
      tableList,
      pageIndex,
      changePage,
    };
    return (
      <div className={styles['result-main']}>
        <ResultHeader {...header_props} />
        <ResultBody {...body_props} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Result);
