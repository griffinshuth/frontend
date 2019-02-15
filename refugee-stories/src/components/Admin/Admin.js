import React, { Component } from 'react';

import Authenticate from '../Authentication/Authenticate';

export default class Admin extends Component {
  render(){
    return (
      <div>
        <Authenticate />
      </div>
      
    )
  }
}