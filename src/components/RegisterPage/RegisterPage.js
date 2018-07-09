import React, { Component } from 'react';
import axios from 'axios';

import { TextField, Button } from '@material-ui/core';

class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      message: '',
    };
  }

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username === '' || this.state.password === '') {
      this.setState({
        message: 'Please choose a username and password',
      });
    } else {
      const body = {
        username: this.state.username,
        password: this.state.password,
      };

      // making the request to the server to post the new user's registration
      axios.post('/api/user/register/', body)
        .then((response) => {
          if (response.status === 201) {
            console.log('user created:', response);
            this.props.history.push('/home');
          } else {
            this.setState({
              message: 'Ooops! That didn\'t work. The username might already be taken. Try again!',
            });
          }
        })
        .catch(() => {
        });
    }
  }

  handleClick = (event) => {
    this.props.history.push('/home');
  }

  handleInputChange = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  }

  renderAlert = () => {
    if (this.state.message !== '') {
      return (
        <h2
          className="alert"
          role="alert"
        >
          {this.state.message}
        </h2>
      );
    }
    return (<span />);
  }

  render() {
    return (
      <div className="GridLoginView">
        <h1 className="TitleLogin">Sift</h1>
        <form className="Login" onSubmit={this.registerUser}>
          <p id="alert">{this.renderAlert()}</p>
          <h1>Register User</h1>
          <div>
            <label htmlFor="username">
              <TextField
                label="Username"
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChange}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              <TextField
                label="Password"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
            </label>
          </div>
          <div>
            <Button
              type="submit"
              name="submit"
              value="Register"
            >
            Register
            </Button>
            <Button onClick={this.handleClick}>Cancel</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterPage;

