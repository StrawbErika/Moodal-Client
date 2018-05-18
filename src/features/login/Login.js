import React, { Component } from 'react';
import { Divider, Button, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import * as API from '../../api';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = (e, data) => {
    const state = this.state;
    state[data.name] = data.value;
    this.setState(state);
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;

    API.getAllUsers().then(response => {
      const answer = response.data.data.find(res => {
        return res.email === email && res.password === password;
      });

      if (!answer) {
        console.log('Not found!');
      } else {
        const data = { email, password, userId: answer._id, userType : answer.userType };
        console.log(data);
        localStorage.setItem('login', JSON.stringify(data));
        window.location = '/';
      }
    });

    console.log(localStorage.getItem('login'));
  };

  render() {
    return (
      <div>
        <Form className="homepage-form">
          <Form.Input
            label="E-mail Address"
            placeholder="jdelacruz@gmail.com"
            id="login-email"
            name="email"
            onChange={this.handleChange}
          />
          <Form.Input
            label="Password"
            type="password"
            placeholder="Password"
            id="login-password"
            name="password"
            onChange={this.handleChange}
          />
          <Button
            onClick={this.handleSubmit}
            content="Log in"
            color="teal"
            basic
            fluid
          />
          <Divider horizontal>or</Divider>
          <Link to="/signup">
            <Button
              content="Sign up instead"
              color="green"
              onClick={this.handleSubmit}
              basic
              fluid
            />
          </Link>
        </Form>
      </div>
    );
  }
}

export default Login;
