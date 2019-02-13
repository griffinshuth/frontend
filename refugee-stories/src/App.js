import React, { Component } from 'react';
import './App.css';

import StoryList from './components/StoryList';
import Header from './components/Header';
import AddStoryForm from './components/AddStoryForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <StoryList />
        <AddStoryForm />
      </div>
    );
  }
}

export default App;
