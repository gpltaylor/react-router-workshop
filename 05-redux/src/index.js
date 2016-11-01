import React from 'react';
import ReactDOM from "react-dom";
import Router from "react-router/BrowserRouter";
import { createStore, applyMiddleware, compose, combineReducers} from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

import TrippleR from "./TrippleR/rrrComponent";
import rrrMiddleware from "./TrippleR/rrrmidleware";
import rrrReducer from "./TrippleR/rrrReducers";

import App from './App';
import './index.css';

const initialState = {
  firstName: '',
  surname: '',
  age: ''
};

let middleware = [];

/*
  TODO: Use a Thunk to trigger two updates to call the navigation and then the reset
*/
const testReducer = (state=initialState, action) => {
  switch (action.type) {
    case "REGISTER_FORM_UPDATE":
      return Object.assign({}, state, {[action.key]: action.value });
    default:
      return state;
  }
}

let reducers = combineReducers({ register: testReducer, rrr: rrrReducer });

const store = createStore(reducers, 
    composeWithDevTools(applyMiddleware(rrrMiddleware, thunk)));

ReactDOM.render(<Router>
  <Provider store={store}>
    <div>
    <TrippleR />    
      <App />
    </div>
  </Provider></Router>,
  document.getElementById('root')
);
