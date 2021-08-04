import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const UserPage = () => {
  const user = useSelector(state => state.user);

  const [favColor, setFavColor] = useState('red');

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
      <button onClick={() => console.log('favColor: ', favColor)}>Set</button>
    </div>
  )
}

export default UserPage;