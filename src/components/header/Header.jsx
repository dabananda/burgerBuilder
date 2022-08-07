import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapStateToProps = state => {
  return {
    token: state.token,
  };
};

const Header = props => {
  const { token } = props;
  let navLinks = null;
  if (token === null) {
    navLinks = (
      <Link className="nav-link" to="/login">
        Login
      </Link>
    );
  } else {
    navLinks = (
      <>
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/orders">
          Orders
        </Link>
        <Link className="nav-link" to="/logout">
          Log Out
        </Link>
      </>
    );
  }
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ background: '#D70F64' }}>
      <div className="container">
        <Link to="/" className="navbar-brand">
          Burger Builder
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup">
          <div className="navbar-nav">{navLinks}</div>
        </div>
      </div>
    </nav>
  );
};

export default connect(mapStateToProps)(Header);
