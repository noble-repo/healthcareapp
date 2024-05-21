import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Column } from "simple-flexbox";
import styled from "styled-components";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import "./custom.css";
import { Row } from 'simple-flexbox'
import Drawer from '@material-ui/core/Drawer';
import { Select } from 'semantic-ui-react'
import { Slots } from "../../../constants"
import Dialog from "@material-ui/core/Dialog";

const Sync = styled.div`
height: 35px;
width: 100px;
color: skyblue;
border: 1px solid skyblue;
display: flex;
text-align: center;
align-items: center;
justify-content: center;
border-radius: 4px;
`;

const PlusIcon = styled.img`

  height: 20px;
  margin-left: 10px;
`;

const Erase = styled.img`
  height: 15px;
`;

const PlusColumn = styled.td`
  padding-right: 10px;
`;

const MeetingTime = styled.span`
margin-left: 5px;
font-size: 10px;
color: #8f8f8f;
`
const Image = styled.img`
height:15px;
width: 15px;
border-radius: 50%;
`

const Name = styled.span`
color: black;
margin-left: 5px;
font-size: 11px;
font-weight:bold;
`

const Type = styled.span`
margin-left: 5px;
font-size: 11px;
color: black;

`

const ImageRow = styled.div`
border: 1px solid #ccc;
height: 35px;
width: 35px;
display: flex;
`

const RejectionButton = styled.div`
  width: 100%;
  background-color: #00a0f0;
  margin-top: 30px;
  text-align: center;
  color: white;
  margin-bottom: 20px;
  border-radius: 4px;
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: center;
  cursor:pointer;
`

const TextArea = styled.textarea`
margin-top: 20px;
width: 100%;
height: 106px;
outline: none;
margin-bottom: 0px;
border: 1px solid lightgrey;
`

const styles = {
  dropdown: {
    minWidth: "115px !important",
    fontFamily: "OpenSans !important",
    fontWeight: "normal",
    color: "#26292c",
    border: "none",

    borderRadius: "2px",
    backgroundColor: "#fafafa",

    "&:focus": {
      outline: "none",
      borderRadius: "2px",
      transition: "all 0.3s",
    }

  },
};




const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: "10px",
    width: "100%",
  },
}));

function renderEventContent(events) {
  return (
    <div>
      {/* <b>{events.timeText}</b> */}
      <Column>
        <Row justifyContent="space-between" alignItems="center">
          <MeetingTime> {events.event.extendedProps.meetingTime}</MeetingTime>
          {/* <Image src={"/images/no.svg"} height="30px" /> */}
          <Image src={events.event.extendedProps.picture} height="30px" />
        </Row>
        <Name>{events.event.extendedProps.patientName}</Name>
        <Type>{events.event.extendedProps.surgeryType}</Type>
      </Column>
    </div>
  );
}

export default function Schedular(props) {
  const classes = useStyles();

  const dayHeaderFormatUsingMoment = (info, type) => {
    return (
      <>
        {type === "week" ? <>
          <div className="fw-bold fc-black">{moment(info.date.marker).format("ddd")}</div>
          <div className="fw-100 fc-blue-grey">{moment(info.date.marker).format("DD MMM YYYY")}</div>
        </> : ""}
        { type === "day" ? <div className="fw-bold fc-black">{moment(info.date.marker).format("dddd")}</div> : ""}
        {type === "month" ? <div className="fw-bold fc-black">{moment(info.date.marker).format("ddd")}</div> : ""}
      </>
    )
  }

  const getTitleFormat = (event, isDay) => {
    return moment(event.start.marker).format("MMMM YYYY")
  }

  return (
    <div className={classes.root}>
      <Row justifyContent="space-between" alignItems="center">
        <div style={{align:'right',marginBottom:'2.5px'}}>
        <select  class="ui dropdown" onChange={(event) => props.handleChange(event.target.value, "calendar")}>
          <option value="dayGridWeek">Week</option>
          <option value="dayGridMonth">Month</option>
          <option value="dayGridDay">Day</option>
        </select>
        </div>

        <div style={{marginBottom:'2.5px'}}>   
        <ImageRow onClick={() => props.handleChange(true, "isOpen")}>
          <img className="margin-auto" src="/images/settings_icon.svg" />
        </ImageRow>
        </div>
      </Row>
      
      {props.state.calendar === "dayGridWeek" && (
        <FullCalendar
          className="h-100-per"
          plugins={[dayGridPlugin]}
          initialView={"dayGridWeek"}
          eventContent={renderEventContent}
          events={props.state.events}
          datesSet={(event) => props.handleChange(event, "calendarChange")}
          dayHeaderFormat={(event) => dayHeaderFormatUsingMoment(event, 'week')}
          titleFormat={(event) => getTitleFormat(event, true)}
        />
      )}

      {props.state.calendar === "dayGridDay" && (
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridDay"
          eventContent={renderEventContent}
          events={props.state.events}
          titleFormat={(event) => getTitleFormat(event, false)}
          datesSet={(event) => props.handleChange(event, "calendarChange")}
          dayHeaderFormat={(event) => dayHeaderFormatUsingMoment(event, 'day')}
        />
      )}

      {props.state.calendar === "dayGridMonth" && (
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          eventContent={renderEventContent}
          events={props.state.events}
          titleFormat={(event) => getTitleFormat(event, true)}
          datesSet={(event) => props.handleChange(event, "calendarChange")}
          dayHeaderFormat={(event) => dayHeaderFormatUsingMoment(event, 'month')}
        />
      )}
      {scheduleDrawer(props)}
      {rejectTionDialog(props)}
    </div>
  );
}

const scheduleDrawer = (props) => {


  return (
    <React.Fragment key={"right"}>
      <Drawer anchor={"right"} open={props.state.isOpen} onClose={() => props.handleChange(false, "isOpen")}>
        <div className="w-400 padding-left-20 padding-right-20">
          <Row justifyContent="space-between" alignItems="center" className="margin-top-20">
            <span className="fw-bold">Calendar Settings</span>
            <Row>
              <img src="/images/cross.svg" onClick={() => props.handleChange(false, "isOpen")} />
            </Row>
          </Row>
          <div className="margin-top-30">
            <Row justifyContent="space-between" alignItems="center">
              <span>Calendar Slots</span>
              <select className="ui dropdown width-100" value={props.state.calendarSlots} onChange={(event) => props.handleChange(event.target.value, "calendarSlots")}>
                {Slots.map(slot => (
                  <option value={slot.value}>{slot.key}</option>
                ))}

              </select>
            </Row>
            <div className="margin-top-30">{`Set Availability ${props.state?.month || ''} ${props.state?.year || ''}`}</div>
            {props.state.schedules.map(item => {
              return (<>

                <Row className="padding-10">
                  <Row className="margin-top-10">
                    <div className="width-30">{getDay(item.day)}</div>
                    <PlusColumn>
                      <PlusIcon onClick={() => props.addSchedule(item.day)} src="/images/Plus.svg" />
                    </PlusColumn>
                  </Row>
                  <Column className="w-100-per margin-auto">
                    {/* <div className="margin-auto"> */}
                    {item.schedules.length ? item.schedules.map((schd, index) => (

                      <Row alignItems="center" className="justify-content-evenly margin-top-10">
                        <td>
                          <Select className="h-30" options={props.state.timeOptions} style={styles.dropdown}
                            onChange={(event, data) => props.onHandleTimeChange(index, item.day, data.value, "startTime")}

                            value={getTime(schd, "start")} />
                        </td>
                        <td>to</td>
                        <td>
                          {" "}
                          <Select className="h-30" options={props.state.timeOptions} style={styles.dropdown}
                            onChange={(event, data) => props.onHandleTimeChange(index, item.day, data.value, "endTime")}
                            value={getTime(schd, "end")} />
                        </td>
                        <td>
                          <Erase src="/images/Erase.svg" onClick={() => props.removeSchedule(item.day, index)} />
                        </td>
                      </Row>

                    )) : <div className="margin-auto fc-lightgrey">
                      No Time Slot Added
                </div>
                    }
                    {/* </div> */}
                  </Column>
                </Row>

              </>)
            })}


          </div>
        </div>

        <Row justifyContent="space-between" alignItems="center" className="padding-left-20 padding-right-20 margin-top-30">
          <div>Sync with Google/Iphone Calendar</div>
          <Sync onClick={() => props.saveSchedules()}>Sync</Sync>
        </Row>

      </Drawer>
    </React.Fragment>
  )
}


const getTime = (schd, time) => {
  if (time === "start") {
    return schd.time.split("-")[0]
  }
  return schd.time.split("-")[1]
}

const getDay = (day) => {
  return day.substr(0, 3)
}

const rejectTionDialog = (props) => {
  const options = [
    { value: "No schedule", key: "No schedule" },

  ]
  return (
    <Dialog open={props.state.isDialog} className="h-auto">
      <div className="w-450  padding-left-20 padding-right-20  margin-top-20">
        <Row justifyContent="space-between" alignItems="center">
          <div className="fw-bold">Reject Meeting Request</div>
          <img height="20px" src="/images/cross.svg" onClick={() => props.handleChange(false, "isDialog")} />
        </Row>
        <select className="ui dropdown margin-top-20 w-100-per"
          value={props.state.rejectReason}
          onChange={(event) => props.handleChange(event.target.value, "rejectReason")} >
          {options.map(item => (
            <option value={item.value}>{item.value}</option>
          ))}
        </select>
        <TextArea
          value={props.state.comment}
          placeholder="Comment (Optional)"
          onChange={(event) => props.handleChange(event.target.value, "comment")} />

        <RejectionButton onClick={() => props.onRejectSubmit()}>Reject Request</RejectionButton>
      </div>
    </Dialog>
  )
}