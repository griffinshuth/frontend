import React from 'react';
import styled from 'styled-components';

import StoryCard from './StoryCard';
import Header from './Header';
import dummyData from '../dummyData.js';

const StoryListCon = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  background: #ffffff;
  margin: 100px 2%;
  padding: 100px 2%;
`



export default class StoryList extends React.Component {
  constructor(){
    super();
    this.state = {
      refugees: []
    }
  }

  componentDidMount(){
    this.setState({refugees: dummyData})
  }

  addStory = (refugee) => {

  }
  render(){
    return (
      <div>
        <Header title="Our Stories"/>
        <StoryListCon className="menu-bar" >
        
        {this.state.refugees.map(refugee => {
          // console.log(refugee.name)
          return (
            <StoryCard 
            key={refugee.id}
            name={refugee.name} 
            age={refugee.age}
            country={refugee.country}
            story={refugee.story}
            imgUrl={refugee.imgUrl} />
          )
          
        })
        }
        </StoryListCon>
      </div>
      
    )
  }
}

