import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { reduxStore } from './redux-store';
import Counter from './Counter';




export default function App() {
  return (
    <Provider store={reduxStore}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Counter />
        </header>
      </div>
    </Provider>
  );
}
