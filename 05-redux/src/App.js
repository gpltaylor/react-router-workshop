import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Match from 'react-router/Match';
import Miss from 'react-router/Miss';
import Link from 'react-router/Link';

import Home from './home';
import AppForm from './AppForm';
import Navigation from "./Navigation";

import logo from './logo.svg';
import './App.css';

class FadeIn extends Component {

  componentDidMount() {
    var that = this;
    // Get the components DOM node
    var elem = ReactDOM.findDOMNode(this);
    // Set the opacity of the element to 0
    elem.style.opacity = 0;
    window.requestAnimationFrame(function() {
        // Now set a transition on the opacity
        console.log(" that.props",  that.props);
        elem.style.transition = that.props.transition || "opacity 5000ms";
        // and set the opacity to 1
        elem.style.opacity = 1;
    });
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

const MatchWithFade = ({ component:Component, transition, ...rest }) => (
  <Match {...rest} render={(matchProps) => (
    <FadeIn transition={transition}>
      <Component {...matchProps}/>
    </FadeIn>
  )}/>
)

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
          <Match pattern="/" exactly component={Home} />
          <MatchWithFade  pattern="/apply" component={AppForm} transition="opacity 2000ms" />
        </div>
      </div>
    );
  }
}

export default App;
