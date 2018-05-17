import React, { Component } from 'react';
import { Divider, Button, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import * as API from '../../api';

class Login extends Component {
  //   login(e) {
  //     e.preventDefault();
  //     const data = {
  //       email: document.getElementById('login-email').value,
  //       password: document.getElementById('login-password').value
  //     };

  //     //TODO: Send POST request to login endpoint containing the credentials, then handle the token send by the server

  //     fetch('http://localhost:3002/login', {
  //       method: 'POST',
  //       body: JSON.stringify(data),
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     })
  //       .then(response => response.json())
  //       .then(result => {
  //         alert(result.message);

  //         if (result.success) {
  //           //store token and user data received from server
  //           this.setState({ user: result.userData.name });

  //           localStorage.setItem('name', result.userData.name);

  //           const cookies = new Cookies();

  //           cookies.set('auth-token', result.token, {
  //             path: 'localhost:3001/',
  //             maxAge: 60 * 120
  //           });
  //         }
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   }

  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      userId: ''
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
        console.log(res);
        return res.email === email && res.password === password;
      });

      if (!answer) {
        console.log('Not found!');
      } else {
        const data = { email, password, userId: answer._id };
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
