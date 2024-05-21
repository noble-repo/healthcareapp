import React, { Component } from "react";
import BaseComponent from "../../baseComponent";
import VideoComponent from "./VideoComponent";
import Header from "../shared/header";

import VideoPlay from "./VideoPlay";
import styled from "styled-components";
const Image = styled.img`
  height: 180px;
  width: 250px;
`;

export class SurgeonVideoScreen extends BaseComponent {
  constructor(props) {
    super(props);

    this.state = {
      videoTime: "20 feb 2021",
      guidelines:
        "Guidelines to be followed during a virtual meeting with the patient",

      row: [
        {
          image: <Image src="/images/Doctor.jpg" />,
          guidelines: "Accessories required for virtual meetings",
          time: "20 feb 2021",
        },
        {
          image: <Image src="/images/Appointment.jpg" />,
          guidelines: "How to manage your Calendar",
          time: "20 feb 2021",
        },
        {
          image: <Image src="/images/Patient-survey.jpg" />,
          guidelines: "Checklist of Patient survey",
          time: "20 Jan 2021",
        },

        {
          image: <Image src="/images/Doctor.jpg" />,
          guidelines: "Accessories required for virtual meetings",
          time: "20 feb 2021",
        },
        {
          image: <Image src="/images/Appointment.jpg" />,
          guidelines: "How to manage your Calendar",
          time: "20 feb 2021",
        },
        {
          image: <Image src="/images/Patient-survey.jpg" />,
          guidelines: "Checklist of Patient survey",
          time: "20 feb 2021",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <div>
          <Header tabName="videos" />
        </div>
        <VideoComponent state={this.state} />
      </div>
    );
  }
}

export default SurgeonVideoScreen;
