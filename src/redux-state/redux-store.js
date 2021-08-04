import { createStore, compose, combineReducers } from 'redux';
import { initialState as shoppingCartInitialState, reducer as shoppingCartReducer } from './shoppingCartState';
import { initialState as userInitialState, reducer as userReducer } from './userState';

// Activate redux chrome dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const reduxStore = createStore(
  combineReducers({
    shoppingCart: shoppingCartReducer,
    user: userReducer,
  }),
  {
    shoppingCart: shoppingCartInitialState,
    user: userInitialState,
  },
  composeEnhancers(),
);