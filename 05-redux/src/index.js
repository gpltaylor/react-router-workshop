import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router/BrowserRouter';
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import Redirector from "./Redirect";

import App from './App';
import './index.css';

const initialState = {
  location: '/TestPage',
  navigateNow: false,
  navigateTo: '/'
};

/*
  TODO: Use a Thunk to trigger two updates to call the navigation and then the reset
*/
const testReducer = (state=initialState, action) => {
  if (action.type === "NAVIGATE_TO") {
    return Object.assign({}, state, {navigateNow: true, navigateTo: action.navigateTo});
  }
  if (action.type === "NAVIGATE_RESET") {
    return Object.assign({}, state, {navigateNow: false, navigateTo: '/'});   
  }

  return state;
}

const store = createStore(testReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<Router>
  <Provider store={store}>
    <div>
    <Redirector />    
      <App />
    </div>
  </Provider></Router>,
  document.getElementById('root')
);
