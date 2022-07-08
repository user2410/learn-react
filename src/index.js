import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
// import { FavsContextProvider } from './store/fav-contexts';

import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from './reducers';

const store = createStore(allReducers);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <FavsContextProvider>
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider> 
  // </FavsContextProvider>
);