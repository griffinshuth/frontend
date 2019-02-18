import React from 'react';
import styled from 'styled-components';

const StoryCardCon = styled.div`
  width: 40%;
  max-width: 400px;
  padding: 20px;
  margin: 20px;
  text-align: center;
  color: rgb(124, 128, 129);
`

const ImgCon = styled.div`
  max-width: 100%;
`

const Img = styled.img`
  max-width: 100%;
`

const Name = styled.div`
  text-transform: uppercase;
  font-size: 2rem;
  letter-spacing: 2px;
  margin: 10px auto;
`

const Country = styled.div`
  text-transform: uppercase;
`

const Story = styled.div`
  letter-spacing: 1px;
  line-height: 1.5;
  margin: 20px auto 10px auto;
`

const StoryCard = (props) => {
  return (
    <StoryCardCon>
      <ImgCon>
        <Img src={props.image} alt="" />
      </ImgCon>
      <Name>{props.author}</Name>
      <div>{props.age}</div>
      <Country>{props.location}</Country>
      <Story>{props.content}</Story>
    </StoryCardCon>
  )
}

export default StoryCard;