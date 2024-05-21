import React from "react";
import "./Surgery.css";
import { makeStyles } from "@material-ui/core";
import "./dashboard.css";
import { Column, Row } from "simple-flexbox";
import moment from "moment";
import { statusConstants } from "../../../constants";
import { history } from "../../../managers/history";
import { useState } from "react";
import { isAfter } from "date-fns";
import Tooltip from '@material-ui/core/Tooltip';


const useStyles = makeStyles((theme) => ({
    row: {
        display: "flex",
    },
    column: {
        flex: "50%",
        float: 'left'

    },
    typography: {
        width: "650px",
        height: "118px",
        margin: "7px 293px 52px 34px",
        padding: "19px 30px 19px 21px",
        borderRadius: "2px",
        border: "solid 1px #d4d4d4",
        backgroundColor: "#ffffff",
    },
    name: {
        fontFamily: "Roboto !important",
        width: 'max-content',
        fontSize: "16px",
        fontWeight: "500 !important",
        fontStyle: "normal",
        lineHeight: "normal",
        letterSpacing: "normal",
        color: "#26292c !important",
        "@media screen and (max-width:480px) and (min-width:351px)": {
            fontSize: "15px",
            width: 'max-content'
        },
        "@media screen and (max-width:350px) ": {
            fontSize: "14px",
            width: 'max-content'
        },
    },
    surgery: {
        maxWidth: '250px',
        fontFamily: "Roboto !important",
        fontSize: "1.5vw",
        fontWeight: "normal",
        lineHeight: "1.50",
        letterSpacing: "normal",
        color: "#414141 !important",
        "@media screen and (max-width:480px) and (min-width:351px)": {
            fontSize: "12px",
            marginBottom: '2px',
            marginTop: '2px'
        },
        "@media screen and (max-width:1024px) and (min-width:770px)": {
            fontSize: "14px",
        },
        "@media screen and (max-width:769px) and (min-width:481px)": {
            fontSize: "14px",
        },
        "@media screen and (max-width:350px)": {
            fontSize: "3.5vw",
        },
        "@media screen and (min-width:1080px)": {
            fontSize: ".95vw",
        },
    },
    clearance: {
        width: "122px",
        height: "28px",
        margin: "0 0 2px 210px",
        fontFamily: "Roboto !important",
        fontSize: "15px !important",
        fontWeight: "normal",
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: 1.87,
        letterSpacing: "normal",
        color: "#4c4c4c !important",
        "@media screen and (max-width:480px) and (min-width:351px)": {
            margin: "0 0 2px 95px !important",
            fontSize: "13px !important",
        },
        "@media screen and (max-width:1240px) and (min-width:1025px)": {
            margin: "0px 0px 2px 607px",
            // padding: "4px 10px 12px 10px",

        },

        "@media screen and (max-width:1024px) and (min-width:770px)": {
            margin: "0 0 2px 406px",
        },
        "@media screen and (max-width:850px) and (min-width:800px)": {
            margin: "0 0 2px 256px !important",

        },
        "@media screen and (max-width:769px) and (min-width:601px)": {
            margin: "0px 0px 2px 340px",
        },
        "@media screen and (max-width:600px) and (min-width:481px)": {
            margin: "3px 36px 2px 200px",
        },
        "@media screen and (max-width:570px) and (min-width:500px)": {
            margin: "3px 44px 2px 138px !important",

        },

        "@media screen and (max-width:350px)": {
            margin: "-3px -13px 0px 69px",
            fontSize: "11px !important",
        }
    },
    surgery__main: {
        width: "650px",
        " @media  (max-width:1200px)": {
            marginTop: "70px !important",
        },
        "@media screen and (max-width:441px)": {
            width: "420px",
        }
    },
    surgery__heading: {
        marginBottom: "5px",
    },
    surgery__details: {
        display: "flex",

        border: "1px solid lightgray",
        borderRadius: "2px",
        "@media screen and (max-width:441px)": {
            padding: '0px'
        },
        "@media screen and (max-width:1024px) and (min-width:770px)": {
            padding: '0px'
        },
        "@media screen  (min-width:1025px)": {
            padding: '10px'
        }
    },
    left__section: {
        display: "flex",
        //justifyContent: "space-between",
        width: "max-content",
        marginTop: '10px',
        marginBottom: '10px'


    },
    img__section: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: '10px'
    },

    right__section: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: '50%',
        marginRight: '11%'

    },
    no__box: {
        height: "40px",
        width: "40px",
        margin: "3px 36px 2px 240px",
        backgroundColor: "#ff462c",
        borderRadius: "50%",
        paddingTop: "10px",
        textAlign: "center",
        "@media screen and (max-width:1240px) and (min-width:1025px)": {
            margin: "3px 36px 2px 643px",
            // padding: "4px 10px 12px 10px",

        },
        "@media screen and (max-width:480px) and (min-width:351px)": {
            margin: "3px 36px 2px 140px",

        },
        "@media screen and (max-width:1024px) and (min-width:770px)": {
            margin: "3px 36px 2px 455px",

        },
        "@media screen and (max-width:850px) and (min-width:800px)": {
            margin: "3px 36px 2px 306px!important",

        },
        "@media screen and (max-width:769px) and (min-width:601px)": {
            margin: "3px 36px 2px 386px",


        },
        "@media screen and (max-width:600px) and (min-width:481px)": {
            margin: "3px 36px 2px 180px ",

        },
        "@media screen and (max-width:570px) and (min-width:500px)": {
            margin: "3px 36px 2px 140px !important",
        },
        "@media screen and (max-width:350px) ": {
            margin: "2px 36px 2px 100px",

        },

    },
    heading: {
        width: "149px",
        height: "21px",
        margin: "29px 77px 7px 34px",

        fontFamily: "Roboto !important",
        fontSize: "18px !important",
        fontWeight: "500 !important",
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: "normal",
        letterSpacing: "normal",
        color: "#26292c !important",
        "@media screen and (max-width:1200px)": {
            marginLeft: "34px",

        },
        "@media screen and (max-width:480px) and (min-width:351px)": {
            marginLeft: "4px",

        }


    },
    data__section: {
        marginLeft: '5px',
        marginTop: '8px',
        width: 'max-content',

        "@media screen and (max-width:480px) and (min-width:351px)": {
            marginLeft: "4px",

        }


    },

    button: {
        padding: '0px 10px',
        placeSelf: 'flex-end',
        //marginRight:'10px',
        width: 'max-content !important',
        height: "44px",
        // marginTop:"30px",
        marginLeft: '50px',
        // padding: "12px 10px 12px 10px",
        // opacity: 0.5,
        borderRadius: "4px",
        border: "none",
        backgroundColor: "#00a0f0",
        fontFamily: "Roboto",
        fontSize: "16px",
        fontWeight: 500,
        lineHeight: "normal",
        letterSpacing: "normal",
        color: "#ffffff",
        "@media screen and (max-width:480px) and (min-width:351px)": {
            // width: "90px",
            height: "34px",
            fontSize: "12px",
            padding: "4px 10px 12px 10px",
            marginLeft: '-60px',
            marginTop: '15px',
            marginRight: '69px !important'

        },
        "@media screen and (max-width:1240px) and (min-width:1205px)": {
            margin: "3px 36px 2px 389px",
            // padding: "4px 10px 12px 10px",

        },
        "@media screen and (max-width:1204px) and (min-width:1150px)": {
            margin: "3px 36px 2px 390px",
            // padding: "4px 10px 12px 10px",

        },
        "@media screen and (max-width:1151px) and (min-width:1081px)": {
            margin: "3px 36px 2px 360px",
            // padding: "4px 10px 12px 10px",

        },
        "@media screen and (max-width:1080px) and (min-width:1025px)": {
            margin: "3px 36px 2px 370px",
            // padding: "4px 10px 12px 10px",

        },
        "@media screen and (max-width:1024px) and (min-width:770px)": {
            margin: "3px 36px 2px 235px",
            padding: "4px 10px 12px 10px",

        },
        "@media screen and (max-width:850px) and (min-width:800px)": {
            margin: "3px 36px 2px 146px!important",

        },

        "@media screen and (max-width:769px) and (min-width:601px)": {
            marginLeft: '172px',
            padding: "4px 10px 12px 10px",
            fontSize: '13px'

        },
        "@media screen and (max-width:600px) and (min-width:481px)": {
            margin: "3px 36px 2px 90px",
            padding: "4px 10px 12px 10px",

        },
        "@media screen and (max-width:570px) and (min-width:500px)": {
            margin: "3px 36px 2px 21px !important",
        },
        "@media screen and (max-width:350px)": {
            fontSize: "12px",
            height: "33px",
            marginLeft: '-77px',
            marginTop: '22px',
            marginRight: '4px'


        },



    },
    button_SM: {
        padding: '0px 10px',
        placeSelf: 'flex-end',
        //marginRight:'10px',
        width: 'max-content !important',
        height: "44px",
        // marginTop:"30px",
        marginLeft: '50px',
        // padding: "12px 10px 12px 10px",
        // opacity: 0.5,
        borderRadius: "4px",
        border: "none",
        backgroundColor: "#00a0f0",
        fontFamily: "Roboto",
        fontSize: "16px",
        fontWeight: 500,
        lineHeight: "normal",
        letterSpacing: "normal",
        color: "#ffffff",
        "@media screen and (max-width:480px) and (min-width:351px)": {
            // width: "90px",
            height: "34px",
            fontSize: "12px",
            padding: "4px 10px 12px 10px",
            marginLeft: '12px',
            marginTop: '15px',
            marginRight: '49px !important'

        },
        "@media screen and (max-width:1240px) and (min-width:1205px)": {
            margin: "3px 36px 2px 389px",
            // padding: "4px 10px 12px 10px",

        },
        "@media screen and (max-width:1204px) and (min-width:1150px)": {
            margin: "3px 36px 2px 390px",
            // padding: "4px 10px 12px 10px",

        },
        "@media screen and (max-width:1151px) and (min-width:1081px)": {
            margin: "3px 36px 2px 360px",
            // padding: "4px 10px 12px 10px",

        },
        "@media screen and (max-width:1080px) and (min-width:1025px)": {
            margin: "3px 36px 2px 370px",
            // padding: "4px 10px 12px 10px",

        },
        "@media screen and (max-width:1024px) and (min-width:770px)": {
            margin: "3px 36px 2px 280px",
            padding: "4px 10px 12px 10px",

        },
        "@media screen and (max-width:850px) and (min-width:800px)": {
            margin: "3px 36px 2px 146px!important",

        },

        "@media screen and (max-width:769px) and (min-width:601px)": {
            marginLeft: '240px',
            padding: "4px 10px 12px 10px",
            fontSize: '13px'

        },
        "@media screen and (max-width:600px) and (min-width:481px)": {
            margin: "3px 36px 2px 90px",
            padding: "4px 10px 12px 10px",

        },
        "@media screen and (max-width:570px) and (min-width:500px)": {
            margin: "3px 36px 2px 21px !important",
        },
        "@media screen and (max-width:350px)": {
            fontSize: "12px",
            height: "33px",
            marginLeft: '-20px',
            marginTop: '22px',
            marginRight: '4px'


        },



    },
    alert: {
        fontSize: '15px',
        "@media screen and (max-width:1024px) and (min-width:770px)": {
            marginRight: '100px'
        },
        "@media screen and (max-width:480px) and (min-width:351px)": {
            fontSize: '9px'
        },
        "@media screen and (max-width:600px) and (min-width:481px)": {
            fontSize: '87%'
        },
        "@media screen and (max-width:350px)": {
            fontSize: '8px'
        },
        "@media screen and (max-width:290px)": {
            fontSize: '7px',
            marginRight: '40px'
        }



    },
    alert_bar: {
        background: '#F5F5F5',
        minHeight: 35,
        width: "150%",
        textAlign: 'center',
        marginTop: '-36px',
        "@media screen and (max-width:1024px)": {
            marginTop: '-51px'
        },


    },
    meeting_data: {
        marginBottom: '10px',
        marginTop: '10px',
        marginLeft: '10px'

    }


}));

function ShowAlert() {
    const classes = useStyles();

    const gotoSurvey = () => {
        history.push('./survey-history/6094d6856210c10029995e90/PART_A')
    }
    return (
        <div className={classes.alert_bar}>
            <div style={{ marginTop: '8px' }}>
                <span className={classes.alert}>Complete your patient survey to schedule a virtual meeting with Anesthesiologist&nbsp; <button className="badge badge-pill badge-danger" onClick={gotoSurvey}>Start</button></span>
            </div>
        </div>

    )

}




function Surgery(props) {

    const isCompleted = props.state.partStatus["PART_A"].completedSection > 0 ? props.state.partStatus["PART_A"].completedSection === props.state.partStatus["PART_A"].totalSection ? 'Complete' : 'Resume' : 'Start'
    const fun1 = () => {
        return <ShowAlert />
    }

    return (
        <>
            {isCompleted === 'Complete' ? '' : fun1()}
            <br />

            {/* <Row  flexBasis='auto' style={{ gap: '10px' }}>

                <Column>Upcoming Surgery</Column>
                <Column>Upcoming Meetings</Column>
            </Row>
            
            <div class="container">
            <div class="row align-items-start">

                <div class="col" style={{fontWeight:'bold'}}>
                    Upcoming Surgery
                </div>
                <div class="col" style={{fontWeight:'bold'}}>
                    Upcoming Meetings
                </div>
            </div>
            </div>


            this following is rendered in map function below (previously)
           { props.state.surgeryList?.length > 0 && props.state.surgeryList.map((surgery, index) =>
 
             <Row style={{ margin: '3px', gap: '10px' }} key={index}>
                    <Column>{RenderSurgeonDetail(surgery)}</Column>
                    <Column
                        className="p-10px border-1px-lightgray br-2px">{RenderPatientScheduleMeeting(surgery)}</Column>
                </Row>} */}
            <div>
                <div class="row align-items-start row_mobile" >
                    <div class="col">
                        <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>Upcoming Surgery</p>
                        {props.state.surgeryList?.length > 0 && props.state.surgeryList.map((surgery, index) =>
                            RenderSurgeonDetail(surgery))}
                    </div>
                    <div class="col ">
                        <p class='upcomming_meeting' style={{ fontWeight: 'bold', marginBottom: '2px' }}>Upcoming Meetings</p>
                        {props.state.surgeryList?.length > 0 && props.state.surgeryList.map((surgery, index) => RenderPatientScheduleMeeting(surgery))}
                    </div>
                </div>
            </div>
        </>
    );
}

const RenderPatientScheduleMeeting = (surgery) => {
    const classes = useStyles();
    const date1 = moment(surgery?.virtualMeeting?.startTime);
    const date2 = moment();
    const endDate = moment(surgery?.virtualMeeting?.endTime);
    const diff = date1.diff(date2, 'minutes');
    console.log(endDate);
    return (

        <div className={classes.surgery__details}>
            <Row style={{  alignItems: "center" }} >
                {surgery.status !== "ACCEPTED" && <Column className="img__section">
                    <img src="/images/calander.png" width="80px"
                        height="80px"
                        margin="2px 16px 4px 20"
                        padding="23px 22px 22px 23px"
                        border="solid 1px #d4d4d4"
                        backgroundColor="#ffffff" />
                </Column>}
                <Column className={classes.meeting_data} >
                    {surgery?.patient?.schedules?.length > 0 && surgery.status !== "ACCEPTED" && <Row
                        className={classes.name}>{'Your Virtual Meeting Availability'}</Row>}

                    {surgery?.patient?.schedules?.length > 0 ? surgery?.patient?.schedules.map((schedule) =>
                        surgery.status !== "ACCEPTED" &&
                        <Row className={classes.surgery}>{schedule && moment(schedule).format('DD MMM YYYY hh:mm A')}</Row>
                    ) : <>
                        <Row className={classes.name}>{'No Appointment Schedule'}</Row>
                        <Row className={classes.surgery}>{'Complete your Patient Survey to schedule a virtual meeting'}</Row>
                    </>}
                    {surgery?.patient?.schedules?.length > 0 && surgery.status === "ACCEPTED" &&

                        <Row style={{ alignItems: 'center' }}>

                            <Column className="img__section" >
                                <img src={surgery?.addedBy?.picture || "/images/male.jpg"} />
                            </Column>
                            <Column className={classes.data__section}>
                                <Row className={classes.name}>{surgery?.anesthesiologist?.userName || ''}</Row>
                                <Row className={classes.surgery}>{surgery?.anesthesiologist?.role || ''}</Row>
                                <Row
                                    className={classes.surgery}>{surgery.virtualMeeting && moment(surgery.virtualMeeting.startTime).format('DD MMM YYYY hh:mm')}</Row>
                            </Column>

                            {(diff <= 10 && endDate >= date2) ?
                                <Column>
                                    <button className={classes.button_SM}  style={{ padding: '0px 10px', marginRight: '10px' }} onClick={()=>{history.push({pathname:'/patient/video-chat', state:{url: 'https://h3a-vchat.friendz.today/r/617X04w4ra6004x16/'+ surgery.virtualMeeting.startTime}})}}>Start Meeting</button>
                                </Column> :
                                <Column>
                                    <Tooltip title={endDate < date2 ? "Meeting time is over" : "You can start a Meeting 10 minutes before the scheduled time"}>
                                        <button className={classes.button_SM}  style={{ padding: '0px 10px', marginRight: '10px' }}>Start Meeting</button>
                                    </Tooltip>
                                </Column>

                            }
                        </Row>

                    }
                </Column>
                {surgery.status !== "ACCEPTED" && <Column>
                    <button type='button' onClick={() => history.push("/patient/virtual-meeting-schedule/" + surgery.surgeryId)}
                        className={classes.button} style={{ padding: '0px 10px', marginRight: '10px' }}>{surgery?.patient?.schedules.length > 0 ? 'Edit Availability' : 'Set Availability'}
                    </button>
                </Column>
                }
            </Row>

        </div>)
}

const RenderSurgeonDetail = (surgery) => {
    const classes = useStyles();
    return (
        <div className={classes.surgery__details}>
            <Row className="left__section">

                <Column className="img__section">
                    <img src={surgery?.addedBy?.picture || "/images/male.jpg"} />
                </Column>
                <Column className={classes.data__section}>
                    <Row className={classes.name}>{surgery?.addedBy?.userName || ''}</Row>
                    <Row className={classes.surgery}>{surgery?.surgeryType || ''}</Row>
                    <Row
                        className={classes.surgery}>{surgery.addedOn && moment(surgery.addedOn).format('DD MMM YYYY')}</Row>
                </Column>
            </Row>
            <Column className="right__section" style={{ width: '50%', marginRight: '11%' }}>
                <span className={classes.clearance}>Surgery Clearance</span>
                <div className={classes.no__box}>
                    <span
                        style={{
                            width: "41px",
                            height: "22px",
                            fontFamily: "Roboto !important",
                            fontSize: "16px",
                            fontWeight: "bold !important",
                            fontStretch: "normal",
                            fontStyle: "normal",
                            lineHeight: "normal",
                            // paddingLeft: "15px",
                            lineSpacing: "normal",
                            textAllign: "center",
                            color: "#ffffff ",
                        }}
                    >{surgery.status === statusConstants.APPROVED || surgery.status === statusConstants.COMPLETED ? 'Yes' : 'No'}
                    </span>
                </div>
            </Column>
        </div>

    )
}

export default Surgery;
export { ShowAlert }
