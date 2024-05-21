import React from "react";
import BaseComponent from "../baseComponent";
import Header from "./Headers";
import moment from "moment";
import ScheduleComponent from "./ScheduleComponent";
import { schedules } from "../../constants";
import { CalendarService } from "../../services";
import utility, { dispatchAction } from "../../utility";
import { history } from '../../managers/history';
import { connect } from "react-redux";


export class AvailabilitySchedule extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      timeOptions: [],
      schedules: schedules,
      month: moment().format("MMMM"),
      year: moment().format("YYYY")
    };
  }

  componentDidMount = () => {
    this.getSchedules()
    let timeOptions = utility.getTimeOptions()
    this.setState({ timeOptions: timeOptions })

  }

  addSchedule = (day) => {
    let schedules = this.state.schedules
    let daySchedule = schedules.find(item => item.day === day)
    daySchedule.schedules.push({
      startTime: this.state.timeOptions[0].value,
      endTime: this.state.timeOptions[this.state.timeOptions.length - 1].value,
      time: this.state.timeOptions[0].value + "-" + this.state.timeOptions[this.state.timeOptions.length - 1].value
    })
    this.setState({ schedules })
  }

  removeSchedule = (day, index) => {
    let schedules = this.state.schedules
    let daySchedule = schedules.find(item => item.day === day)
    daySchedule.schedules.splice(index, 1)
    this.setState({ schedules })
  }
  // index, item.day, event.target.value, "startTime"
  onHandleTimeChange = (index, day, value, from) => {
    let schedules = this.state.schedules;
    let daySchedule = schedules.find(item => item.day === day)
    if (from === "startTime") {
      daySchedule.schedules[index]["time"] = value + "-" + daySchedule.schedules[index]["endTime"]

    } else {
      daySchedule.schedules[index]["time"] = daySchedule.schedules[index]["startTime"] + "-" + value
    }

    daySchedule.schedules[index][from] = value
    this.setState({ schedules })
  }

  saveSchedules = async () => {
    console.log(this.state)
    let requestData = {
      userId: this.props.userId,
      month: this.state.month,
      year: this.state.year,
      calendarSlots: 30,
      "Schedules": this.state.schedules
    }
    console.log(this.props.user.userDetails.userId, this.props)
    let [error, addSchedulesRes] = await utility.parseResponse(CalendarService.addSchedules(requestData));
    if (error) {
      utility.apiFailureToast(error)
    } else {
      history.push("/anaesthesiologist/calendar")
    }
  }

  getSchedules = async () => {
    let requestData = {
      userId: this.props.userId,
      month: this.state.month,
      year: this.state.year,
    }
    let [error, addSchedulesRes] = await utility.parseResponse(CalendarService.getSchedules(requestData));
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
      this.setState({ schedules: userSchedules })
    }
  }

  handleChange = async (value, name) => {
    await this.setState({ [name]: value })
    if (name === "month") {
      this.getSchedules()
    }
  }

  render() {
    return (
      <div>
        <Header />
        <ScheduleComponent
          state={this.state}
          onHandleTimeChange={this.onHandleTimeChange}
          saveSchedules={this.saveSchedules}
          addSchedule={this.addSchedule}
          handleChange={this.handleChange}
          removeSchedule={this.removeSchedule}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user, userDetails: state.user.userDetails, userId: state.user.userDetails.userId }
};

export default connect(mapStateToProps, { dispatchAction })(AvailabilitySchedule);
