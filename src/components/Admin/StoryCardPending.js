import React from "react";
import styled from "styled-components";

const PendingCardCon = styled.div`
  width: 100%;
  max-width: 900px;
  padding: 20px;
  margin: 20px auto;
  text-align: left;
  color: rgb(124, 128, 129);
  display: flex;
  @media (max-width: 800px){
    flex-direction: column;
    text-align: center;
  }
`;

const ImgCon = styled.div`
  max-width: 30%;
  @media (max-width: 800px){
    max-width: 100%;
    margin-bottom: 20px;
  }
`;

const Img = styled.img`
  max-width: 100%;
`;

const Name = styled.div`
  text-transform: uppercase;
  font-size: 1.4rem;
  letter-spacing: 2px;
  margin-bottom: 10px;
`;

const Location = styled.div`
  text-transform: uppercase;
`;

const Story = styled.div`
  letter-spacing: 1px;
  line-height: 1.5;
  margin: 20px auto 10px auto;
`;

const PendingContent = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 800px){
    flex-direction: column;
  }
`;

const PendingText = styled.div`
  padding-left: 2%;
  @media (max-width: 800px){
    padding-left: 0;
  }

`;

const ApprovalButtonsCon = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 800px){
    justify-content: center;
  }
`;

const Separator = styled.div`
  width: 90%;
  height: 1px;
  background: rgba(0,0,0,.1);
  margin: 50px auto 0;
  display: none;
  @media (max-width: 800px) {
    display: block;
  }
`

const StoryCardPending = props => {

  const clickApprove = event => {
    event.preventDefault();
    props.onClickApprove(props.id);
  }

  const clickDelete = event => {
    event.preventDefault();
    props.onClickDelete(props.id);
  }

  return (
    <PendingCardCon>
      <PendingContent>
        <ImgCon>
          <Img src={props.image} alt="" />
        </ImgCon>
        <PendingText>
          <Name>{props.author}</Name>
          <div>{props.age}</div>
          <Location>{props.location}</Location>
          <Story>{props.content}</Story>
        </PendingText>
      </PendingContent>
      <ApprovalButtonsCon>
        {!props.approved ? (<button className="admin-btn" onClick={clickApprove}>Approve</button>) : null}
        <button className="admin-btn" onClick={clickDelete}>Delete</button>
      </ApprovalButtonsCon>
      <Separator />
    </PendingCardCon>
  );
};

export default StoryCardPending;