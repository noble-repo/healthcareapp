import React from "react";
import VideoScreen from "./vCallScreen";
import { makeStyles } from "@material-ui/core/styles";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Avatar from "@material-ui/core/Avatar";
import PatientInformationComponent from "./patientInformation";
// import ListOfMedications from "./medications";
import ListOfMedications from "../listOfMedications";
import AirwayEvaluation from "./airwayEvaluation";
// import AirwayEvaluation from "../airwayEvaluation";

import AnaesthesiaClearance from "./anaesthesia";


const useStyles = makeStyles((theme) => ({
  tabPanel: {
    width: "95%",
  },

  info: {
    paddingLeft: "7px",
    marginTop: "0px",
  },
  fixPosition: {
    paddingLeft: "15px",
    marginBottom: "0px",
  },
  airway: {
    paddingLeft: "10px",
    marginBottom: "0px",
  },
  tabPadding: {
    paddingLeft: "8px",
  },

  patientInfoDiv: {
    minWidth: "650px",
    height: "165px",
    width: "700px",
    backgroundColor: "#f7f7f7",
    position: "static",
    ["@media (max-width:768px)"]: {
      minWidth: "769px",
      backgroundColor: "#ffffff",
    },
  },
  patient: {
    width: "25rem",
    marginLeft: "20px",
  },
  patientInfo: {
    fontSize: "16px",
    color: "#222222",
    fontWeight: "bold",
    paddingTop: "10px",
    fontFamily: "Roboto",
  },
  patientImage: {
    width: "50px",
    height: "50px",
    borderRadius: "50px",
    paddingRight: "10px",
    paddingLeft: "0px",
    marginTop: "4px",
  },

  patientName: {
    color: "#181c1b",
    display: "flex",
    fontSize: "20px",
    fontWeight: "bold",
    padding: "10px",
    paddingLeft: "0px",
  },

  patientTabs: {
    marginLeft: "20px",
    width:"96%",
    height:"57px",
    backgroundColor:"white",
    borderBottom:"solid 1px #d4d4d4",
    ["@media (max-width:768px)"]: {
      marginTop:"427px",
      height:"58px",
    },
  },
  patientTablist: {
    fontSize: "15px",
    fontWeight: "bold",
    paddingLeft: "0px",
    color: "#414141",
    ["@media (max-width:768px)"]: {
     backgroundColor:"white",
    },
  },
  patientTab: {
    borderRadius: "0px",
  },
  root: {
    display: "flex",
    marginTop: "33px",
  },
  table: {
    width: "450px",
  },
  tableRow: {
    fontSize: "12px",
    // fontSize:"16px"
    color: "#989ca3",
    fontFamily: "roboto",
  },
  tableData: {
    width: "100px",
  },

  span: {
    color: "#454545",
  },
  tabDisplay:{
    display:"flex",
  },
  video:{
    ["@media (max-width:768px)"]: {
       marginLeft:"-50px",
      //  marginTop:"50px",
    },
  }
  // tabBorder:{
  //   // borderRadius:"0px",
  // }
}));

export default function UpcomingMeetingComponent(props) {
  const classes = useStyles();
  
  
  return (
    <div>
      <div className={classes.root}>
        <div className={classes.patientInfoDiv}>
          <div className={classes.patient}>
            <div className={classes.patientInfo}> PATIENT INFORMATION</div>
            {props.patient.map((patients, index) => (
              <div className={classes.patientName}>
                <div className={classes.patientImage}>
                  <Avatar alt="Remy Sharp" src={props.patientImage} />
                </div>
                <div>
                  {patients.name}
                  <table className={classes.table}>
                    <tr className={classes.tableRow}>
                      <td>
                        Age: <span className={classes.span}>{patients.age}</span>{" "}
                      </td>
                      <td>
                        Surgery Type:{" "}
                        <span className={classes.span}>
                          {patients.surgeryType}
                        </span>
                      </td>
                      <td>
                        Surgery Date:{" "}
                        <span className={classes.span}>
                          {patients.surgeryDate}
                        </span>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            ))}
           
          </div>
          {/* <div className={classes.video}>
          <VideoScreen />
        </div>
          */}
          <Tabs className={classes.patientTabs}>
            <TabList className={classes.patientTablist}>
              <Tab className={classes.tabBorder} style={{ borderRadius: "0px" }}>
                <div>Patient survey </div>
                <div className={classes.info}> information</div>
              </Tab>
              <Tab style={{ borderRadius: "0px" }}>
                <div className={classes.fixPosition}>List of</div>
                <div> Medications</div>
              </Tab>
              <Tab style={{ borderRadius: "0px" }}>
                <div className={classes.airway}>Airway </div>
                <div> Evaluation</div>
              </Tab>
              <Tab style={{ borderRadius: "0px" }}>
                <div>Anesthesia Clearance </div>
                <div className={classes.tabPadding}> Recommendation</div>
              </Tab>
            </TabList>

            <TabPanel>
              <PatientInformationComponent selectedSurgery={props.selectedSurgery} />
            </TabPanel>

            <TabPanel>
              <ListOfMedications selectedSurgery={props.selectedSurgery} afterMeeting={true} />
            </TabPanel>

            <TabPanel className={classes.tabDisplay}>
              <AirwayEvaluation selectedSurgery={props?.selectedSurgery || ''} />
            </TabPanel>

            <TabPanel>
              <AnaesthesiaClearance />
            </TabPanel>
          </Tabs>
        </div>
        <div className={classes.video}>
          <VideoScreen url={props.url} />
        </div>
      </div>



    </div>
  );
}
