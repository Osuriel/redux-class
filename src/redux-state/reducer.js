import { ADD_TO_CART, REMOVE_FROM_CART } from "./actions";

export const reducer = (state, action) => {
  if(action.type === ADD_TO_CART){
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

  if(action.type === REMOVE_FROM_CART){
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

  return state;
};