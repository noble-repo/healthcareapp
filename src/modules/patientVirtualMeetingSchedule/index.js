import React from 'react'
import BaseComponent from '../baseComponent'
import PatientVirtualMeetingScheduleComponent from './patientVirtualMeetingScheduleComponent'
import Header from "../patientGeneral/dashboard/header"
import {connect} from "react-redux";
import Utility, {dispatchAction} from "../../utility";
import {Login} from '../login';
import {eventConstants} from "../../constants";
import {PatientService, NotificationService} from "../../services";
import {history} from "../../managers/history";

class PatientVirtualMeetingSchedule extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            surgeryId: '',
            surgeryDetail: '',
            schedules: [],
        }
    }

    componentDidMount() {
        console.log(this.props?.user?.userDetails);
        let pathName = window.location.pathname;
        let pathArray = pathName.split('/');
        console.log("pathArray==", pathArray)
        if (pathArray.length === 4)
            this.getSurgeryDetails(pathArray[pathArray.length - 1])
    }

    getSurgeryDetails = async (surgeryId) => {
        this.props.dispatchAction(eventConstants.SHOW_LOADER);
        let [error, surgeryDetail] = await Utility.parseResponse(PatientService.getSurgeryDetails({surgeryId}));
        this.props.dispatchAction(eventConstants.HIDE_LOADER);
        if (error)
            return Utility.apiFailureToast('Unable to fetch surgery detail');
        console.log("surgeryId===", surgeryId)
        this.setState({
            surgeryId: surgeryId,
            surgeryDetail: surgeryDetail,
            schedules: surgeryDetail?.patient?.schedules || []
        })
    }
    updatePatientSchedule = async (schedules) => {
        const userData = this.props?.user?.userDetails;
        if (!schedules || schedules.length < 1 || !this.state.surgeryId)
            return
        let requestData = {
            surgeryId: this.state.surgeryId,
            patient: {...this.state.surgeryDetail.patient, schedules: schedules}
        }
        
        let NotificationrequestData = {            
            messageProvider:"",
            isCleared:false,
            isRead:false,
            deviceID:"",
            userID: userData?.userId,
            sentFromName: userData?.firstName,
            sentFromEmail:userData?.email,
            priority:1,
            entityID:"",
            notificationFor: userData?.invitedBy?.[0]?.email,
            type:"push",
            isDelivered:true,
            postedToDeviceType:"",
            postedTo:   userData?.email,
            postedBy:   userData?.email,
            description:'<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-...',
            payload:{
                role:  userData?.role,
                notificationType:"APPOINTMENT_SCHEDULE",
                addedOn: (new Date()).getTime(),
                sentFrom: {
                    email: userData?.email,
                    _id: "",
                    name: userData?.firstName,
                },
                sendTo: {
                    email: userData?.email,
                    _id: "",
                    name: userData?.firstName,
                }
            },
            title: userData?.firstName + ' has created the appointment',
        }
        this.props.dispatchAction(eventConstants.SHOW_LOADER);
        let [error, surgeryDetail] = await Utility.parseResponse(PatientService.updateSurgery(requestData));
        this.props.dispatchAction(eventConstants.HIDE_LOADER);
        if (error)
            return Utility.apiFailureToast('Unable to update surgery schedule');
        let [err, addNotification] = await Utility.parseResponse(NotificationService.addNotification(NotificationrequestData));
        // if(err){
        //     return Utility.apiFailureToast('Unable to send notification');
        // }
        let NotificationrequestDataEmail = {            
            messageProvider:"",
            isCleared:false,
            isRead:false,
            deviceID:"",
            userID: userData?.userId,
            sentFromName: userData?.firstName,
            sentFromEmail:userData?.email,
            priority:1,
            entityID:"",
            notificationFor:"",
            type:"email",
            isDelivered:true,
            postedToDeviceType:"",
            postedTo:   userData?.email,
            postedBy:   userData?.email,
            description:'<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-...',
            payload:{
                role:  userData?.role,
                notificationType:"APPOINTMENT_SCHEDULE",
                addedOn: (new Date()).getTime(),
                sentFrom: {
                    email: userData?.email,
                    _id: "",
                    name: userData?.firstName,
                },
                sendTo: {
                    email: userData?.email,
                    _id: "",
                    name: userData?.firstName,
                }
            },
            title: userData?.firstName + ' has created the appointment',
        }
        let [er, addEmailNotification] = await Utility.parseResponse(NotificationService.addNotification(NotificationrequestDataEmail));
        // if(er){
        //     return Utility.apiFailureToast('Unable to send notification');
        // }
        Utility.apiSuccessToast('Surgery schedule for patient has been updated successfully.');
        this.setState({surgeryDetail: surgeryDetail, schedules: surgeryDetail?.patient?.schedules || []})
        history.push('/patient/dashboard')
    }

    render() {
        return (
            <div>
                <Header/>
                <PatientVirtualMeetingScheduleComponent state={this.state}
                                                        updatePatientSchedule={this.updatePatientSchedule}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {user: state.user}
};

export default connect(mapStateToProps, {dispatchAction})(PatientVirtualMeetingSchedule);
 