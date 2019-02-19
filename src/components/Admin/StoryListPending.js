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
      pending: []
    }
  }

  componentDidMount(){
    axios
      .get('https://refugee-stories-backend.herokuapp.com/api/story')
      .then(response => {
        console.log(response.data);
        this.setState({pending: response.data})
      })
      .catch(error => console.log(error));
  }

  
  render(){
    return (  
      <div>
        <StoryListCon className="menu-bar" >
          {this.state.pending.map(refugee =>  (
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
              />
            )
          )
          }          
        </StoryListCon>
      </div>
      
    )
  }
  
}