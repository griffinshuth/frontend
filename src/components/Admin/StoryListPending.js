import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import StoryCardPending from './StoryCardPending';

const StoryListPendingCon = styled.div`
  text-align: center;
`

const StoryListCon = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  background: #ffffff;
  margin: 20px 2% 50px ;
  padding: 100px 2%;
`

const AdminTitle = styled.div`
  color: #7c8081;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 1.5rem;
  margin-top: 30px;
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

  // componentDidUpdate is needed to setState after a story has been deleted
  // adding this method fixed the bug of nothing happening when the delete button is clicked 
  componentDidUpdate() {
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
        this.forceUpdate(),

        console.log(this.state.allStories)
        )
        
        

        .catch(err => {
          console.log(err)
        });
    }
  };

  render(){
    return (  
      <StoryListPendingCon>
        <AdminTitle>Pending Stories</AdminTitle>
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
        <AdminTitle>Public Stories</AdminTitle>
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
      </StoryListPendingCon>
    )
  } 
}