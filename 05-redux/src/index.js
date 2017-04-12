import React from 'react';
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { ConnectedRouter, routerReducer, routerMiddleware } from "react-router-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";

import thunk from "redux-thunk";
import createHistory from 'history/createBrowserHistory';
import { composeWithDevTools } from 'redux-devtools-extension';

import registerReducer from "./reducers/register";

import App from './App';

const history = createHistory();
const middleware = routerMiddleware(history);
const reducers = combineReducers({ register: registerReducer, router: routerReducer });
const store = createStore(reducers, composeWithDevTools(applyMiddleware(middleware, thunk)));

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
