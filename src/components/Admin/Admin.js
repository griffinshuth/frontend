import React, { Component } from 'react';

import Authenticate from '../Authentication/Authenticate';

export default class Admin extends Component {

  render(){
    return (
      <div>
        <Authenticate 
          pending={this.props.pending}
          approveStory={this.props.approveStory}
          deleteStory={this.props.deleteStory}
        />
      </div>
      
    )
  }
}