import React, { Component } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import BurgerBuilder from './burger-builder/BurgerBuilder';
import Header from './header/Header';
import Orders from './orders/Orders';
import Checkout from './orders/checkout/Checkout';
import Auth from './auth/Auth';
import { connect } from 'react-redux';
import { authCheck } from '../redux/authActionCreators';
import LogOut from './auth/LogOut';

const mapStateToProps = state => {
  return {
    token: state.token,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authCheck: () => dispatch(authCheck()),
  };
};

class MainComponent extends Component {
  componentDidMount() {
    this.props.authCheck();
  }

  render() {
    const { token } = this.props;
    let route = null;
    if (token === null) {
      route = (
        <Routes>
          <Route path="/login" element={<Auth />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      );
    } else {
      route = (
        <Routes>
          <Route path="/" element={<BurgerBuilder />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/logout" element={<LogOut />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      );
    }
    return (
      <div>
        <Header />
        {route}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
