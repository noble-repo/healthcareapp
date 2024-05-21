import React, { Component } from "react";
import BaseComponent from "../../baseComponent";
import MakePayment from "./makePayment";
import { genericConstants } from "../../../constants"

export default class index extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: "",
      showAlert: false,
      cvv: "",
    };
  }

  handleCard = (event) => {
    let cNum = event.target.value;

     if (cNum === "" || genericConstants.EXPRESSION_TYPE.REGEX.test(cNum)) {

      this.setState({ cardNumber: cNum });
    } else {
      alert("Please enter only number");
    }
  };

  handleCvv = (event) => {
    let cvvNum = event.target.value;
    if (cvvNum === "" ||genericConstants.EXPRESSION_TYPE.REGEX .test(cvvNum)) {
      this.setState({ cvv: cvvNum });
    } else {
      alert("Please enter only number");
    }
  };
  render() {
    return (
      <div>
        <MakePayment
          state={this.state}
          handleCard={this.handleCard}
          handleCvv={this.handleCvv}
        />
      </div>
    );
  }
}
