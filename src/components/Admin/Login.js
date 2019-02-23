import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

const FormComponent = styled.div`
  padding-top: 100px;
  min-height: 100vh;
`

const FormCon = styled.div`
  background-color: rgb(131, 211, 201);
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  margin: 0 auto;
  padding: 100px 2%;
  width: 100%;
  max-width: 500px;
`

const Form = styled.form`
  display: flex;
  flex-flow: column;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`

const FormTitle = styled.h2`
  text-transform: uppercase;
  color: #ffffff;
  letter-spacing: 2px;
`

const Input = styled.input`
  margin-bottom: 10px;
  font-size: 1rem;
  border: none;
  padding: 5px;
`

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameInput: "",
      passwordInput: "",
      processing: true
    };
  }

  onInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onLogin = event => {
    event.preventDefault();
    console.log(this.state);

    axios
      .post("https://refugee-stories-backend.herokuapp.com/api/login", {
        username: this.state.usernameInput,
        password: this.state.passwordInput
      })
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        // checkLogin will check state to confirm whether or not a 
        // user is logged in if state is true, the admin page will render
        this.props.checkLogin();  
      })
      .catch(err => {
        console.log(err);
      });
  };

  onLogout = event => {
    event.preventDefault();
    localStorage.clear();
  };

  render() {
    return (
      <FormComponent>
          <FormCon>
          <FormTitle>Refugee Stories Admin Login</FormTitle>
          <Form>
            <Input
              type="text"
              name="usernameInput"
              placeholder="Name"
              onChange={this.onInputChange}
              required
            />
            <Input
              type="password"
              onChange={this.onInputChange}
              name="passwordInput"
              value={this.state.passwordInput}
              placeholder="Password"
            />
            <button type="submit" onClick={this.onLogin}>Login</button>
          </Form>
          <Link className="link-home" to="/">Go back to Refugee Stories</Link>
        </FormCon>
      </FormComponent>
    );
  }
}