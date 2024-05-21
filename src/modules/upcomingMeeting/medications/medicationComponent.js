import React from "react";
import VideoScreen from "../vCallScreen";
import { makeStyles } from "@material-ui/core/styles";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import {
  TableContainer,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  tabPanel: {
    width: "95%",
  },

  heading: {
    fontSize: "12px",
    fontWeight: "bold",
    backgroundColor: "#e8f5fe",
    padding: "5px",
  },

  medicine: {
    fontWeight: "bold",
    fontSize: "12px",

    padding: "5px",
    paddingLeft: "15px",
    color: "#414141",
    fontFamily: "roboto",
  },

  patientTablist: {
    fontSize: "12px",
    fontWeight: "bold",
    paddingLeft: "0px",
  },
  patientTab: {
    borderRadius: "0px",
  },
  root: {
    display: "flex",
    marginTop: "20px",
  },
  table: {
    width: "450px",
  },
  tableRow: {
    fontSize: "12px",
    color: "#808080",
  },
  tableData: {
    width: "100px",
  },
}));

export default function MedicationsComponent(props) {
  const classes = useStyles();

  return (
    <div>
      <container>
        <TableContainer>
          <table className={classes.tabPanel}>
            <TableHead className={classes.heading}>
              <TableRow>
                <TableCell className={classes.medicine}>
                  {" "}
                  Medicine Photo
                </TableCell>
                <TableCell className={classes.medicine}>
                  {" "}
                  Name of Medication
                </TableCell>
                <TableCell className={classes.medicine}> Dosage</TableCell>
                <TableCell className={classes.medicine}> Frequency</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.listOfMedications.map((listOfMedication, index) => (
                <TableRow>
                  <TableCell>{listOfMedication.MedicinePhoto}</TableCell>
                  <TableCell className={classes.medicine}>
                    {listOfMedication.NameOfMedication}
                  </TableCell>
                  <TableCell className={classes.medicine}>
                    {listOfMedication.Dosage}
                  </TableCell>
                  <TableCell className={classes.medicine}>
                    {listOfMedication.Frequency}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </table>
        </TableContainer>
      </container>
    </div>
  );
}
