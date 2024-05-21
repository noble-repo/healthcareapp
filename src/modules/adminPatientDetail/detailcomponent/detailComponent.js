import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Avatar from "@material-ui/core/Avatar";
import Popover from "@material-ui/core/Popover";
import { Column, Row } from "simple-flexbox";
import { statusConstants } from "../../../constants";
import moment from "moment";
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreHoriz from "@material-ui/icons/MoreHoriz";

const Slider = styled.img`
  margin-left: -18px;
  height: 35px;
  width:35px;
  @media  (max-width:1024px) and (min-width: 768px) {
    display:none; 
 }
`;

const CloseSlider = styled.img`
  margin-left: 15px;
  height: 35px;
  width:35px;
  @media  (max-width:1024px) and (min-width: 768px) {
   display:none;    
}
`;

const MainButton = styled.button`
width: 92px;
height: 31px;
border-radius: 2px;
border: solid 1px #00a0f0;
background-color: #ffffff;
color: #00a0f0;
font-family: Roboto !important;
font-weight: 500;
&:focus {
  outline: blue;
  border: solid 1px #00a0f0;
  color: #00a0f0;
}
`;

const useStyles = makeStyles((theme) => ({

    content: {
        flexGrow: 1,
        backgroundColor: "#ffffff",
        padding: theme.spacing(3),
        marginLeft: 36,
        marginTop: 20,
        width: "1074px",
        // marginRight:100
    },

    coloumn: {
        backgroundColor: "#f7f7f7",
        position: "relative",
        marginTop: 33,
        height: 267,
        width: "126%",

        "@media  (max-width:1028px) ": {
            marginTop: 16,
        }
    },
    toggleAndHeading_Alignment: {
        justifyContent: "center",
    },

    dots: {
        position: "absolute",
        paddingLeft: 10,
        fontSize: 35,
        color: "#b8b894",
        marginLeft: "1050px",
    },

    dots_closed: {
        paddingLeft: 10,
        fontSize: 35,
        color: "#b8b894",
        marginLeft: "1272px",
    },

    data: {
        marginTop: -10,
        marginLeft: -4,
    },

    tab: {
        textAlign: "left",
        cellSpacing: 50,
        marginRight: 20,
        marginTop: 12,
        "@media  (max-width:1028px) ": {
            marginTop: "12px",
            marginRight: "0px"
        }
    },
    mainIcon: {
        width: theme.spacing(8),
        height: theme.spacing(8),
        marginTop: -20,
        marginLeft: 22,
        marginRight: 20,
        "@media  (max-width:1028px) ": {
            marginTop: -64,
        }
    },

    mainIcon_closed: {
        width: theme.spacing(8),
        height: theme.spacing(8),
        marginTop: -20,
        marginLeft: 76,
        marginRight: 20,
    },


    name: {
        fontSize: 18,
        fontFamily: "Roboto",
        fontWeight: "500",
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: "normal",
        letterSpacing: "normal",
        color: "#26292c",
        paddingBottom: 19,
    },

    name_closed: {
        fontSize: 18,
        fontFamily: "Roboto",
        fontWeight: "500",
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: "normal",
        letterSpacing: "normal",
        color: "#26292c",
        paddingBottom: 19,
        paddingLeft: 70,
    },

    Surdetail: {
        fontSize: 11,
        fontFamily: "Roboto",
        color: "#4c4c4c",
        fontWeight: "normal",
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: 1.75,
        letterSpacing: "normal",
    },


    Surdetail_closed: {
        fontSize: 11,
        fontFamily: "Roboto",
        color: "#4c4c4c",
        fontWeight: "normal",
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: 1.75,
        letterSpacing: "normal",
        paddingLeft: 72,
    },

    Patinfo: {
        fontSize: 12,
        fontFamily: "Roboto",
        fontWeight: 500,
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: "normal",
        letterSpacing: "normal",
        color: "#26292c",
        paddingLeft: 20,
    },
    info: {
        fontSize: 12,
        fontFamily: "Roboto",
        fontWeight: 500,
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: 1.75,
        letterSpacing: "normal",
        color: "#181c1b",
        paddingLeft: 20,
    },

    stype: {
        marginLeft: 35,
        marginTop: 45,
        marginRight: 20,
        "@media  (max-width:1028px) ": {
            marginLeft: -160,
            marginTop: 126,
            marginRight: 0
        }

    },

    change: {
        marginLeft: 45,
        marginTop: 10,
        "@media  (max-width:1028px) ": {
            marginLeft: 70,
            marginTop: 10,
        },
        "@media  (max-width:768px) ": {
            marginLeft: 19,
        }
    },

    surgery: {
        marginTop: 30,
        marginLeft: 100,
        "@media  (max-width:1028px) ": {
            marginLeft: 80,
            marginTop: 30,
        },
        "@media  (max-width:1028px) ": {
            marginLeft: 36,
        }
    },

    Nbutton: {
        backgroundColor: "#43c43f",
        border: "none",
        color: "white",
        padding: "16px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "14px",
        margin: "4px 2px",
        borderRadius: "50%",
        fontFamily: "Roboto!important",
        marginLeft: 12,
        height: 54,
        width: 54,
    },
    Ybutton: {
        backgroundColor: "#43c43f ",
        border: "none",
        color: "white",
        padding: "20px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "11px",
        margin: "4px 2px",
        borderRadius: "50%",
        fontFamily: "sans-serif",
        marginLeft: 22,
        height: 54,
        width: 54,
    },


    outer: {
        marginLeft: 0,
        width: "130%",
    },

    border: {
        borderCollapse: "collapse",
        marginTop: 3,
        marginLeft: 20,
        width: "276px",
        border: 0,
    },


    subdetail: {
        fontSize: 16,
        fontFamily: "Roboto !important",
        paddingLeft: 10,
        color: "#181c1b",
        fontWeight: "normal",
        backgroundColor: "#f7f7f7",
        border: "none",
        height: "100px",

    },

    tablefixing: {
        borderCollapse: "collapse",
        marginTop: 3,
        marginLeft: "20px",
        width: "76%",
        border: 0,
        justifyContent: "center",

        "@media  (max-width:1028px) ": {
            display: "none!important",
        }

    },
    tablefixing_closed: {
        borderCollapse: "collapse",
        marginTop: 3,
        marginLeft: "20px",
        width: "100%",
        border: 0,

        "@media  (max-width:1028px) ": {
            display: "none!important",
        }

    },

    tableRow: {
        backgroundColor: "#e6f2ff",
        width: "1500px",
        height: "40px",
    },


    information: {
        fontSize: "16px",
        fontFamily: "Roboto !important",
        paddingLeft: 10,
        color: "#4c4c4c",
        fontWeight: 500,
        border: "none",
    },
    iconFixing: {
        height: "52px",
        width: "118px",
    },

    Patrice: {
        fontFamily: "Roboto !important",
    },
    // Classes for Ipad Responsive Table

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
        "@media (max-width:768px)": {
            paddingRight: "400px"
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

export default function DetailComponent(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const options=[
        'Block User',
        'Send Reminder',
        'Reset Password',
    ]

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <div className={classes.coloumn}>

                <table className={classes.toggleAndHeading_Alignment}>
                    <tr>
                        {props.state.isOpen ? (
                            <Slider
                                src="/images/toggle_icon.svg"

                                className={classes.closeimg}

                                onClick={() => {
                                    props.toggleImage();
                                }}
                            />
                        ) : (
                            <CloseSlider
                                className={classes.closeimg}
                                src="/images/toggle_icon.svg"

                                onClick={() => {
                                    props.toggleImage();
                                }}
                            />
                        )}
                        <td className={classes.Patinfo}>Patient Information

                        
                            <IconButton
                                aria-label="more"
                                aria-controls="long-menu"
                                aria-haspopup="true"
                                onClick={handleClick}
                            >
                                <MoreHorizIcon/>
                            </IconButton>
                            <Menu
                                id="long-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={open}
                                onClose={handleClose}
                              
                            >
                                {options.map((option) => (
                                    <MenuItem key={option} selected={option === ''} onClick={handleClose}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </Menu></td>
                        


                    </tr>
                </table>
                <Row>
                    <table
                        className={classes.tab}
                        cellSpacing="2"
                        cellPadding="1"
                    >
                        <tr>
                            <td rowSpan="10">
                                <Avatar
                                    alt="Remy Sharp"
                                    src="download.jpg"
                                    className={props.state.isOpen ? classes.mainIcon : classes.mainIcon_closed}
                                />
                            </td>
                            <th colSpan="2" className={props.state.isOpen ? classes.name : classes.name_closed}>
                                {props?.state?.selectedSurgery?.patient?.name || ''}
                            </th>
                        </tr>
                        <tr >
                            <td className={props.state.isOpen ? classes.Surdetail : classes.Surdetail_closed}>Surgery:</td>
                            <td className={classes.info}>{props?.state?.selectedSurgery?.surgeryType || ''}</td>
                        </tr>
                        <tr >
                            <td className={props.state.isOpen ? classes.Surdetail : classes.Surdetail_closed}>Surgery Date:</td>
                            <td className={classes.info}>{props?.state?.selectedSurgery?.modifiedOn && moment(props?.state?.selectedSurgery?.modifiedOn).format('DD MMM YYYY')}</td>
                        </tr>
                        <tr >
                            <td className={props.state.isOpen ? classes.Surdetail : classes.Surdetail_closed}>Surgeon:</td>
                            <td className={classes.info}> {props?.state?.selectedSurgery?.addedBy?.userName || ''}</td>
                        </tr>

                    </table>


                    <table className={classes.stype}>
                        <tr>
                            <td className={props.state.isOpen ? classes.Surdetail : classes.Surdetail_closed}>Anesthesiologist:</td>
                            <td className={classes.info}>{props?.state?.selectedSurgery?.anesthesiologist?.userName || 'Not Assigned'}</td>
                        </tr>
                        <tr>
                            <td className={props.state.isOpen ? classes.Surdetail : classes.Surdetail_closed}>Survey Status:</td>
                            <td className={classes.info}>{props?.state?.selectedSurgery?.status || ''}</td>
                        </tr>
                        <tr>
                            <td className={props.state.isOpen ? classes.Surdetail : classes.Surdetail_closed}>Meeting Date:</td>
                            <td className={classes.info}>{props?.state?.selectedSurgery?.surgeryDate && moment(props?.state?.selectedSurgery?.surgeryDate).format('DD MMM YYYY') || ''}
                                <MainButton>
                                    Schedule</MainButton>
                            </td>
                        </tr>
                        <tr>

                        </tr>
                        <tr>

                        </tr>
                    </table>


                    <table className={classes.change}>
                        <tr>
                            <td className={props.state.isOpen ? classes.Surdetail : classes.Surdetail_closed}
                                style={{ paddingTop: "33px" }}>Insurance:
                            </td>
                            <td className={classes.info}
                                style={{ paddingTop: "32px" }}> {props?.state?.selectedSurgery?.addedBy?.userName || ''}</td>
                        </tr>
                        <tr>
                            <td className={props.state.isOpen ? classes.Surdetail : classes.Surdetail_closed}>Billing Date:</td>
                            <td className={classes.info}> {props?.state?.selectedSurgery?.addedBy?.phone || ''}</td>
                        </tr>
                        <tr>
                            <td className={props.state.isOpen ? classes.Surdetail : classes.Surdetail_closed}>Billing Status:</td>
                            <td className={classes.info}> {props?.state?.selectedSurgery?.addedBy?.email || ''}</td>
                        </tr>
                    </table>


                    <table className={classes.surgery}>
                        <td>
                            <th className={props.state.isOpen ? classes.Surdetail : classes.Surdetail_closed}>Surgery Clearance</th>



                            <button
                                className={props?.state?.selectedSurgery?.status === statusConstants.COMPLETED ? classes.Ybutton : classes.Nbutton}>
                                <p>{props?.state?.selectedSurgery?.status === statusConstants.COMPLETED ? 'Yes' : 'No'}</p>
                            </button>
                        </td>

                    </table>
                </Row>

            </div>


            <br />


            <table
                border="1"
                className={props.state.isOpen ? classes.tablefixing : classes.tablefixing_closed}
                cellPadding="5"
            >
                <tr className={classes.tableRow}>
                    <td className={classes.information}>Surgeon Name</td>
                    <td className={classes.information}>Anesthesiologist</td>
                    <td className={classes.information}>Virtual Meeting</td>
                    <td className={classes.information1}> Status</td>
                    <td className={classes.information}>Surgery Clearence</td>

                </tr>


                <tr className={classes.row}>
                    <td className={classes.subdetail}><Row><Avatar
                        src="download.jpg"
                    /><span style={{
                        text: "Roboto!important",
                        marginTop: "5px",
                        marginLeft: "10px",
                        fontFamily: "Roboto!important"
                    }}>{props?.state?.selectedSurgery?.addedBy?.userName || ''}</span></Row></td>
                    <td className={classes.subdetail}>
                        <span style={{
                            text: "Roboto!important",
                            marginTop: "5px",
                            fontFamily: "Roboto!important"
                        }}>{props?.state?.selectedSurgery?.anesthesiologist?.userName || ''}</span></td>
                    <td className={classes.subdetail}>
                        <span style={{
                            text: "Roboto!important",
                            marginTop: "5px",
                            fontFamily: "Roboto!important"
                        }}>{props?.state?.selectedSurgery?.modifiedOn && moment(props?.state?.selectedSurgery?.modifiedOn).format('DD MMM YYYY hh:mm A') || ''}</span>
                    </td>
                    <td className={classes.subdetail}>
                        <span style={{
                            text: "Roboto!important",
                            marginTop: "5px",
                            fontFamily: "Roboto!important"
                        }}>{props?.state?.selectedSurgery?.status || ''}</span></td>
                    <td className={classes.subdetail}>
                        <img className={classes.iconFixing}
                            src={props?.state?.selectedSurgery?.status === statusConstants.COMPLETED ? "/images/yes.svg" : "/images/no.svg"} />
                    </td>
                </tr>

            </table>


            <table className={classes.newTable} >


                <tr>
                    <th className={classes.tableHeadingsResponsive}>Surgeon Name</th>
                    <td className={classes.tableContentResponsive}>
                        <Avatar alt="Cindy Baker" src="/images/download.jpg" />
                        {props?.state?.selectedSurgery?.addedBy?.userName || ''}
                    </td>
                </tr>
                <tr>
                    <th className={classes.tableHeadingsResponsive}>Anesthesiologist</th>
                    <td className={classes.tableContentResponsive}>
                        {props?.state?.selectedSurgery?.anesthesiologist?.userName || ''}
                    </td>
                </tr>
                <tr>
                    <th className={classes.tableHeadingsResponsive}>Virtual Meeting</th>
                    <td className={classes.tableContentResponsive}>
                        {props?.state?.selectedSurgery?.modifiedOn && moment(props?.state?.selectedSurgery?.modifiedOn).format('DD MMM YYYY hh:mm A') || ''}
                    </td>
                </tr>
                <tr>
                    <th className={classes.tableHeadingsResponsive}>Status</th>
                    <td className={classes.tableContentResponsive}>
                        {props?.state?.selectedSurgery?.status || ''}
                    </td>
                </tr>
                <tr>
                    <th className={classes.tableHeadingsResponsive}>Surgery Clearence</th>
                    <td className={classes.tableContentResponsive}>
                        <img
                            className={classes.iconFixing}
                            src={props?.state?.selectedSurgery?.status === statusConstants.COMPLETED ? "/images/yes.svg" : "/images/no.svg"} />

                    </td>
                </tr>


            </table>

        </div>

    );

}
