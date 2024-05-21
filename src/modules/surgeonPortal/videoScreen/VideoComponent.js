import React from "react";
import styled from "styled-components";
import VideoPlay from "./VideoPlay";
const VirtualMeeting = styled.div`
  background-image: url("images/Group 26.jpg");
  height: 425px;
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Guidelines = styled.div`
  color: white;
  font-family: Roboto;
  font-size: 32px;
  width: 850px;
`;
const VideoDate = styled.div`
  color: white;
  font-family: Roboto;
  font-size: 12px;
  margin-top: 60px;
`;
const PlayPause = styled.div`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-top: 140px;
`;
const Division = styled.div`
  background-color: #e2e2e2;
  height: 12px;
  width: 100%;
  margin-top: 10px;
`;
const Container = styled.div`
  display: flex;
  // background-color:red;
  width: 950px;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  padding-left: 50px;
`;
const RecentVideos = styled.div`
  flex-wrap: wrap;
  display: flex;
  width: 950px;
  font-size: 20px;
  font-family: Roboto;
  margin-top: 40px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #181c1b;
  margin-left: auto;
  margin-right: auto;
  padding-left: 50px;
`;
const Image = styled.img`
  height: 160px;
  width: 250px;
`;
const LoadButton = styled.button`
  text-align: center;
  background-color: #00a0f0;
  color: #ffffff;
  font-size: 13px;
  font-weight: 550;
  border-radius: 4px;
  border: solid 0px;
  height: 38px;
  width: 200px;
  margin-top: 50px;
  margin-bottom: 100px;
  &:focus {
    outline: none;
    transition: all 0.3s;
    border: none;
  }
`;
const Button = styled.div`
  text-align: center;
`;
const Instruction = styled.div`
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #181c1b;
  font-family: Roboto;
  font-size: 14px;
  padding-top: 10px;
`;
const Date = styled.div`
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #8f8f8f;
  font-size: 12px;
  font-family: Roboto;
  margin-top: 5px;
`;
const Card = styled.div`
  width: 250px;
  margin-right: 40px;
  margin-top: 30px;
`;
function VideoComponent(props) {
  return (
    <div>
      <Division></Division>
      <VideoPlay state={props.state} />
      <RecentVideos>Recent Videos</RecentVideos>

      <Container>
        {props.state.row.map((rows) => (
          <Card>
            {rows.image}
            <Instruction>{rows.guidelines} </Instruction>
            <Date>{rows.time} </Date>
          </Card>
        ))}
      </Container>
      <Button>
        <LoadButton>Load more...</LoadButton>
      </Button>
    </div>
  );
}

export default VideoComponent;
