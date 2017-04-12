import React from 'react';
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';

import App from './App';
import './index.css';

const initialState = {
  firstName: '',
  surname: '',
  age: ''
};


/*
  TODO: Use a Thunk to trigger two updates to call the navigation and then the reset
*/
const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_FORM_UPDATE":
      return Object.assign({}, state, { [action.key]: action.value });
    default:
      return state;
  }
}

import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
const history = createHistory()

const middleware = routerMiddleware(history)

let reducers = combineReducers({ register: testReducer, router: routerReducer });

const store = createStore(reducers,
  composeWithDevTools(applyMiddleware(middleware, thunk)));

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
