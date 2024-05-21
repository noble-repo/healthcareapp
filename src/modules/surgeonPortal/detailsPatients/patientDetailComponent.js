import React from "react";
import styled from "styled-components";
import {makeStyles} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Avatar from "@material-ui/core/Avatar";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PriorSurgery from "../../priorSurgery/index";
import DiagnosesList from "../../medicalDiagnoses/index";
import ListOfMedications from "../../listOfMedications";
import AirwayEvaluation from "../../airwayEvaluation";
import Anesthesia from "../../anesthesia";
import {statusConstants} from "../../../constants";
import moment from "moment";

const OpenSlider = styled.img`
  margin-left: -6px;
  height: 29px;
  margin-top: 5px;
`;
const CloseSlider = styled.img`
  margin-left: 20px;
  height: 29px;
`;

function TabPanel(props) {
    const {children, value, index, ...other} = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        backgroundColor: "#ffffff",
        padding: theme.spacing(3),
        marginLeft: 36,
        width: "100vw",
    },
    closeContent: {
        flexGrow: 1,
        backgroundColor: "#ffffff",
        padding: theme.spacing(3),
        marginLeft: 36,
        width: "97.1vw",
    },
    draw: {
        marginTop: -88,
        marginLeft: -1,
        marginBottom: -15,
        height: 11,
        color: "#f5f5ef",
        width: "100vw",
    },
    coloumn: {
        backgroundColor: " #f7f7f7",
        position: "relative",
        marginLeft: -60,
        marginTop: -40,
        marginRight: -24,
        height: 305,
    },
    set: {
        backgroundColor: " #f7f7f7",
        marginLeft: 0,
        borderColor: "#d7d7c1",
    },
    tableSet: {
        padding: 0,
        fontSize: 12,
        marginTop: 18,
        marginLeft: -19,
        fontFamily: "sans-serif",
    },
    heading: {
        fontSize: 18,
        fontWeight: 500,
        fontFamily: "Roboto-Medium !important",
        color: "#26292c",
        paddingTop: "18px",
    },
    closeHeading: {
        fontSize: 18,
        fontWeight: 500,
        fontFamily: "Roboto-Medium !important",
        color: "#26292c",
        paddingTop: "18px",
    },
    date: {
        fontSize: 14,
        color: "#6a6a6a",
        paddingTop: 19,
        paddingLeft: 450,
    },

    spanfixing: {
        color: "#26292c",
    },
    dots: {
        fontSize: 47,
        color: "#b8b894",
        paddingTop: "14px",
    },
    dots1: {
        paddingLeft: 10,
        fontSize: 47,
        color: "#b8b894",
        paddingTop: "15px",
    },
    information: {
        marginTop: -10,
        marginLeft: -33,
    },

    tab: {
        textAlign: "left",
        cellSpacing: 50,
        marginRight: -39,
        marginTop: 17,
    },
    profile: {
        width: "79px",
        height: "73px",
        marginTop: -20,
        marginLeft: 33,
        marginRight: 20,
    },
    name: {
        fontSize: 22,
        fontWeight: "bold",
        paddingBottom: 4,
    },
    details: {
        fontSize: "16px",
        color: "#414141",
        fontFamily: "Roboto",
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
        marginLeft: 69,
        marginTop: 46,
        marginRight: 36,
    },
    choice1: {
        marginLeft: 117,
        marginTop: 45,
        marginRight: 20,
    },
    anesthesiologist: {
        marginLeft: 18,
        marginTop: 10,
    },
    surgery: {
        marginTop: 6,
        marginLeft: 14,
    },
    surgery1: {
        marginTop: 6,
        marginLeft: 74,
    },
    button: {
        backgroundColor: "Red",
        border: "none",
        color: "white",
        padding: "20px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "11px",
        margin: "4px 47px",
        borderRadius: "50%",
        fontFamily: "sans-serif",
        marginLeft: 45,
        height: 54,
        width: 54,
    },
    indicator: {
        backgroundColor: "none",
        border: "none",
        outline: "none",
    },
    root: {
        flexGrow: 1,

        backgroundColor: theme.palette.background.paper,
        marginLeft: 35,
        // marginRight: 935,
    },
    tabRoot: {
        flexGrow: 1,

        marginLeft: 35,
        // marginRight: 695,
    },
    appBar: {
        marginTop: 9,
        width: "fit-content",
        boxShadow: "none",
        borderRight: "none",
    },

    tablist: {
        borderRight: "1px solid #ebebe0",
        borderBottom: "1px solid #ebebe0",
        fontSize: 16,
        textTransform: "none",
        fontFamily: "Roboto",
        lineHeight: 1,
        minWidth: "108px",
        width: "108px",
    },
    anethesiaTab: {
        borderRight: "1px solid #ebebe0",
        borderBottom: "1px solid #ebebe0",
        fontSize: 11,
        textTransform: "none",
        lineHeight: 1,
        minWidth: 176,
        width: 176,
    },
}));
export default function PatientDetailComponent(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [anchorEl, setAnchorEl] = React.useState(null);
    console.log("value===", value)

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
            {props.state.isOpen ? (
                <div>
                    <main className={classes.content}>
                        <Toolbar/>
                        <div className={classes.coloumn}>
                            <div className={classes.draw}>...</div>
                            <div className={classes.set}>
                                <table className={classes.tableSet}>
                                    <tr>
                                        {props.state.isOpen ? (
                                            <OpenSlider
                                                src="/images/left_side_icon.svg"
                                                class="Group-6"
                                                onClick={() => props.toggleImage()}
                                            />
                                        ) : (
                                            <CloseSlider
                                                src="/images/left_side_icon.svg"
                                                onClick={() => props.toggleImage()}
                                            />
                                        )}

                                        <td className={classes.heading}>
                                            <b>Patient Information </b>
                                        </td>
                                        <td className={classes.date}>
                                            Last updated:{" "}
                                            <span className={classes.spanfixing}>
                        {props?.state?.selectedSurgery?.modifiedOn &&
                        moment(
                            props?.state?.selectedSurgery?.modifiedOn
                        ).format("DD MMM YYYY")}
                      </span>
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
                                                className={classes.tab}
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
                                                    <th colSpan="2" className={classes.name}>
                                                        {props?.state?.selectedSurgery?.patient?.name || ""}
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <td className={classes.details}>Phone:</td>
                                                    <td className={classes.data}>
                                                        {props?.state?.selectedSurgery?.patient?.phone ||
                                                        ""}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className={classes.details}>Email:</td>
                                                    <td className={classes.data}>
                                                        {props?.state?.selectedSurgery?.patient?.email ||
                                                        ""}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className={classes.details}>Gender:</td>
                                                    <td className={classes.data}>
                                                        {props?.state?.selectedSurgery?.patient?.gender ||
                                                        ""}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className={classes.details}>Age:</td>
                                                    <td className={classes.data}>
                                                        {props?.state?.selectedSurgery?.patient?.dob || ""}
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>

                                        <td>
                                            <table className={classes.choice}>
                                                <tr>
                                                    <td className={classes.details}>Surgery Type:</td>
                                                    <td className={classes.data}>
                                                        {props?.state?.selectedSurgery?.surgeryType || ""}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className={classes.details}>Surgery Date:</td>
                                                    <td
                                                        className={classes.data}
                                                        style={{color: "lightgrey"}}
                                                    >
                                                        {props?.state?.selectedSurgery?.surgeryDate || ""}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className={classes.details}>Height (cm):</td>
                                                    <td className={classes.data}>
                                                        {props?.state?.selectedSurgery?.patient?.height ||
                                                        ""}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className={classes.details}>Weight (lb):</td>
                                                    <td className={classes.data}>
                                                        {props?.state?.selectedSurgery?.patient?.weight ||
                                                        ""}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className={classes.details}>BMI:</td>
                                                    <td className={classes.data}>
                                                        {props?.state?.selectedSurgery?.patient?.bmi || ""}
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>

                                        <td>
                                            <table className={classes.anesthesiologist}>
                                                <tr>
                                                    <td className={classes.details}>
                                                        Anesthesiologist Name:
                                                    </td>
                                                    <td
                                                        className={classes.data}
                                                        style={{color: "lightgrey"}}
                                                    >
                                                        {props?.state?.selectedSurgery?.anesthesiologist
                                                            ?.userName || "Not Assigned"}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className={classes.details}>
                                                        Anesthesiologist Phone:
                                                    </td>
                                                    <td
                                                        className={classes.data}
                                                        style={{color: "lightgrey"}}
                                                    >
                                                        {props?.state?.selectedSurgery?.anesthesiologist
                                                            ?.phone || "Not Assigned"}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className={classes.details}>
                                                        Anesthesiologist Email:
                                                    </td>
                                                    <td
                                                        className={classes.data}
                                                        style={{color: "lightgrey"}}
                                                    >
                                                        {props?.state?.selectedSurgery?.anesthesiologist
                                                            ?.email || "Not Assigned"}
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                        <td>
                                            <table className={classes.surgery}>
                                                <tr>
                                                    <td className={classes.details}>
                                                        Surgery Clearance &emsp;&emsp;&emsp;
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <button className={classes.button}>
                                                            <p>
                                                                {props?.state?.selectedSurgery?.status ===
                                                                statusConstants.COMPLETED
                                                                    ? "Yes"
                                                                    : "No"}
                                                            </p>
                                                        </button>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <div className={classes.tabRoot}>
                                <AppBar
                                    position="static"
                                    color="white"
                                    className={classes.appBar}
                                >
                                    <Tabs
                                        indicatorColor="none"
                                        classes={{
                                            indicator: classes.indicator,
                                        }}
                                        value={value}
                                        onChange={handleChange}
                                    >
                                        <Tab
                                            disableRipple
                                            style={
                                                value === 0
                                                    ? {
                                                        background: "white",
                                                        textTransform: "initial",
                                                        fontSize: "11px",
                                                        color: "#1aa3ff",
                                                        borderBottom: "none",
                                                        outline: "none",
                                                        "&:hover": {
                                                            outline: "none",
                                                        },
                                                    }
                                                    : {
                                                        fontSize: "11px",
                                                        background: "white",
                                                        textTransform: "initial",
                                                    }
                                            }
                                            classes={{root: classes.tablist}}
                                            label="List of prior Surgeries"
                                            {...a11yProps(0)}
                                        />
                                        <Tab
                                            disableRipple
                                            style={
                                                value === 1
                                                    ? {
                                                        background: "white",
                                                        textTransform: "initial",
                                                        fontSize: "11px",
                                                        color: "#1aa3ff",
                                                        borderBottom: "none",
                                                        outline: "none",
                                                    }
                                                    : {
                                                        fontSize: "11px",
                                                        background: "white",
                                                        textTransform: "initial",
                                                    }
                                            }
                                            classes={{root: classes.tablist}}
                                            label="List of Medical Diagnosis"
                                            {...a11yProps(1)}
                                        />
                                        <Tab
                                            disableRipple
                                            style={
                                                value === 2
                                                    ? {
                                                        background: "white",
                                                        textTransform: "initial",
                                                        fontSize: "11px",
                                                        color: "#1aa3ff",
                                                        borderBottom: "none",
                                                        outline: "none",
                                                    }
                                                    : {
                                                        fontSize: "11px",
                                                        background: "white",
                                                        textTransform: "initial",
                                                    }
                                            }
                                            classes={{root: classes.tablist}}
                                            label="List of Medications"
                                            {...a11yProps(2)}
                                        />
                                        <Tab
                                            disableRipple
                                            style={
                                                value === 3
                                                    ? {
                                                        background: "white",
                                                        textTransform: "initial",
                                                        fontSize: "11px",
                                                        color: "#1aa3ff",
                                                        borderBottom: "none",
                                                        outline: "none",
                                                    }
                                                    : {
                                                        fontSize: "11px",
                                                        background: "white",
                                                        textTransform: "initial",
                                                    }
                                            }
                                            classes={{root: classes.tablist}}
                                            label="Airway Evaluation"
                                            {...a11yProps(3)}
                                        />

                                        <Tab
                                            disableRipple
                                            style={
                                                value === 4
                                                    ? {
                                                        background: "white",
                                                        textTransform: "initial",
                                                        fontSize: "11px",
                                                        color: "#1aa3ff",
                                                        borderBottom: "none",
                                                        outline: "none",
                                                    }
                                                    : {
                                                        fontSize: "11px",
                                                        background: "white",
                                                        textTransform: "initial",
                                                    }
                                            }
                                            classes={{root: classes.anethesiaTab}}
                                            label="Anesthesia Clearance and Recommendation"
                                            {...a11yProps(4)}
                                        />
                                    </Tabs>
                                </AppBar>
                                <TabPanel className="w-75" value={value} index={0}>
                                    {value === 0 && props?.state?.selectedSurgery?.patient?.surveyId &&
                                    <PriorSurgery selectedSurgery={props?.state?.selectedSurgery || ''}/>}
                                </TabPanel>
                                <TabPanel className={classes.panel} value={value} index={1}>
                                    <DiagnosesList/>
                                </TabPanel>
                                <TabPanel className="w-75" value={value} index={2}>
                                    {value === 2 && props?.state?.selectedSurgery?.patient?.surveyId &&
                                    <ListOfMedications selectedSurgery={props?.state?.selectedSurgery || ''}/>}
                                </TabPanel>
                                <TabPanel className={classes.panel} value={value} index={3}>
                                    {value === 3 && props?.state?.selectedSurgery?.surgeryId &&
                                    <AirwayEvaluation selectedSurgery={props?.state?.selectedSurgery || ''}/>}
                                </TabPanel>
                                <TabPanel className={classes.panel} value={value} index={4}>
                                    {value === 4 && props?.state?.selectedSurgery.surgeryId &&
                                    <Anesthesia selectedSurgery={props?.state?.selectedSurgery || ''}/>}
                                </TabPanel>
                            </div>
                        </div>
                    </main>
                </div>
            ) : (
                <div>
                    <main className={classes.closeContent}>
                        <Toolbar/>
                        <div className={classes.coloumn}>
                            <div className={classes.draw}>...</div>
                            <div className={classes.set}>
                                <table className={classes.tableSet}>
                                    <tr>
                                        {props.state.isOpen ? (
                                            <OpenSlider
                                                src="/images/left_side_icon.svg"
                                                class="Group-6"
                                                onClick={() => props.toggleImage()}
                                            />
                                        ) : (
                                            <CloseSlider
                                                className="closeimg"
                                                src="/images/left_side_icon.svg"
                                                onClick={() => props.toggleImage()}
                                            />
                                        )}

                                        <td className={classes.closeHeading}>
                                            <b> Patient Information </b>
                                        </td>

                                        <td className={classes.date}>
                                            Last updated:{" "}
                                            <b>
                                                {props?.state?.selectedSurgery?.modifiedOn &&
                                                moment(
                                                    props?.state?.selectedSurgery?.modifiedOn
                                                ).format("DD MMM YYYY")}
                                            </b>
                                        </td>

                                        <MoreHorizIcon
                                            className={classes.dots1}
                                            onClick={handleClick}
                                        />
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
                                                            src="download.jpg"
                                                            className={classes.profile}
                                                        />
                                                    </td>
                                                    <th colSpan="2" className={classes.name}>
                                                        {props?.state?.selectedSurgery?.patient?.name || ""}
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <td className={classes.details}>Phone:</td>
                                                    <td className={classes.data}>
                                                        {props?.state?.selectedSurgery?.patient?.phone ||
                                                        ""}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className={classes.details}>Email:</td>
                                                    <td className={classes.data}>
                                                        {props?.state?.selectedSurgery?.patient?.email ||
                                                        ""}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className={classes.details}>Gender:</td>
                                                    <td className={classes.data}>
                                                        {props?.state?.selectedSurgery?.patient?.gender ||
                                                        ""}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className={classes.details}>Age:</td>
                                                    <td className={classes.data}>
                                                        {props?.state?.selectedSurgery?.patient?.dob || ""}
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>

                                        <td>
                                            <table className={classes.choice}>
                                                <tr>
                                                    <td className={classes.details}>Surgery Type:</td>
                                                    <td className={classes.data}>
                                                        {props?.state?.selectedSurgery?.surgeryType || ""}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className={classes.details}>Surgery Date:</td>
                                                    <td
                                                        className={classes.data}
                                                        style={{color: "lightgrey"}}
                                                    >
                                                        {props?.state?.selectedSurgery?.surgeryDate || ""}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className={classes.details}>Height (cm):</td>
                                                    <td className={classes.data}>
                                                        {props?.state?.selectedSurgery?.patient?.height ||
                                                        ""}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className={classes.details}>Weight (lb):</td>
                                                    <td className={classes.data}>
                                                        {props?.state?.selectedSurgery?.patient?.weight ||
                                                        ""}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className={classes.details}>BMI:</td>
                                                    <td className={classes.data}>
                                                        {props?.state?.selectedSurgery?.patient?.bmi || ""}
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>

                                        <td>
                                            <table className={classes.anesthesiologist}>
                                                <tr>
                                                    <td className={classes.details}>
                                                        Anesthesiologist Name:
                                                    </td>
                                                    <td
                                                        className={classes.data}
                                                        style={{color: "lightgrey"}}
                                                    >
                                                        {props?.state?.selectedSurgery?.anesthesiologist
                                                            ?.userName || "Not Assigned"}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className={classes.details}>
                                                        Anesthesiologist Phone:
                                                    </td>
                                                    <td
                                                        className={classes.data}
                                                        style={{color: "lightgrey"}}
                                                    >
                                                        {props?.state?.selectedSurgery?.anesthesiologist
                                                            ?.phone || "Not Assigned"}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className={classes.details}>
                                                        Anesthesiologist Email:
                                                    </td>
                                                    <td
                                                        className={classes.data}
                                                        style={{color: "lightgrey"}}
                                                    >
                                                        {props?.state?.selectedSurgery?.anesthesiologist
                                                            ?.email || "Not Assigned"}
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                        <td>
                                            <table className={classes.surgery1}>
                                                <tr>
                                                    <td className={classes.details}>Surgery Clearance</td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <button className={classes.button}>
                                                            <p>
                                                                {props?.state?.selectedSurgery?.status ===
                                                                statusConstants.COMPLETED
                                                                    ? "Yes"
                                                                    : "No"}
                                                            </p>
                                                        </button>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </div>

                            <div className={classes.root}>
                                <AppBar
                                    position="static"
                                    color="white"
                                    className={classes.appBar}
                                >
                                    <Tabs
                                        indicatorColor="none"
                                        classes={{
                                            indicator: classes.indicator,
                                        }}
                                        value={value}
                                        onChange={handleChange}
                                    >
                                        <Tab
                                            disableRipple
                                            style={
                                                value === 0
                                                    ? {
                                                        background: "white",
                                                        textTransform: "initial",
                                                        fontSize: "11px",
                                                        color: "#1aa3ff",
                                                        borderBottom: "none",
                                                        outline: "none",
                                                        "&:hover": {
                                                            outline: "none",
                                                        },
                                                    }
                                                    : {
                                                        fontSize: "11px",
                                                        background: "white",
                                                        textTransform: "initial",
                                                    }
                                            }
                                            classes={{root: classes.tablist}}
                                            label="List of prior Surgeries"
                                            {...a11yProps(0)}
                                        />
                                        <Tab
                                            disableRipple
                                            style={
                                                value === 1
                                                    ? {
                                                        background: "white",
                                                        textTransform: "initial",
                                                        fontSize: "11px",
                                                        color: "#1aa3ff",
                                                        borderBottom: "none",
                                                        outline: "none",
                                                    }
                                                    : {
                                                        fontSize: "11px",
                                                        background: "white",
                                                        textTransform: "initial",
                                                    }
                                            }
                                            classes={{root: classes.tablist}}
                                            label="List of Medical Diagnosis"
                                            {...a11yProps(1)}
                                        />
                                        <Tab
                                            disableRipple
                                            style={
                                                value === 2
                                                    ? {
                                                        background: "white",
                                                        textTransform: "initial",
                                                        fontSize: "11px",
                                                        color: "#1aa3ff",
                                                        borderBottom: "none",
                                                        outline: "none",
                                                    }
                                                    : {
                                                        fontSize: "11px",
                                                        background: "white",
                                                        textTransform: "initial",
                                                    }
                                            }
                                            classes={{root: classes.tablist}}
                                            label="List of Medications"
                                            {...a11yProps(2)}
                                        />
                                        <Tab
                                            disableRipple
                                            style={
                                                value === 3
                                                    ? {
                                                        background: "white",
                                                        textTransform: "initial",
                                                        fontSize: "11px",
                                                        color: "#1aa3ff",
                                                        borderBottom: "none",
                                                        outline: "none",
                                                    }
                                                    : {
                                                        fontSize: "11px",
                                                        background: "white",
                                                        textTransform: "initial",
                                                    }
                                            }
                                            classes={{root: classes.tablist}}
                                            label="Airway Evaluation"
                                            {...a11yProps(3)}
                                        />

                                        <Tab
                                            disableRipple
                                            style={
                                                value === 4
                                                    ? {
                                                        background: "white",
                                                        textTransform: "initial",
                                                        fontSize: "11px",
                                                        color: "#1aa3ff",
                                                        borderBottom: "none",
                                                        outline: "none",
                                                    }
                                                    : {
                                                        fontSize: "11px",
                                                        background: "white",
                                                        textTransform: "initial",
                                                    }
                                            }
                                            classes={{root: classes.anethesiaTab}}
                                            label="Anesthesia Clearance and Recommendation"
                                            {...a11yProps(4)}
                                        />
                                    </Tabs>
                                </AppBar>
                                <TabPanel className="w-75" value={value} index={0}>
                                    {value === 0 && props?.state?.selectedSurgery?.patient?.surveyId &&
                                    <PriorSurgery selectedSurgery={props?.state?.selectedSurgery || ''}/>}
                                </TabPanel>
                                <TabPanel className={classes.panel} value={value} index={1}>
                                    <DiagnosesList/>
                                </TabPanel>
                                <TabPanel className="w-75" value={value} index={2}>
                                    {value === 2 && props?.state?.selectedSurgery?.patient?.surveyId &&
                                    <ListOfMedications selectedSurgery={props?.state?.selectedSurgery || ''}/>}
                                </TabPanel>
                                <TabPanel className={classes.panel} value={value} index={3}>
                                    {value === 3 && props?.state?.selectedSurgery?.surgeryId &&
                                    <AirwayEvaluation selectedSurgery={props?.state?.selectedSurgery || ''}/>}
                                </TabPanel>
                                <TabPanel className={classes.panel} value={value} index={4}>
                                    {value === 4 && props?.state?.selectedSurgery.surgeryId &&
                                    <Anesthesia selectedSurgery={props?.state?.selectedSurgery || ''}/>}
                                </TabPanel>
                            </div>
                        </div>
                    </main>
                </div>
            )}
        </div>
    );
}
