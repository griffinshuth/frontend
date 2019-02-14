import React, { Component } from 'react';

import Header from './Header';
import StoryCard from './StoryCard';

export default class Admin extends Component {
  render(){
    return (
      <div>
        <Header title="Pending Stories" />
        <StoryCard />
        <StoryCard />
        <StoryCard />
      </div>
      
    )
  }
}