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
    const refugees = this.props.refugees.filter(refugee => refugee.approved)
    return (
      <div>
        <Header title="Our Stories"/>
        <StoryListCon className="menu-bar" >
          {console.log(refugees, this.props.refugees)}
          {refugees.map(refugee =>  (
              <StoryCard 
                key={refugee.name}
                name={refugee.name} 
                age={refugee.age}
                country={refugee.country}
                story={refugee.story}
                imgUrl={refugee.imgUrl} 
              />
            )
          )
          }          
        </StoryListCon>
      </div>
      
    )
  }
}

