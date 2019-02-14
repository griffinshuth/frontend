import React from 'react';
import styled from 'styled-components';
import refugeeImg from '../images/refugee-photo.jpg';

const StoryCardCon = styled.div`
  width: 40%;
  max-width: 400px;
  padding: 20px;
  margin: 20px;
  text-align: center;
  color: rgb(124, 128, 129);
  /* border: 1px solid black; */
`

const ImgCon = styled.div`
  max-width: 100%;
`

const Img = styled.img`
  max-width: 100%;
`

const Title = styled.div`
  text-transform: uppercase;
  font-size: 2rem;
  letter-spacing: 2px;
  margin: 10px auto;
`

const Name = styled.div`
  text-transform: uppercase;
  font-size: 1.5rem;
`

const Country = styled.div`
  text-transform: uppercase;
`

const Story = styled.div`
  letter-spacing: 1px;
  line-height: 1.5;
  margin: 20px auto 10px auto;
`

const StoryCard = () => {
  return (
    <StoryCardCon>
      <ImgCon>
        <Img src={refugeeImg} alt="" />
      </ImgCon>
      <Title>Title</Title>
      <Name>By Refugee Name</Name>
      <div>Age</div>
      <Country>Country of Origin</Country>
      <Story>I have reset the sensors to scan for frequencies outside the usual range. By emitting harmonic vibrations to shatter the lattices. We will monitor and adjust the frequency of the resonators. He has this ability of instantly interpreting and extrapolating any verbal communication he hears. It may be due to the envelope over the structure, causing hydrogen-carbon helix patterns throughout. I'm comparing the molecular integrity of that bubble against our phasers.</Story>
    </StoryCardCon>
  )
}

export default StoryCard;