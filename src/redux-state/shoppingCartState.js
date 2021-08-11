import axios from 'axios';

// ACTIONS
// We set this as constants so that we can import them easily where we need to use them.
export const ADD_TO_CART_ACTION = 'codeImmersives/addToCart';
export const REMOVE_FROM_CART_ACTION = 'codeImmersives/removeFromCart';
export const DISPLAY_QUOTE_ACTION = 'codeImmersives/displayQuote';




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

export const displayQuoteActionCreator = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3004/quote');
    // a hour minutes go by
    const quote =  response.data.quote;
    
    dispatch({
      type: DISPLAY_QUOTE_ACTION,
      payload: {
        quote,
      }
    })
  } catch (error) {
    console.error(error);
  }
}

export const initialState = {
    items: [],
} 

// Reducer
export const reducer = (state = initialState, action) => {
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

  if(action.type === DISPLAY_QUOTE_ACTION){
    const quote = action.payload.quote;

    // we're copying the old state, but for the shopping cart items were filtering out
    // all items that match the id to be removed.
    return {
      ...state,
      quote,
    }
  }

  return state;
};

