import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'


function App() {
  return (
    <Provider>
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
        <button onClick={}>increase</button>
        <button onClick={}>decrease</button>
        <h1>{counter}</h1>
      </header>
    </div>
    </Provider>
  );
}
