import React from 'react';
import { Prompt } from 'react-router-dom';

class AppForm extends React.Component {
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
  }

  render() {
    return (
      <div>
          <Prompt 
            when={this.state.blockTransitions}
            message={(location) => (`Are you sure you want to go to ${location.pathname}`)}/>
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

export default AppForm;
