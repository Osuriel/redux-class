import React from 'react';
import { useSelector } from 'react-redux';

const quoteProviderHOC = (Component) => {

  return () => {
    const quote = useSelector(state => state.shoppingCart.quote)
    return <Component quote={quote} />
  }
}

export default quoteProviderHOC;