import React, { Component } from 'react';
import { Match } from 'react-router';
import logo from './logo.svg';
import './App.css';

let About = () => <span>About us</span>;
let FAQ = () => <span>FAQ</span>;

class App extends Component {
  constructor() {
    super();
    this.transitionTo = this.transitionTo.bind(this);
  }

  transitionTo(e) {
    e.preventDefault();
    this.context.router.transitionTo(e.target.pathname);
    // this.context.router.replaceWith(location);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <div>
            <a href="/about" onClick={this.transitionTo}>about us</a>
            <a href="/faq" onClick={this.transitionTo}>faq</a>
          </div>
        </div>
        <p className="App-intro">
          <Match pattern="/about" exactly component={About} />
          <Match pattern="/faq" component={FAQ} />
        </p>
      </div>
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.object
};

export default App;
