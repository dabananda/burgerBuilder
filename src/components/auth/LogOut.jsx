import React, { Component } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../../redux/authActionCreators';

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(logOut()),
  };
};

class LogOut extends Component {
  componentDidMount() {
    this.props.logOut();
  }

  render() {
    return (
      <Routes>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    );
  }
}

export default connect(null, mapDispatchToProps)(LogOut);
