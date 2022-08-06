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
  orders: [],
  orderLoading: true,
  orderError: false,
  token: null,
  userId: null,
  authLoading: false,
  authFailedMessage: null,
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

    case actionTypes.RESET_INGREDIENTS:
      return {
        ...state,
        ingredients: [
          { type: 'cheese', amount: 0 },
          { type: 'meat', amount: 0 },
          { type: 'salad', amount: 0 },
        ],
        price: 0,
        purchaseable: true,
      };

    case actionTypes.LOAD_ORDERS:
      let orders = [];
      for (let key in action.payload) {
        orders.push({
          ...action.payload[key],
          id: key,
        });
      }
      return {
        ...state,
        orders: orders,
        orderLoading: false,
      };

    case actionTypes.ORDER_LOAD_FAILED:
      return {
        ...state,
        orderError: true,
        orderLoading: false,
      };

    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        userId: action.payload.userId,
      };

    case actionTypes.AUTH_LOGOUT:
      return {
        ...state,
        token: null,
        userId: null,
        authFailedMessage: null,
      };

    case actionTypes.AUTH_LOADING:
      return {
        ...state,
        authLoading: action.payload,
        authFailedMessage: null,
      };

    case actionTypes.AUTH_FAILED:
      return {
        ...state,
        authFailedMessage: action.payload,
      };

    default:
      return state;
  }
};
