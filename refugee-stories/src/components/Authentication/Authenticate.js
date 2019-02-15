import React, { Component } from 'react';

import Admin from '../Admin';
import Header from '../Header';
import StoryListPending from '../StoryListPending';
import Login from '../Login';

const Authenticate = Admin => {
  return class extends Component {
    constructor(){
      super();
      this.state = {
        loggedIn: false
      }
    }

    checkLogin = () => {
      if (localStorage.getItem('user')) {
        this.setState({loggedIn: true})
      }
    }

    onLogout = event => {
      event.preventDefault();
      localStorage.clear();
      window.location.reload();
    }

    componentDidMount() {
      this.checkLogin();
    }

    render(){
      if (this.state.loggedIn) {
        return (
          <div>
            <Header title="Pending Stories" />
            <button onClick={this.onLogout}>Log Out</button>
            <StoryListPending />
          </div>
        )
      } else {
        return <Login />
      }
    }
  }
}

export default Authenticate(Admin); 