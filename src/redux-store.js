import { createStore, compose } from 'redux';

// Activate redux chrome dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = (state, action) => {
  if(action.type === 'increase') {
    return state + 1;
  }

  if(action.type === 'decrease') {
    return state - 1;
  }

  return state;
};

export const unicorn = createStore(
  reducer,
  0,
  composeEnhancers(),
);