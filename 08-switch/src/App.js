import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from "./navigation";

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

var Home = () => (
  <div>To get started, edit <code>src/App.js</code> and save to reload.</div>  
)

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    alert("Costly AJAX call");
  }

  render() {
    return <div>About {this.props.match.params.username || "us"}</div>;
  }
}

var AccountDetails = ({match}) => (
  <div>Hello, {match.params.username}</div>
)

var NotFound = ({match}) => (
  <div>Sorry but the page {match.url} was not found</div>
)

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Router Beta 7</h2>
          <h3>An Introduction to Switch</h3>
        </div>
        <Navigation />
        <p className="App-intro">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutus/" component={AboutUs} />
          <Route path="/aboutus/:username" component={AboutUs} />
          <Route path="/user/:username" component={AccountDetails} />
          <Route component={NotFound} />
        </Switch>
        </p>
      </div>
      </Router>
    );
  }
}

export default App;
