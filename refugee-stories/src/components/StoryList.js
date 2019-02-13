import React from 'react';
import styled from 'styled-components';

import StoryCard from './StoryCard';

const StoryListCon = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  margin-top: 100px;
`

const StoryList = props => {
  return (
    <StoryListCon className="menu-bar">
      <StoryCard />
      <StoryCard />
      <StoryCard />
    </StoryListCon>
  )
}

export default StoryList;