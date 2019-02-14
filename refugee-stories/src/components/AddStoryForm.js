import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './Header';

const FormComponent = styled.div`
  min-height: 100vh;
`

const FormCon = styled.div`
  background-color: rgb(131, 211, 201);
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  margin: 100px 2% 0 2%;
  padding: 100px 2%;
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
        <Header title="Submit Your Story" />
        <FormCon>
          <FormTitle>Share your story with the world</FormTitle>
          <Form>
            <input type="text" name="name" placeholder="Name" />
            <input type="number" name="age" placeholder="Age" />
            <input type="text" name="imgUrl" placeholder="Image URL" />
            <textarea name="story" rows="10" cols="30" placeholder="Your story starts here..."></textarea>
            <button type="submit">Submit</button>
          </Form>
        </FormCon>
        
      </FormComponent>
    )
  }
}