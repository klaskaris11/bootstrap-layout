import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Fontawesome icons
import './Assets/Vendors/Fontawesome/css/fa-brands.css';
import './Assets/Vendors/Fontawesome/css/fa-regular.css';
import './Assets/Vendors/Fontawesome/css/fa-solid.css';
import './Assets/Vendors/Fontawesome/css/fontawesome.css';

import UIReducer from './Store/Reducers/UIReducer';

const composeEnhancers =
  (process.env.NODE_ENV !== 'production' &&
    typeof window !== 'undefined' &&
    //@ts-expect-error
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(UIReducer, composeEnhancers(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
