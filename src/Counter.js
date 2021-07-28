import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counter = (props) => {
  const dispatch = useDispatch();
  const counter = useSelector((reduxState) => reduxState);

  return (
    <div>
      <button onClick={() => dispatch({type: 'increase'})}>increase</button>
      <button onClick={() => dispatch({type: 'decrease'})}>decrease</button>
      <h1>{counter}</h1>
    </div>
  );
};

export default Counter;