import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import StoryList from './components/StoryList';
import AddStoryForm from './components/AddStoryForm';
import Admin from './components/Admin/Admin';
import dummyData from './dummyData';

class App extends Component {

  constructor(){
    super();
    this.state = {
      refugees: []
    }
  }

  componentDidMount(){
    this.setState({refugees: dummyData})
  }

  addStory = (newRefugee) => {
    this.setState(prevState => {

      // create copy of refugees 
      const refugees = Array.from(prevState.refugees); 

      // push new refugee to array of refugees
      refugees.push(newRefugee);

      // Note to self: return is required when using 
      // the functional version of state since it returns 
      // what you want state to be
      return {refugees};
    })
  }

  approveStory = (name) => {

    // name will be placeholder for id while backend is still in development
    this.setState(prevState => {
      const refugees = Array.from(prevState.refugees);
      const pendingStory = refugees.find(refugee => refugee.name === name);
      pendingStory.approved = true;
      return {refugees}
    })
  }

  deleteStory = (name) => {

    // name will be placeholder for id while backend is still in development
    this.setState(prevState => {
      
      // const refugees = Array.from(prevState.refugees);
      const refugees = prevState.refugees.filter(refugee => refugee.name !== name);
      return {refugees}
})
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={(props) => (
          <StoryList 
            {...props}
            refugees={this.state.refugees}
          />
          )}
          />
        <Route path="/submit" render={(props) => (
          <AddStoryForm
            {...props}
            addStory={this.addStory}
          />
          )}
          />
        <Route exact path="/admin" render={(props) => (
          <Admin 
            {...props}
            refugees={this.state.refugees}
            approveStory={this.approveStory}
            deleteStory={this.deleteStory}
          />
        )} />
      </div>
    );
  }
}

export default App;
