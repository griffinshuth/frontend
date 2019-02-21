import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import StoryCardPending from './StoryCardPending';

const StoryListCon = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  background: #ffffff;
  margin: 100px 2%;
  padding: 100px 2%;
`

export default class StoryListPending extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      allStories: [],
      public: [],
      pending: []
    }
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("https://refugee-stories-backend.herokuapp.com/api/story", {
          headers: {
            Authorization: token
          }
        })
        .then(res => {
          this.setState({ allStories: res.data });
        })
        
        .catch(err => console.log(err));
    }
  }

  onClickApprove = id => {
    // name will be placeholder for id until backend is ready to implement to project
    // console.log(id)
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .put(
          `https://refugee-stories-backend.herokuapp.com/api/approve/${id}`, null, {
            headers: {
              Authorization: token
            }
          }
        )
        // .then()
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  };
  
  onClickDelete = id => {
    // name will be placeholder for id until backend is ready to implement to project
    // console.log(props.name)
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .delete(
          `https://refugee-stories-backend.herokuapp.com/api/story/${id}`, {
            headers: {
              Authorization: token
            }
          }
        )
        // .then()
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  };

  // approvedStories = this.state.allStories.filter(refugee => (refugee.approved === false))
  
  // publicStories = this.state.allStories.filter(refugee => (refugee.approved === true))

  render(){
    return (  
      <div>
        <h2>Pending Stories</h2>
        <StoryListCon className="menu-bar" >
          {
            this.state.pending.map(refugee =>  (
              <StoryCardPending 
                key={refugee.id}
                id={refugee.id}
                author={refugee.author} 
                age={refugee.age}
                location={refugee.location}
                content={refugee.content}
                image={refugee.image} 
                approved={refugee.approved}
                approveStory={this.props.approveStory}
                deleteStory={this.props.deleteStory}
                onClickApprove={this.onClickApprove}
                onClickDelete={this.onClickDelete}
              />
            )
          )
          }          
        </StoryListCon>
        
      </div>
      
    )
  }
  
}