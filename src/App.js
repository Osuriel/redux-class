import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { reduxStore } from './redux-state/redux-store';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import HeadBar from './components/HeadBar';




export default function App() {
  return (
    <Provider store={reduxStore}>
      <div className="App">
        <HeadBar />
        <div style={{marginTop: '100px'}}>
        <ProductList />
        <ShoppingCart />
        </div>
      </div>
    </Provider>
  );
}
