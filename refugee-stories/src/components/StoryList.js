import React from 'react';
import StoryCard from './StoryCard';

const StoryList = props => {
  return (
    <div className="menu-bar">
      <StoryCard />
      <StoryCard />
      <StoryCard />
    </div>
  )
}

export default StoryList;