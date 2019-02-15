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
    const refugees = this.state.refugees;
    const newRefugees = refugees.push(newRefugee);
    this.setState({refugees: newRefugees})
  }

  render() {
    return (
      <div className="App">
        {/* <Route exact path="/" component={StoryList} /> */}
        <Route exact path="/" render={(props) => (
          <StoryList 
            {...props}
            refugees={this.state.refugees}
          />
          )}
          />
        <Route path="/submit" component={AddStoryForm} />
        <Route exact path="/admin" component={Admin} />
      </div>
    );
  }
}

export default App;
