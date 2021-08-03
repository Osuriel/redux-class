/* global window */
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { reduxStore } from './redux-state/redux-store';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import HeadBar from './components/HeadBar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import UserPage from './components/UserPage';
import LogInPage from './components/LogInPage';

export default function App() {
  const href = window.location.href;
  console.log('href: ', href);

  return (
    <Router>
      <Provider store={reduxStore}>
          <div className="App">
            <div style={{marginTop: '100px'}}>
            <HeadBar />
              <Switch>
                <Route path="/cart">
                  <ShoppingCart />
                </Route>
                <Route path="/user">
                  <UserPage />
                </Route>
                <Route path="/login">
                  <LogInPage />
                </Route>
                <Route path="/">
                  <ProductList />
                </Route>
              </Switch>
            </div>
          </div>
        </Provider>
    </Router>     
  );
}
