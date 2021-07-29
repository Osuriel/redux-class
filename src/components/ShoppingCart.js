import React from 'react';
import { useSelector } from 'react-redux';

const ShoppingCart = () => {
  const shoppingCart = useSelector(state => state.shoppingCart);

  console.log('shoppingCart: ', shoppingCart);

  return (
    <div style={{
      marginTop: '20px',
      marginBottom: '20px',
      padding: '30px',
      border: '2px solid blue',
      width: "100%",
    }}>
      {shoppingCart.items.map(item => {
        return (
          <div>
            {item.title} - ${item.price/100}
          </div>
        )
      })}
    </div>
  )
}

export default ShoppingCart;