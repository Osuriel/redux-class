import { createStore, compose } from 'redux';
import {reducer } from './reducer';

// Activate redux chrome dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  shoppingCart: {
    items: [],
  },
  user: undefined,
};

export const reduxStore = createStore(
  reducer,
  initialState,
  composeEnhancers(),
);