import React from "react";
// import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Row, Column } from "simple-flexbox";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const Button = styled.button`
  background-color: #00a0f0;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  /* width: 350px;
  height: 35px; */
  width: 466px;
  height: 50px;
  /* margin: "20px 2px 20px 37px"; */
  margin-top:20px;
  margin-bottom:30px;
  margin-left:70px;
  margin-right:97px;
  /* padding: "6px 0px 7px 0px"; */
  border-radius: 2px;
  padding: 16px 181px 15px;
  
  /* border-color: white; */
  border-style: none;
  &:focus {
    outline: none;
    transition: all 0.3s;
    border: none;
  }
`;

const useStyles = makeStyles((theme) => ({
  indicator: {
    backgroundColor: "white",
  },
  table: {
    border: "1px solid #e8e8e8",
    borderCollapse: "collapse",
    width: "200%",
    // marginBottom:"10px",
    marginLeft: "20px",
    marginRight: "20px",
    
  },
  td: {
    borderLeft: "1px solid #e8e8e8",
    borderCollapse: "collapse",
    // textAlign: "left",
    padding: "10px",
    paddingLeft:"15px",
    paddingRight:"70px",
    // fontSize: "12px",
    fontFamily:"Roboto",
  fontSize: "16px",
  fontWeight:"normal",
  fontStretch:"normal",
  fontStyle:"normal",
  // lineHeight: 3;
  letterSpacing: "normal",
  textAlign: "left",
  color: "#414141",
    
  },
  tdKey: {
    borderLeft: "1px solid #e8e8e8",
    borderCollapse: "collapse",
    // textAlign: "left",
    padding: "10px",
    // fontSize: "12px",
    // fontWeight: "bold",
    fontFamily:"Roboto",
  fontSize: "16px",
  fontWeight: 500,
  fontStretch:"normal",
  fontStyle:"normal",
  // lineHeight: 3.25,
  letterSpacing:"normal",
  textAlign:"left",
  color: "#414141",
  },
  
  divfixing: {
    position: "absolute",
    right: "0",
    marginRight: "18px",
  },
  dialogTitle: {
    fontFamily: "Roboto",
  fontSize: "18px",
  fontWeight:500,
  fontStretch:"normal",
  fontStyle:"normal",
  lineHeight:"normal",
  letterSpacing:"normal",
  textAlign: "left",
  color: "#26292c",

    // fontSize: "14px",
    // fontWeight: "bolder",
    // fontFamily: "roboto",
    marginTop: "10px",
    // paddingTop:"10px",
  },
  titleRow:{
    paddingBottom:"0px",
  },
  // box:{
  //   margin:"31px",
  //   position:"relative",
  //   overflowY:"auto",
  //   bottom:"165px",
  // }
  margin: {
   "@media  (max-width:1024px) and (min-width: 768px)": {
    marginTop: "0px",
    marginBottom: "300px",
  },
},
}));

export default function AlertDialog(props) {
  console.log(props.state.rows, ".........+++..");
  const classes = useStyles();
  const Array = props.state.rows;
  return (
    <div>
      <Dialog className={classes.margin} 
      // style={{marginBottom:"50px"}}
        open={props.state.open}
        onClose={props.handleDialog}
        // className="p-100"
      >
        <Row className={classes.titleRow}>
          <DialogTitle>
            <p className={classes.dialogTitle}>Add Diagnosis</p>
          </DialogTitle>
          <DialogActions>
            <div className={classes.divfixing}>
              <img src="/images/cross.svg" onClick={props.handleDialog} />
            </div>
          </DialogActions>
        </Row>

        <Row>
          <table className={classes.table}>
            {props.state.rows.map((row, i) => (
              <tr>
                <td className={classes.tdKey}>
                  {/* {row.key} */}
                  {Object.keys(row)[0]}
                </td>

                <td className={classes.td}>
                  {row.General}
                  {row.Endocrine}
                  {row.Renal}
                  {row.Pulmonary}
                  {row.Gastrointestinal}
                  {row.Neurological}
                  {row.Hematology}
                  {row.Miscellaneous}
                </td>
              </tr>
            ))}
          </table>
        </Row>
        <Row>
          <Button variant="contained">Add&nbsp;Diagnosis</Button>
        </Row>
      </Dialog>
    </div>
  );
}
