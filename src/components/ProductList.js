import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchItems } from '../databaseMock';
import { addToCartActionCreator, ADD_TO_CART_ACTION } from '../redux-state/actions';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = fetchItems();

  return (
    <div>
      {products.map(item => {
        return (
          <div>
          <button onClick={
            () => dispatch(
            addToCartActionCreator(item)
            )}>
            Add {item.title} to cart
          </button>  
          </div>
        )
      })}
    </div>
  )
}

export default ProductList;