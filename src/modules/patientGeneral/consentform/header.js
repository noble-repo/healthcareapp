import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import {AppBar, Toolbar, Drawer} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import styled from "styled-components";
import {Row, Column} from "simple-flexbox";
import Menu from "@material-ui/icons/Menu";

const Heading = styled.div`

padding-left: 40px;
  font-size: 10px;
  font-family: roboto;
  font-weight: 500;
  flex-flow: wrap;
`;
const Calendar = styled.div`
  margin-left: 50px;
  font-size: 10px;
  font-family: roboto;
    font-weight: 500;
background-color: #00a0f0;
  text-align: center;
  padding-top: 22px;
  height: 58px;
  width: 90px;
  color: white;
`;
const NotificationPopOver = styled.div`
width: 506px; 
margin-top: 16px; 
margin-bottom: 32px;
margin-left: 8px;
`;
const useStyles = makeStyles((theme) => ({
    grow: {
        // flexGrow: 1,
        height: 50,
        width: "100%",
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
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
        borderBottom: "12px solid #e2e2e2 ",
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
        textDecoration: "none",
        textAlign: "center",
        fontSize: "15px",
        fontFamily: "Arial, Helvetica, sans-serif",
        fontWeight: "bold",
        // "&:hover": {
        //   textDecoration: "none",
        //   color: "white",
        "@media (max-width: 1000px)": {
            display: "none!important"
            // }
        },

    },
    active1: {
        backgroundColor: "#3399ff",
        color: "white",
        display: "block",
        padding: "24px 21px 25px 21px",
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
        padding: "24px 21px 25px 21px",
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
        "@media (min-width: 1000px)": {
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
        // width: 32,
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
    spanfixing: {
        width: "13px",
        height: "19px",
        fontFamily: "Roboto",
        fontSize: "16px",
        color: "#00a0f0",
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
        "@media (max-width: 1000px)": {
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
    popover: {
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
        "@media (max-width: 192px)": {width: "100%",}
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
                    <img src="/images/Menu_Logo.png"
                         style={{marginLeft: "10px"}}
                         className={classes.logo}
                    />
                    {props.tabName === "videos" ? (<a href="#" className={classes.active}>VIDEOS</a>) : (<a href="#"
                                                                                                            className={classes.inactive}> &emsp; &emsp;&emsp;&emsp; &emsp; &emsp;&emsp;&emsp; &emsp; &emsp;&emsp;&emsp; &emsp; &emsp;&emsp;&emsp; &emsp; &emsp;&emsp;&emsp; &emsp; &emsp;&emsp;&emsp; &emsp; &emsp;&emsp;&emsp;HIPPA
                        CONSENT FORM </a>)}
                    <Row className={classes.rowfixing}>
                        <div>
                            <img className={classes.notificationIcon} src="/images/notifications_icon.svg"
                                 onClick={handleNotificationsClick}/>
                        </div>
                        <Avatar
                            alt="Remy Sharp"
                            src="download.jpg"
                            className={classes.small}
                            onClick={handleClick}
                        />
                    </Row>
                </Toolbar>
            </AppBar>
            <Drawer anchor={anchor} open={open} onClose={() => setOpen(false)}>
                <div>
                    <img src="/images/Menu_Logo.png" style={{marginLeft: "10px"}} className={classes.logo}/>
                    {props.tabName === "calender" ? (
                        <a href="/meeting-request" className={classes.active1}>HOME </a>) : (
                        <a href="/meeting-request" className={classes.inactive1}/>)}
                    {props.tabName === "patients" ? (<a href="/patients-list" className={classes.active1}>HOME</a>) : (
                        <a href="patients-list" className={classes.inactive1}>HOME </a>)}
                    {props.tabName === "users" ? (<a href="/list-of-users" className={classes.active1}>FAQS</a>) : (
                        <a href="/list-of-users" className={classes.inactive1}>FAQS</a>)}
                    {props.tabName === "invoice" ? (<a href="/invoice" className={classes.active1}>SUPPORT</a>) : (
                        <a href="/invoice" className={classes.inactive1}>SUPPORT</a>)}
                    {props.tabName === "videos" ? (<a href="#" className={classes.active1}>VIDEOS</a>) : (
                        <a href="#" className={classes.inactive1}>VIDEOS</a>)}</div>
            </Drawer>
        </div>
    );
}

export default Header;