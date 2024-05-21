import React from 'react';
import PropTypes from 'prop-types';
import {Row,Column} from "simple-flexbox"
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import DiagnosesList from "../../medicalDiagnoses/index";
import PriorSurgery from "../../priorSurgery/index";
import ListOfMedications from "../../listOfMedications";
import Popover from "@material-ui/core/Popover";
import VirtualChatHistory from "../../virtualChatHistory";
import AirwayEvaluation from "../../airwayEvaluation";
import SurveyResult from "../../surveyResult";
import Anesthesia from "../../anesthesia";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'none',
    height: 450,
   "@media  (max-width:1024px) and (min-width: 768px)": {
        display:"flex",
        marginTop:"100px",
        // margin-bottom:105px;
        
        
      
    }
  },
  indicator: {
    backgroundColor: 'white',
  },
  tabs: {
    // borderRight: `1px solid ${theme.palette.divider}`,
  },
  tablist: {
    // borderRight: "1px solid #ebebe0",
    // borderBottom: "1px solid #ebebe0",
    fontSize: 11,
    textTransform: "none",
    lineHeight: 1,
    minWidth: 108,
    width: 108,
  },
  response:{
    display:"flex",
    // alignItems:"center",
    // overflow:"auto",
    // overflowX: "auto",
  
  },
  outer: {
    marginLeft: 0,
    width: "130%",
  },
  tablefixing: {
    borderCollapse: "collapse",
    marginTop: 3,
    marginLeft: -24,
    // width: "100%",
    width:"40%",
    border: 0,

    "@media  (max-width:1024px) and (min-width: 768px)": {
     width:"39%",
      
      
    
  }
  
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
  subdetail: {
    fontSize: 16,
    fontFamily: "Roboto !important",
    paddingLeft: 10,
    color: "#181c1b",
    fontWeight: "normal",
  },
  tableBorder: {
    borderCollapse: "collapse",
    marginTop: 3,
    marginLeft: 20,
    width: "40%",
    border: 0,
    "@media  (max-width:1024px) and (min-width: 768px)": {
      width:"39%"
     
      
      
    
  }
  
  },
  outertab: {
    marginLeft: 0,
    width: "130%",
    marginTop: 13,
  },
  adjustBorder: {
    borderCollapse: "collapse",
    marginTop: 3,
    marginLeft: -24,
    width: "276px",
    border: 0,
  },
  tBorder: {
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
  rowColor: {
    backgroundColor: "#f5f5ef",
  },
  tables: {
    borderCollapse: "collapse",
    marginTop: 3,
    marginLeft: -24,
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

}));

export default function TabsComponent(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(props.rows,"props in tabs")

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
        inkBarStyle={{background: 'blue'}}
        classes={{
          indicator: classes.indicator
        }}
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
                 
                 
                 outline: "none",
               }
             : {
                 fontSize: "11px",
                 background: "white",
                 textTransform: "initial",
                 
               }
         }
         classes={{ root: classes.tablist }}
         label="Patient General Information" {...a11yProps(0)} />
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
        label="List of prior surgeries" {...a11yProps(1)} />
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
         label="List of Medical Diagnoses" {...a11yProps(2)} />
        <Tab 
         disableRipple
         style={
           value === 3
             ? {
                 background: "white",
                 textTransform: "initial",
                 fontSize: "11px",
                 color: "#1aa3ff",
                 border: "none",
                 outline: "none",
               }
             : {
                 fontSize: "11px",
                 background: "white",
                 textTransform: "initial",
               }
         }
         classes={{ root: classes.tablist }}
        label="List of medications" {...a11yProps(3)} />
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
        label="Consolidated Survey result" {...a11yProps(4)} />
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
         label="Airway Evaluation" {...a11yProps(5)} />
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
         label="Virtual chat History" {...a11yProps(6)} />
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
         classes={{ root: classes.tablist }}
         label="Anesthesia Clearance and Recommendation" {...a11yProps(7)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        
        {props.rows.map((row) => (
        
       <Column className={classes.response}> 
                <table className={classes.outer} >
                  <Row >
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
                     
                  </Row>
                </table>

                <table className={classes.outertab}>
                  <Row>
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
                     
                     
                  </Row>
                </table>
                <table className={classes.outertab}>
                  <Row>
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
                      
                  </Row>
                </table>
                <table className={classes.outertab}>
                  <Row>
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
                  </Row>
                </table>
                <Row>

                
                <table className={classes.outertab}>
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
                </table>
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
                      </Row>


              </Column> 
        ))}
      </TabPanel>
      <TabPanel value={value} index={1}>
      <PriorSurgery/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <DiagnosesList/>
      </TabPanel>
      <TabPanel value={value} index={3}>

      < ListOfMedications />
      
      </TabPanel>
      <TabPanel value={value} index={4}>

      <SurveyResult/>
      </TabPanel>
      <TabPanel value={value} index={5}>
     < AirwayEvaluation/> 
      </TabPanel>
      <TabPanel value={value} index={6}>
      <VirtualChatHistory/>
      </TabPanel>
      <TabPanel value={value} index={7}>
      <Anesthesia/>
      </TabPanel>

    </div>
  );
}
