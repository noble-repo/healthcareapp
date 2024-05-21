import React from "react";
import BaseComponent from "../../baseComponent";
import Schedular from "./CalendarComponent";
import Header from "../header";
import {Row} from "simple-flexbox";
import Sidebar from "./sidebar";
import moment from "moment";
import {roleConstants, statusConstants, schedules} from "../../../constants"
import Utils, {dispatchAction} from "../../../utility";
import Utility from "../../../utility";
import {CalendarService, PatientService, NotificationService} from "../../../services";
import {connect} from 'react-redux';

class CalendarComponent extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            startTime: moment().startOf('week').startOf('day').valueOf(),
            endTime: moment().endOf('week').endOf('day').valueOf(),
            month: moment().format("MMMM"),
            year: moment().format("YYYY"),
            userId: "",
            dates: [],
            requests: [],
            calendar: "dayGridWeek",
            calendarSlots: 0,
            isOpen: false,
            schedules: schedules,
            isDialog: false,
            selectedRequest: {},
            comment: "",
            rejectReason: ""
        };
    }

    componentDidMount = () => {
        this.getSchedules()
        this.getPendingSurgeryList()
        this.getEventsList()
        let timeOptions = Utils.getTimeOptions()
        this.setState({timeOptions: timeOptions})
    }

    getSchedules = async () => {
        let requestData = {
            userId: this.props.userId,
            month: this.state.month,
            year: this.state.year,
        }
        let [error, addSchedulesRes] = await Utils.parseResponse(CalendarService.getSchedules(requestData));
        if (error) {
            return error

        } else {
            let userSchedules = schedules
            if (addSchedulesRes.uniqueSchedules && addSchedulesRes.uniqueSchedules.length) {
                for (let index = 0; index < addSchedulesRes.uniqueSchedules.length; index++) {
                    let res = userSchedules.findIndex(item => item.day === addSchedulesRes.uniqueSchedules[index].day)
                    if (res !== -1) {
                        userSchedules[res].schedules = addSchedulesRes.uniqueSchedules[index].schedules
                    }
                }
            } else {
                for (let index = 0; index < schedules.length; index++) {
                    userSchedules[index].schedules = []
                }
            }
            this.setState({schedules: userSchedules, calendarSlots: addSchedulesRes.calendarSlots})
        }
    }

    addSchedule = (day) => {
        let schedules = this.state.schedules
        let daySchedule = schedules.find(item => item.day === day)
        daySchedule.schedules.push({
            startTime: this.state.timeOptions[0].value,
            endTime: this.state.timeOptions[this.state.timeOptions.length - 1].value,
            time: this.state.timeOptions[0].value + "-" + this.state.timeOptions[this.state.timeOptions.length - 1].value
        })
        this.setState({schedules})
    }

    removeSchedule = (day, index) => {
        let schedules = this.state.schedules
        let daySchedule = schedules.find(item => item.day === day)
        daySchedule.schedules.splice(index, 1)
        this.setState({schedules})
    }

    onHandleTimeChange = (index, day, value, from) => {
        let schedules = this.state.schedules;
        let daySchedule = schedules.find(item => item.day === day)
        if (from === "startTime") {
            daySchedule.schedules[index]["time"] = value + "-" + daySchedule.schedules[index]["endTime"]

        } else {
            daySchedule.schedules[index]["time"] = daySchedule.schedules[index]["startTime"] + "-" + value
        }

        daySchedule.schedules[index][from] = value
        this.setState({schedules})
    }

    handleAccept = async (index) => {
        let request = this.state.requests[index];
        let userDetails = this.props.userDetails && Object.keys(this.props.userDetails).length ? this.props.userDetails : {}
        if (request?.patient?.schedules?.length < 1)
            return Utils.apiFailureToast("Patient have not added any Schedule yet.")

        let participants = [], time = request?.patient?.schedules[0]
        participants.push(this.getParticipantObj(request.patient, roleConstants.PATIENT), this.getParticipantObj(this.props.userDetails, roleConstants.ANATHESIOLOGIST))
        let addEventRes = await this.addEvent({
            "surgeryId": request.surgeryId,
            "surgeryType": request.surgeryType,
            "status": request.status,
            "startTime": time,
            "endTime": moment(time).add(this.state.calendarSlots, 'minutes').valueOf(),
            eventName: "Virtual Meeting",
            calendarSlots: this.state.calendarSlots,
            meetingUrl: "",
            participants: participants,
            userId: this.props.userId,
            update: true,
            path: "/update-surgery-status",
            method: "POST",
            data: {
                surgeryId: request.surgeryId,
                virtualMeeting: {
                    startTime: time,
                    endTime: moment(time).add(this.state.calendarSlots, 'minutes').valueOf()
                },
                anaesthesiologist: {
                    "clinicId": userDetails.clinicId ? userDetails.clinicId : "",
                    "userId": userDetails.userId ? userDetails.userId : "",
                    "name": userDetails.clinicName ? userDetails.clinicName : "",
                    "userName": userDetails.name ? userDetails.name : "",
                    "phone": userDetails.phone ? userDetails.phone : "",
                    "email": userDetails.email ? userDetails.email : "",
                    "role": roleConstants.ANATHESIOLOGIST
                }
            }
        })

        if (!addEventRes)
            return

        await this.getEventsList()
        await this.getPendingSurgeryList()
    }

    updateSurgery = async (req, res) => {
        let request = {
            surgeryId: req.surgeryId,
            anaesthesiologist: req.anaesthesiologist,
            virtualMeeting: {
                startTime: res.startTime,
                endTime: res.endTime
            }
        }
        let [error, addEventRes] = await Utils.parseResponse(PatientService.updateSurgeryStatus(request))
        if (error) {
            Utils.apiFailureToast(error)
            return false
        } else {
            this.getPendingSurgeryList()
        }

    }

    getParticipantObj = (req, role) => {
        return {
            name: req.name,
            email: req.email,
            userId: req.userId,
            role: role,
            picture: req.picture ? req.picture : ""
        }
    }

    addEvent = async (request) => {
         
        const userData = this.props?.user?.userDetails;
        console.log(request);
        let [error, addEventRes] = await Utils.parseResponse(CalendarService.createEvent(request))
        if (error) {
            Utils.apiFailureToast(error)
        } else {
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
                notificationFor:"",
                type:"push",
                isDelivered:true,
                postedToDeviceType:"",
                postedTo:   userData?.email,
                postedBy:   userData?.email,
                description:'<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-...',
                payload:{
                    role:  userData?.role,
                    notificationType:"APPOINTMENT ACCEPTANCE",
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
                title: userData?.firstName +  ' has accepted the appointment of ' + request?.participants[0]?.name,
            }
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
                    notificationType:"APPOINTMENT ACCEPTANCE",
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
                title: userData?.firstName + ' has accepted the appointment ' + request?.participants[0]?.name,
            }
            let [er, addEmailNotification] = await Utility.parseResponse(NotificationService.addNotification(NotificationrequestDataEmail));
            Utils.apiSuccessToast("Event added successfully");
            return addEventRes
        }
    }


    getEventsList = async () => {

        let requestData = {
            startTime: this.state.startTime,
            endTime: this.state.endTime,
            userId: this.props.userId
        }
        let [error, getEventsListRes] = await Utils.parseResponse(CalendarService.getEventsList(requestData));
        if (error) {
            return error

        } else {
            let events = this.getEventListForAnathesiologist(getEventsListRes)
            this.setState({events, userId: this.props.userId})
        }
    }

    getEventListForAnathesiologist = (res) => {
        if (!res || !res.length) {
            return []
        }
        let events = []
        for (let index = 0; index < res.length; index++) {
            let patientName = res[index].participants.find(item => item.role === roleConstants.PATIENT)
            events.push({
                surgeryId: res[index].surgeryId,
                surgeryType: res[index].surgeryType,
                meetingTime: moment(res[index].startTime).format("HH:mm A"),
                patientName: patientName ? patientName.name : "",
                date: moment(res[index].startTime).format("YYYY-MM-DD"),
                picture: patientName && patientName.picture ? patientName.picture : "",
                backgroundColor: "#fff"
            })
        }
        return events
    }


    getPendingSurgeryList = async () => {

        let requestData = {
            clinicId: this.props.userDetails?.clinicId ? this.props.userDetails?.clinicId : "",
            status: statusConstants.PENDING
        }
        let [error, getSurgeryRes] = await Utils.parseResponse(PatientService.getSurgery(requestData));
        if (error) {
            return error

        } else {
            this.setState({requests: getSurgeryRes})
        }
    }

    handleReject = async (index) => {
        this.setState({selectedRequest: this.state.requests[index]})
        await this.handleChange(true, 'isDialog');
    }

    onRejectSubmit = async () => {
        let request = this.state.selectedRequest

        let req = {
            surgeryId: request.surgeryId,
            rejectedBy: this.props.userDetails.clinicId,
            rejectionReason: {
                type: this.state.rejectReason,
                description: this.state.comment
            }
        }
        this.setState({isDialog: false})
        let [error, updateSurgeryRes] = await Utils.parseResponse(PatientService.updateSurgery(req));
        if (error) {
            return error

        } else {
            this.getPendingSurgeryList()
        }
    }

    handleChange = async (value, name) => {

        console.log("value, name", value, name)

        if (name === 'calendar') {
            let startTime, endTime
            startTime = moment(value.startStr).startOf('week').startOf('day').valueOf()
            endTime = moment(value.endStr).endOf('week').endOf('day').valueOf()

            await this.setState({startTime, endTime})
            this.getEventsList()
        }
        if (name === "calendarChange") {

            let startTime = moment(value.startStr).startOf('day').valueOf()
            let endTime = moment(value.endStr).subtract(1, 'day').endOf('day').valueOf()
            await this.setState({
                startTime,
                endTime,
                month: moment(value.view.getCurrentData().viewTitle).format("MMMM"),
                year: moment(value.view.getCurrentData().viewTitle).format("YYYY")
            })
            this.getEventsList()
            this.getSchedules()
            return
        }

        this.setState({[name]: value})

    }

    saveSchedules = async () => {
        console.log(this.state)
        let requestData = {
            userId: this.props.userId,
            month: this.state.month,
            year: this.state.year,
            calendarSlots: this.state.calendarSlots,
            "Schedules": this.state.schedules
        }
        let [error, addSchedulesRes] = await Utils.parseResponse(CalendarService.addSchedules(requestData));
        if (error) {
            Utils.apiFailureToast(error)
        } else {
            Utils.apiSuccessToast("Updated sucessfully")
            this.setState({isOpen: false})

        }
    }

    render() {
        return (
            <div>
                <Header tabName="calendar"/>
                <Row>
                    <Sidebar
                        state={this.state}
                        handleAccept={this.handleAccept}
                        handleReject={this.handleReject}
                    />
                    <Schedular
                        state={this.state}
                        handleChange={this.handleChange}
                        addSchedule={this.addSchedule}
                        removeSchedule={this.removeSchedule}
                        onHandleTimeChange={this.onHandleTimeChange}
                        saveSchedules={this.saveSchedules}
                        onRejectSubmit={this.onRejectSubmit}
                    />
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {user: state.user, userDetails: state.user.userDetails, userId: state.user.userDetails.userId}
};


export default connect(mapStateToProps, {dispatchAction})(CalendarComponent);
