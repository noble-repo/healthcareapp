import React from "react";
import BaseComponent from "../../../modules/baseComponent";
import { Column, Row } from "simple-flexbox";
import Header from '../../surgeonPortal/shared/header';
import Sidebar from './sidebar';
import moment from "moment";
import SurgeryCalendar from './calendarComponent';
import { Draggable } from "@fullcalendar/interaction";
import { statusConstants, roleConstants, schedules } from '../../../constants'
import { connect } from 'react-redux';
import Utils, { dispatchAction } from "../../../utility";
import { CalendarService, PatientService } from "../../../services";


class Calendar extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      requests: [],
      events: [],
      calendarSlots: "15",
      schedules: [],
      month: moment().format("MMMM"),
      year: moment().format("YYYY"),
      startTime: moment().startOf('month').startOf('day').valueOf(),
      endTime: moment().endOf('month').endOf('day').valueOf(),
      isOpen: false
    }
  }

  componentDidMount = () => {
    this.getApprovedSurgeryList()
    this.getEventsList()
    this.getSchedules()

    let draggableEl = document.getElementById("external-events");
    new Draggable(draggableEl, {
      itemSelector: ".fc-event",
      eventData: function (eventEl) {
        let id = eventEl.getAttribute("data");
        return {
          id: id
        }
      }
    });
  };

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
      this.setState({ schedules: userSchedules, calendarSlots: addSchedulesRes.calendarSlots })
    }
  }

  getApprovedSurgeryList = async () => {

    let requestData = {
      clinicId: this.props.userDetails?.clinicId ? this.props.userDetails?.clinicId : "",
      status: statusConstants.APPROVED
    }
    let [error, getSurgeryRes] = await Utils.parseResponse(PatientService.getSurgery(requestData));
    if (error) {
      return error

    } else {
      this.setState({ requests: getSurgeryRes })
    }
  }



  handleChange = async (value, name) => {
    if (name === "calendarChange") {

      let startTime = moment(value.startStr).startOf('day').valueOf()
      let endTime = moment(value.endStr).endOf('day').valueOf()
      await this.setState({ startTime, endTime, month: moment(value.view.getCurrentData().viewTitle).format("MMMM"), year: moment(value.view.getCurrentData().viewTitle).format("YYYY") })
      this.getEventsList()
      this.getSchedules()
      return
    }
    this.setState({ [name]: value })
  }

  handleDrop = async (evnt) => {

    let id = evnt.draggedEl.getAttribute('data')
    let index = this.state.requests.findIndex(item => item._id === id);
    let request = this.state.requests[index];

    let participants = []
    participants.push(this.getParticipantObj(request.patient, roleConstants.PATIENT), this.getParticipantObj(this.props.userDetails, roleConstants.SURGEON))
    await this.addEvent({
      "surgeryId": request.surgeryId,
      "surgeryType": request.surgeryType,
      "status": request.status,
      eventName: "Virtual Meeting",
      calendarSlots: this.state.calendarSlots,
      meetingUrl: "",
      surgeryDate: moment(evnt.dateStr).valueOf(),
      participants: participants,
      userId: this.props.userId,
      isTime: true,
      update: true,
      path: "/surgery",
      method: "PUT",
      data: {
        surgeryId: request.surgeryId,
        surgeryDate: moment(evnt.dateStr).valueOf(),
        status: statusConstants.SCHEDULED
      }
    })

    await this.getEventsList()
    this.getApprovedSurgeryList()
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
    let [error, addEventRes] = await Utils.parseResponse(CalendarService.createEvent(request))
    if (error) {
      Utils.apiFailureToast(error)
    } else {
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
      let events = this.getEventListForSurgeon(getEventsListRes)
      this.setState({ events, userId: this.props.userId })
    }
  }

  getEventListForSurgeon = (res) => {
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
        backgroundColor: "#fff",
        clearance: res[index].status && res[index].status === statusConstants.APPROVED ? true : false
      })
    }
    return events
  }

  handleSchedule = (checked, day) => {
    let index = this.state.schedules.findIndex(item => item.day === day)
    if (checked) {
      this.state.schedules[index].schedules.push({
        startTime: moment().startOf('day').format("hh:mm A"),
        endTime: moment().endOf('day').format("hh:mm A"),
      })
    } else {
      this.state.schedules[index].schedules = []
    }
    this.setState({ schedules: this.state.schedules })
  }

  saveSchedules = async () => {

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
      this.setState({ isOpen: false })
    }
  }

  render() {
    return (
      <>
        <div>
          <Header tabName="calendar" />
        </div>
        <Row>
          <Column>
            <Sidebar state={this.state} />
          </Column>
          <Column className="w-100-per">
            <SurgeryCalendar
              handleSchedule={this.handleSchedule}
              handleDrop={this.handleDrop}
              state={this.state}
              saveSchedules={this.saveSchedules}
              handleChange={this.handleChange}
            />
          </Column>
        </Row>
      </>
    );
  }

}
const mapStateToProps = (state) => {
  return { user: state.user, userDetails: state.user.userDetails, userId: state.user.userDetails.userId }
};

export default connect(mapStateToProps, { dispatchAction })(Calendar);
