import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchItems } from '../databaseMock';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../redux-state/actions';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = fetchItems();

  return (
    <div>
      {products.map(item => {
        return (
          <div>
          <button onClick={() => dispatch({
            type: ADD_TO_CART,
            payload: {
              newItem: item,
            }
          })}>
            Add {item.title} to cart
          </button>  
          </div>
        )
      })}
    </div>
  )
}

export default ProductList;