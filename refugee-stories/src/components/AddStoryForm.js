import React, { Component } from 'react';

export default class AddStoryForm extends Component {
  constructor(){
    super();
  }

  render(){
    return (
      <div className="add-story-form">
        <form>
          <input type="text" name="name" placeholder="Name" />
          <input type="number" name="age" placeholder="Age" />
          <input type="text" name="imgUrl" placeholder="Image URL" />
          <textarea name="story" rows="10" cols="30" placeholder="Your story starts here..."></textarea>
        </form>
      </div>
    )
  }
}