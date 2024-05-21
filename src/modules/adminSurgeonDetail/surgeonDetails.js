import React from "react";
import styled from "styled-components";
import {makeStyles} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Avatar from "@material-ui/core/Avatar";
import {Row, Column} from "simple-flexbox";
import {statusConstants} from "../../constants";

const OpenSlider = styled.img`
  margin-top: 10px;
  margin-left: 15px;
  height: 29px;

  @media (max-width: 1028px) {
    display: none;
  }
  
`;
const CloseSlider = styled.img`
  margin-left: 30px;
  margin-top: 11px;
  height: 29px;
  @media (max-width: 1028px) {
    display: none;
  }

`;

const useStyles = makeStyles((theme) => ({

    coloumn: {
        backgroundColor: "#f7f7f7",
        position: "relative",
        width:"113%",
        marginRight: -24,
        height: 205,
        marginTop: "33px",

        "@media  (max-width:1024px)": {
            marginTop: "4px",
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
        fontFamily: "Roboto !important",
        color: "#26292c",
        paddingTop: "12px",
        paddingLeft: "16px",
        "@media (max-width: 1028px)": {
            paddingLeft: "50px"
          }
    },
    heading_closed: {
        fontSize: 18,
        fontWeight: 500,
        fontFamily: "Roboto !important",
        color: "#26292c",
        paddingTop: "12px",
        paddingLeft: "108px"
    },

    dots: {
        position: "absolute",
        right: 160,
        top: 13,
        fontSize: 35,
        color: "#b8b894",
        "@media (max-width:1028px)":{
            right: 64
        },
        "@media (max-width:768px)":{
            right: 73
        }
    },

    tab: {
        textAlign: "left",
        cellSpacing: 50,
        marginRight: 20,
    },
    profile: {
        width: "55px",
        height: "60px",
        marginTop: -20,
        marginLeft: 22,
        marginRight: 20,
    },
    profile_closed: {
        width: "55px",
        height: "60px",
        marginTop: -20,
        marginLeft: 135,
        marginRight: 20,
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
        paddingLeft: "99px"
    },

    details: {
        fontSize: "13px",
        color: "#414141",
        fontFamily: "Roboto !important",
        fontWeight: "normal",
        lineHeight: 1.75,
    },

    details_closed: {
        fontSize: "13px",
        paddingLeft: "104px",
        color: "#414141",
        fontFamily: "Roboto !important",
        fontWeight: "normal",
        lineHeight: 1.75,
    },

    data: {
        fontSize: "16px",
        fontFamily: "Roboto",
        fontWeight: 500,
        paddingLeft: 20,
        color: "#181c1b",
    },
    choice: {
        marginLeft: 70,
        marginTop: 35,
        marginRight: 20,
    },

    avatar: {
        backgroundColor: "#43c43f !important",
        fontSize: "15px !important",
        fontFamily: "Roboto!important",
        height: "50px",
        width: "50px",
        marginLeft: "20px",
    },

    avatarNo: {
        backgroundColor: "red",
        border: "none",
        fontSize: "15px !important",
        height: "50px",
        marginLeft: "20px",
        width: "50px",
    },

    selectFixing: {
        fontSize: "16px",
        marginTop: "48px",
        color: "#00a0f0",
        width: "128px",
        height: "40px",
        marginLeft: "21px",
        borderRadius: "2px",
        border: "solid 1px #00a0f0",
        backgroundColor: "#ffffff",
        fontFamily: "Roboto!important",
        fontWeight: "500",
        "&:focus": {
            outline: "none",
            border: "solid 1px #00a0f0",
        },
        "@media  (max-width:768px)": {
            marginLeft: "33px",
        },
    },
    selectFixing_closed: {
        fontSize: "16px",
        marginTop: "48px",
        color: "#00a0f0",
        width: "128px",
        height: "40px",
        marginLeft: "61px",
        borderRadius: "2px",
        border: "solid 1px #00a0f0",
        backgroundColor: "#ffffff",
        fontFamily: "Roboto!important",
        fontWeight: "500",
        "&:focus": {
            outline: "none",
            border: "solid 1px #00a0f0",
        },
        "@media  (max-width:768px)": {
            marginLeft: "152px",
        },
    },
    
    tablefixing: {
        borderCollapse: "collapse",
        marginTop: 3,
        marginLeft: "20px",
        border: 0,
        marginBottom: "50px",
        justifyContent: "center",
        "@media  (max-width:1028px) ": {
            display: "none",
        },
    },

    tablefixing_closed: {
        borderCollapse: "collapse",
        marginTop: 3,
        marginLeft: "60px",
        border: 0,
        marginBottom: "50px",
        justifyContent: "center",
        "@media  (max-width:1028px) ": {
            display: "none",
        },
    },

    tableRow: {
        backgroundColor: "#e6f2ff",
    },
    information: {
        fontSize: "16px",
        fontFamily: "Roboto !important",
        paddingRight: 120,
        color: "#4c4c4c",
        fontWeight: 500,
        border: "none",
    },
    infromation_closed: {
        fontSize: "16px",
        fontFamily: "Roboto !important",
        paddingRight: 166,
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
        height: "84px",
    },
    Patrice: {
        fontFamily: "Roboto !important",
    },
    PatriceName: {
        fontFamily: "Roboto !important",
        paddingLeft: "15px",
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
            paddingRight: "455px"
        }
    },

    newTable: {
        marginLeft: "30px",
        marginTop: "40px",
        borderSpacing: "1px 3px",
        borderCollapse: "separate",

        "@media  (min-width:1028px)": {
            display: "none",
        },
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
export default function SurgeonDetails(props) {
    const classes = useStyles();

    return (
        <div>
            {/* {props.state.isOpen ? ( */}
            
                    {/* <Toolbar/> */}
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
                                            onClick={props.toggleImage}
                                        />
                                    )}

                                    <td className={props.state.isOpen ? classes.heading : classes.heading_closed}>Details</td>
                                    
                                        <MoreHorizIcon className={classes.dots}/>
                                    
                                </tr>
                            </table>

                            <table className={classes.information}>
                                <tr>
                                    <td>
                                        <table
                                            className={classes.tab}
                                            cellSpacing="2"
                                            cellPadding="1"
                                        >
                                            <tr>
                                                <td rowSpan="5">
                                                    <Avatar
                                                        alt="Remy Sharp"
                                                        src="/download.jpg"
                                                        className={props.state.isOpen ? classes.profile : classes.profile_closed}
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
                                                <td className={props.state.isOpen ? classes.details : classes.details_closed}>Speciality:</td>
                                                <td className={classes.data}>{props.state?.selectedClinic?.speciality || ''}</td>
                                            </tr>
                                            <tr>
                                                <td className={props.state.isOpen ? classes.details : classes.details_closed}>Plan:</td>
                                                <td className={classes.data}>{props.state?.selectedClinic?.plan || ''}</td>
                                            </tr>
                                            <tr>
                                                <td className={props.state.isOpen ? classes.details : classes.details_closed}>Subscription:</td>
                                                <td className={classes.data}>{props.state?.selectedClinic?.subscriptionType || ''}</td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td>
                                        <table className={classes.choice}>
                                            <tr>
                                                <td className={props.state.isOpen ? classes.details : classes.details_closed}> Patients:</td>
                                                <td className={classes.data}>{props.state?.selectedClinic?.totalPatients || 0}</td>
                                            </tr>
                                            <tr>
                                                <td className={props.state.isOpen ? classes.details : classes.details_closed}>Clerance:</td>
                                                <td className={classes.data}>{props.state?.selectedClinic?.totalPatients || 0}</td>
                                            </tr>
                                            <tr>
                                                <td className={props.state.isOpen ? classes.details : classes.details_closed}>Pending:</td>
                                                <td className={classes.data}>{props.state?.selectedClinic?.totalPatients || 0}</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        
                    </div>
                    
                
                <Row>
                    <select class="ui dropdown" className={props.state.isOpen ? classes.selectFixing : classes.selectFixing_closed}>
                        <option value="">All Meeting&nbsp;</option>
                    </select>
                    <select class="ui dropdown" className={props.state.isOpen ? classes.selectFixing : classes.selectFixing_closed}>
                        <option value="">All Clerance&nbsp;</option>
                    </select>
                </Row>

                <br/>
                
                    
                            <table
                                border="1"
                                className={props.state.isOpen ? classes.tablefixing : classes.tablefixing_closed}
                                cellPadding="5"
                            >
                                <tr className={classes.tableRow}>
                                    <td className={props.state.isOpen ? classes.information : classes.infromation_closed}>Patient Name</td>
                                    <td className={props.state.isOpen ? classes.information : classes.infromation_closed}>Survey Status</td>
                                    <td className={props.state.isOpen ? classes.information : classes.infromation_closed}>Anesthesiologist</td>
                                    <td className={props.state.isOpen ? classes.information : classes.infromation_closed}>Meeting Status</td>
                                    <td className={props.state.isOpen ? classes.information : classes.infromation_closed}>Surgery Clearence</td>
                                </tr>
                                {props.state.patientList.length > 0 && props.state.patientList.map((row, index) => (
                                    <tr className={classes.row}>
                                        <td className={classes.subdetail}>
                                            <Row>
                                                    <span><Avatar src={row?.patient?.picture || "/images/download.jpg"}
                                                                  alt="Cindy Baker"/></span>
                                                <span
                                                    className={classes.PatriceName}
                                                    style={{
                                                        text: "Roboto!important",
                                                        marginTop: "5px",
                                                        fontSize: "16px",
                                                    }}
                                                >
                            {row?.patient?.name || ''}
                          </span>
                                            </Row>
                                        </td>
                                        <td className={classes.subdetail}>
                        <span
                            className={classes.Patrice}
                            style={{
                                text: "Roboto!important",
                                marginTop: "5px",
                            }}
                        >
                            {row?.status || ''}
                        </span>
                                        </td>
                                        <td className={classes.subdetail}>
                        <span
                            className={classes.Patrice}
                            style={{
                                text: "Roboto!important",
                                marginTop: "5px",
                            }}
                        >
                            {row?.anesthesiologist?.userName || 'Not-assigned'}
                        </span>
                                        </td>

                                        <td className={classes.subdetail}>
                        <span
                            className={classes.Patrice}
                            style={{
                                text: "Roboto!important",
                                marginTop: "5px",
                            }}
                        >
                            {row?.status || ''}
                        </span>
                                        </td>
                                        <td className={classes.subdetail}>
                                            <Avatar
                                                className={row?.status === statusConstants.COMPLETED ? classes.avatar : classes.avatarNo}>
                                                {row?.status === statusConstants.COMPLETED ? 'Yes' : 'No'}
                                            </Avatar>
                                        </td>
                                    </tr>
                                ))}
                            </table>
                    
                
            
            {props.state.patientList.length > 0 && props.state.patientList.map((row, index) => (
            <table className={classes.newTable} key={index}>
            
                
                    <tr>
                    <th className={classes.tableHeadingsResponsive}>Patient Name</th>
                    <td className={classes.tableContentResponsive}>
                            <Avatar alt="Cindy Baker" src={row?.patient?.picture || "/images/download.jpg"}/>
                            {row?.patient?.name || ''}
                        </td>
                    </tr>
                    <tr>
                    <th className={classes.tableHeadingsResponsive}>Survey Status</th>
                    <td className={classes.tableContentResponsive}>
                            {row?.status || ''}
                        </td>
                    </tr>
                    <tr>
                    <th className={classes.tableHeadingsResponsive}>Anesthesiologist</th>
                    <td className={classes.tableContentResponsive}>
                    {row?.anesthesiologist?.userName || 'Not-assigned'}
                        </td>
                        </tr>
                        <tr>
                    <th className={classes.tableHeadingsResponsive}>Meeting Status</th>
                    <td className={classes.tableContentResponsive}>
                            {row?.status || ''}
                        </td>
                        </tr>
                        <tr>
                    <th className={classes.tableHeadingsResponsive}>Surgery Clearence</th>
                    <td className={classes.tableContentResponsive}>
                    <Avatar
                                                className={row?.status === statusConstants.COMPLETED ? classes.avatar : classes.avatarNo}>
                                                {row?.status === statusConstants.COMPLETED ? 'Yes' : 'No'}
                                            </Avatar>
                        </td>
                        </tr>
                
                
            </table>
            ))}
        </div>
    );
}
