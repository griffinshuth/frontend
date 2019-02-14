import React from 'react';
import styled from 'styled-components';

import StoryCard from './StoryCard';
import Header from './Header';

const StoryListCon = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  margin-top: 100px;
  background: #ffffff;
  margin: 100px 2%;
  padding: 100px 2%;
`

const StoryList = props => {
  return (
    <div>
      <Header title="Our Stories"/>
      <StoryListCon className="menu-bar">
      <StoryCard />
      <StoryCard />
      <StoryCard />
    </StoryListCon>
    </div>
    
  )
}

export default StoryList;