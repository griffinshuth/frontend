import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import StoryList from './components/StoryList';
import AddStoryForm from './components/AddStoryForm';
import Admin from './components/Admin';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={StoryList} />
        <Route path="/submit" component={AddStoryForm} />
        <Route path="/admin" component={Admin} />
      </div>
    );
  }
}

export default App;
