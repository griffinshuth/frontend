import React from 'react';
import styled from 'styled-components';
import refugeeImg from '../images/refugee-photo.jpg';

const PendingCardCon = styled.div`
  width: 100%;
  max-width: 900px;
  padding: 20px;
  margin: 20px auto;
  text-align: left;
  color: rgb(124, 128, 129);
`

const ImgCon = styled.div`
  max-width: 20%;
`

const Img = styled.img`
  max-width: 100%;
`

const Title = styled.div`
  text-transform: uppercase;
  font-size: 1.4rem;
  letter-spacing: 2px;
  margin-bottom: 10px;
`

const Name = styled.div`
  text-transform: uppercase;
  font-size: 1.4rem;
`

const Country = styled.div`
  text-transform: uppercase;
`

const Story = styled.div`
  letter-spacing: 1px;
  line-height: 1.5;
  margin: 20px auto 10px auto;
`

const PendingContent = styled.div`
  display: flex;
  /* align-items: center; */
  width: 100%;
`

const PendingText = styled.div`
  padding-left: 2%;
`
const ApprovalButtonsCon = styled.div`
  display: flex;
  justify-content: flex-end;
`



const StoryCardPending = () => {
  return (
    <PendingCardCon>
      <PendingContent>
        <ImgCon>
          <Img src={refugeeImg} alt="" />
        </ImgCon>
        <PendingText>
          <Title>Title</Title>
          <Name>By Refugee Name</Name>
          <div>Age</div>
          <Country>Country of Origin</Country>
          <Story>I have reset the sensors to scan for frequencies outside the usual range. By emitting harmonic vibrations to shatter the lattices. We will monitor and adjust the frequency of the resonators. He has this ability of instantly interpreting and extrapolating any verbal communication he hears. It may be due to the envelope over the structure, causing hydrogen-carbon helix patterns throughout. I'm comparing the molecular integrity of that bubble against our phasers.
          </Story>
        </PendingText>
      </PendingContent>
      <ApprovalButtonsCon>
        <button>Approve</button>
        <button>Edit</button>
        <button>Delete</button>
      </ApprovalButtonsCon>
    </PendingCardCon>
  )
}

export default StoryCardPending;