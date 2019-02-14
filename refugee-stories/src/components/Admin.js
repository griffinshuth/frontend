import React, { Component } from 'react';

import Header from './Header';
import StoryListPending from './StoryListPending';

export default class Admin extends Component {
  render(){
    return (
      <div>
        <Header title="Pending Stories" />
        <StoryListPending />
      </div>
      
    )
  }
}