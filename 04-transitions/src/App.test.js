import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router/BrowserRouter'
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router><App /></Router>, div);
});
