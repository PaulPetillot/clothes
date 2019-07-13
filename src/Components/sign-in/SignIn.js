import './sign-in.style.scss';
import React, { Component } from 'react'
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

export default class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password : ''
        }
    }

    handleSubmit = event =>{
        event.preventDefault();
        this.setState({ email : '', password : ''})
    }
    handleChange = e =>{
       const { value, name } = e.target
        this.setState({[name] : value })
    }
    render() {
        return (
          <div className="sign-in">
            <h2 className="title">I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={this.handleSubmit}>
              <FormInput
                label="Email"
                handleChange={this.handleChange}
                name="email"
                value={this.state.email}
                type="email"
                required
              />
              <FormInput
                label="Password"
                handleChange={this.handleChange}
                name="password"
                value={this.state.password}
                type="password"
                required
              />
              <CustomButton type="submit">Sign In</CustomButton>
            </form>
          </div>
        );
    }
}
