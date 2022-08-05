import axios from 'axios';
import * as actionTypes from './actionTypes';

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    payload: {
      token: token,
      userId: userId,
    },
  };
};

export const auth = (email, password, mode) => dispatch => {
  const authData = {
    email: email,
    password: password,
    returnSecureToken: true,
  };
  const API_KEY = 'AIzaSyDJ7ppFAUFH0u_8jeKz0_oXig-q0FJA-9w';
  let authUrl = null;
  if (mode === 'Sign Up') {
    authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
  } else if (mode === 'Log In') {
    authUrl =
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';
  }
  axios.post(authUrl + API_KEY, authData).then(response => {
    const expirationTime = new Date(
      new Date().getTime() + response.data.expiresIn * 1000
    );

    localStorage.setItem('token', response.data.idToken);
    localStorage.setItem('userId', response.data.localId);
    localStorage.setItem('expirationTime', expirationTime);

    dispatch(authSuccess(response.data.idToken, response.data.localId));
  });
};

export const authCheck = () => dispatch => {
  const token = localStorage.getItem('token');
  if (!token) {
    // log out
  } else {
    const expirationTime = new Date(localStorage.getItem('expirationTime'));
    if (expirationTime <= new Date()) {
      // log out
    } else {
      const userId = localStorage.getItem('userId');
      dispatch(authSuccess(token, userId));
    }
  }
};
