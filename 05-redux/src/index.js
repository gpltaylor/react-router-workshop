import React from 'react';
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { ConnectedRouter as Router, routerReducer, routerMiddleware } from "react-router-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";

import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from "redux-thunk";
import createHistory from 'history/createBrowserHistory';

const history = createHistory();
const middleware = routerMiddleware(history);

import registerReducer from "./reducers/register";

import App from './App';

const reducers = combineReducers({ register: registerReducer, router: routerReducer });
const store = createStore(reducers, composeWithDevTools(applyMiddleware(middleware, thunk)));

ReactDOM.render(

  <Provider store={store}>
    <Router history={history}>
      <div>
        <App />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
