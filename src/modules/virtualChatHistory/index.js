import React, { Component } from "react";
import BaseComponent from "../baseComponent";
import ChatComponent from "./ChatComponent";

const patient = [
  {
    patientName: "Patrice Page ",
    pChat: "I have been having bad headaches for last 3 days",
  },
];
const surgeon = [
  {
    surgeonName: "Dr Anjelina Victor",
    sChat: "Did you take any pills yet?",
  },
];

class VirtualChatHistory extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      colHeading: ["patientName", "pChat", "surgeonName", "sChat"],
      patient: patient,
      surgeon: surgeon,
    };
  }

  render() {
    return <ChatComponent state={this.state} />;
  }
}

export default VirtualChatHistory;
