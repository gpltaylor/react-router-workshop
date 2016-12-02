import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router/HashRouter';
import NavigationPrompt from 'react-router/NavigationPrompt';
import App from './App';
import './index.css';

let getUserConfirmation = (message, callback) => {
  let success = () => {
    alert("Success");
    callback(true);
  };

  let failed = () => {
    alert("Failed");
    callback(false);
  }

  let doWork = new Promise((resolve, reject) => {
    Math.random() > 0.5 ?
    resolve("This is ok") :
    reject("Something went wrong");
  });

  doWork.then(success,failed);
}

class CustomUserConfirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {answer: false, question: props.question};
  }

  render() {
    return (
      <div>
        <NavigationPrompt message={this.state.question} />
      </div>
    )
  }
}

ReactDOM.render(<Router getUserConfirmation={getUserConfirmation}>
  <div>
      <App />
      <CustomUserConfirmation question="Do you like React Router?" />
  </div>
</Router>,
  document.getElementById('root'));
