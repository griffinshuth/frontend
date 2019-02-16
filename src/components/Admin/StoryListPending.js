import React from 'react';
import styled from 'styled-components';

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
  
  render(){
    const refugees = this.props.refugees.filter(refugee => refugee.approved === false)
    return (
      <div>
        <StoryListCon className="menu-bar" >
          {refugees.map(refugee =>  (
              <StoryCardPending 
                key={refugee.name}
                name={refugee.name} 
                age={refugee.age}
                country={refugee.country}
                story={refugee.story}
                imgUrl={refugee.imgUrl} 
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