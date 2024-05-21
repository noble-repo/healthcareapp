import React, { Component } from "react";
import AdminHeaderComponent from "./header";
import {NotificationService} from '../../../services';
import Utility from '../../../utility';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      rows: [
        // {
        //   notification:
        //     " Dr Christina Hardaway has provided surgical clearance",
        //   time: "10:20 AM",
        //   markAsRead: "mark as read",
        // },
        // {
        //   notification: "Sara Smith has completed the patient survey",
        //   time: "8 Aug 2020",
        //   markAsRead: "",
        // },
        // {
        //   notification:
        //     "Sara Smith has uploaded the documents for Anaesthesia Clearance",
        //   time: "8 Aug 2020",
        //   markAsRead: "",
        // },
        // {
        //   notification: "Sara Smith has accpepted the request",
        //   time: "8 Aug 2020",
        //   markAsRead: "",
        // },
      ],
    };
  }

  componentDidMount(){
    this.getNotification();
    setInterval(()=> this.getNotification(), 10000);
  }

  getNotification= async () => {
    // console.log(userDetails, this.props.user);
    let requestData = {
        "queryObj":{
            // "userID":this.props?.user?.userDetails.userId,
            "type":"push"
          },
          "selectionString":"addedOn title isRead"
    }
    let [error, getNotification] = await Utility.parseResponse(NotificationService.getNotification(requestData));
    if (error) {
        this.setState({ rows: error.responseData });
    } else {
        this.setState({ rows: getNotification });
    }
    console.log(this.state.Notifications)
  }

  markAsRead = async ()=>{
       
      let requestData = {
          "queryObj":{
              "userID":this.props?.user?.userDetails.userId
            }
      }
      let [error, markasReadNotification] = await Utility.parseResponse(NotificationService.markNotificationRead(requestData));
      // if (error) {
      //     this.setState({ Notifications: error.responseData });
      // } else {
      //     this.setState({ Notifications: getNotification });
      // }
      console.log(error, markasReadNotification);
  }

  render() {
    console.log("console.log(this.props.tabName====", this.props.tabName);
    return (
      <div>
        <div>
          <AdminHeaderComponent
            state={this.state}
            tabName={this.props.tabName} markAsRead={this.markAsRead}
          />
        </div>
      </div>
    );
  }
}
