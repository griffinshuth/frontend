import React, { Component } from "react";

import Admin from "../Admin/Admin";
import Header from "../Header";
import StoryListPending from "../Admin/StoryListPending";
import Login from "../Admin/Login";

const Authenticate = Admin => {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false
      };
    }

    checkLogin = () => {
      const token = localStorage.getItem("token");
      if (token) {
        this.setState({
          loggedIn: true
        });
      }
    };

    onLogout = event => {
      event.preventDefault();
      localStorage.clear();
      this.setState({
        loggedIn: false
      });
      window.location = '/'
    };

    componentDidMount() {
      this.checkLogin();
    }

    render() {
      if (this.state.loggedIn) {
        return (
          <div>
            <Header title="Pending Stories" />
            <div className="btn-container">
              <button className="logout-btn" onClick={this.onLogout}>Log Out</button>
            </div>
            <StoryListPending
              refugees={this.props.refugees}
              approveStory={this.props.approveStory}
              deleteStory={this.props.deleteStory}
            />
          </div>
        );
      } else {
        return <Login checkLogin={this.checkLogin}/>;
      }
    }
  };
};

export default Authenticate(Admin);