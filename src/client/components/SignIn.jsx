import React, { Component } from 'react';
import { GetUser } from './../Utils/api.jsx';
import './../../style/form.css';


export default class SignIn extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
  }

  handleChange (e) {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;
    let obj = this.state;
    obj[name] = value;
    this.setState(obj);
  }
  handleSubmitLogin () {
    let email = this.state.email;
    let password = this.state.password;
    this.props.handleLogin(email, password);
  }

  render() {
    return (
      <div className="ui container">
      <form className="ui form">
        <h4 className="ui dividing header">Login</h4>
        <div className="field">
          <label>Email</label>
          <div className="field">
            <input onChange={e => this.handleChange(e)} type="email" name="email" placeholder="Email address" />
          </div>
        </div>
        <div className="field">
          <label>Password</label>
          <div className="field">
            <input onChange={e => this.handleChange(e)} type="password" name="password" placeholder="********" />
          </div>
        </div>
        <div onClick={this.handleSubmitLogin} className="ui button">Login</div>
        <span className="between-buttons">OR</span>
        <a href="/signup" className="ui button">Sign up</a>
      </form>
      </div>
    );
  }
}