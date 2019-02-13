import React, { Component } from 'react';

import './App.css';
import MenuBar from './components/MenuBar';
import StoryList from './components/StoryList';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <MenuBar />
        </header>
        <StoryList />
      </div>
    );
  }
}

export default App;
