import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";
import { InputBase } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

var currDate = new Date();
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var n = month[currDate.getMonth()];
var showdate = currDate.getDate() + " " + n + " " + currDate.getFullYear();
var hours = currDate.getHours();
var AmOrPm = hours >= 12 ? "pm" : "am";
hours = hours % 12 || 12;
var minutes = currDate.getMinutes();
var showtime = hours + ":" + minutes + " " + AmOrPm;

const useStyles = makeStyles((theme) => ({
  root: {
    // width: "690px",
    width:"100vw",
    height: "300px",
    // backgroundColor: "#fff",
    // backgroundColor: "#red",

    display: "flex",
    flexDirection: "column",
    marginLeft: "0px",
    paddingLeft: "0px",
    padding:"10px",

    "&$disabled": {
      color: "white",
    },

    ".&MuiBox-root-77": {
      paddingLeft: "0px",
      paddingTop: "20px",
    },
  },

  cBox: {
    width: "100%",
    height: "90%",
    backgroundColor: "#fff",
    padding: "10px 0px 0px 0px",
    margin: "10px 0px 0xp 0px",
  },
  input: {
    width: "120%",
  },
  image: {
    float: "left",
    width: "36px",
  height:"36px",
    marginRight: "5px",
  },

  textbox: {
    display: "flex",
    fontSize: "12px",
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "#d4d4d4",
    width: "180%",
    // width:"100%",
    height: "50px",
    padding: "10px",

    "@media  (max-width:1024px) and (min-width: 768px)": {
     width:"533px"
      
    
  }
   
  },
  time: {
    fontFamily: "Roboto",
    fontSize: "12px",
    color: "#a8a8a8",
  },
  pname: {
    width: "500px",
    height: "19px",
    margin: "20px 10px 28px 0px",
    paddingTop: "15px",
    fontFamily: "Roboto !important",
    fontSize: "14px",
    fontWeight: "500",
    color: "#414141",
  },
  sname: {
    width: "500px",
    height: "19px",
    margin: "20px 10px 28px 0px",
    paddingTop: "40px",
    fontFamily: "Roboto !important",
    fontSize: "14px",
    fontWeight: "500",
    color: "#414141",
  },
  container: {
    padding: "10px 0px",
    margin: "10px 0",
  },
  today: {
    marginRight: "10px",
    width: "120px",
    height: "20px",
    fontFamily: "Roboto",
    fontSize: "13px",
    marginLeft: "0px",
    color: "#979696",
    marginTop:"40px",
    marginBottom:"0px"
  },
  para: {
    color: "#181c1b",
    fontSize:"16px",
    fontFamily:"roboto",
  },
  // divStyle:{
  //   width:"150%",
  //   height:"100px",
  //   backgroundColor:"#f7f7f7"
  // }
}));

export default function ChatComponent(props) {
  const classes = useStyles();
  return (
    // <div style={{backgroundColor:"red",width:"100vw"}}>
    <div>

    <div className={classes.root}>
      <div className={classes.cBox}>
        <div className={classes.container}>
          <p className={classes.today}>{showdate}</p>
          {props.state.patient.map((patient) => (
            <span>
              <p className={classes.pname}>
                {" "}
                <Avatar className={classes.image} alt="Remy Sharp" src=" " />
                {patient.patientName} <span className={classes.time}>{showtime}</span>{" "}
                <br />
                <p className={classes.para}> {patient.pChat}</p>
              </p>
            </span>
          ))}
          {props.state.surgeon.map((surgeon) => (
            <span style={{marginTop:"36px"}}>
              <p className={classes.sname}>
                <Avatar className={classes.image} alt="Remy Sharp" src=" " />
                {surgeon.surgeonName} <span className={classes.time}>{showtime}</span>{" "}
                <br />
                <p className={classes.para}> {surgeon.sChat}</p>
              </p>
            </span>
          ))}
    

        </div>
      </div>

      
    </div>
    <div className={classes.divStyle}>
        <InputBase 
          className={classes.textbox}
          placeholder="Type your message here"
          endAdornment={<SendIcon opacity="0.1" />}
        />
        
      </div>
    
    </div>
  );
}
