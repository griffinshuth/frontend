import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

import StoryList from './components/StoryList';
import AddStoryForm from './components/AddStoryForm';
import Admin from './components/Admin/Admin';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      refugees: []
    }
  }

  componentDidMount(){
    // this.setState({refugees: dummyData})
    axios
      .get('https://refugee-stories-backend.herokuapp.com/api/stories')
      .then(response => {
        // console.log(response.data);
        this.setState({refugees: response.data})
      })
      .catch(error => console.log(error));
  }

  addStory = (newRefugee) => {

    axios
      .post('https://refugee-stories-backend.herokuapp.com/api/story', newRefugee)
      .then(response => {
        console.log(response);
      })
      // .then(window.location = '/')
      .catch(error => {console.log(error)})

  }

  approveStory = (id) => {
    axios
      .put(`https://refugee-stories-backend.herokuapp.com/api/approve/${id}`)
      .then(response => console.log(response))
      .catch(error => console.log(error))
   
  }

  deleteStory = (id) => {
    axios
    .delete(`https://refugee-stories-backend.herokuapp.com/api/story/${id}`)
    .then(response => console.log(response))
    .catch(error => console.log(error))

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
            pending={this.state.pending}
          />
        )} />
      </div>
    );
  }
}

App.propTypes = {
  history: PropTypes.object
};

export default App;
