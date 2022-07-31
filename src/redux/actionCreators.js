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
