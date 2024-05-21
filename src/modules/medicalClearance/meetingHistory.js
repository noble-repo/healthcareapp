import React from "react";
// import "./Surgery.css";
import { Container, makeStyles } from "@material-ui/core";
// import "./dashboard.css";
import styled from "styled-components";
const useStyles = makeStyles((theme) => ({
  typography: {
    width: "650px",
    height: "118px",
    margin: "7px 293px 52px 34px",
    padding: "19px 30px 19px 21px",
    borderRadius: "2px",
    border: "solid 1px #d4d4d4",
    backgroundColor: "#ffffff",
  },
  

  surgery__main: {
    width: "650px",
   
  },
  surgery__heading: {
    marginBottom: "5px",
  },
  surgery__details: {
    display: "flex",
    padding: "10px",
    border: "1px solid lightgray",
    borderRadius: "2px",
    marginLeft: "34px",
    height: '107px',
    // marginTop:'10px',
  },
  left__section: {},
  right__section: {
    flex: "1",
  },
  img__section: {
    width: "60px",
    borderRadius: "50%",
  },
  left__section: {
    display: "flex",
    justifyContent: "space-between",
  },
  img__section: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  data__section1: {
    fontSize: "14px",
    marginBottom: "3px",
  },
  data__section2: {
    fontSize: "14px",
    marginBottom: "3px",
  },
  right__section: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  no__box: {
    height: "40px",
    width: "40px",
    backgroundColor: "#ff462c",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "12px",
  },
  name: {
    width: "124px",
    height: "21px",
    margin: "7px 0px 2px 40px",
    fontFamily: "Roboto !important",
    fontSize: "18px",
    fontWeight: 500,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#26292c",
},
surgery: {
  width: "187px",
  height: "28px",
  margin: "2px 0px 25px 40px",
  fontFamily: "Roboto",
  fontSize: "15px",
  fontWeight: "normal",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "1.87",
  letterSpacing: "normal",
  color: "#414141",
},
}));

function MeetingHistory() {
  const classes=useStyles();
  return (
    <div className="surgery__main">
      {/* <h4> */}
        <span
          style={{
            width: "153px",
            height: "21px",
            margin: "29px 77px 7px 34px",
            fontFamily: "Roboto",
            fontSize: "18px",
            fontWeight: "500px",
            fontStretch: "normal",
            fontStyle: "normal",
            lineHeight: "normal",
            letterSpacing: "normal",
            color: "#26292c",
          }}
        >
          Meeting History
        </span>
      {/* </h4> */}

      <div className= {classes.surgery__details}>
        <div className="left__section">
          <div className="img__section">
            <img src="/images/male.jpg" />
          </div>
          <div className="data__section">
            <span className={classes.name}>Dr. Angelina Victor</span>
            <div className="data__section">
              <span className={classes.surgery}>Anesthesiologist</span>
              <br/>
              <span className={classes.surgery}>Meeting&nbsp;Ended&nbs;on&nbsp;10:30&nbsp;AM,&nbsp;10&nbsp;Sep&nbsp;2020</span>
            </div>
          </div>
        </div>
        <div className="right__section">
        <button>Send Message</button>
        </div>
      </div>
    </div>
  );
}

export default MeetingHistory;
