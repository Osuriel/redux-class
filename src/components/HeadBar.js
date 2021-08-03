import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchItems } from '../databaseMock';
import { LOG_IN_ACTION } from '../redux-state/actions';

import {
  Link
} from "react-router-dom";

const UserInfo = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  return (
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
  )
}

const Navigation = () => {
  return (
    <div style={{
      display: 'flex',
      width: '50%',
      top: 0,
    }}>
      <div style={{paddingRight: '20px', color: 'white'}}>
        <Link to="/">Home</Link>
      </div>
      <div style={{paddingRight: '20px', color: 'white'}}>
        <Link to="/cart">Cart</Link>
      </div>
      <div style={{paddingRight: '20px', color: 'white'}}>
        <Link to="/user">User</Link>
      </div>
    </div>
  ); 
}

const HeadBar = () => {
  return (
    <div style={{
      background: 'red',
      position: 'fixed',
      height: '60px',
      width: '100vw',
      top: 0,
      display: 'flex',
      alignItems: 'center',
    }}>
      <div style={{
        display: 'flex',
        width: '100%',
        justifyItems: 'space-between'
      }}>
        <Navigation />
        <UserInfo />
      </div>
    </div>
  ); 
}

export default HeadBar;