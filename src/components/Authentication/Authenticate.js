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
      if (localStorage.getItem("user")) {
        this.setState({ loggedIn: true });
      }
    };

    onLogout = event => {
      event.preventDefault();
      localStorage.clear();
      window.location.reload();
      this.setState({
        loggedIn: false
      });
    };

    componentDidMount() {
      this.checkLogin();
    }

    render() {
      if (localStorage.getItem("user")) {
        return (
          <div>
            <Header title="Pending Stories" />
            <button onClick={this.onLogout}>Log Out</button>
            <StoryListPending
              refugees={this.props.refugees}
              approveStory={this.props.approveStory}
              deleteStory={this.props.deleteStory}
            />
          </div>
        );
      } else {
        return <Login />;
      }
    }
  };
};

export default Authenticate(Admin);
