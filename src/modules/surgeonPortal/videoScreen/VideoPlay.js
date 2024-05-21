import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import styled from "styled-components";
const VirtualMeeting = styled.div`
  background-image: url("/images/Group 26.jpg");
  // height:425px;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Guidelines = styled.div`
  color: white;
  font-family: Roboto;
  font-size: 35px;
  width: 850px;
  margin-left: -100px;
  margin-bottom: 20px;
`;
const VideoDate = styled.div`
  color: white;
  font-family: Roboto;
  font-size: 13px;
  margin-left: -100px;
  margin-top: 60px;
`;
const PlayPause = styled.div`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-top: 160px;
`;

function VideoPlay(props) {
  return (
    <Slider
      previousButton={
        <div>
          <img src="/images\Group 37.svg" height="30px"></img>
        </div>
      }
      nextButton={
        <div>
          <img src="/images\Group 38.svg" height="30px"></img>
        </div>
      }
    >
      <VirtualMeeting>
        <div>
          <PlayPause>
            <img src="/images/noun_play button.svg" height="60px" />{" "}
          </PlayPause>

          <VideoDate>{props.state.videoTime}</VideoDate>

          <Guidelines>{props.state.guidelines}</Guidelines>
        </div>
      </VirtualMeeting>
      <img src="https://s18.postimg.cc/vunvhvvrt/img2.jpg" />
      <img src="https://s18.postimg.cc/tdc4amjl5/img3.jpg" />
    </Slider>
  );
}

export default VideoPlay;
