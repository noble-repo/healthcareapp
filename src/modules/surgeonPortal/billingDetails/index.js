import React, { Component } from "react";
import BillingDetails from "./billingDetails";
import UpdateCard from "./updateCard";
import Header from "../shared/header";

const rows = [
  {
    date: "15 Aug 2019",
    price: "$99",
    paid: "Paid",
    download: "Download PDF",
  },
  {
    date: "15 Aug 2019",
    price: "$99",
    paid: "Paid",
    download: "Download PDF",
  },
  {
    date: "15 Aug 2019",
    price: "$99",
    paid: "Paid",
    download: "Download PDF",
  },
];

export default class billingComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "15 Aug 2019",
      price: "$999",
      duration: "year",
      plan: "gold",
      patients: "100",
      Anesthesiologists: "5",
      rows: rows,
      update: false,
    };
  }
  updateCard = () => {
    this.setState({
      update: !this.state.update,
    });
  };

  render() {
    return (
      <div>
        <Header tabName="billing"/>
      <div>
        <BillingDetails state={this.state} updateCard={this.updateCard} />

        {this.state.update ? (
          <UpdateCard updateCard={this.updateCard} state={this.state} />
        ) : (
          ""
        )}
      </div>
      </div>
    );
  }
}
