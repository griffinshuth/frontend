import React from "react";
import styled from "styled-components";

const PendingCardCon = styled.div`
  width: 100%;
  max-width: 900px;
  padding: 20px;
  margin: 20px auto;
  text-align: left;
  color: rgb(124, 128, 129);
`;

const ImgCon = styled.div`
  max-width: 20%;
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
`;

const PendingText = styled.div`
  padding-left: 2%;
`;
const ApprovalButtonsCon = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StoryCardPending = props => {

  // const onClickApprove = event => {
  //   event.preventDefault();
  //   // name will be placeholder for id until backend is ready to implement to project
  //   // console.log(props.name)
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     axios
  //       .put(
  //         `https://refugee-stories-backend.herokuapp.com/api/approve/${props.id}`, null, {
  //           headers: {
  //             Authorization: token
  //           }
  //         }
  //       )
  //       // .then()
  //       .then(res => console.log(res))
  //       .catch(err => console.log(err));
  //   }
  // };

  // const onClickDelete = event => {
  //   event.preventDefault();
  //   // name will be placeholder for id until backend is ready to implement to project
  //   // console.log(props.name)
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     axios
  //       .delete(
  //         `https://refugee-stories-backend.herokuapp.com/api/story/${props.id}`, {
  //           headers: {
  //             Authorization: token
  //           }
  //         }
  //       )
  //       // .then()
  //       .then(res => console.log(res))
  //       .catch(err => console.log(err));
  //   }
  // };

  const clickApprove = event => {
    event.preventDefault();
    // console.log(props.id)
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
        {!props.approved ? (<button onClick={clickApprove}>Approve</button>) : null}
        
        <button onClick={clickDelete}>Delete</button>
      </ApprovalButtonsCon>
    </PendingCardCon>
  );
};

export default StoryCardPending;