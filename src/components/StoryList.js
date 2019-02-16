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
  constructor(props){
    super(props); 
  }

  render(){
    return (
      <div>
        <Header title="Our Stories"/>
        <StoryListCon className="menu-bar" >
          {this.props.refugees.map(refugee =>  (
              <StoryCard 
              key={refugee.id}
              name={refugee.name} 
              age={refugee.age}
              country={refugee.country}
              story={refugee.story}
              imgUrl={refugee.imgUrl} />
            )
          )
          }
        </StoryListCon>
      </div>
      
    )
  }
}

