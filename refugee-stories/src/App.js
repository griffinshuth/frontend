import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import StoryList from './components/StoryList';
import AddStoryForm from './components/AddStoryForm';
import Admin from './components/Admin';
import Login from './components/Login'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={StoryList} />
        <Route path="/submit" component={AddStoryForm} />
        <Route exact path="/admin" component={Admin} />
        {/* <Route path="/admin/login" component={Login} /> */}
      </div>
    );
  }
}

export default App;
