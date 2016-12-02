import React, { Component } from 'react';
import { Match } from 'react-router';
import Link from 'react-router/Link';
import logo from './logo.svg';
import './App.css';
import createHistory from 'history/createBrowserHistory';

let About = () => <span>About us</span>;
let FAQ = () => <span>FAQ</span>;

class App extends Component {
  constructor() {
    super();
    this.history = createHistory();
  }

  goBack() {
    history.back();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <div>
            <Link to="/about">About us</Link>
            <Link to="/faq">FAQ</Link>
          </div>
        </div>
        <p className="App-intro">
          <Match pattern="/about" exactly component={About} />
          <Match pattern="/faq" component={FAQ} />
          <input type="button" value="back" onClick={this.goBack} />
        </p>
      </div>
    );
  }
}

export default App;
