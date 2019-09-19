import React from 'react';
import { connect } from 'dva';

const mapStateToProps = ({ result }) => result;

// const mapDispatchToProps = dispatch => ({});

class Result extends React.Component {
  render() {
    return <div>222</div>;
  }
}

export default connect(mapStateToProps)(Result);
