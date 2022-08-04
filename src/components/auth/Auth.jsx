import { Formik } from 'formik';
import React, { Component } from 'react';

class Auth extends Component {
  render() {
    return (
      <div className="container">
        <Formik
          initialValues={{
            email: '',
            password: '',
            confirmPassword: '',
          }}
          onSubmit={values => console.log(values)}
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
            if (!values.confirmPassword) {
              errors.confirmPassword = 'Required';
            } else if (values.password !== values.confirmPassword) {
              errors.confirmPassword = "Password didn't match";
            }
            return errors;
          }}>
          {({ values, handleChange, handleSubmit, errors }) => (
            <div>
              <form className="w-75 mx-auto mt-5" onSubmit={handleSubmit}>
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
                  <span className="text-danger">{errors.confirmPassword}</span>
                </div>
                <button
                  type="submit"
                  className="btn btn-lg w-100"
                  style={{ backgroundColor: '#D70F64', color: '#fff' }}>
                  Sign Up
                </button>
              </form>
            </div>
          )}
        </Formik>
      </div>
    );
  }
}

export default Auth;
