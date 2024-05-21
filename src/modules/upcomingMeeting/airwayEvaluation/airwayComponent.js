import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "react-tabs/style/react-tabs.css";

import clsx from "clsx";
import {
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Checkbox,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  icon: {
    borderRadius: 1,
    width: 10,
    height: 10,
    paddingRight: "10px",
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "white",
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

  checkBox: {
    color: "#29E224",
    padding: "2px !important",
  },
  tabPanel: {
    width: "95%",
  },

  intercisorHead: {
    padding: "5px",
    paddingRight: "80px",
    backgroundColor: "#e8f5fe",
    fontSize: "12px",
    fontWeight: "600",
  },

  LocTeethHead: {
    padding: "5px",
    paddingRight: "25px",
    backgroundColor: "#e8f5fe",
    fontSize: "12px",
    fontWeight: "600",
  },

  malScoreTable: {
    marginTop: "25px",
    marginLeft: "45px",
  },
  malScoreHead: {
    padding: "5px",
    paddingRight: "55px",
    backgroundColor: "#e8f5fe",
    fontSize: "12px",
    fontWeight: "600",
    color: "#414141",
  },
  mouthOpeningHead: {
    padding: "5px",
    paddingRight: "33px",
    backgroundColor: "#e8f5fe",
    fontSize: "12px",
    fontWeight: "600",
  },

  malScoreBody: {
    padding: "5px",
    fontSize: "12px",
    fontWeight: "550",
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
  teethImageDiv: {
    marginTop: "30px",
    height: "35%",
    width: "35%",
  },
  teethImage: {
    width: "100%",
  },
  teethCondition: {
    marginTop: "30px",
    display: "flex",
    alignItems: "center",
    fontSize: "12px",
    fontWeight: "bold",
  },

  missing: {
    backgroundColor: "rgba(255, 0, 186, 0.5)",
    height: "13px",
    width: "13px",
    border: "solid 1px #ff00ba",
    margin: "0 8px",
    color: "#414141",
    fontSize: "15px",
    fontFamily: "roboto",
  },
  loose: {
    backgroundColor: "rgba(255, 70, 44, 0.5)",
    height: "13px",
    width: "13px",
    border: "solid 1px #ff462c",
    margin: "0 8px",
    fontSize: "15px",
    fontFamily: "roboto",
  },
  chipped: {
    backgroundColor: "rgba(19, 106, 252, 0.5)",
    height: "13px",
    width: "13px",
    border: "solid 1px #136afc",
    margin: "0 8px",
    fontSize: "15px",
    fontFamily: "roboto",
  },

  thyromentalHead: {
    padding: "5px",
    paddingRight: "35px",
    backgroundColor: "#e8f5fe",
    fontSize: "12px",
    fontWeight: "600",
  },

  span: {
    color: "#000",
  },
  divStyle: {
    display: "flex",
  },
}));

export default function AirwayComponent(props) {
  const classes = useStyles();

  return (
    <div className={classes.divStyle}>
      <div className={classes.teethImageDiv}>
        <img className={classes.teethImage} src="/Teeth.jpg" alt="teeth" />
        <div className={classes.teethCondition}>
          <div className={classes.missing}></div>Missing
          <div className={classes.loose}></div>Loose
          <div className={classes.chipped}></div>Chipped
        </div>
      </div>

      <div className={classes.divStyle}>
        <div>
          <table className={classes.malScoreTable}>
            <TableHead>
              <TableRow>
                <TableCell className={classes.malScoreHead}>
                  Mallampatti Score
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell className={classes.malScoreBody}>
                  {" "}
                  <Checkbox
                    // checkedIcon={
                    //   <span
                    //     className={clsx(classes.icon, classes.checkedIcon)}
                    //   />
                    // }
                    checked={props.state.mallampatiScore === 'I'}
                    icon={<span className={classes.icon} />}
                  />
                  I
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.malScoreBody}>
                  {" "}
                  <Checkbox
                    // checkedIcon={
                    //   <span
                    //     className={clsx(classes.icon, classes.checkedIcon)}
                    //   />
                    // }
                    checked={props.state.mallampatiScore === 'II'}
                    icon={<span className={classes.icon} />}
                  />
                  II
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.malScoreBody}>
                  {" "}
                  <Checkbox
                    // checkedIcon={
                    //   <span
                    //     className={clsx(classes.icon, classes.checkedIcon)}
                    //   />
                    // }
                    checked={props.state.mallampatiScore === 'III'}
                    icon={<span className={classes.icon} />}
                  />
                  III
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.malScoreBody}>
                  {" "}
                  <Checkbox
                    // checkedIcon={
                    //   <span
                    //     className={clsx(classes.icon, classes.checkedIcon)}
                    //   />
                    // }
                    checked={props.state.mallampatiScore === 'IV'}
                    icon={<span className={classes.icon} />}
                  />
                  IV
                </TableCell>
              </TableRow>
            </TableBody>
          </table>
          <table className={classes.malScoreTable}>
            <TableHead>
              <TableRow>
                <TableCell className={classes.thyromentalHead}>
                  Thyromental Distance
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell className={classes.malScoreBody}>
                  {" "}
                  <span>
                    {" "}
                    <Checkbox
                      // checkedIcon={
                      //   <span
                      //     className={clsx(classes.icon, classes.checkedIcon)}
                      //   />
                      // }
                      checked={props.state.thyromentalDistance === '>6.5'}
                      icon={<span className={classes.icon} />}
                    />
                    &gt;6.5 cm
                  </span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.malScoreBody}>
                  <span>
                    {" "}
                    <Checkbox
                      // checkedIcon={
                      //   <span
                      //     className={clsx(classes.icon, classes.checkedIcon)}
                      //   />
                      // }
                      checked={props.state.thyromentalDistance === '<6.5'}
                      icon={<span className={classes.icon} />}
                    />
                    &lt;6.5 cm
                  </span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.malScoreBody}>
                  {" "}
                  <Checkbox
                    // checkedIcon={
                    //   <span
                    //     className={clsx(classes.icon, classes.checkedIcon)}
                    //   />
                    // }
                    checked={props.state.thyromentalDistance === '6.0-6.5'}
                    icon={<span className={classes.icon} />}
                  />
                  6.0-6.5 cm
                </TableCell>
              </TableRow>
            </TableBody>
          </table>
          <table className={classes.malScoreTable}>
            <TableHead>
              <TableRow>
                <TableCell className={classes.intercisorHead}>
                  Intercisor Gap
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell className={classes.malScoreBody}>
                  {" "}
                  <Checkbox
                    // checkedIcon={
                    //   <span
                    //     className={clsx(classes.icon, classes.checkedIcon)}
                    //   />
                    // }
                    checked={props.state.intercisorGap === '>4'}
                    icon={<span className={classes.icon} />}
                  />
                  &gt;4 cm
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.malScoreBody}>
                  {" "}
                  <Checkbox
                    // checkedIcon={
                    //   <span
                    //     className={clsx(classes.icon, classes.checkedIcon)}
                    //   />
                    // }
                    checked={props.state.intercisorGap === '<4'}
                    icon={<span className={classes.icon} />}
                  />
                  &lt;4 cm
                </TableCell>
              </TableRow>
            </TableBody>
          </table>
        </div>

        <div>
          <table className={classes.malScoreTable}>
            <TableHead>
              <TableRow>
                <TableCell className={classes.malScoreHead}>
                  Neck Room
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell className={classes.malScoreBody}>
                  <Checkbox
                    // checkedIcon={
                    //   <span
                    //     className={clsx(classes.icon, classes.checkedIcon)}
                    //   />
                    // }
                    checked={props.state.neckRom === 'full'}
                    icon={<span className={classes.icon} />}
                  />
                  Full
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.malScoreBody}>
                  {" "}
                  <Checkbox
                    // checkedIcon={
                    //   <span
                    //     className={clsx(classes.icon, classes.checkedIcon)}
                    //   />
                    // }
                    checked={props.state.neckRom === 'limited'}
                    icon={<span className={classes.icon} />}
                  />
                  Limited
                </TableCell>
              </TableRow>
            </TableBody>
          </table>
          <table className={classes.malScoreTable}>
            <TableHead>
              <TableRow>
                <TableCell className={classes.mouthOpeningHead}>
                  {" "}
                  Mouth Opening
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell className={classes.malScoreBody}>
                  {" "}
                  <Checkbox
                    // checkedIcon={
                    //   <span
                    //     className={clsx(classes.icon, classes.checkedIcon)}
                    //   />
                    // }
                    checked={props.state.mouthOpening === '>3FB'}
                    icon={<span className={classes.icon} />}
                  />
                  &lt;3 FB
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.malScoreBody}>
                  {" "}
                  <Checkbox
                    // checkedIcon={
                    //   <span
                    //     className={clsx(classes.icon, classes.checkedIcon)}
                    //   />
                    // }
                    checked={props.state.mouthOpening === '<3FB'}
                    icon={<span className={classes.icon} />}
                  />
                  &gt;3 FB
                </TableCell>
              </TableRow>
            </TableBody>
          </table>
          <table className={classes.malScoreTable}>
            <TableHead>
              <TableRow>
                <TableCell className={classes.LocTeethHead}>
                  Location of Teeth
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell className={classes.malScoreBody}>
                  {" "}
                  <Checkbox
                    // checkedIcon={
                    //   <span
                    //     className={clsx(classes.icon, classes.checkedIcon)}
                    //   />
                    // }
                    checked={props.state.locationOfTeeth === 'Overgap'}
                    icon={<span className={classes.icon} />}
                  />
                  Overgap
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.malScoreBody}>
                  {" "}
                  <Checkbox
                    // checkedIcon={
                    //   <span
                    //     className={clsx(classes.icon, classes.checkedIcon)}
                    //   />
                    // }
                    checked={props.state.locationOfTeeth === 'Undergap'}
                    icon={<span className={classes.icon} />}
                  />
                  Undergap
                </TableCell>
              </TableRow>
            </TableBody>
          </table>
        </div>
      </div>
    </div>
  );
}
