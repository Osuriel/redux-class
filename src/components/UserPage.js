import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setFavoriteColorActionCreator } from '../redux-state/userState';

const UserPage = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const [favColor, setFavColor] = useState('red');

  const handleSetColor = () => {
    dispatch(setFavoriteColorActionCreator(favColor));
  };

  if(!user){
    return <h1>No user</h1>
  }


  return (
    <div>
      <h1>Hi, {user.name}</h1>
      <h3>from {user.city}</h3>
      <input
        placeholder="favorite color"
        value={favColor}
        onChange={event => setFavColor(event.target.value)}
      />
      <button onClick={handleSetColor}>Set</button>
    </div>
  )
}

export default UserPage;