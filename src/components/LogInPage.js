import React, { useState } from 'react';

const LogInPage = () => {
  const [{name, password}, setState]=useState({});
  const setName = (input) => setState({name: input, password});
  const setPassword = (input) => setState({name, password: input})

  const onSubmit = () => console.log({name, password});

  return (
  <div>
    <input placeholder="Username" onChange={({target: {value}}) => setName(value)} />
    <input type="password" placeholder="password" onChange={({target: {value}}) => setPassword(value)} />
    <button onClick={onSubmit}>Log in</button>
  </div>
  );
}

export default LogInPage;