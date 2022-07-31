import * as actionTypes from './actionTypes';

const PRICES = {
  cheese: 30,
  meat: 80,
  salad: 20,
};

const INITIAL_STATE = {
  ingredients: [
    { type: 'cheese', amount: 0 },
    { type: 'meat', amount: 0 },
    { type: 'salad', amount: 0 },
  ],
  price: 0,
  purchaseable: true,
};

export const reducer = (state = INITIAL_STATE, action) => {
  const ingredients = [...state.ingredients];
  switch (action.type) {
    case actionTypes.MORE_INGREDIENTS:
      for (let item of ingredients) {
        if (item.type === action.payload) item.amount++;
      }
      return {
        ...state,
        ingredients: ingredients,
        price: state.price + PRICES[action.payload],
      };

    case actionTypes.LESS_INGREDIENTS:
      for (let item of ingredients) {
        if (item.type === action.payload) {
          if (item.amount <= 0) return state;
          item.amount--;
        }
      }
      return {
        ...state,
        ingredients: ingredients,
        price: state.price - PRICES[action.payload],
      };

    case actionTypes.UPDATE_PURCHASEABLE:
      const sum = state.ingredients.reduce((sum, element) => {
        return sum + element.amount;
      }, 0);
      return {
        ...state,
        purchaseable: !(sum > 0),
      };

    default:
      return state;
  }
};
