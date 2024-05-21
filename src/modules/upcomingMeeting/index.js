import React from "react";
import BaseComponent from "../baseComponent";
import UpcomingMeetingComponent from "./upcomingMeetingComponent";
import Header from "../shared/header";
import moment from "moment";
import Utility, {dispatchAction} from "../../utility";
import {connect} from "react-redux";

class upcomingMeeting extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      url: '' ,
      currentMeetingPatient: {},
      patientInformation: [
        {
          name: "",
          age: "",
          surgeryType: "",
          surgeryDate: "",
        },
      ],
    };
  }
  componentWillMount(){
    var url = this.props?.location?.state?.url;
    var currentMeetingPatient = this.props?.location?.state?.currentMeetingPatient;
    this.setState({url: url, currentMeetingPatient: currentMeetingPatient});    
  }
  componentDidMount(){
    let patientInformation = [{
          name: this.state.currentMeetingPatient.patient.name,
          age: moment(this.state.currentMeetingPatient.patient.dob).diff('1981-01-01', 'years',false) + "years",
          surgeryType: this.state.currentMeetingPatient.surgeryType,
          surgeryDate: this.state.currentMeetingPatient.surgeryDate == 0 ? '' : this.state.currentMeetingPatient.surgeryDate,
    }]
    this.setState({patientInformation: patientInformation});
  }

  render() {
    return (
      <div>
        <Header tabName="calender"/>
        <UpcomingMeetingComponent
          patient={this.state.patientInformation}
          url={this.state.url}
          selectedSurgery={this.state.currentMeetingPatient}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {user: state.user};
};

export default connect(mapStateToProps, {dispatchAction})(upcomingMeeting);
