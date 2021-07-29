import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { reduxStore } from './redux-state/redux-store';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';




export default function App() {
  return (
    <Provider store={reduxStore}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ProductList />
          <ShoppingCart />
        </header>
      </div>
    </Provider>
  );
}
