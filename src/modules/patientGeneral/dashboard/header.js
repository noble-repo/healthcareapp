import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import {AppBar, Toolbar, Drawer} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import {Row, Column} from "simple-flexbox";
import {history} from "../../../managers/history";
import Menu from "@material-ui/icons/Menu";
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
    grow: {
        // flexGrow: 1,
        height: 50,
        width: "100%",
    },
    logo: {
        marginLeft: theme.spacing(0),
        marginRight: 65,
        height: "55px",
        width: "105px",


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
        // borderBottom: "12px solid #f6f6f6 ",
        borderBottom: "1px solid #e2e2e2 ",
        flexFlow: "wrap",
    },
    badge: {
        width: theme.spacing(1.8),
        height: theme.spacing(1.8),
    },
    active: {
        backgroundColor: "#3399ff",
        color: "white",
        display: "block",
        padding: "24px 21px 25px 21px",
        // margin: "24px 21px 25px 21px",
        textDecoration: "none",
        textAlign: "center",
        fontSize: "15px",
        fontFamily: "Arial, Helvetica, sans-serif",
        fontWeight: "bold",
        // "&:hover": {
        //   textDecoration: "none",
        //   color: "white",
        "@media (max-width: 1024px)": {
            display: "none!important"

            // }
        },
    },
    active1: {
        backgroundColor: "#3399ff",
        color: "white",
        display: "block",
        // padding: "24px 21px 25px 21px",
        margin: "24px 21px 25px 21px",
        textDecoration: "none",
        textAlign: "center",
        fontSize: "15px",
        fontFamily: "Arial, Helvetica, sans-serif",
        fontWeight: "bold",
        "&:hover": {
            textDecoration: "none",
            color: "white",

        },
    },

    inactive: {
        display: "block",
        color: "black",
        // padding: "24px 21px 25px 21px",
        margin: "24px 21px 25px 21px",
        textDecoration: "none",
        textAlign: "center",
        fontSize: "15px",
        fontFamily: "Arial, Helvetica, sans-serif",
        fontWeight: "bold",
        // "&:hover": {
        //   textDecoration: "none",
        //   color: "black",

        "@media (max-width: 1024px)": {
            display: "none!important",

            // }

        },
    },
    IconButton: {


        "@media (min-width: 1030px)": {
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
    inactive1: {
        display: "block",
        color: "black",
        padding: "24px 21px 25px 21px",
        textDecoration: "none",
        textAlign: "center",
        fontSize: "15px",
        fontFamily: "Arial, Helvetica, sans-serif",
        fontWeight: "bold",
        "&:hover": {
            textDecoration: "none",
            color: "black",


        },
    },
    groww: {
        // flexGrow: 1,
    },
    root: {
        "& > *": {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(3),
        height: 32,
        marginLeft: 10,
        marginRight: 20,

    },
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
    },
    lastparafixing: {
        fontSize: "15px",
        color: "#181c1b",
        fontWeight: "400",
        fontFamily: "Roboto !important",
        paddingBottom: "0px",
        marginLeft: "10px",
        paddingRight: "30px",
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
        marginTop: "4px",
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
        fontFamily: "Roboto",
        fontSize: "16px",
        fontWeight: "normal",
        paddingRight: "15px",
        paddingLeft: "10px",
        color: "#181c1b"
    },
    styleMarked: {
        width: "120px",
        height: "15px",
        fontFamily: "Roboto",
        fontSize: "13px",
        color: "#8f8f8f",
        marginLeft: "16px"

    },

    styleTime: {
        width: "60px",
        height: "16px",
        margin: "0 33px 5px 2px",
        fontFamily: "Roboto",
        fontSize: "13px",
        fontWeight: "normal",
        color: "#8f8f8f",
    },

    paddingPosition: {
        width: "100px",
        height: "16px",
        fontFamily: "Roboto",
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
        fontFamily: "Roboto",
        fontWeight: "500",
        color: "#26292c",
        "@media (max-width: 1024px)": {
            display: "none!important"

        }
    },
    crossimg: {
        float: "right",
        width: "26px",
        height: "26px",
        margin: "5px 5px 0px 0px",
    },
    fixRow: {
        paddingTop: "10px",
        paddingBottom: "10px",
        width: "100%",
    },
    profilepopover: {
        position: "relative",
        top: "3px !important",
        left: "1042 !important",
        maxWidth: "326px !important",
        minWidth: "326px !important",


    },
    popover: {
        // marginTop:"0px !important"
        position: "relative",
        top: "50px !important",
        right: "50px !important"
    },
    notificationIcon: {
        height: "32px",
        width: "32px",

    },
    notificationPopOver: {
        top: "35px !important",
        left: "-12px !important",


    },
    fixingspantext: {
        fontFamily: "Roboto",
        fontSize: "16px",
        fontWeight: "normal",
        color: "#00a0f0"
    },
    divborder: {
        borderBottom: "1px solid #e8e8e8",
        paddingTop: "24px"
    },
    drawer: {
        height: "100%",
        padding: "20px",
        flexFlow: "wrap",
        "@media (max-width: 192px)": {
            width: "100%",

        }
    },
}));

function Header(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);


    const handleDrawer = () => {
        setOpen(true)
    }
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [open, setOpen] = useState(false);
    const [isRead, setIsRead] = useState(true);
    const [anchor, setAnchor] = useState('left')
    const id = open ? "simple-popover" : undefined;
    console.log(props, "headerprops");

    const [anchorE2, setAnchorE2] = React.useState(null);

    const handleNotificationsClick = (event) => {
         
        setAnchorE2(event.currentTarget);
    };

    const handleCloseNotifcations = () => {
        setAnchorE2(null);
    };
    const isNotifcationsOpen = Boolean(anchorE2);
    const notifcationsId = isNotifcationsOpen ? "simple-popover" : undefined;

    return (
        <div className={classes.grow}>
            <AppBar color="white">
                <Toolbar className={classes.toolbar}>
                    <IconButton onClick={handleDrawer} aria-label="grow" color="inherit" className={classes.IconButton}>
                        <Menu/>
                    </IconButton>
                    <img
                        src="/images/Menu_Logo.png"
                        style={{marginLeft: "10px"}}
                        className={classes.logo}
                    />

                        {/* {props.tabName === "dashboard" ? (
                            <a href="/" className={classes.active} >
                            HOME
                            </a>
                        ) : (
                            <a href="/patient/dashboard" className={classes.inactive}>
                            
                            </a>
                        )} */}

                    {props.tabName === "dashboard" ? (
                        <a href="/patient/dashboard" className={classes.active}>
                            HOME
                        </a>
                    ) : (
                        <a href="/patient/dashboard" className={classes.inactive}>
                            HOME
                        </a>
                    )}

                    {props.tabName === "faq" ? (
                        <a href="/FAQ" className={classes.active}>
                            FAQS
                        </a>
                    ) : (
                        <a href="/FAQ" className={classes.inactive}>
                            FAQS
                        </a>
                    )}

                    {props.tabName === "support" ? (
                        <a href="/support-screen" className={classes.active}>
                            SUPPORT
                        </a>
                    ) : (
                        <a href="/support-screen" className={classes.inactive}>
                            SUPPORT
                        </a>
                    )}
                    {props.tabName === "video" ? (
                        <a href="/patient/video-screen" className={classes.active}>
                            VIDEOS
                        </a>
                    ) : (
                        <a href="/patient/video-screen" className={classes.inactive}>
                            VIDEOS
                        </a>
                    )}

                    <Row className={classes.rowfixing}>
                        <div>
                            <img
                                className={classes.notificationIcon}
                                src="/images/notifications_icon.svg"
                                onClick={handleNotificationsClick}
                            />
                        </div>
                        <Avatar
                            alt="Remy Sharp"
                            src="/download.jpg"
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
                            <Row>
                                <Column>
                                    {" "}
                                    <Avatar src="/download.jpg" className={classes.image}/>
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
                            <Divider className={classes.divider}/>
                            <p className={classes.firstparafixing}
                               onClick={() => history.push("/change-password")}>Change Password</p>
                            <p
                                className={classes.parafixing}
                                onClick={() => history.push("/profile")}
                            >
                                Update Profile
                            </p>
                            <p
                                className={classes.parafixing}
                                onClick={() => history.push("/billing-details")}
                            >
                                Billing
                            </p>
                            <p
                                className={classes.lastparafixing}
                                onClick={() => history.push("/")}
                            >
                                Logout
                            </p>
                        </Typography>
                    </Popover>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor={anchor}
                open={open}
                onClose={() => setOpen(false)}
            >
                <div>

                    <img
                        src="/images/Menu_Logo.png"
                        style={{marginLeft: "10px"}}
                        className={classes.logo}
                    />
                    {props.tabName === "calender" ? (
                        <a href="/meeting-request" className={classes.active1}>
                            HOME
                        </a>
                    ) : (
                        <a href="/meeting-request" className={classes.inactive1}>

                        </a>
                    )}
                    {props.tabName === "patients" ? (
                        <a href="/patients-list" className={classes.active1}>
                            HOME
                        </a>
                    ) : (
                        <a href="patients-list" className={classes.inactive1}>
                            HOME
                        </a>
                    )}

                    {props.tabName === "users" ? (
                        <a href="/list-of-users" className={classes.active1}>
                            FAQS
                        </a>
                    ) : (
                        <a href="/list-of-users" className={classes.inactive1}>
                            FAQS
                        </a>
                    )}

                    {props.tabName === "invoice" ? (
                        <a href="/invoice" className={classes.active1}>
                            SUPPORT
                        </a>
                    ) : (
                        <a href="/invoice" className={classes.inactive1}>
                            SUPPORT
                        </a>
                    )}
                    {props.tabName === "videos" ? (
                        <a href="#" className={classes.active1}>
                            VIDEOS
                        </a>
                    ) : (
                        <a href="#" className={classes.inactive1}>
                            VIDEOS
                        </a>
                    )}
                </div>
            </Drawer>
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
                style={{maxHeight: '50%'}}
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
            {/* <span className={classes.paddingPosition}>Mark all as read</span> */}
            </div>
        </Typography>
        {isRead == false && props.state?.Notifications.map((row) => (
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
