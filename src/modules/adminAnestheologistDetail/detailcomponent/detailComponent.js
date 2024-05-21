import React from "react";
import styled from "styled-components";
import {makeStyles} from "@material-ui/core/styles";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Avatar from "@material-ui/core/Avatar";
import {Row, Column} from "simple-flexbox";
import {statusConstants} from "../../../constants";
import moment from "moment";

const OpenSlider = styled.img`
  margin-left: 17px;
  height: 29px;

  @media  (max-width:1024px) {
      display: none;
  }
`;
const CloseSlider = styled.img`
  margin-left: 40px;
  height: 29px;
`;
const MainButton = styled.button`
  width: 123px;
  height: 40px;
  margin-top: 22.5px;
  margin-left: px;
  border-radius: 2px;
  border: 1px solid white;
  background-color: #00a0f0;
  font-size: 16px !important;
  font-style: Roboto !important;
  color: #ffffff;

  font-weight: 500;
  &:focus {
    outline: none;
    border: none;
    /* color: black; */
    color: white;
  }

  @media  (max-width:1024px) {
    margin-left: 100px;
  }
  @media  (max-width:768px) {
    margin-left: 1px;
  }
`;

const useStyles = makeStyles((theme) => ({
    
    coloumn: {
        backgroundColor: "#f7f7f7",
        position: "relative",
        marginRight: -24,
        height: 305,
        marginTop: "23px",
        width: "120%",

        ["@media (max-width:1024px)"]: {
            width: "126%",
            marginTop: "6px",
        },
    },

    tableSet: {
        padding: 0,
        fontSize: 12,
        marginTop: 18,
        marginLeft: -30,
        fontFamily: "sans-serif",
    },

    heading: {
        fontSize: 18,
        fontWeight: 500,
        width: "135px",
        height: "22px",
        fontFamily: "Roboto !important",
        color: "#26292c",
        margin: "7px 74px 30px 3px",
        "@media (max-width: 1028px)" : {
            paddingLeft: "60px"
        },
    },

    heading_closed: {
        paddingLeft: "93px",
        fontSize: 18,
        fontWeight: 500,
        width: "135px",
        height: "22px",
        fontFamily: "Roboto !important",
        color: "#26292c",
        margin: "7px 74px 30px 3px",
    },

    dots: {
        positon: "absolute",
        paddingLeft: 10,
        fontSize: 35,
        color: "#b8b894",
        marginTop: "26px",
    },

    tab: {
        textAlign: "left",
        cellSpacing: 50,
        marginRight: 20,
    },

    tab_closed: {
        textAlign: "left",
        cellSpacing: 50,
        marginRight: 20,
        marginLeft: 106,
    },

    profile: {
        width: "95px",
        height: "95px",
        marginTop: -20,
        marginLeft: 22,
        marginRight: 20,
        "@media (max-width: 768px)":{
            width:75,
            height: 75,
        }
    },
 
    name: {
        fontSize: 22,
        fontWeight: "bold",
        paddingBottom: 4,
    },
    name_closed: {
        fontSize: 22,
        fontWeight: "bold",
        paddingBottom: 4,
        paddingLeft: 98,
    },
    details: {
        fontSize: "13px",
        color: "#414141",
        fontFamily: "Roboto",
        fontWeight: "normal",
        lineHeight: 1.75,
    },

    details_closed: {
        fontSize: "13px",
        color: "#414141",
        fontFamily: "Roboto",
        fontWeight: "normal",
        lineHeight: 1.75,
        paddingLeft: 100,
    },

    data: {
        fontSize: "16px",
        fontFamily: "Roboto",
        fontWeight: 500,
        paddingLeft: 20,
        color: "#181c1b",
    },
    choice: {
        marginLeft: 35,
        marginTop: 45,
        marginRight: 20,
        "@media (max-width: 768px)":{
            marginLeft: "0px"
        },
    },


    change: {
        marginLeft: 20,
        marginTop: 10,
        width: "300px",
    },

    surgery: {
        marginTop: 6,
        marginLeft: 100,
    },

    selectFixing: {
        fontSize: "16px",
        width: "128px",
        height: "40px",
        marginLeft: "21px",
        borderRadius: "2px",
        border: "solid 1px #00a0f0",
        backgroundColor: "#ffffff",
        color: "#00a0f0",
        fontFamily: "Roboto!important",
        fontWeight: "500",
        marginTop: "24px",
    },

    tablefixing: {
        borderCollapse: "collapse",
        marginTop: 3,
        marginLeft: "20px",
        border: 0,

        ["@media (max-width:1028px)"]: {
            display: "none",
        },

    },
    tablefixing_closed: {
        borderCollapse: "collapse",
        marginTop: 3,
        marginLeft: "20px",
        width: "84%",
        border: 0,
    },

    tableRow: {
        backgroundColor: "#e6f2ff",
        width: "1500px",
        height: "40px",
    },
    information: {
        fontSize: "16px",
        fontFamily: "Roboto !important",
        paddingLeft: 120,
        color: "#4c4c4c",
        fontWeight: 500,
        border: "none",
    },

    subdetail: {
        fontSize: 16,
        paddingLeft: 10,
        color: "#181c1b",
        fontWeight: "normal",
        border: "none",
        backgroundColor: "#f7f7f7",
        height: "100px",
    },

    calenderButton: {
        marginLeft: 900,
    },
    
    calenderButton_closed: {
        marginLeft: 1000,
    },

    Patrice: {
        fontFamily: "Roboto !important",
    },
    // Classes for Ipad Responsiveness

    ForIpadResponsive: {
        marginLeft: "30px",
        marginTop: "40px",
        borderSpacing: "1px 3px",
        borderCollapse: "separate",

        "@media  (min-width:1028px)": {
            display: "none",
        },
    },

    tableContentResponsive: {
        fontFamily: "Roboto",
        fontSize: "16px",
        fontWeight: "normal",
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: "1.19",
        letterSpacing: "normal",
        textAlign: "left",
        color: "#181c1b",
        paddingLeft: "10px",
        paddingRight: "662px",
        paddingTop: "17px",
        backgroundColor: "#fafafa",
        "@media (max-width:768px)":{
            paddingRight: "400px"
        }
    },
    tableHeadingsResponsive: {
        fontFamily: "Roboto",
        fontSize: "14px",
        fontWeight: "500",
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: "1.21",
        letterSpacing: "normal",
        textAlign: "left",
        color: "#414141",
        paddingTop: "17px",
        backgroundColor: "#e8f5fe",
        paddingLeft: "14px",
    },
}));


export default function DetailComponent(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    return (
        <div>
                    <div className={classes.coloumn}>
                            <table className={classes.tableSet}>
                                <tr>
                                    {props.state.isOpen ? (
                                        <OpenSlider
                                            src="/images/toggle_icon.svg"
                                            class="Group-6"
                                            onClick={props.toggleImage}
                                        />
                                    ) : (
                                        <CloseSlider
                                            src="/images/toggle_icon.svg"
                                            class="Group-6"
                                            onClick={props.toggleImage}
                                        />
                                    )}

                                    <td className={props.state.isOpen ? classes.heading : classes.heading_closed}>Anesthesiologist</td>
                                    <td className={classes.date}>
                                        <MainButton onClick={props.editDialog} className={props.state.isOpen ? classes.calenderButton : classes.calenderButton_closed}> 
                                            {" "}
                                            View Calendar
                                        </MainButton>
                                    </td>
                                    <MoreHorizIcon
                                        className={classes.dots}
                                        onClick={handleClick}
                                    />
                                </tr>
                            </table>

                            <table className={classes.information}>
                                <tr>
                                    <td>
                                        <table
                                            className={props.state.isOpen ? classes.tab : classes.tab_closed}
                                            cellSpacing="2"
                                            cellPadding="1"
                                        >
                                            <tr>
                                                <td rowSpan="5">
                                                    <Avatar
                                                        alt="Remy Sharp"
                                                        src="download.jpg"
                                                        className={classes.profile}
                                                    />
                                                </td>
                                                <th colSpan="2" className={props.state.isOpen ? classes.name : classes.name_closed}>
                                                    {`${props.state?.selectedClinic?.owner?.firstName || ''} ${props.state?.selectedClinic?.owner?.lastName || ''}`}
                                                </th>
                                            </tr>

                                            <tr>
                                                <td className={props.state.isOpen ? classes.details : classes.details_closed}>Email:</td>
                                                <td className={classes.data}>{props.state?.selectedClinic?.owner?.email || ''}</td>
                                            </tr>
                                            <tr>
                                                <td className={props.state.isOpen ? classes.details : classes.details_closed}>Phone:</td>
                                                <td className={classes.data}>{props.state?.selectedClinic?.owner?.phone || ''}</td>
                                            </tr>
                                            <tr>
                                                <td className={props.state.isOpen ? classes.details : classes.details_closed}>Clinic:</td>
                                                <td className={classes.data}>{props.state?.selectedClinic?.name || ''}</td>
                                            </tr>
                                        </table>
                                    </td>

                                    <td>
                                        <table className={classes.choice}>
                                            <tr>
                                                <td className={props.state.isOpen ? classes.details : classes.details_closed}> Type:</td>
                                                <td className={classes.data}>
                                                    {props.state?.selectedClinic?.clinicType || ''}
                                                </td>
                                            </tr>
                                            <tr>

                                            </tr>
                                            <tr>
                                                <td className={props.state.isOpen ? classes.details : classes.details_closed}>Subscription:</td>
                                                <td className={classes.data}>{props.state?.selectedClinic?.subscriptionType || ''}</td>
                                            </tr>
                                            <tr>
                                                <td className={props.state.isOpen ? classes.details : classes.details_closed}>User:</td>
                                                <td className={classes.data}>{props.state?.selectedClinic?.user || '1'}</td>
                                            </tr>

                                        </table>

                                    </td>

                                    <td>
                                       
                                            <table className={classes.choice}>
                                                <tr>
                                                    <td className={props.state.isOpen ? classes.details : classes.details_closed}> Patients:</td>
                                                    <td className={classes.data}>{props.state?.selectedClinic?.totalPatients || 0}</td>
                                                </tr>
                                                <tr></tr>
                                                <tr>
                                                    <td className={props.state.isOpen ? classes.details : classes.details_closed}>Meetings:</td>
                                                    <td className={classes.data}>{props.state?.selectedClinic?.totalMeetings || 0}</td>
                                                </tr>
                                            </table>
                                    </td>
                                </tr>
                            </table>
                            </div>
                        
                
                <Row>
                    <select class="ui dropdown" className={classes.selectFixing}>
                        <option value="">All Meeting&nbsp;</option>
                    </select>
                    <select class="ui dropdown" className={classes.selectFixing}>
                        <option value="">This Month&nbsp;</option>
                    </select>
                </Row>

                <br/>
               
                    
                            <table
                                border="1"
                                className={props.state.isOpen ? classes.tablefixing : classes.tablefixing_closed}
                                cellPadding="5"
                            >
                                <tr className={classes.tableRow}>
                                    <th className={classes.information}>Patient Name</th>
                                    <th className={classes.information}>Survey Status</th>
                                    <th className={classes.information}>Virtual Meeting</th>
                                    <th className={classes.information}>Meeting Status</th>
                                    <th className={classes.information}>Surgery Clearence</th>
                                </tr>
                                {props.state.patientList.length > 0 && props.state.patientList.map((row, index) => (
                                    <tr className={classes.row} key={index}>
                                        <td className={classes.subdetail}><Row>
                                            <span className={classes.Patrice} style={{
                                                text: "Roboto!important",
                                                marginTop: "5px",
                                                fontSize: "16px"
                                            }}><Avatar src={"/images/download.jpg"} alt="Cindy Baker"/>{row.patientName}</span></Row>
                                        </td>
                                        <td className={classes.subdetail}>
                                            <span className={classes.Patrice} style={{
                                                text: "Roboto!important",
                                                marginTop: "5px"
                                            }}>{row.surveyStatus}</span></td>
                                        <td className={classes.subdetail}>
                                            <span className={classes.Patrice} style={{
                                                text: "Roboto!important",
                                                marginTop: "5px"
                                            }}>{row.virtualMeeting}</span></td>
                                        <td className={classes.subdetail}>
                                            <span className={classes.Patrice} style={{
                                                text: "Roboto!important",
                                                marginTop: "5px"
                                            }}>{row.meetingStatus}</span></td>
                                        <td className={classes.subdetail}>
                                            <img className={classes.iconFixing}/>{row.surgeryClearance}</td>
                                    </tr>
                                ))}
                            </table>

                       
                
                {props.state.patientList.length > 0 && props.state.patientList.map((row, index) => (
            <table className={classes.ForIpadResponsive}>
                    <tr></tr>
                    <th className={classes.tableHeadingsResponsive}>{'Patient Name'}</th>
                    <td className={classes.tableContentResponsive}><Avatar src={row.patient.picture || "/images/download.jpg"} alt="Cindy Baker"/>{row.patient.name}</td>
                    <tr></tr>
                    <th className={classes.tableHeadingsResponsive}>{'Survey Status'}</th>
                    <td className={classes.tableContentResponsive}>{row.status}</td>
                    <tr></tr>
                    <th className={classes.tableHeadingsResponsive}>{'Virtual Meeting'}</th>
                    <td className={classes.tableContentResponsive}>{row.surgeryDate && moment(row.surgeryDate).format('DD MMM YYYY hh:mm A') || ''}</td>
                    <tr></tr>
                    <th className={classes.tableHeadingsResponsive}>{'Meeting Status'}</th>
                    <td className={classes.tableContentResponsive}>{row.status}</td>
                    <tr></tr>
                    <th className={classes.tableHeadingsResponsive}>{'Surgery Clearance'}</th>
                    <td className={classes.tableContentResponsive}>{row.status === statusConstants.COMPLETED ? 'Yes' : 'No'}</td>
                    <tr></tr>
                
                        {/* <td></td> */}
                        
                        
                    

            </table>
            ))}
        </div>
    );
}
