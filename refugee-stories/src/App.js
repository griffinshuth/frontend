import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import StoryList from './components/StoryList';
import AddStoryForm from './components/AddStoryForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={StoryList} />
        <AddStoryForm />
      </div>
    );
  }
}

export default App;
