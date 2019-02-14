import React from 'react';
import styled from 'styled-components';

import StoryCardPending from './StoryCardPending';
import Header from './Header';

const StoryListCon = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  background: #ffffff;
  margin: 100px 2%;
  padding: 100px 2%;
`

const StoryList = () => {
  return (
    <div>
      <StoryListCon>
        <StoryCardPending />
        <StoryCardPending />
        <StoryCardPending />
        <StoryCardPending />
      </StoryListCon>
    </div>
    
  )
}

export default StoryList;