import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { AppBar, Toolbar } from "@material-ui/core";
import styled from "styled-components";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { Row, Column } from "simple-flexbox";
import { history } from "../../../managers/history";
import Utility from "../../../utility";
import moment from 'moment';


const NotificationPopOver = styled.div`
  width: 506px;
  margin-top: 16px;
  margin-bottom: 32px;
  margin-left: 8px;
`;
const useStyles = makeStyles((theme) => ({
    grow: {
        // flexGrow: 1,
        height: 100,
        width: "100%",
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
        marginRight:"15px"
    },
    logo: {
        marginLeft: theme.spacing(0),
        marginRight: 65,
        height: "55px",
        width: "105px",
    },
    responsivelogo: {
        width: "69.7px",
        height: "47.6px",
    },
    bell: {
        marginLeft: 710,
        width: theme.spacing(1),
        height: theme.spacing(1),
        marginRight: 10,
    },
    toolbar: {
        minHeight: 58,
        paddingLeft: 5,
        width: "100%",
        borderBottom: "12px solid #f6f6f6 ",
        // borderBottom: "12px solid #e2e2e2 ",
    },
    IconButton: {


        "@media (min-width: 1024px)": {
            flex: "0 0 auto",
            color: "rgba(0, 0, 0, 0.54)",
            padding: "12px",
            overflow: "visible",
            fontSize: "1.5rem",
            textAlign: "center",
            borderRadius: "50%",
            display: "none",

        },

    },
    badge: {
        width: theme.spacing(1.8),
        height: theme.spacing(1.8),
    },
    active: {
        backgroundColor: "#00a0f0",
        color: "#ffffff",
        display: "block",
        padding: "24px 21px 25px 21px",
        textDecoration: "none",
        textAlign: "center",
        fontSize: "15px",
        fontFamily: "Roboto",
        fontWeight: "500",
        "&:hover": {
            textDecoration: "none",
            color: "#ffffff ",
            
        },
        "@media  (max-width:1024px) and (min-width: 768px)": {
            display: "none",

        }
    },
    toggleactive: {
        backgroundColor: "#00a0f0",
        color: "white",
        display: "block",
        padding: "24px 21px 25px 21px",
        textDecoration: "none",
        textAlign: "center",
        fontSize: "36px",
        fontFamily: "Roboto",
        fontWeight: "500",
        "&:hover": {
            textDecoration: "none",
            color: "white",
        },
        // text-align: right;
        // color: #000000;
    },

    inactive: {
        display: "block",
        color: "#000000",
        padding: "24px 21px 25px 21px",
        textDecoration: "none",
        textAlign: "center",
        fontSize: "15px",
        fontFamily: "Roboto",
        fontWeight: "500",
        "&:hover": {
            textDecoration: "none",
            color: "#000000",
        },
        "@media  (max-width:1024px) and (min-width: 768px)": {
            display: "none",
        }
    },
    toggleinactive: {
        display: "block",
        color: "black",
        padding: "24px 21px 25px 21px",
        textDecoration: "none",
        textAlign: "center",
        fontSize: "36px",
        fontFamily: "Roboto",
        fontWeight: "500",
        "&:hover": {
            textDecoration: "none",
            color: "black",
        },
        "@media  (max-width:1024px) and (min-width: 768px)": {}
    },
    groww: {
        // flexGrow: 1,
    },
    root: {
        "& > *": {
            margin: theme.spacing(1),
        },
    },
    // small: {
    //   width: theme.spacing(3),
    //   height: 32,
    //   // width:32,
    //   marginLeft: 10,
    //   marginRight: 20,
    // },
    image: {
        height: "35px",
        marginTop: "12px",
        width: "35px",
        marginLeft: "8px",
    },
    fontfixing: {
        paddingTop: "10px",
        paddingLeft: "4px",
        paddingRight: "15px",
        color: "#181c1b",
        marginBottom: "0px",
        fontSize: "15px",
        fontWeight: "bold",
    },
    parafont: {
        fontSize: "14px",
        paddingLeft: "5px",
        marginBottom: "0px",

        color: "#8f8f8f",
    },
    divfixing: {
        position: "absolute",
        right: 0,
        marginRight: "8px",
    },
    divider: {
        marginTop: "0px",
    },
    parafixing: {
        fontSize: "15px",
        color: "#181c1b",
        fontWeight: "400",
        fontFamily: "Roboto !important",
        paddingBottom: "0px",
        marginLeft: "10px",
        paddingRight: "30px",
        marginBottom: "3px",
        marginTop: "10px",
    },
    lastparafixing: {
        fontSize: "15px",
        color: "#181c1b",
        fontWeight: "400",
        fontFamily: "Roboto !important",
        paddingBottom: "0px",
        marginLeft: "10px",
        paddingRight: "30px",
        marginTop: "10px",
    },
    firstparafixing: {
        fontSize: "15px",
        color: "#181c1b",
        fontWeight: "400",
        fontFamily: "Roboto !important",
        paddingBottom: "0px",
        marginLeft: "10px",
        paddingRight: "30px",
        marginBottom: "3px",
        marginTop: "6px",
    },
    rowfixing: {
        position: "absolute",
        right: 0,
        marginTop: "0px",
    },
    typography: {
        padding: theme.spacing(1),
        borderBottom: "1px solid #e8e8e8",
    },
    styleSpan: {
        fontFamily: "Roboto !important",
        fontSize: "16px",
        fontWeight: "normal",
        paddingRight: "15px",
        paddingLeft: "10px",
        color: "#181c1b"
    },
    // spanfixing: {
    //   width: "13px",
    //   height: "19px",
    //   fontFamily: "Roboto !important",
    //   fontSize: "16px",
    //   color: "#00a0f0",
    // },
    styleMarked: {
        width: "120px",
        height: "15px",
        fontFamily: "Roboto !important",
        fontSize: "13px",
        color: "#8f8f8f",
        marginLeft: "62px"

    },

    styleTime: {
        width: "60px",
        height: "16px",
        margin: "0 33px 5px 2px",
        fontFamily: "Roboto !important",
        fontSize: "13px",
        fontWeight: "normal",
        color: "#8f8f8f",
    },

    paddingPosition: {
        width: "100px",
        height: "16px",
        fontFamily: "Roboto !important",
        fontSize: "13px",
        fontWeight: "normal",
        float: "right",
        marginTop: "5px",
        color: "#8f8f8f",
    },
    spanfixing: {
        color: "#181c1b",
        fontSize: "16px",
        fontFamily: "Roboto !important ",
        paddingLeft: "16px",
        fontWeight: "normal"
    },
    styleAvatar: {
        height: "40px",
        width: "40px",
        marginLeft: "10px",
    },
    title: {
        paddingLeft: "10px",
        fontSize: "18px",
        fontFamily: "Roboto !important",
        fontWeight: "500",
        color: "#26292c"


    },
    crossimg: {
        float: "right",
        width: "26px",
        height: "26px",
        margin: "-3px 5px 0px 0px",
    },
    fixRow: {
        paddingTop: "10px",
        paddingBottom: "10px",
        width: "100%",
    },
    popover: {
        // marginTop:"0px !important"
        position: "relative",
        top: "50px !important",
        right: "50px !important"
    },
    profilepopover: {
        position: "relative",
        top: "3px !important",
        left: "1042 !important",
        maxWidth: "326px !important",
        minWidth: "326px !important",


    },
    notificationIcon: {
        height: "25px",
        marginRight:"12px"

    },
    notificationPopOver: {
        top: "35px !important",
        left: "-12px !important"

    },
    fixingspantext: {
        fontFamily: "Roboto !important",
        fontSize: "16px",
        fontWeight: "normal",
        color: "#00a0f0"
    },
    divborder: {
        borderBottom: "1px solid #e8e8e8",
        paddingTop: "23px",

    },
    rowWidth: {
        width: "195px"
    },
    appBar: {
        boxShadow: "none",
    },
    menuIcon: {
        display: "none",
        "@media  (max-width:1024px) and (min-width: 768px)": {

            display: "block",

        }

    },

    list: {
        width: 250,
    },
    fullList: {
        width: "auto",
    },
    togglecrossicon: {
        marginLeft: "100px",
        height: "19px",
        width: "19px",
        marginTop: "10px",
    }


}));

function Header(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;
    console.log(props, "headerprops");

    const [anchorE2, setAnchorE2] = React.useState(null);

    const handleNotificationsClick = (event) => {
        setAnchorE2(event.currentTarget);
    };

    const handleCloseNotifcations = () => {
        setAnchorE2(null);
    };
    const toggleDrawer = (anchor, open) => (event) => {
        console.log("in toggle drawer")
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    const goToMeeting=()=> {
    debugger;
    const location={
        pathname: "/anesthesiologist/patient-meeting",
        state: {url: 'https://h3a-vchat.friendz.today/r/617X04w4ra6004x16/' + props?.patientList, currentMeetingPatient: props.currentMeetingPatient}
    }
    history.push(location);
        // var url = 'https://h3a-vchat.friendz.today/r/617X04w4ra6004x16/' + props?.patientList;
        // window.location.href= url;
    }

    const isNotifcationsOpen = Boolean(anchorE2);
    const notifcationsId = isNotifcationsOpen ? "simple-popover" : undefined;
    const date1 = moment(props?.patientList);
    const date2 = moment();
    const date3 = moment(props?.endTime);
    let diff;
    // if(date1 > date2){
        diff = date1.diff(date2,'minutes');
    // }else{
    //     diff = date2.diff(date1,'minutes');
    // }
    const endDateDiff = date2.diff(date3,'minutes');
    console.log('diff',diff);
    const [isRead, setIsRead] = useState(true);

    return (
        <div className={classes.grow}>
            <AppBar color="white" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <img
                        src="/Menu_Logo.png"
                        style={{ marginLeft: "10px" }}
                        className={classes.logo}
                    />

                    {props.tabName === "calendar" ? (
                        <a className={classes.active} onClick={() => history.push("/anaesthesiologist/calendar")}>
                            CALENDAR
                        </a>
                    ) : (
                        <a className={classes.inactive} onClick={() => history.push("/anaesthesiologist/calendar")}>
                            CALENDAR
                        </a>
                    )}
                    {props.tabName === "patients" ? (
                        <a className={classes.active} onClick={() => history.push('/anaesthesiologist/patients-list')}>
                            PATIENTS
                        </a>
                    ) : (
                        <a className={classes.inactive}
                            onClick={() => history.push('/anaesthesiologist/patients-list')}>
                            PATIENTS
                        </a>
                    )}

                    {props.tabName === "users" ? (
                        <a className={classes.active} onClick={() => history.push('/anaesthesiologist/list-of-users')}>
                            USERS
                        </a>
                    ) : (
                        <a className={classes.inactive}
                            onClick={() => history.push('/anaesthesiologist/list-of-users')}>
                            USERS
                        </a>
                    )}

                    {props.tabName === "billing" ? (
                        <a className={classes.active} onClick={() => Utility.showUnderDevelopment()}>
                            INOVICES
                        </a>
                    ) : (
                        <a className={classes.inactive} onClick={() => Utility.showUnderDevelopment()}>
                            INOVICES
                        </a>
                    )}
                    {props.tabName === "videos" ? (
                        <a className={classes.active} onClick={() => Utility.showUnderDevelopment()}>
                            VIDEOS
                        </a>
                    ) : (
                        <a className={classes.inactive} onClick={() => Utility.showUnderDevelopment()}>
                            VIDEOS
                        </a>
                    )}


                    <Row className={classes.rowfixing}>
                        {props.tabName === "patients" &&<div>
                           {diff > 10 &&<button onClick={goToMeeting} className="btn btn-success disabled" disabled>Upcoming Meeting <br /></button>}
                           {diff <= 10 && date3 >= date2 && <button onClick={goToMeeting} className="btn btn-success">Upcoming Meeting<br />{diff <= 10 && diff>=0 ? props?.time?.m + ":" + props?.time?.s : ""}</button>}
                            {/* <a href={'https://h3a-vchat.friendz.today/r/617X04w4ra6004x16/' + props?.surgery?.selectedSurgery?.virtualMeeting?.startTime} className="btn btn-success">Upcoming Meeting</a> */}
                        </div>}
                        <div>
                            <img
                                className={classes.notificationIcon}
                                src="/images/notifications_icon.svg"
                                onClick={handleNotificationsClick}
                            />
                        </div>
                        <Avatar
                            alt="Remy Sharp"
                            src="download.jpg"
                            className={classes.small}
                            onClick={handleClick}
                        />
                    </Row>

                    <Popover
                        className={classes.profilepopover}
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "center",
                        }}
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "center",
                        }}
                    >
                        <Typography className={classes.typography}>
                            <Row className={classes.rowWidth}>
                                <Column>
                                    {" "}
                                    <Avatar src="download.jpg" className={classes.image} />
                                </Column>
                                <Column>
                                    <Row>
                                        {" "}
                                        <p className={classes.fontfixing}>Dr.Angelina Victor</p>
                                    </Row>
                                    <Row>
                                        {" "}
                                        <p className={classes.parafont}>Admin</p>
                                    </Row>
                                </Column>
                            </Row>
                            <Divider className={classes.divider} />
                            <p className={classes.firstparafixing}
                                onClick={() => history.push("/change-password")}>Change Password</p>
                            <p
                                className={classes.parafixing}
                                onClick={() => history.push("/profile")}
                            >
                                Update Profile
                            </p>

                            <p
                                className={classes.lastparafixing}
                                onClick={() => props.logoutUser()}
                            >
                                Logout
                            </p>
                        </Typography>
                    </Popover>
                </Toolbar>
            </AppBar>
            <div>

                <Popover
                    className={classes.notificationPopOver}
                    id={notifcationsId}
                    open={isNotifcationsOpen}
                    anchorE2={anchorE2}
                    onClose={handleCloseNotifcations}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",

                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                    }}
                >
                    {/* <NotificationPopOver> */}
                        <Typography>
                            <b className={classes.title}>Notifications </b>
                            <img
                                src="/images/cross.svg"
                                className={classes.crossimg}
                                onClick={handleCloseNotifcations}
                            />

                            <div className={classes.divborder}>
                                <span className={isRead == false ? classes.styleSpan : classes.fixingspantext} onClick={()=>{setIsRead(true);props.markAsRead();}} style={{paddingLeft: '10px'}}>Unread</span>
                                <span className={isRead == true ? classes.styleSpan : classes.fixingspantext} onClick={()=>setIsRead(false)}>All</span>
                            </div>
                        </Typography>
                        {isRead == false && props.state.Notifications.map((row) => (
                            <Row className={classes.fixRow}>
                                <Avatar
                                    className={classes.styleAvatar}
                                    alt="Remy Sharp"
                                    src="/images/avatar/1.jpg"
                                />
                                <span className={classes.spanfixing}>
                                    {row.title}
                                    <br />
                                    <span className={classes.styleTime}>{moment(row.addedOn).format('MMMM Do YYYY')}</span>
                                </span>
                                {/* <span className={classes.styleMarked}>{row.markAsRead}</span> */}

                            </Row>
                        ))}
                        {isRead == true && props.state?.Notifications.filter(rows => rows.isRead == false).map((row) => (
                            <Row className={classes.fixRow}>
                                <Avatar
                                className={classes.styleAvatar}
                            alt="Remy Sharp"
                            src="/static/images/avatar/1.jpg"
                            />
                            <span className={classes.spanfixing}>
                            {row.title}

                            <br />

                            <span className={classes.styleTime}>{moment(row.addedOn).format('MMMM Do YYYY')}</span>
                            </span>
                            <span className={classes.styleMarked}>{row.markAsRead}</span>
                        </Row>
                        ))}
                    {/* </NotificationPopOver> */}
                </Popover>
            </div>
        </div>
    );
}

export default Header;
