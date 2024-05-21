import React, { Component } from "react";
import BaseComponent from "../../baseComponent";
import Sidebar from "./sidebar";
import Header from "../header/header";
import BillingDetails from "./billingDetails";
import Divider from "@material-ui/core/Divider";
import { Row, Column } from "simple-flexbox";

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [
        {
          img: "download.jpg",
          name: "Derek Diamon",
          status: "Paid",
        },
        
      ],
      isOpen: true,
    };
  }

  toggleImage = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <div>
        <div>
          <Header tabName="billing" />
        </div>
        <div></div>

        <Row>
          <Column>
            {this.state.isOpen ? (
              <Sidebar rows={this.state.rows} state={this.state} />
            ) : (
              " "
            )}
          </Column>
          <Column>
            <BillingDetails state={this.state} toggleImage={this.toggleImage} />
          </Column>
        </Row>
      </div>
    );
  }
}
