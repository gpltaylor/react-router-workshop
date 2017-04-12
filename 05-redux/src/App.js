import React, { Component } from 'react';

import { Route } from 'react-router-dom';

import Home from './home';
import AppForm from './AppForm';
import Navigation from "./Navigation";

import logo from './logo.svg';
import './App.css';


class App extends Component {

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Navigation />
        <div className="App-main">
          <Route exact path="/" component={Home}/>
          <Route exact path="/apply" component={AppForm}/>
        </div>
      </div>
    );
  }
}

export default App;
