import "./Card.css";
import "./Meeting.css";
import React from "react";
import {makeStyles} from "@material-ui/core";
import "./dashboard.css";
import {history} from "../../../managers/history";

const useStyles = makeStyles((theme) => ({
    typography: {

        display: "flex",
        flexDirection: "column",
        marginTop: "30px",
        marginLeft: "40px",
    },
    surgery__main: {
        width: "650px",
    },
    surgery__heading: {
        marginBottom: "5px",
    },
    surgery__details: {
        // width: "650px",
        height: "107px",
        // margin: "7px 293px 52px 34px",
        marginLeft: "34px",
        // padding:"19px 30px 19px 21px",
        borderRadius: "2px",
        border: "solid 1px #d4d4d4",
        backgroundColor: "#ffffff",
        // width: "650px",
        // height: "118px",
        // display: "flex",
        // padding: "10px",
        // border: "1px solid lightgray",
        // borderRadius: "5px",
        // marginLeft: "34px",
        "@media screen and (max-width:441px)": {
            fontSize: "13px",
            marginLeft: "4px",
           
             } 
    },
    left__section: {},
    img__section: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    data__section: {
        marginRight:"93px",
        marginTop: "15px",
         "@media screen and (max-width:441px)": {
            marginRight:"29px",
           
             } 
    },
    // data__sectionp: {
    //   fontSize: "14px",
    //   marginBottom: "3px",
    // },
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
    meetingHeading: {
        width: "153px",
        height: "21px",
        margin: "29px 77px 5px 34px",
        fontFamily: "Roboto !important",
        fontSize: "18px",
        fontWeight: "500 !important",
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: "normal",
        letterSpacing: "normal",
        color: "#26292c",
        " @media  (max-width:1200px)": {
            marginTop: "70px",
                },
               
        "@media screen and (max-width:441px)":  {
            marginLeft:"4px !important",     
                        }
    },
    name: {
        width: "124px",
        height: "21px",
        margin: "17px 0px 2px 10px",
        fontFamily: "Roboto !important",
        fontSize: "18px",
        fontWeight: "500 !important",
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: "normal",
        letterSpacing: "normal",
        color: "#26292c",
        "@media screen and (max-width:441px)": {
            fontSize: "15px",
           
             } 
    },
    surgery: {
        width: "187px",
        height: "28px",
        margin: "2px 0px 25px 10px",
        fontFamily: "Roboto !important",
        fontSize: "15px",
        fontWeight: "normal",
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: "1.87",
        letterSpacing: "normal",
        color: "#414141",
        "@media screen and (max-width:441px)": {
            fontSize: "13px",
           
             } 
    },
    button: {
        width: "140px",
        height: "44px",
        // margin: "22px 20px 18px 140px ",
        marginRight:"34px",
        marginTop:"30px",
        padding: "13px 19px 12px 20px",
        opacity: 0.5,
        borderRadius: "4px",
        border: "none",
        backgroundColor: "#00a0f0",
        fontFamily: "Roboto",
        fontSize: "16px",
        fontWeight: 500,
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: "normal",
        letterSpacing: "normal",
        color: "#ffffff",
        "@media screen and (max-width:441px)": {
            width: "90px",
            height: "34px",
            fontSize: "12px",
            padding: "10px 19px 12px 8px",
        } 
      

    }


}));

function DashboardComponent(props) {
    const classes = useStyles();
    return (


        <div className="surgery__main">
            <div className="surgery__heading">
      <span className={classes.meetingHeading}

      >
  Upcoming Meetings</span>

            </div>
            <div className={classes.surgery__details}>
                <div className="left__section">
                    <div className="img__section" style={{marginTop:"9px",marginLeft:"10px"}}>
                      
                        <img src="/images/calander.png" width="80px"
                             height="80px"
                             margin="2px 16px 4px 20"
                             padding="23px 22px 22px 23px"
                             border="solid 1px #d4d4d4"
                             backgroundColor="#ffffff"/>
                    </div>
                    <div className={classes.data__section}>
                        <span className={classes.name}>No&nbsp;Appointment&nbsp;Schedule</span>
                        <br/>
                        <span className={classes.surgery}>Complete&nbsp;your&nbsp;Patient&nbsp;Survey</span>
                        <br/>
                        <span className={classes.surgery}>to&nbsp;schedule&nbsp;a&nbsp;virtual&nbsp;meeting</span>
                    </div>
                    <button onClick={() => history.push("/medical-clearance")} className={classes.button}>Set&nbsp;Availabilty
                    </button>
                </div>
                {/* <div className="right__section"> */}


                {/* </div> */}

            </div>

        </div>


    );


}


export default DashboardComponent;
