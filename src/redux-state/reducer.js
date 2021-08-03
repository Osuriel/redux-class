import { ADD_TO_CART_ACTION, REMOVE_FROM_CART_ACTION, LOG_IN_ACTION } from "./actions";

export const reducer = (state, action) => {
  if(action.type === ADD_TO_CART_ACTION){
    const newItem = action.payload.newItem;

    // we're copying the old state, but modifying some keys.
    return {
      ...state,
      shoppingCart: {
        ...state.shoppingCart,
        items: [
          ...state.shoppingCart.items,
          newItem,
        ],
      }
    }
  }

  if(action.type === REMOVE_FROM_CART_ACTION){
    const itemIdToRemove = action.payload.itemId;

    // we're copying the old state, but for the shopping cart items were filtering out
    // all items that match the id to be removed.
    return {
      ...state,
      shoppingCart: {
        ...state.shoppingCart,
        items: state.shoppingCart.items.filter(item => item.id !== itemIdToRemove),
      }
    }
  }

  if(action.type === LOG_IN_ACTION) {
    return {
      ...state,
      user: {
        id: action.payload.name,
        userName: action.payload.name,
        name: action.payload.name,
        city: action.payload.city,
      },
    };
  }

  return state;
};