import React, { Component } from 'react';
import './App.css';

import StoryList from './components/StoryList';
import Header from './components/Header';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <StoryList />
      </div>
    );
  }
}

export default App;
