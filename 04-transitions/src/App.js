import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Switch, Route, Link } from 'react-router-dom';

import Home from './home';
import Aboutus from './aboutus';
import AppForm from './AppForm';

import logo from './logo.svg';
import './App.css';

class FadeIn extends Component {

  componentDidMount() {
    console.log("componentDidMount", this.displayName);
    var that = this;
    // Get the components DOM node
    var elem = ReactDOM.findDOMNode(that);
    // Set the opacity of the element to 0
    elem.style.opacity = 0;
    window.requestAnimationFrame(function () {
      // Now set a transition on the opacity
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

const MatchWithFade = ({ component: Component, transition, ...rest }) => (
  <Route {...rest} render={(matchProps) => (
    <FadeIn transition={transition}>
      <Component {...matchProps} />
    </FadeIn>
  )} />
)

class App extends Component {

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
            <li><Link to="/apply">Apply</Link></li>
          </ul>
        </nav>
        <div className="App-main">
            <MatchWithFade path="/" exact component={Home} transition="opacity 5000ms" />
            <MatchWithFade path="/aboutus" component={Aboutus} transition="opacity 2000ms" />
            <MatchWithFade path="/apply" component={AppForm} transition="opacity 1000ms" />
        </div>
      </div>
    );
  }
}

export default App;
