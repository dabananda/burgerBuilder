import { Formik } from 'formik';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { auth } from '../../redux/authActionCreators';
import Spinner from '../spinner/Spinner';

const mapDispatchToProps = dispatch => {
  return {
    auth: (email, password, mode) => dispatch(auth(email, password, mode)),
  };
};

const mapStateToProps = state => {
  return {
    authLoading: state.authLoading,
    authFailedMessage: state.authFailedMessage,
  };
};

class Auth extends Component {
  state = {
    mode: 'Sign Up',
  };

  modeSwitchHandler = () => {
    this.setState({
      mode: this.state.mode === 'Sign Up' ? 'Log In' : 'Sign Up',
    });
  };

  render() {
    let error = null;
    if (this.props.authFailedMessage) {
      error = (
        <div
          className="alert alert-danger w-75 mx-auto mt-3 text-center"
          role="alert">
          {this.props.authFailedMessage}
        </div>
      );
    }
    let form = null;
    if (this.props.authLoading) {
      form = <Spinner />;
    } else {
      form = (
        <Formik
          initialValues={{
            email: '',
            password: '',
            confirmPassword: '',
          }}
          onSubmit={values => {
            this.props.auth(values.email, values.password, this.state.mode);
          }}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i.test(
                values.email
              )
            ) {
              errors.email = 'Please enter a valid email address';
            }
            if (!values.password) {
              errors.password = 'Required';
            } else if (values.password.length < 4) {
              errors.password = 'Password should be atleast 4 characters long';
            }
            if (this.state.mode === 'Sign Up') {
              if (!values.confirmPassword) {
                errors.confirmPassword = 'Required';
              } else if (values.password !== values.confirmPassword) {
                errors.confirmPassword = "Password didn't match";
              }
            }
            return errors;
          }}>
          {({ values, handleChange, handleSubmit, errors }) => (
            <div className="mt-3 w-75 mx-auto">
              <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Email address"
                    value={values.email}
                    onChange={handleChange}
                  />
                  <label>Email address</label>
                  <span className="text-danger">{errors.email}</span>
                </div>
                <div className="form-floating mb-3">
                  <input
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                  />
                  <label>Password</label>
                  <span className="text-danger">{errors.password}</span>
                </div>
                {this.state.mode === 'Sign Up' ? (
                  <div className="form-floating mb-3">
                    <input
                      name="confirmPassword"
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      value={values.confirmPassword}
                      onChange={handleChange}
                    />
                    <label>Confirm Password</label>
                    <span className="text-danger">
                      {errors.confirmPassword}
                    </span>
                  </div>
                ) : null}
                <button
                  type="submit"
                  className="btn btn-lg w-100 mb-3"
                  style={{ backgroundColor: '#D70F64', color: '#fff' }}>
                  {this.state.mode === 'Sign Up' ? 'Sign Up' : 'Log In'}
                </button>
              </form>
              <button
                className="btn mb-3 w-100"
                onClick={this.modeSwitchHandler}>
                Switch to {this.state.mode === 'Sign Up' ? 'Log In' : 'Sign Up'}
              </button>
            </div>
          )}
        </Formik>
      );
    }
    return (
      <div className="container">
        {error}
        {form}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
