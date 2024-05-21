import React, { Component } from "react";
import VerifiedComponent from "./VerifiedComponent";
import BaseComponent from "../baseComponent";
class EmailVerified extends BaseComponent {
  render() {
    return (
      <div>
        <VerifiedComponent />
      </div>
    );
  }
}

export default EmailVerified;
