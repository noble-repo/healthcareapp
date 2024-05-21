import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "react-tabs/style/react-tabs.css";

import RadioButtonUncheckedOutlinedIcon from "@material-ui/icons/RadioButtonUncheckedOutlined";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Switchicon from "../switch";
import {
  Typography,
  TableContainer,
  CardContent,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Checkbox,
  Card,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  select: {
    paddingLeft: "35px",
    borderBottom: "solid 1px #d5d5d5",
  },

  box: {
    width: "110px",
    fontSize: "12px",
    fontFamily: "Roboto",
    paddingBottom: "120px",
    paddingTop: "40px",
    color: "grey",
    marginLeft: "15px",
    height: "40px",
    position: "center",
    borderRadius: "4px",
    border: "solid 1px #e5e5e5",
    backgroundColor: "white",
    marginTop: "8px",
    alignItems: "center",
    textAlign: "center",
  },
  checkedIcon: {
    backgroundColor: "white",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 10,
      height: 10,
      backgroundImage: 'url("images/Group 22.svg")',
      backgroundSize: "cover",
      content: '""',
    },
  },

  anesthesia: {
    fontSize: "12px",
    fontWeight: "bold",
    backgroundColor: "#e8f5fe",
    padding: "5px",
    width: "95%",
  },
  anesthesiaClearanceDiv: {
    marginLeft: "10px",
  },

  CardContent: {
    padding: "0px",
    paddingBottom: "0px",
  },
  docChecklistDiv: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
  },
  checklistDoc: {
    minWidth: "10%",
    height: "225px",
    width: "25%",
    margin: "15px",
    borderRadius: 0,
    backgroundColor: "#F8F8F8",
  },
  checkBox: {
    color: "#29E224",
    padding: "2px !important",
  },
  tabPanel: {
    width: "95%",
  },

  heading: {
    fontSize: "12px",
    fontWeight: "bold",
    backgroundColor: "#e8f5fe",
    padding: "5px",
  },
  accordionSummary: {
    backgroundColor: "#e8f5fe",
    height: "30px",
    minHeight: "10px",
  },

  labClearanceDiv: {
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "#d4d4d4",
    backgroundColor: "#fff",
    height: "40px",
    fontSize: "12px",
    fontFamily: "roboto",
    fontWeight: "bold",
    marginTop: "15px",
    color: "#181c1b",
  },
  labClearance: {
    paddingLeft: "10px",
    borderColor: "#d3d3d3",
  },
  LocTeethHead: {
    padding: "5px",
    paddingRight: "25px",
    backgroundColor: "#e8f5fe",
    fontSize: "12px",
    fontWeight: "600",
  },

  patientImage: {
    width: "50px",
    height: "50px",
    borderRadius: "50px",
    paddingRight: "10px",
    paddingLeft: "0px",
  },

  medicine: {
    fontWeight: "bold",
    fontSize: "16px",
    padding: "5px",
    paddingLeft: "10px",
    fontFamily: "roboto",
    color: "#414141",
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

  switch: {
    marginTop: "10px",
  },

  AnesRecoDiv: {
    height: "100%",
    width: "95%",
    fontSize: "16px",
    fontWeight: "bold",
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "#d4d4d4",
    padding: "15px",
    marginTop: "5px",
    color: "#181c1b",
  },
  span: {
    color: "#000",
  },
}));

export default function AnaesthesiaComponent(props) {
  const classes = useStyles();

  return (
    <div>
      <container>
        <TableContainer>
          <div className={classes.anesthesiaClearanceDiv}>
            <table className={classes.tabPanel}>
              <TableHead className={classes.heading}>
                <TableRow>
                  <TableCell className={classes.medicine}>
                    Surgery Clearance
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <Switchicon className={classes.switch} />
              </TableBody>
            </table>{" "}
            <br></br>
            <table className={classes.anesthesia}>
              <TableHead>
                <TableRow>
                  <TableCell className={classes.medicine}>
                    Anesthesiologist Recommendations
                  </TableCell>
                </TableRow>
              </TableHead>
            </table>
            <div className={classes.AnesRecoDiv}>
              {props.anesthesiaClearanceRecommandation.map(
                (anesthesiaClearanceRecommandations, index) => (
                  <p>
                    {
                      anesthesiaClearanceRecommandations.anesthesiologistRecommendation
                    }
                  </p>
                )
              )}
            </div>{" "}
            <br></br>
            <table className={classes.anesthesia}>
              <TableHead>
                <TableRow>
                  <TableCell className={classes.medicine}>
                    Document Checklist
                  </TableCell>
                </TableRow>
              </TableHead>
            </table>
            <div className={classes.docChecklistDiv}>
              {props.state.row && props.state.row.length
                ? props.state.row.map((cell) => (
                    <Card className={classes.checklistDoc}>
                      <CardContent className={classes.CardContent}>
                        {cell.imageUrl === "/images/advil.png" ? (
                          <div className={classes.box}>{cell.imageUrl}</div>
                        ) : (
                          <div className={classes.box}>Document Preview</div>
                        )}
                        <Typography>
                          <div className={classes.labClearanceDiv}>
                            <form className={classes.labClearance}>
                              Lab clearance{" "}
                              <container className={classes.checkBox}>
                                <Checkbox
                                  size="small"
                                  onChange={props.checkedDocument}
                                  disableRipple
                                  icon={<RadioButtonUncheckedOutlinedIcon />}
                                  checkedIcon={
                                    <CheckCircleIcon
                                      className={classes.checkBox}
                                    />
                                  }
                                />
                              </container>
                            </form>
                          </div>
                        </Typography>
                      </CardContent>
                    </Card>
                  ))
                : ""}
            </div>
          </div>
        </TableContainer>
      </container>
    </div>
  );
}
