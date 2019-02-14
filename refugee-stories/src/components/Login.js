import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


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

export default class AddStoryForm extends Component {
  constructor(){
    super();
  }

  render(){
    return (
      <FormComponent>
        <FormCon>
        <FormTitle>Refugee Stories Admin Login</FormTitle>
          <Form>
            <input type="text" name="name" placeholder="Name" />
            <input type="password" name="password" placeholder="Password" />
            <button type="submit">Login</button>
          </Form>
          <Link to='/'>Go back to Refugee Stories</Link>
        </FormCon>
          
      </FormComponent>
    )
  }
}