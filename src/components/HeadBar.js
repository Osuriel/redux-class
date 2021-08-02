import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchItems } from '../databaseMock';
import { LOG_IN_ACTION } from '../redux-state/actions';

const HeadBar = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user)

  return (
    <div style={{
      background: 'red',
      position: 'fixed',
      height: '60px',
      width: '100vw',
      top: 0,
    }}>
      <div style={{
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
      }}>
        {user ? (
          <h5>Hi {user.name}!!</h5>
        )
        : (
          <button
            onClick={() => dispatch({
            type: LOG_IN_ACTION
          })}>
            Log in
          </button>
        )
      }        
      </div>
    </div>
  ); 
}

export default HeadBar;