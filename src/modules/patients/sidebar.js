import React from "react";
import { Column } from "simple-flexbox";
import { makeStyles } from "@material-ui/core/styles";

export default function Sidebar(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    sidebar: {
      width: "220px",
      backgroundColor: "#e8f5fe",
      // height: "580px",
      paddingLeft: "15px",
      paddingRight: "15px",
      marginTop:"33px",
      height:"100vh",
      minHeight: "100%",
overflowY:"auto",
    },
    fontfixing: {
      fontSize: "18px",
      fontFamily: "Roboto!important",
      fontWeight: "bold",
      marginTop: "10px",
      marginLeft: "0px",
      color:"#26292c",
    },
    fontfixingchild: {
      fontFamily: "Roboto!important",
      fontSize: "14px",
      color: "#414141",
    fontWeight: "500",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    },
    fontfixingchildDate: {
      fontFamily: "Roboto!important",
      fontSize: "14px",
      fontWeight: "500",
      marginTop: "15px",
    },
    marginTop15: {
      marginTop: "18px",
    },
    selectFixing: {
      height: "30px",
      border: "none",
      fontSize: "16px",
      color: "#414141",
      outline: "none",
      transition: "all 0.3s",
      border: "none",
    },
  }));
  const classes = useStyles();
  return (
    <div className={classes.sidebar}>
      <Column>
        {" "}
        <span className={classes.fontfixing}>Filter Patients</span>
      </Column>
      <Column className={classes.marginTop15}>
        <span className={classes.fontfixingchild}>&nbsp;Surgery Clearance</span>
        <select class="ui dropdown" className={classes.selectFixing}>
          <option value=""style= {{fontFamily: "Roboto!important"}}>&nbsp;All</option>
          <option value="1" style= {{fontFamily: "Roboto!important"}}>&nbsp;Yes</option>
          <option value="0" style= {{fontFamily: "Roboto!important"}}>&nbsp;No</option>
        </select>
      </Column>
      <Column className={classes.marginTop15}>
        <span className={classes.fontfixingchild}>&nbsp;Surgery Type</span>
        <select class="ui dropdown" className={classes.selectFixing}>
          <option value="" style= {{fontFamily: "Roboto!important"}}>&nbsp;Select</option>
          <option value="1" style= {{fontFamily: "Roboto!important"}}>&nbsp;Rotator Cuff Repair</option>
          <option value="0" style= {{fontFamily: "Roboto!important"}}>&nbsp;ACL Reconstruction</option>
        </select>
      </Column>
      <Column className={classes.marginTop15}>
        <span className={classes.fontfixingchild}>&nbsp;Survey Status</span>
        <select class="ui dropdown " className={classes.selectFixing}>
          <option value="" style= {{fontFamily: "Roboto!important"}}>&nbsp;All</option>
          <option value="1" style= {{fontFamily: "Roboto!important"}}>&nbsp;Completed</option>
          <option value="0" style= {{fontFamily: "Roboto!important"}}>&nbsp;Pending</option>
        </select>
      </Column>
      <Column className="m-t-15 ">
        <span className={classes.fontfixingchildDate}>&nbsp;Surgery Date</span>
        <select class="ui dropdown" className={classes.selectFixing}>
          <option value="" style= {{fontFamily: "Roboto!important"}}>&nbsp;Current Month</option>
          <option value="1" style= {{fontFamily: "Roboto!important"}}>&nbsp;15-Aug-2020</option>
          <option value="0" style= {{fontFamily: "Roboto!important"}}>&nbsp;09-01-2020</option>
        </select>
      </Column>
    </div>
  );
}
