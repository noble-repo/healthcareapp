import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import {
  Typography,
  TableContainer,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  infoContentFixing: {
    width: "16px",
    marginLeft: "374px",
    color: "#5fb7e3",
  },
  infoContentFixing: {
    width: "16px",
    marginLeft: "374px",
    color: "#5fb7e3",
  },
  historyContentFixing: {
    width: "16px",
    marginLeft: "440px",
    color: "#5fb7e3",
  },
  historyContentFixing: {
    width: "16px",
    marginLeft: "440px",
    color: "#5fb7e3",
  },
  surveyContentFixing: {
    width: "16px",
    marginLeft: "445px",
    color: "#5fb7e3",
  },
  surveyContentFixing: {
    width: "16px",
    marginLeft: "445px",
    color: "#5fb7e3",
  },
  pulmonaryContentFixing: {
    width: "16px",
    marginLeft: "427px",
    color: "#5fb7e3",
  },
  pulmonaryContentFixing: {
    width: "16px",
    marginLeft: "427px",
    color: "#5fb7e3",
  },
  renalContentFixing: {
    width: "16px",
    marginLeft: "457px",
    color: "#5fb7e3",
  },
  renalContentFixing: {
    width: "16px",
    marginLeft: "457px",
    color: "#5fb7e3",
  },
  anesthesia: {
    fontSize: "12px",
    fontWeight: "bold",
    backgroundColor: "#e8f5fe",
    padding: "5px",
    width: "95%",
  },

  tabPanel: {
    width: "100%",
  },

  heading: {
    fontSize: "12px",
    fontWeight: "bold",
    backgroundColor: "#e8f5fe",
    padding: "5px",
    color: "#414141",
  },
  accordionSummary: {
    backgroundColor: "#e8f5fe",
    height: "30px",
    minHeight: "10px",
  },

  styleTableContents: {
    fontWeight: "bold",
    fontSize: "16px",
    fontFamily: "roboto",
    padding: "10px 100px",
    width: "430px",
    color: "#222222",
  },
  styleTableCell: {
    fontSize: "16px",
    padding: 0,
    color: "#414141",
    fontFamily: "roboto",
    width: "29%",
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

  span: {
    color: "#000",
  },
}));

export default function InformationComponent(props) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.tabPanel}>
        <Accordion>
          <AccordionSummary className={classes.accordionSummary}>
            <Typography className={classes.heading}>
              General Patient Information
            </Typography>
            {props.state.isInformationContent ? (
              <span onClick={() => props.toggleState("isInformationContent")}>
                <RemoveIcon className={classes.infoContentFixing} />{" "}
              </span>
            ) : (
              <span onClick={() => props.toggleState("isInformationContent")}>
                <AddIcon className={classes.infoContentFixing} />{" "}
              </span>
            )}
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <container>
                <TableContainer>
                  <table>
                    {props.state.generalPatientInformation.map(
                      (generalPatientInformations, index) => (
                        <TableBody>
                          <TableRow>
                            <TableCell className={classes.styleTableCell}>
                              {" "}
                              Patient Height:{" "}
                            </TableCell>
                            <TableCell className={classes.styleTableContents}>
                              {" "}
                              {generalPatientInformations.patientHeight}
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className={classes.styleTableCell}>
                              {" "}
                              Patient Weight:{" "}
                            </TableCell>
                            <TableCell className={classes.styleTableContents}>
                              {" "}
                              {generalPatientInformations.patientWeight}
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className={classes.styleTableCell}>
                              {" "}
                              Patient BMI(calculated){" "}
                            </TableCell>
                            <TableCell className={classes.styleTableContents}>
                              {" "}
                              {generalPatientInformations.PatientBmi}
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className={classes.styleTableCell}>
                              {" "}
                              Gender:{" "}
                            </TableCell>
                            <TableCell className={classes.styleTableContents}>
                              {" "}
                              {generalPatientInformations.gender}
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className={classes.styleTableCell}>
                              {" "}
                              Date of Birth:{" "}
                            </TableCell>
                            <TableCell className={classes.styleTableContents}>
                              {" "}
                              {generalPatientInformations.dateOfBirth}
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className={classes.styleTableCell}>
                              {" "}
                              Age calculated:{" "}
                            </TableCell>
                            <TableCell className={classes.styleTableContents}>
                              {" "}
                              {generalPatientInformations.ageCalculated}
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className={classes.styleTableCell}>
                              {" "}
                              Education Level:{" "}
                            </TableCell>
                            <TableCell className={classes.styleTableContents}>
                              {" "}
                              {generalPatientInformations.educationLevel}
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className={classes.styleTableCell}>
                              {" "}
                              First Time Surgery?{" "}
                            </TableCell>
                            <TableCell className={classes.styleTableContents}>
                              {" "}
                              {generalPatientInformations.firstTimeSurgery}
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className={classes.styleTableCell}>
                              {" "}
                              Any allergies to medications?{" "}
                            </TableCell>
                            <TableCell className={classes.styleTableContents}>
                              {" "}
                              {
                                generalPatientInformations.anyAllergiesToMedications
                              }
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      )
                    )}
                  </table>
                </TableContainer>
              </container>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary className={classes.accordionSummary}>
            <Typography className={classes.heading}>
              Surgical History
            </Typography>
            {props.state.isSurgicalHistory ? (
              <span onClick={() => props.toggleState("isSurgicalHistory")}>
                <RemoveIcon className={classes.historyContentFixing} />{" "}
              </span>
            ) : (
              <span onClick={() => props.toggleState("isSurgicalHistory")}>
                <AddIcon className={classes.historyContentFixing} />{" "}
              </span>
            )}
          </AccordionSummary>
          <AccordionDetails>
            <Typography></Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary className={classes.accordionSummary}>
            <Typography className={classes.heading}>Cardiac Survey</Typography>
            {props.state.isCardiacSurvey ? (
              <span onClick={() => props.toggleState("isCardiacSurvey")}>
                <RemoveIcon className={classes.surveyContentFixing} />{" "}
              </span>
            ) : (
              <span onClick={() => props.toggleState("isCardiacSurvey")}>
                <AddIcon className={classes.surveyContentFixing} />{" "}
              </span>
            )}
          </AccordionSummary>
        </Accordion>
        <Accordion>
          <AccordionSummary className={classes.accordionSummary}>
            <Typography className={classes.heading}>
              Pulmonary Survey
            </Typography>
            {props.state.isPulmonarySurvey ? (
              <span onClick={() => props.toggleState("isPulmonarySurvey")}>
                <RemoveIcon className={classes.pulmonaryContentFixing} />{" "}
              </span>
            ) : (
              <span onClick={() => props.toggleState("isPulmonarySurvey")}>
                <AddIcon className={classes.pulmonaryContentFixing} />{" "}
              </span>
            )}
          </AccordionSummary>
        </Accordion>
        <Accordion>
          <AccordionSummary className={classes.accordionSummary}>
            <Typography className={classes.heading}>Renal Survey</Typography>
            {props.state.isRenalSurvey ? (
              <span onClick={() => props.toggleState("isRenalSurvey")}>
                <RemoveIcon className={classes.renalContentFixing} />{" "}
              </span>
            ) : (
              <span onClick={() => props.toggleState("isRenalSurvey")}>
                <AddIcon className={classes.renalContentFixing} />{" "}
              </span>
            )}
          </AccordionSummary>
        </Accordion>
      </div>
    </div>
  );
}