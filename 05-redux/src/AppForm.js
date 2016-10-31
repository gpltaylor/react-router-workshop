import React from 'react';
import NavigationPrompt from 'react-router/NavigationPrompt';
import { connect } from 'react-redux';

class AppFormComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      blockTransitions: false,
      firstName: '',
      surname: ''
    }

    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value, blockTransitions: true});
  }

  submit() {
    this.setState({blockTransitions: false, status:'Thank you, your application has been submitted.'});
    this.props.navigateTo('/');
  }

  render() {
    return (
      <div>
        {this.state.blockTransitions && (
          <NavigationPrompt
            message={(location) => (
              `Are you sure you want to go to ${location.pathname}`
            )}
          />)}
        <form>
          <input name="firstName" placeholder="Firstname" value={this.state.firstName} onChange={this.onChange} />
          <input name="surname" placeholder="Surname" value={this.state.surname} onChange={this.onChange} />
          <input name="age" placeholder="age" type="number" value={this.state.age} onChange={this.onChange} />
          <div>
            Hi {(`${this.state.firstName || 'Guest'} ${this.state.surname}`).trim()}, please check your
            details and then submit.
          </div>
          <input type="button" defaultValue="Submit" onClick={this.submit} />
        </form>
        <div>{this.state.status}</div>
      </div>
    )
  }
}

const state = (state, ownProps = {}) => {
  return {
    location: state.location
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  navigateTo: (location) => {
    dispatch({ type: "NAVIGATE_TO", navigateTo: "/" });
    window.setTimeout(() => {
      dispatch({ type: "NAVIGATE_RESET" });      
    }, 200);
  }
});

export default connect(state, mapDispatchToProps)(AppFormComponent);