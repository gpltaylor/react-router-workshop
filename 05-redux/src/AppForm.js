import React from 'react';
import { Prompt } from 'react-router';
import { connect } from 'react-redux';
import { push } from "react-router-redux";

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
    this.setState({blockTransitions: true });    
    this.props.updateForm(e.target.name, e.target.value);
  }

  submit() {
    this.setState({
      blockTransitions: false, 
      status:'Thank you, your application has been submitted.'
    }, () => {
      this.props.navigateTo('/');
    });
  }

  render() {
    return (
      <div>
        {this.state.blockTransitions === true ? <b>blocking</b> : <b>Not blocking</b>}
        <Prompt message={`Are you sure you want to go to ${location.pathname}`} when={this.state.blockTransitions} />
        <form>
          <input name="firstName" placeholder="Firstname" value={this.props.firstName} onChange={this.onChange} />
          <input name="surname" placeholder="Surname" value={this.props.surname} onChange={this.onChange} />
          <input name="age" placeholder="age" type="number" value={this.props.age} onChange={this.onChange} />
          <div>
            Hi {(`${this.props.firstName || 'Guest'} ${this.props.surname}`).trim()}, please check your
            details and then submit.
          </div>
          <input type="button" defaultValue="Submit" onClick={this.submit} />
        </form>
        <div>{this.props.status}</div>
      </div>
    )
  }
}

const state = (state, ownProps = {}) => {
  return {
    firstName: state.register.firstName,
    surname: state.register.surname,
    age: state.register.age
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  navigateTo: (location) => {
    dispatch(push('/'))
  }, 
  updateForm: (key, value) => {
    dispatch( { type: "REGISTER_FORM_UPDATE", key, value });
  }
});

export default connect(state, mapDispatchToProps)(AppFormComponent);