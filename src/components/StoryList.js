import React from 'react';
import styled from 'styled-components';

import StoryCard from './StoryCard';
import Header from './Header';

const StoryListCon = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  background: #ffffff;
  margin: 100px 2%;
  padding: 100px 2%;
`

export default class StoryList extends React.Component {
 
  render(){
    const refugees = this.props.refugees.filter(refugee => refugee.approved)
    return (
      <div>
        <Header title="Our Stories"/>
        <StoryListCon className="menu-bar" >
          {refugees.map(refugee =>  (
              <StoryCard 
                key={refugee.id}
                id={refugee.id}
                author={refugee.author} 
                age={refugee.age}
                location={refugee.location}
                content={refugee.content}
                image={refugee.image} 
              />
            )
          )
          }          
        </StoryListCon>
      </div>
      
    )
  }
}

