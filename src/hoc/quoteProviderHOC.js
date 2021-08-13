import React from 'react';
import { useSelector } from 'react-redux';

const quoteProviderHOC = (Component) => {

  return (props) => {
    const quote = useSelector(state => state.shoppingCart.quote)
    return <Component quote={quote} {...props} />
  }
}

export default quoteProviderHOC;