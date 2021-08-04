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

export const initialState = {
    items: [],
} 

// Reducer
export const reducer = (state = initialState, action) => {
  console.log({action, state});
  if(action.type === ADD_TO_CART_ACTION){
    const newItem = action.payload.newItem;

    // we're copying the old state, but modifying some keys.
    const newState = {
      ...state,
      items: [
        ...state.items,
        newItem,
      ],
    }
    console.log({newState});
    return newState;
  }

  if(action.type === REMOVE_FROM_CART_ACTION){
    const itemIdToRemove = action.payload.itemId;

    // we're copying the old state, but for the shopping cart items were filtering out
    // all items that match the id to be removed.
    return {
      items: state.items.filter(item => item.id !== itemIdToRemove),
    }
  }

  return state;
};

