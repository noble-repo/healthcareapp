import React from "react";
import { Column, Row } from "simple-flexbox";
import moment from "moment";
import styled from "styled-components";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Checkbox, Drawer } from '@material-ui/core';
import { Avatar } from "material-ui";
import { Slots } from '../../../constants';
import { makeStyles } from "@material-ui/core/styles";

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


export default function SurgeryCalendar(props) {

  const useStyles = makeStyles((theme) => ({

    avatarGreen: {
      backgroundColor: "#43c43f !important",
      height: "10px !important",
      width: "10px !important",
      margin: '1px'
    },
    avatarRed: {
      backgroundColor: "red !important",
      height: "10px !important",
      width: "10px !important",
      margin: '1px'
    },

  }));
  const classes = useStyles();

  function renderEventContent(events) {
    if (!Object.keys(events.event.extendedProps).length) {
      events.event.remove()
    }
    return (
      <div>
        <Column>
          <Row justifyContent="space-between" alignItems="center">
            <MeetingTime> {events.event.extendedProps.meetingTime}</MeetingTime>
            <Avatar className={events.event.extendedProps.clearance ? classes.avatarGreen : classes.avatarRed} />
          </Row>
          <Name>{events.event.extendedProps.patientName}</Name>
          <Type>{events.event.extendedProps.surgeryType}</Type>
        </Column>
      </div>
    );
  }

  const dayHeaderFormatUsingMoment = (info) => {
    return (
      <div className="fw-bold fc-black">{moment(info.date.marker).format("ddd")}</div>
    )
  }


  return (
    <div>
      <ImageRow>
        <img className="margin-auto" src="/images/settings_icon.svg" onClick={() => props.handleChange(true, "isOpen")} />
      </ImageRow>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={props.state.events}
        eventContent={renderEventContent}
        datesSet={(event) => props.handleChange(event, "calendarChange")}
        dayHeaderFormat={(event) => dayHeaderFormatUsingMoment(event)}
        droppable={true}
        drop={(date) => {
          props.handleDrop(date);
        }}
      />
      {scheduleDrawer(props)}
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
              <select class="ui dropdown width-100" value={props.state.calendarSlots} onChange={(event) => props.handleChange(event.target.value, "calendarSlots")}>
                {Slots.map(slot => (
                  <option value={slot.value}>{slot.key}</option>
                ))}

              </select>
            </Row>

            <Row justifyContent="space-between" className="margin-top-30">
              <Column>Surgery Days</Column>
              <Column>
                {props.state.schedules.map(item => {
                  return (<>

                    <Row alignItems="center">
                      <Checkbox color="primary" checked={item.schedules.length} onChange={(event) => props.handleSchedule(event.target.checked, item.day)} />
                      <div>{item.day}</div>
                    </Row>
                  </>)
                })}
              </Column>
            </Row>

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
