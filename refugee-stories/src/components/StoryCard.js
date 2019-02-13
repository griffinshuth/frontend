import React from 'react';
import styled from 'styled-components';

const StoryCardCon = styled.div`
  width: 25%;
  max-width: 400px;
  padding: 20px;
  text-align: left;
  border: 1px solid black;
`

const StoryCard = props => {
  return (
    <StoryCardCon>
      <div>Title/Quote</div>
      <div>By: Refugee Name</div>
      <div>I have reset the sensors to scan for frequencies outside the usual range. By emitting harmonic vibrations to shatter the lattices. We will monitor and adjust the frequency of the resonators. He has this ability of instantly interpreting and extrapolating any verbal communication he hears. It may be due to the envelope over the structure, causing hydrogen-carbon helix patterns throughout. I'm comparing the molecular integrity of that bubble against our phasers.</div>
    </StoryCardCon>
  )
}

export default StoryCard;