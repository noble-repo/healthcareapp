import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Column, Row } from "simple-flexbox";
import { Avatar } from "material-ui";
import { statusConstants } from "../../../constants";

// import {Inject,ScheduleComponent,Day,Week,WorkWeek,Month,Agenda} from '@syncfusion/ej2-react-navigations'

export default function Sidebar(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    sidebar: {
      width: "25vw",

      backgroundColor: "white",
      height: "100vh",
      paddingLeft: "15px",
      paddingRight: "15px",
    },
    fontfixing: {
      fontSize: "13px",
      fontFamily: "Roboto",
      fontWeight: "bold",
      marginTop: "10px",
      marginLeft: "0px",
    },
    image: {
      height: "60px",
      width: "60px",
      borderRadius: "50%",
      margin: "6px",
    },
    avatarGreen: {
      backgroundColor: "#43c43f !important",
      fontSize: "16px !important",
      margin: "6px",
      height: "50px !important",
      width: "50px !important",
    },
    avatarRed: {
      backgroundColor: "red !important",
      fontSize: "16px !important",
      margin: "6px",
      height: "50px !important",
      width: "50px !important",
    },
    namefixing: {
      fontSize: "17px",
      marginTop: "6px",
      fontWeight: "bold",
      color: "#262626",
    },
    typefixing: {
      fontSize: "15px",
      color: "#262626",
    },
    columnfixing: {
      marginLeft: "auto",
    },
    rowfixing: {
      border: "2px solid #d4d4d4",
      marginBottom: "15px",
      marginTop: "15px",
    },
    title: {
      fontSize: "18px",
      fontWeight: "bold",
      fontFamily: "roboto !important",
      color: "#181c1b",
    },
    subtitle: {
      fontSize: "15px",
      fontFamily: "roboto !important",
      color: "#bdbdbd",
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.sidebar}>
      <div className={classes.title}>Unscheduled Surgeries</div>

      <div className={classes.subtitle}>Drag on the calendar to schedule</div>

      <div id="external-events">
        {props.state.requests.map((event) => (
          <Row className={"fc-event " + classes.rowfixing} key={event._id} data={event._id}>
            <Column>
              <img src={event.patient.picture} className={classes.image} />
            </Column>
            <Column>
              <Row className={classes.namefixing}>{event.patient.name}</Row>
              <Row className={classes.typefixing}>{event.surgeryType}</Row>
            </Column>

            <Column className={classes.columnfixing}>
              <Avatar className={event.status === statusConstants.APPROVED ? classes.avatarGreen : classes.avatarRed}>{event.status === statusConstants.APPROVED ? "Yes" : "No"}</Avatar>
            </Column>
          </Row>
        ))}

      </div>
    </div>
  );
}
