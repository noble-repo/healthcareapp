import React, { Component } from "react";
import HeaderComponent from "./header";
import {connect} from "react-redux";
import Utility, {dispatchAction} from "../../../../utility";
import {NotificationService} from "../../../../services";
import {eventConstants} from "../../../../constants";
import {history} from "../../../../managers/history";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      Notifications:[
      // {
      //   notification:" Dr Christina Hardaway has provided surgical clearance",
      //   time:"10:20 AM",
      //   markAsRead: "mark as read"
      // },
      // {
      //   notification:"Sara Smith has completed the patient survey",
      //   time:"8 Aug 2020",
      //   markAsRead:""
      // },
      // {
      //   notification:"Sara Smith has uploaded the documents for Anaesthesia Clearance",
      //   time:"8 Aug 2020",
      //   markAsRead:""
      // },
      // {
      //   notification:"Sara Smith has accpepted the request",
      //   time:"8 Aug 2020",
      //   markAsRead:""
      // },



    ]
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
            "notificationFor": this.props?.user?.userDetails.email,
            "type":"push"
          },
          "selectionString":"addedOn title isRead"
    }
    let [error, getNotification] = await Utility.parseResponse(NotificationService.getNotification(requestData));
    if (error) {
        this.setState({ Notifications: error.responseData });
    } else {
        this.setState({ Notifications: getNotification });
    }
    console.log(this.state.Notifications)
  }

  markAsRead = async ()=>{
     
    let requestData = {
        "queryObj":{
            "userID":this.props?.user?.userDetails.userId,
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

  logoutUser = ()=>{
    this.props.dispatchAction(eventConstants.LOGOUT_SUCCESS);
    history.push("/")
  }

  render() {
    return (
      <div>
        <div>
          <HeaderComponent state={this.state} tabName={this.props.tabName}
                           userDetails={this.props?.user.userDetails}
                           logoutUser={this.logoutUser} surgery={this.props.state} markAsRead={this.markAsRead} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {user: state.user}
};

export default connect(mapStateToProps, {dispatchAction})(Header);