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

  // getStories = () => {
    
  // }

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
          const stories = res.data
          // Filter stories by approved flag
          const publicStories = stories.filter(story => story.approved)
          const pendingStories = stories.filter(story => !story.approved)
          this.setState({ 
            allStories: res.data, 
            public: publicStories,
            pending: pendingStories
          });
        })
        .catch(err => console.log(err));
    }
  }

  

  onClickApprove = id => {
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
        .then(res => {
          console.log(res)
          this.setState(prevState => {
            const pending = prevState.pending.filter(story => 
              story.id !== id
            )
            return {pending};
          })
        })
        .catch(err => {console.log(err)});
    }
  };
  
  onClickDelete = id => {
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
        .then(this.setState(prevState => {
          console.log(id)
          const allStories = prevState.allStories.filter(story => 
            story.id !== id
          )
          console.log(allStories)

          return {allStories};
        }),
        console.log(this.state.allStories)
        )
        .catch(err => {
          console.log(err)
        });
    }
  };

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
        <h2>Public Stories</h2>
        <StoryListCon className="menu-bar" >
          {
            this.state.public.map(refugee =>  (
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