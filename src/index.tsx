//@ts-nocheck

import React from 'react';
import { render } from 'react-dom';
import { rootReducer } from './redux/root-reducer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from "redux";
import App from './App';
import './index.css'

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk)
  )
)

render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.querySelector("#root")
);