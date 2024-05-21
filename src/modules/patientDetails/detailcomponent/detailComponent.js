import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Avatar from "@material-ui/core/Avatar";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
// import DiagnosesList from "./medicalDiagnoses/index";
import DiagnosesList from "../../medicalDiagnoses/index";
import PriorSurgery from "../../priorSurgery/index";
import ListOfMedications from "../../listOfMedications";
import Popover from "@material-ui/core/Popover";
import VirtualChatHistory from "../../virtualChatHistory";
import AirwayEvaluation from "../../airwayEvaluation";
import SurveyResult from "../../surveyResult";
import Anesthesia from "../../anesthesia";
import { Column, Row } from "simple-flexbox";
import TabsComponent from "./tabsComponent";

const Slider = styled.img`
  margin-left: 1px;
  height: 35px;
  width:35px;
  @media  (max-width:1024px) and (min-width: 768px) {
    display:"none",    
     
   
 }
`

const Sliderr = styled.img`
  margin-left: 15px;
  height: 35px;
  width:35px;
  @media  (max-width:1024px) and (min-width: 768px) {
   display:"none",    
    
  
}
`;

function TabPanel(props) {
  const { children, value, index, ...other } = props;
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
  typography: {
    padding: theme.spacing(2),
  },
  content: {
    flexGrow: 1,
    backgroundColor: "#ffffff",
    padding: theme.spacing(3),
    marginLeft: 36,
    marginTop: 20,
    width: "1074px",
    // marginRight:100
  },
  contentt: {
    flexGrow: 1,
    backgroundColor: "#ffffff",
    padding: theme.spacing(3),
    marginLeft: 36,
    marginTop: 20,
    // width: "1074px",
    width:"96vw",
    // marginRight:100
  },
  draw: {
    // backgroundColor: "#e6e6e6",
    marginTop: -98,
    marginLeft: -1,
    marginBottom: -15,
    height: 11,
    color: "#f5f5ef",
    width: "100%",
  },
  coloumn: {
    backgroundColor: "#f5f5ef",
    position: "relative",
    marginLeft: -60,
    marginTop: 18,
    marginRight: -24,
    height: 267,
  },
  set: {
    backgroundColor: "#f5f5ef",
    marginLeft: 13,
  },
  pset: {
    padding: 0,
    fontSize: 12,
    marginTop: 18,
    marginLeft: -30,
    fontFamily: "Roboto",
  },
  info: {
    fontWeight: "bold",
    paddingLeft: 15,
    color: "#26292c",
  },
  infoo: {
    fontWeight: "bold",
    paddingLeft: 15,
  },
  date: {
    paddingLeft: 769,
    fontSize: 11,
    fontFamily: "Roboto",
  // fontSize:"14px",
  fontWeight:"normal",
  fontStretch: "normal",
  fontStyle:"normal",
  lineHeight:"normal",
  letterSpacing: "normal",
  color:"#26292c",
  },
  dates: {
    paddingLeft: 949,
    fontSize: 11,
    color: "#26292c",
  },
  dots: {
    paddingLeft: 10,
    fontSize: 35,
    color: "#b8b894",
  },
  data: {
    marginTop: -10,
    marginLeft: -4,
  },

  tab: {
    textAlign: "left",
    cellSpacing: 50,
    marginRight: 20,
  },
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    marginTop: -20,
    marginLeft: 22,
    marginRight: 20,
  },
  name: {
    fontSize: 18,
    // fontWeight: "bold",
    fontFamily:"Roboto",
  // fontSize:"22px",
  fontWeight:"500",
  fontStretch:"normal",
  fontStyle:"normal",
  lineHeight:"normal",
  letterSpacing:"normal",
  color: "#26292c",
    paddingBottom: 4,
  },
  detail: {
    fontSize: 12,
    fontFamily: "Roboto",
    color: "#414141",
    fontWeight:"normal",
  fontStretch:"normal",
  fontStyle:"normal",
  lineHeight: 1.75,
  letterSpacing: "normal",
  },
  SurClrdetail: {
    fontSize: 11,
    fontFamily: "Roboto",
    color: "#4c4c4c",
    fontWeight:"normal",
  fontStretch:"normal",
  fontStyle:"normal",
  lineHeight: 1.75,
  letterSpacing: "normal",
  },
  Surdetail: {
    fontSize: 11,
    fontFamily: "Roboto",
    color: "#4c4c4c",
    fontWeight:"normal",
  fontStretch:"normal",
  fontStyle:"normal",
  lineHeight: 1.75,
  letterSpacing: "normal",
  },
  Patinfo: {
    fontSize: 12,
    fontFamily:"Roboto",
  // fontSize:"18px",
  fontWeight: 500,
  fontStretch:"normal",
  fontStyle: "normal",
  lineHeight:"normal",
  letterSpacing: "normal",
  color: "#26292c",
    // fontFamily: "sans-serif",
    // fontWeight: "bold",
    paddingLeft: 20,
    // color: "#181c1b",
  },
  info: {
    fontSize: 12,
    fontFamily:"Roboto",
  // fontSize:"18px",
  fontWeight: 500,
  fontStretch:"normal",
  fontStyle: "normal",
  lineHeight:1.75,
  letterSpacing: "normal",
  color: "#181c1b",
    // fontFamily: "sans-serif",
    // fontWeight: "bold",
    paddingLeft: 20,
    // color: "#181c1b",
  },
  stype: {
    marginLeft: 35,
    marginTop: 45,
    marginRight: 20,
    "@media  (max-width:1024px) and (min-width: 768px)": {
     marginBottom:"190px",
       
       
     
   }
  },
  stypee: {
    marginLeft: 115,
    marginTop: 45,
    marginRight: 20,
  },
  change: {
    marginLeft: 45,
    marginTop: 10,
    "@media  (max-width:1024px) and (min-width: 768px)": {
      display:"none",
        
        
      
    }
  },
  changee: {
    marginLeft: 155,
    marginTop: 10,
    "@media  (max-width:1024px) and (min-width: 768px)": {
      display:"none",
        
        
      
    }
    
  },
  
  surgery: {
    marginTop: 30,
    marginLeft: 100,
    "@media  (max-width:1024px) and (min-width: 768px)": {
      display:"none",
        
        
      
    }
  },
  surgeryy: {
    marginTop: 30,
    marginLeft: 90,
    "@media  (max-width:1024px) and (min-width: 768px)": {
     display:"none",
       
       
     
   }
  },
  
  Nbutton: {
    backgroundColor: "red",
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
  appp: {
    marginTop: 20,
    width: "158%",
    boxShadow: "none",
    borderRight: "none",
    marginLeft: 2,
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
    marginRight: 493,

   "@media  (max-width:1024px) and (min-width: 768px) ":{
      display:"none",

  },
  },
  roott: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    marginLeft: 35,
    marginRight: 730,
    
   "@media  (max-width:1024px) and (min-width: 768px) ":{
    display:"none",
},
  },
  app: {
    marginTop: 18,
    width: "159%",
    boxShadow: "none",
    borderTop: "1px solid #ebebe0",
    borderRight: "none",
  },
  tablist: {
    borderRight: "1px solid #ebebe0",
    borderBottom: "1px solid #ebebe0",
    fontSize: 11,
    textTransform: "none",
    lineHeight: 1,
    minWidth: 108,
    width: 108,
  },
  tablisted: {
    borderRight: "1px solid #ebebe0",
    borderBottom: "1px solid #ebebe0",
    fontSize: 11,
    textTransform: "none",
    lineHeight: 1,
    minWidth: 170,
    width: 170,
  },
  outer: {
    marginLeft: 0,
    width: "130%",
  },
  outertab: {
    marginLeft: 0,
    width: "130%",
    marginTop: 13,
  },
  left: {
    paddingLeft: 16,
  },
  tablefixing: {
    borderCollapse: "collapse",
    marginTop: 3,
    marginLeft: -24,
    // width: "100%",
    width:"40%",
    border: 0,
  },
  tables: {
    borderCollapse: "collapse",
    marginTop: 3,
    marginLeft: -24,
    width: "276px",
    border: 0,
  },
  tableBorder: {
    borderCollapse: "collapse",
    marginTop: 3,
    marginLeft: 20,
    width: "40%",
    border: 0,
  },
  tBorder: {
    borderCollapse: "collapse",
    marginTop: 3,
    marginLeft: 20,
    width: "276px",
    border: 0,
  },
  border: {
    borderCollapse: "collapse",
    marginTop: 3,
    marginLeft: 20,
    width: "276px",
    border: 0,
  },
  adjustTable: {
    borderCollapse: "collapse",
    marginTop: 3,
    marginLeft: 20,
    width: "276px",
    border: 0,
  },
  adjustBorder: {
    borderCollapse: "collapse",
    marginTop: 3,
    marginLeft: -24,
    width: "276px",
    border: 0,
  },
  tableRow: {
    backgroundColor: "#e6f2ff",
  },
  information: {
    fontSize: "16px",
    fontFamily: "Roboto !important",
    paddingLeft: 10,
    color: "#4c4c4c",
    fontWeight: 500,
  },
  rowColor: {
    backgroundColor: "#f5f5ef",
  },
  subdetail: {
    fontSize: 16,
    fontFamily: "Roboto !important",
    paddingLeft: 10,
    color: "#181c1b",
    fontWeight: "normal",
  },
  parafixing: {
    fontSize: "11px",
    fontWeight: "600",
    fontFamily: "Roboto !important",
    marginBottom: "4px",
    // paddingBottom:"10px",
    color: "#181c1b",
  },
  time: {
    color: "#6a6a6a",
  },
  popover: {
    // marginBottom:"90px",
    marginTop: "-13px",
    height: 125,
    // paddingBottom:50,
  },
  response:{
    display:"flex",
    // alignItems:"center",
    // overflow:"auto",
    // overflowX: "auto",
  
  },
  // divFix:{
  //   display:"none",
  //   "@media  (max-width:1024px) and (min-width: 768px)": {
  //     display:"block",
  //  }

  // },
  closeimg:{
    "@media  (max-width:1024px) and (min-width: 768px)": {
     display:"none"
  },
 

  },
  toggleData:{
    display:"none",
    "@media  (max-width:1024px) and (min-width: 768px)": {
      display:"block",
   }

  }
}));

export default function DetailComponent(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);

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
    <div >

      {props.state.isOpen ? (
    <div >
      {props.rows.map((row, index) => (
        <main className={classes.content}>
          <Toolbar />
          <div className={classes.coloumn}>
            <div className={classes.draw}>...</div>

            <div className={classes.set}>
              <table className={classes.pset}>
                <tr>
                  {props.state.isOpen ? (
                    <Slider
                      src="/images/left_side_icon.svg"
                      class="Group-6"
                      className={classes.closeimg}
                      
                      onClick={() => {
                        props.toggleImage();
                      }}
                    ></Slider>
                  ) : (
                    <Sliderr
                      className={classes.closeimg}
                      src="/images/left_side_icon.svg"
                      onClick={() => {
                        props.toggleImage();
                      }}
                    />
                  )}
                  <td className={classes.Patinfo}>Patient Information</td>
                  <td className={classes.date}>
                    Last updated:{" "}
                    <span className={classes.time}>10:25 AM, today</span>
                  </td>
                  <MoreHorizIcon
                    className={classes.dots}
                    onClick={handleClick}
                  />
                </tr>
              </table>

              <table className={classes.data}>
                <tr>
                  <td>
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
                            className={classes.large}
                          />
                        </td>
                        <th colSpan="2" className={classes.name}>
                          {row.name}
                        </th>
                      </tr>
                      <tr>
                        <td className={classes.detail}>Phone:</td>
                        <td className={classes.info}>{row.phone}</td>
                      </tr>
                      <tr>
                        <td className={classes.detail}>Email:</td>
                        <td className={classes.info}>{row.email}</td>
                      </tr>
                      <tr>
                        <td className={classes.detail}>Gender:</td>
                        <td className={classes.info}>{row.gender}</td>
                      </tr>
                      <tr>
                        <td className={classes.detail}>Age:</td>
                        <td className={classes.info}>{row.age}</td>
                      </tr>
                     <tr className={classes.toggleData}>
                        <td className={classes.detail}>Surgeon Name:</td>
                        <td className={classes.info}>{row.surgeonname}</td>
                      </tr>
                      <tr className={classes.toggleData}>
                        <td className={classes.detail}>Surgeon Phone:</td>
                        <td className={classes.info}>{row.surgeonphone}</td>
                      </tr>
                      <tr className={classes.toggleData}>
                        <td className={classes.detail}>Surgeon Email</td>
                        <td className={classes.info}>{row.surgeonemail}</td>
                      </tr>
                      <tr className={classes.toggleData}>
                        <td className={classes.SurClrdetail}>Surgery Clearance</td>
                      </tr>
                      <tr className={classes.toggleData}>
                        {props.rows.clearance === "No" ? (
                          <td>
                            <button className={classes.Ybutton}>
                              <p className={classes.btn}>{row.clearance}</p>
                            </button>
                          </td>
                        ) : (
                          <td>
                            <button className={classes.Nbutton}>
                              <p className={classes.btn}>{row.clearance}</p>
                            </button>
                          </td>
                        )}
                      </tr> 
                      
                    </table>
                  </td>
                  <td>
                    <table className={classes.stype}>
                      <tr>
                        <td className={classes.Surdetail}>Surgery Type:</td>
                        <td className={classes.info}>{row.surgerytype}</td>
                      </tr>
                      <tr>
                        <td className={classes.Surdetail}>Surgery Date:</td>
                        <td className={classes.info}>{row.surgerydate}</td>
                      </tr>
                      <tr>
                        <td className={classes.Surdetail}>Height (cm):</td>
                        <td className={classes.info}>{row.height}</td>
                      </tr>
                      <tr>
                        <td className={classes.Surdetail}>Weight (lb):</td>
                        <td className={classes.info}>{row.weight}</td>
                      </tr>
                      <tr>
                        <td className={classes.Surdetail}>BMI:</td>
                        <td className={classes.info}>{row.bmi}</td>
                      </tr>
                    </table>
                  </td>
                  <td>
                    <table className={classes.change}>
                      <tr>
                        <td className={classes.Surdetail}>Surgeon Name:</td>
                        <td className={classes.info}>{row.surgeonname}</td>
                      </tr>
                      <tr>
                        <td className={classes.Surdetail}>Surgeon Phone:</td>
                        <td className={classes.info}>{row.surgeonphone}</td>
                      </tr>
                      <tr>
                        <td className={classes.Surdetail}>Surgeon Email</td>
                        <td className={classes.info}>{row.surgeonemail}</td>
                      </tr>
                    </table>
                  </td>
                  <td>
                    <table className={classes.surgery}>
                      <tr>
                        <td className={classes.SurClrdetail}>Surgery Clearance</td>
                      </tr>
                      <tr>
                        {props.rows.clearance === "No" ? (
                          <td>
                            <button className={classes.Ybutton}>
                              <p className={classes.btn}>{row.clearance}</p>
                            </button>
                          </td>
                        ) : (
                          <td>
                            <button className={classes.Nbutton}>
                              <p className={classes.btn}>{row.clearance}</p>
                            </button>
                          </td>
                        )}
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <Popover
                className={classes.popover}
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
                  <p className={classes.parafixing}>
                    Send Reminder to Patient{" "}
                  </p>
                  <p className={classes.parafixing}>Download Clearance Form </p>
                  <p className={classes.parafixing}>Report Patient </p>
                </Typography>
              </Popover>
            </div>

            <div className={classes.root}>
              <AppBar position="static" color="white" className={classes.app}>
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
                            color: "#00a0f0",
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
                    classes={{ root: classes.tablist }}
                    label="Patient General Information"
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
                            color: "#00a0f0",
                            borderBottom: "none",
                            outline: "none",
                          }
                        : {
                            fontSize: "11px",
                            background: "white",
                            textTransform: "initial",
                          }
                    }
                    classes={{ root: classes.tablist }}
                    label="List of prior Surgeries"
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
                            color: "#00a0f0",
                            borderBottom: "none",
                            outline: "none",
                          }
                        : {
                            fontSize: "11px",
                            background: "white",
                            textTransform: "initial",
                          }
                    }
                    classes={{ root: classes.tablist }}
                    label="List of Medical Diagnosis"
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
                            color: "#00a0f0",
                            borderBottom: "none",
                            outline: "none",
                          }
                        : {
                            fontSize: "11px",
                            background: "white",
                            textTransform: "initial",
                          }
                    }
                    classes={{ root: classes.tablist }}
                    label="List of Medications"
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
                            color: "#00a0f0",
                            borderBottom: "none",
                            outline: "none",
                          }
                        : {
                            fontSize: "11px",
                            background: "white",
                            textTransform: "initial",
                          }
                    }
                    classes={{ root: classes.tablist }}
                    label="Consolidated Survey Result"
                    {...a11yProps(4)}
                  />
                  <Tab
                    disableRipple
                    style={
                      value === 5
                        ? {
                            background: "white",
                            textTransform: "initial",
                            fontSize: "11px",
                            color: "#00a0f0",
                            borderBottom: "none",
                            outline: "none",
                          }
                        : {
                            fontSize: "11px",
                            background: "white",
                            textTransform: "initial",
                          }
                    }
                    classes={{ root: classes.tablist }}
                    label="Airway Evaluation"
                    {...a11yProps(5)}
                  />
                  <Tab
                    disableRipple
                    style={
                      value === 6
                        ? {
                            background: "white",
                            textTransform: "initial",
                            fontSize: "11px",
                            color: "#00a0f0",
                            borderBottom: "none",
                            outline: "none",
                          }
                        : {
                            fontSize: "11px",
                            background: "white",
                            textTransform: "initial",
                          }
                    }
                    classes={{ root: classes.tablist }}
                    label="Virtual Chat History"
                    {...a11yProps(6)}
                  />
                  <Tab
                    disableRipple
                    style={
                      value === 7
                        ? {
                            background: "white",
                            textTransform: "initial",
                            fontSize: "11px",
                            color: "#00a0f0",
                            borderBottom: "none",
                            outline: "none",
                          }
                        : {
                            fontSize: "11px",
                            background: "white",
                            textTransform: "initial",
                          }
                    }
                    classes={{ root: classes.tablisted }}
                    label="Anesthesia Clearance and Recommendation"
                    {...a11yProps(7)}
                  />
                </Tabs>
              </AppBar>
              <TabPanel value={value} index={0} >
               <Column className={classes.response}> 
                <table className={classes.outer} >
                  <Row >
                  {/* <tr> */}
                    {/* <td> */}
                      <table
                        border="1"
                        className={classes.tablefixing}
                        cellPadding="5"
                      >
                        <tr className={classes.tableRow}>
                          <td className={classes.information}>Date of Birth</td>
                        </tr>
                        <tr className={classes.row}>
                          <td className={classes.subdetail}>{row.dob}</td>
                        </tr>
                      </table>
                    {/* </td> */}
                    {/* <td> */}
                      <table
                        border="1"
                        className={classes.tableBorder}
                        cellPadding="5"
                      >
                        <tr className={classes.tableRow}>
                          <td className={classes.information}>
                            Age Calculated
                          </td>
                        </tr>
                        <tr className={classes.row}>
                          <td className={classes.subdetail}>{row.agecal}</td>
                        </tr>
                      </table>
                    {/* </td> */}
                  {/* </tr> */}
                  </Row>
                </table>

                <table className={classes.outertab}>
                  {/* <tr> */}
                  <Row>
                    {/* <td> */}
                      <table
                        border="1"
                        className={classes.adjustBorder}
                        cellPadding="5"
                      >
                        <tr className={classes.tableRow}>
                          <td className={classes.information}>
                            Patient Height
                          </td>
                        </tr>
                        <tr className={classes.row}>
                          <td className={classes.subdetail}>{row.pheight}</td>
                        </tr>
                      </table>
                    {/* </td> */}
                    {/* <td> */}
                      <table
                        border="1"
                        className={classes.tBorder}
                        cellPadding="5"
                      >
                        <tr className={classes.tableRow}>
                          <td className={classes.information}>
                            Patient Weight
                          </td>
                        </tr>
                        <tr className={classes.row}>
                          <td className={classes.subdetail}>{row.pweight}</td>
                        </tr>
                      </table>
                    {/* </td> */}
                    {/* <td> */}
                      <table
                        border="1"
                        className={classes.adjustTable}
                        cellPadding="5"
                      >
                        <tr className={classes.tableRow}>
                          <td className={classes.information}>
                            Patient BMI (Calculated)
                          </td>
                        </tr>
                        <tr className={classes.rowColor}>
                          <td className={classes.subdetail}>{row.pbmi}</td>
                        </tr>
                      </table>
                    {/* </td> */}
                  {/* </tr> */}
                  </Row>
                </table>
                <table className={classes.outertab}>
                  {/* <tr> */}
                  <Row>
                    {/* <td> */}
                      <table
                        border="1"
                        className={classes.tables}
                        cellPadding="5"
                      >
                        <tr className={classes.tableRow}>
                          <td className={classes.information}>Gender</td>
                        </tr>
                        <tr className={classes.row}>
                          <td className={classes.subdetail}>{row.pgender}</td>
                        </tr>
                      </table>
                    {/* </td> */}
                    {/* <td> */}
                      <table
                        border="1"
                        className={classes.border}
                        cellPadding="5"
                      >
                        <tr className={classes.tableRow}>
                          <td className={classes.information}>
                            Education Level
                          </td>
                        </tr>
                        <tr className={classes.row}>
                          <td className={classes.subdetail}>{row.edu}</td>
                        </tr>
                      </table>
                    {/* </td> */}
                  {/* </tr> */}
                  </Row>
                </table>
                <table className={classes.outertab}>
                  {/* <tr> */}
                  <Row>
                    {/* <td> */}
                      <table
                        border="1"
                        className={classes.tables}
                        cellPadding="5"
                      >
                        <tr className={classes.tableRow}>
                          <td className={classes.information}>
                            First Time Surgery
                          </td>
                        </tr>
                        <tr className={classes.row}>
                          <td className={classes.subdetail}>{row.first}</td>
                        </tr>
                      </table>
                    {/* </td> */}
                    {/* <td> */}
                      <table
                        border="1"
                        className={classes.border}
                        cellPadding="5"
                      >
                        <tr className={classes.tableRow}>
                          <td className={classes.information}>
                            Any allergies to medications?
                          </td>
                        </tr>
                        <tr className={classes.row}>
                          <td className={classes.subdetail}>{row.allergy}</td>
                        </tr>
                      </table>
                    {/* </td> */}
                  {/* </tr> */}
                  </Row>
                </table>
                <table className={classes.outertab}>
                  {/* <tr> */}
                    {/* <td> */}
                      <table
                        border="1"
                        className={classes.tables}
                        cellPadding="5"
                      >
                        <tr className={classes.tableRow}>
                          <td className={classes.information}>
                            If yes, please mention allergies?
                          </td>
                        </tr>
                        <tr className={classes.row}>
                          <td className={classes.subdetail}>
                            {row.specifyallergy}
                          </td>
                        </tr>
                      </table>
                    {/* </td> */}
                  {/* </tr> */}
                </table>
              </Column>
              </TabPanel>
              <TabPanel className={classes.panel} value={value} index={1}>
                <PriorSurgery />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <DiagnosesList />
              </TabPanel>

              <TabPanel value={value} index={3}>
                <ListOfMedications />
              </TabPanel>
              <TabPanel value={value} index={4}>
                <SurveyResult />
              </TabPanel>
              <TabPanel value={value} index={5}>
                <AirwayEvaluation />
              </TabPanel>
              <TabPanel value={value} index={6}>
                <VirtualChatHistory />
              </TabPanel>
              <TabPanel value={value} index={7}>
                <Anesthesia />
              </TabPanel>
            </div>
          </div>
        </main>
      ))}
    </div> ) : <div>
      {props.rows.map((row, index) => (
        <main className={classes.contentt}>
          <Toolbar />
          <div className={classes.coloumn}>
            <div className={classes.draw}>...</div>

            <div className={classes.set}>
              <table className={classes.pset}>
                <tr>
                  {props.state.isOpen ? (
                    <Slider
                      src="/images/left_side_icon.svg"
                      className={classes.closeimg}

                      // class="Group-6"
                      onClick={() => {
                        props.toggleImage();
                      }}
                    ></Slider>
                  ) : (
                    <Sliderr
                      className={classes.closeimg}
                      src="/images/left_side_icon.svg"
                      onClick={() => {
                        props.toggleImage();
                      }}
                    />
                  )}
                  <td className={classes.Patinfo}>Patient Information</td>
                  <td className={classes.dates}>
                    Last updated: <b>10:25 AM, today</b>
                  </td>
                  <MoreHorizIcon
                    className={classes.dots}
                    onClick={handleClick}
                  />
                </tr>
              </table>

              <table className={classes.data}>
                <tr>
                  <td>
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
                            className={classes.large}
                          />
                        </td>
                        <th colSpan="2" className={classes.name}>
                          {row.name}
                        </th>
                      </tr>
                      <tr>
                        <td className={classes.detail}>Phone:</td>
                        <td className={classes.info}>{row.phone}</td>
                      </tr>
                      <tr>
                        <td className={classes.detail}>Email:</td>
                        <td className={classes.info}>{row.email}</td>
                      </tr>
                      <tr>
                        <td className={classes.detail}>Gender:</td>
                        <td className={classes.info}>{row.gender}</td>
                      </tr>
                      <tr>
                        <td className={classes.detail}>Age:</td>
                        <td className={classes.info}>{row.age}</td>
                      </tr>
                      <tr className={classes.toggleData}>
                        <td className={classes.detail}>Surgeon Name:</td>
                        <td className={classes.info}>{row.surgeonname}</td>
                      </tr>
                      <tr className={classes.toggleData}>
                        <td className={classes.detail}>Surgeon Phone:</td>
                        <td className={classes.info}>{row.surgeonphone}</td>
                      </tr>
                      <tr className={classes.toggleData}>
                        <td className={classes.detail}>Surgeon Email</td>
                        <td className={classes.info}>{row.surgeonemail}</td>
                      </tr>
                      <tr className={classes.toggleData}>
                        <td className={classes.SurClrdetail}>Surgery Clearance</td>
                      </tr>
                      <tr className={classes.toggleData}>
                        {props.rows.clearance === "No" ? (
                          <td>
                            <button className={classes.Ybutton}>
                              <p className={classes.btn}>{row.clearance}</p>
                            </button>
                          </td>
                        ) : (
                          <td>
                            <button className={classes.Nbutton}>
                              <p className={classes.btn}>{row.clearance}</p>
                            </button>
                          </td>
                        )}
                      </tr> 
                    </table>
                  </td>
                  <td>
                    <table className={classes.stypee}>
                      <tr>
                        <td className={classes.detail}>Surgery Type:</td>
                        <td className={classes.info}>{row.surgerytype}</td>
                      </tr>
                      <tr>
                        <td className={classes.detail}>Surgery Date:</td>
                        <td className={classes.info}>{row.surgerydate}</td>
                      </tr>
                      <tr>
                        <td className={classes.detail}>Height (cm):</td>
                        <td className={classes.info}>{row.height}</td>
                      </tr>
                      <tr>
                        <td className={classes.detail}>Weight (lb):</td>
                        <td className={classes.info}>{row.weight}</td>
                      </tr>
                      <tr>
                        <td className={classes.detail}>BMI:</td>
                        <td className={classes.info}>{row.bmi}</td>
                      </tr>
                    </table>
                  </td>
                  <td>
                    <table className={classes.changee}>
                      <tr>
                        <td className={classes.detail}>Surgeon Name:</td>
                        <td className={classes.info}>{row.surgeonname}</td>
                      </tr>
                      <tr>
                        <td className={classes.detail}>Surgeon Phone:</td>
                        <td className={classes.info}>{row.surgeonphone}</td>
                      </tr>
                      <tr>
                        <td className={classes.detail}>Surgeon Email</td>
                        <td className={classes.info}>{row.surgeonemail}</td>
                      </tr>
                    </table>
                  </td>
                  <td>
                    <table className={classes.surgeryy}>
                      <tr>
                        <td className={classes.detail}>Surgery Clearance</td>
                      </tr>
                     
                      <tr>
                        {props.rows.clearance === "No" ? (
                          <td>
                            <button className={classes.Ybutton}>
                              <p className={classes.btn}>{row.clearance}</p>
                            </button>
                          </td>
                        ) : (
                          <td>
                            <button className={classes.Nbutton}>
                              <p className={classes.btn}>{row.clearance}</p>
                            </button>
                          </td>
                        )}
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <Popover
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
                  <p className={classes.parafixing}>
                    Send Reminder to Patient{" "}
                  </p>
                  <p className={classes.parafixing}>Download Clearance Form </p>
                  <p className={classes.parafixing}>Report Patient </p>
                </Typography>
              </Popover>
            </div>

            <div className={classes.roott}>
              <AppBar position="static" color="white" className={classes.appp}>
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
                    classes={{ root: classes.tablist }}
                    label="Patient General Information"
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
                    classes={{ root: classes.tablist }}
                    label="List of prior Surgeries"
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
                    classes={{ root: classes.tablist }}
                    label="List of Medical Diagnosis"
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
                    classes={{ root: classes.tablist }}
                    label="List of Medications"
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
                    classes={{ root: classes.tablist }}
                    label="Consolidated Survey Result"
                    {...a11yProps(4)}
                  />
                  <Tab
                    disableRipple
                    style={
                      value === 5
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
                    classes={{ root: classes.tablist }}
                    label="Airway Evaluation"
                    {...a11yProps(5)}
                  />
                  <Tab
                    disableRipple
                    style={
                      value === 6
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
                    classes={{ root: classes.tablist }}
                    label="Virtual Chat History"
                    {...a11yProps(6)}
                  />
                  <Tab
                    disableRipple
                    style={
                      value === 7
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
                    classes={{ root: classes.tablisted }}
                    label="Anesthesia Clearance and Recommendation"
                    {...a11yProps(7)}
                  />
                </Tabs>
              </AppBar>
              <TabPanel value={value} index={0}>
              <table className={classes.outer}>
                  <tr>
                    <td>
                      <table
                        border="1"
                        className={classes.tablefixing}
                        cellPadding="5"
                      >
                        <tr className={classes.tableRow}>
                          <td className={classes.information}>Date of Birth</td>
                        </tr>
                        <tr className={classes.row}>
                          <td className={classes.subdetail}>{row.dob}</td>
                        </tr>
                      </table>
                    </td>
                    <td>
                      <table
                        border="1"
                        className={classes.tableBorder}
                        cellPadding="5"
                      >
                        <tr className={classes.tableRow}>
                          <td className={classes.information}>
                            Age Calculated
                          </td>
                        </tr>
                        <tr className={classes.row}>
                          <td className={classes.subdetail}>{row.agecal}</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
                <table className={classes.outertab}>
                  <tr>
                    <td>
                      <table
                        border="1"
                        className={classes.adjustBorder}
                        cellPadding="5"
                      >
                        <tr className={classes.tableRow}>
                          <td className={classes.information}>
                            Patient Height
                          </td>
                        </tr>
                        <tr className={classes.row}>
                          <td className={classes.subdetail}>{row.pheight}</td>
                        </tr>
                      </table>
                    </td>
                    <td>
                      <table
                        border="1"
                        className={classes.tBorder}
                        cellPadding="5"
                      >
                        <tr className={classes.tableRow}>
                          <td className={classes.information}>
                            Patient Weight
                          </td>
                        </tr>
                        <tr className={classes.row}>
                          <td className={classes.subdetail}>{row.pweight}</td>
                        </tr>
                      </table>
                    </td>
                    <td>
                      <table
                        border="1"
                        className={classes.adjustTable}
                        cellPadding="5"
                      >
                        <tr className={classes.tableRow}>
                          <td className={classes.information}>
                            Patient BMI (Calculated)
                          </td>
                        </tr>
                        <tr className={classes.rowColor}>
                          <td className={classes.subdetail}>{row.pbmi}</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
                <table className={classes.outertab}>
                  <tr>
                    <td>
                      <table
                        border="1"
                        className={classes.tables}
                        cellPadding="5"
                      >
                        <tr className={classes.tableRow}>
                          <td className={classes.information}>Gender</td>
                        </tr>
                        <tr className={classes.row}>
                          <td className={classes.subdetail}>{row.pgender}</td>
                        </tr>
                      </table>
                    </td>
                    <td>
                      <table
                        border="1"
                        className={classes.border}
                        cellPadding="5"
                      >
                        <tr className={classes.tableRow}>
                          <td className={classes.information}>
                            Education Level
                          </td>
                        </tr>
                        <tr className={classes.row}>
                          <td className={classes.subdetail}>{row.edu}</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>

                <table className={classes.outertab}>
                  <tr>
                    <td>
                      <table
                        border="1"
                        className={classes.tables}
                        cellPadding="5"
                      >
                        <tr className={classes.tableRow}>
                          <td className={classes.information}>
                            First Time Surgery
                          </td>
                        </tr>
                        <tr className={classes.row}>
                          <td className={classes.subdetail}>{row.first}</td>
                        </tr>
                      </table>
                    </td>
                    <td>
                      <table
                        border="1"
                        className={classes.border}
                        cellPadding="5"
                      >
                        <tr className={classes.tableRow}>
                          <td className={classes.information}>
                            Any allergies to medications?
                          </td>
                        </tr>
                        <tr className={classes.row}>
                          <td className={classes.subdetail}>{row.allergy}</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
                <table className={classes.outertab}>
                  <tr>
                    <td>
                      <table
                        border="1"
                        className={classes.tables}
                        cellPadding="5"
                      >
                        <tr className={classes.tableRow}>
                          <td className={classes.information}>
                            If yes, please mention allergies?
                          </td>
                        </tr>
                        <tr className={classes.row}>
                          <td className={classes.subdetail}>
                            {row.specifyallergy}
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>

               
               
              </TabPanel>
              <TabPanel className={classes.panel} value={value} index={1}>
                <PriorSurgery />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <DiagnosesList />
              </TabPanel>

              <TabPanel value={value} index={3}>
                <ListOfMedications />
              </TabPanel>
              <TabPanel value={value} index={4}>
                <SurveyResult />
              </TabPanel>
              <TabPanel value={value} index={5}>
                <AirwayEvaluation />
              </TabPanel>
              <TabPanel value={value} index={6}>
                <VirtualChatHistory />
              </TabPanel>
              <TabPanel value={value} index={7}>
              <Anesthesia/> 
              </TabPanel>
            </div>
          </div>

        </main>

      ))}

    </div>

    




    }


</div>
<div>
<TabsComponent  rows={props.rows}  />

</div>
</div>

  );

}
