import logo from './logo.svg';
import './App.css';
import { Provider, useDispatch } from 'react-redux'

import { createStore, compose } from 'redux'
import { useSelector } from 'react-redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const reducer = (state, action) => {

  if (action.type === 'increase') return state + 1
  if (action.type === 'decrease') return state - 1

  return state
}

const store = createStore(
  reducer,
  0,
  composeEnhancers(),
  )

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state)

  const increase = () => dispatch({type: 'increase'})
  const decrease = () => dispatch({type: 'decrease'})


  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
        </a>
        <button onClick={increase}>increase</button>
        <button onClick={decrease}>decrease</button>
        <h1>{counter}</h1>
      </header>
    </div>
    </Provider>
  );
}

export default () => <Provider store={store}>
  <App />
</Provider>
