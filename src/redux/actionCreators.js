import axios from 'axios';
import * as actionTypes from './actionTypes';

export const moreIngredients = ingredientType => {
  return {
    type: actionTypes.MORE_INGREDIENTS,
    payload: ingredientType,
  };
};

export const lessIngredients = ingredientType => {
  return {
    type: actionTypes.LESS_INGREDIENTS,
    payload: ingredientType,
  };
};

export const updatePurchaseable = () => {
  return {
    type: actionTypes.UPDATE_PURCHASEABLE,
  };
};

export const resetIngredients = () => {
  return {
    type: actionTypes.RESET_INGREDIENTS,
  };
};

export const loadOrders = orders => {
  return {
    type: actionTypes.LOAD_ORDERS,
    payload: orders,
  };
};

export const orderLoadFailed = () => {
  return {
    type: actionTypes.ORDER_LOAD_FAILED,
  };
};

export const fetchOrders = (token, userId) => dispatch => {
  const queryParams = '&orderBy="userId"&equalTo="' + userId + '"';
  axios
    .get(
      'https://burger-builder-c9b33-default-rtdb.asia-southeast1.firebasedatabase.app/orderDetails.json?auth=' +
        token +
        queryParams
    )
    .then(response => dispatch(loadOrders(response.data)))
    .catch(() => dispatch(orderLoadFailed()));
};
