import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCartActionCreator, REMOVE_FROM_CART_ACTION } from '../redux-state/shoppingCartState';

const ShoppingCart = () => {
  const shoppingCart = useSelector(state => state.shoppingCart);
  const dispatch = useDispatch();

  if(shoppingCart.items.length === 0){
    return <h1>Its empty!!</h1>
  }
  return (
    <div style={{
      marginTop: '20px',
      marginBottom: '20px',
      padding: '30px',
      border: '2px solid blue',
      width: "100%",
    }}>
      <h1>Shopping Cart</h1>
      {shoppingCart.items.map(item => {
        return (
          <div>
            {item.title} - ${item.price/100}
            <button
            onClick={() => dispatch(
              removeFromCartActionCreator(item.id)
              )}>Remove</button>
          </div>
        )
      })}
    </div>
  )
}

export default ShoppingCart;