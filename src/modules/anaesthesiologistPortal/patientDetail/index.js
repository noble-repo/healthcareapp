import React from "react";
import BaseComponent from "../../baseComponent";
// import Header from "../../surgeonPortal/shared/header";
import Header from "../header";
import Sidebar from "./sidebar";
import DetailComponent from "./patientDetailComponent";
import {Row, Column} from "simple-flexbox";
import {eventConstants, portalType} from "../../../constants";
import Utility, {dispatchAction} from "../../../utility";
import {PatientService} from "../../../services";
import {connect} from "react-redux";
import {history} from '../../../managers/history';
import moment from 'moment';

class AnaesthesiologistPatientDetail extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true,
            patientList: [],
            selectedSurgery: "",
            patients: [],
            meetingTime: '',
            meetingStart: false,
            time: {}, 
            seconds: 600,
        };
    }
    secondsToTime(secs){
        let hours = Math.floor(secs / (60 * 60));
    
        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);
    
        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);
    
        let obj = {
          "h": hours,
          "m": minutes,
          "s": seconds
        };
        return obj;
      }
    componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
        console.log(this.state.selectedSurgery);
        this.getPatientSurgeryList().catch(error => console.error("unable to get patient-list", error))
        console.log(this.state.isOpen);
        var meetingTime = this.props.location.state ? this.props?.location?.state?.meetingTime : '';
        this.setState({meetingTime: meetingTime});
        if((moment(this.state.meetingTime).diff(moment(),'minutes')) <=10 && (moment(this.state.meetingTime).diff(moment(),'minutes')) > 0){
            this.startTimer();
        }
    }

    startTimer = ()=> {
        if (this.timer == 0 && this.state.seconds > 0) {
          this.timer = setInterval(this.countDown, 1000);
        }
      }
    
      countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        this.setState({
          time: this.secondsToTime(seconds),
          seconds: seconds,
        });
        
        // Check if we're at zero.
        if (seconds == 0) { 
          clearInterval(this.timer);
        }
      }

    getPatientSurgeryList = async () => {
        let {userDetails} = this.props?.user
        if (!userDetails || !userDetails.clinicId)
            return
        let requestData = {
            clinicId: userDetails.clinicId,
            type: portalType.ANESTHESIOLOGIST_PORTAL
        }
        this.props.dispatchAction(eventConstants.SHOW_LOADER);
        let [error, patientList] = await Utility.parseResponse(PatientService.getSurgeryList(requestData));
        this.props.dispatchAction(eventConstants.HIDE_LOADER);
        if (error || patientList.length < 1)
            return;
        let pathName = window.location.pathname;
        let pathArray = pathName.split('/');
        let index = -1;
        if (pathArray.length === 4)
            index = patientList.findIndex(obj => obj.surgeryId === pathArray[pathArray.length - 1])
        this.setState({patientList, selectedSurgery: patientList[index > -1 ? index : 0], patients:patientList })
    }
    toggleImage = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    };
    onChangeSelectedSurgery = (data) => {
        history.push('/anaesthesiologist/details-patients/'+data.surgeryId)
        this.setState({selectedSurgery: data})
    }
    onSearch = (event) => {
        this.setState({[event.target.id]: event.target.value})
        this.filterPatients(event.target.value)
    }

    filterPatients = (searchText) => {
        console.log(this.state.patientList, "Hello")
        //this.setState ({patients: this.state.clinicList})
        let data = this.state.patients
        if (!searchText.length) {
            console.log(searchText, "ABC")
            this.setState({patientList: this.state.patients})
            return 
        }
        const filteredData = data.filter((obj) => obj.patient?.name.toLowerCase().includes(searchText.trim()))
        this.setState({patientList: filteredData || []})
    }

    render() {
        return (
            <div>
                <div>
                    <Header tabName="patients" patients={this.state.meetingTime} time={this.props.location.state.time} endTime={this.props.location.state.endTime} currentMeetingPatient={this.state.selectedSurgery} />
                </div>
                <Row>
                    <Column>
                        {this.state.isOpen &&
                        <Sidebar state={this.state} onChangeSelectedSurgery={this.onChangeSelectedSurgery}  onSearch={this.onSearch}/>}
                    </Column>
                    <Column>
                        <DetailComponent
                            state={this.state}
                            toggleImage={this.toggleImage}
                            state={this.state}
                            rows={this.state.rows}
                        />
                    </Column>
                </Row>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {user: state.user}
};

export default connect(mapStateToProps, {dispatchAction})(AnaesthesiologistPatientDetail);