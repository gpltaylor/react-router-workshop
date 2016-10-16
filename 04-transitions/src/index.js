import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router/BrowserRouter'
import App from './App';
import './index.css';

window.Router = Router;

ReactDOM.render(<Router><App /></Router>,
  document.getElementById('root')
);
