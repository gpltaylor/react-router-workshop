import React from 'react';
import ReactDOM from 'react-dom';

import Router from 'react-router/BrowserRouter'
import Match from 'react-router/Match'

import Navigation from './navigation';
import Home from './home';
import About from './aboutus';

import './index.css';
import './App.css';
import logo from './logo.svg';

ReactDOM.render(
  <Router>
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <Navigation />
      <div className="App-intro">
        <Match exactly pattern="/" component={Home} />
        <Match pattern="/about" component={About} />
      </div>
    </div>
  </Router>,
  document.getElementById('root')
);
