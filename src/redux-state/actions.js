// ACTIONS
// We set this as constants so that we can import them easily where we need to use them.
export const ADD_TO_CART_ACTION = 'codeImmersives/addToCart';
export const REMOVE_FROM_CART_ACTION = 'codeImmersives/removeFromCart';


// ACTION CREATORS
// functions that we define to help us create actions
export const addToCartActionCreator = (item) => {
  return {
    type: ADD_TO_CART_ACTION,
    payload: {
      newItem: item,
    }
  }
}

export const removeFromCartActionCreator = (itemId) => {
  return {
    type: REMOVE_FROM_CART_ACTION,
    payload: {
      itemId,
    }
  }
}

export const LOG_IN_ACTION = 'codeImmersives/logIn';

export const loginActionCreator = (authorizedUser) => {
  return {
    type: LOG_IN_ACTION,
    payload: {
      id: authorizedUser.id,
      userName: authorizedUser.userName,
      name: authorizedUser.name,
      city: authorizedUser.city,
    },
  }
};