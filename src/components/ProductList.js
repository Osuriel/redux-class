import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchItems } from '../databaseMock';
import { addToCartActionCreator, displayQuoteActionCreator, DISPLAY_QUOTE_ACTION } from '../redux-state/shoppingCartState';
import NewStuff from './NewStuff';

const ProductList = () => {
  const dispatch = useDispatch();
  const quote = useSelector(state => state.shoppingCart.quote);

  const products = fetchItems();

  return (
    <div>
      <h2>{quote}</h2>
      <div style={{marginBottom: '30px'}}>
        <button onClick={() => dispatch(displayQuoteActionCreator())}>get new quote</button>
      </div>
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
      <NewStuff />
    </div>
  )
}

export default ProductList;