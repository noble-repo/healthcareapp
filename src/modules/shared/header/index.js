import React, { Component } from "react";
import BillingDetails from "../../../common/billingDetails/billingDetails";
import HeaderComponent from "./header";
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      Notifications:[
        {
        notification:" Dr Christina Hardaway has provided surgical clearance",
        time:"10:20 AM",
        markAsRead: "mark as read"
      },
      {
        notification:"Sara Smith has completed the patient survey",
        time:"8 Aug 2020",
        markAsRead:""
      },
      {
        notification:"Sara Smith has uploaded the documents for Anaesthesia Clearance",
        time:"8 Aug 2020",
        markAsRead:""
      },
      {
        notification:"Sara Smith has accpepted the request",
        time:"8 Aug 2020",
        markAsRead:""
      },



    ]
    };
  }

  render() {
    return (
      <div>
        <div>
          <HeaderComponent state={this.state} tabName={this.props.tabName} />
        </div>
      </div>
    );
  }
}
