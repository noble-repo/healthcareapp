import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

const Button = styled.button`
  background-color: #00a0f0;
  width: 162px;
  height: 48px;
  border-radius: 2px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  padding-left: 10px;
  color: #ffffff;
  border-color: white;
  border-style: none;
  position: relative;
  float: right;
  margin-right: -220px;
  &:focus {
    outline: none;
    transition: all 0.3s;
    border: none;
  }
  @media  (max-width:1024px) and (min-width: 768px) {
    display:none;
    
    
  
}

`;
const DiagnosesButton = styled.button`
display:none
@media  (max-width:1024px) and (min-width: 768px) {
  display:block
background-color: #00a0f0;
  width: 162px;
  height: 48px;
  border-radius: 2px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  padding-left: 10px;
  color: #ffffff;
  border-color: white;
  border-style: none;
  &:focus {
    outline: none;
    transition: all 0.3s;
    border: none;
  }
}`;


const useStyles = makeStyles((theme) => ({
  indicator: {
    backgroundColor: "white",
  },

  table: {
    borderCollapse: "collapse",
    marginTop: 3,
    marginBottom: 15,
    marginLeft: "-20px",
    width: "1060px",
    border: 0,
    "@media  (max-width:1024px) and (min-width: 768px)": {
      width:"630px"
      
      
    
  }
  },

  bgColor: {
    backgroundColor: "#e6f2ff",
  },

  bgColorChild: {
    backgroundColor: "#fafafa;",
  },
  img: {
    float: "right",
    marginRight: "20px",
  },
  btn: {
    backgroundColor: "#00a0f0",
    width: "117px",
    height: "35px",
    borderRadius: "2px",
    color: "white",
    fontSize: "11px",
    borderColor: "white",
    borderStyle: "none",
    position: "relative",
    float: "right",
    marginRight: "-220px",
    outline: "none",
    transition: "all 0.3s",
    border: "none",
  },
  add: {
    width: "16px",
    height: "33px",
    marginRight: "12px",
  },
  fontfixing: {
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: 500,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 1.75,
    letterSpacing: "normal",
    textAlign: "left",
    color: "#414141",
  },
  fontfixingchild: {
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 1.75,
    letterSpacing: "normal",
    textAlign: "left",
    color: "#181c1b",
  },
  divfixing: {
    position: "relative",
    top: "65px",
    "@media  (max-width:1024px) and (min-width: 768px)": {
     top:"0px",
      
      
    
  }
  },
  divstyle: {
    width: "60vw",
  },
}));

export default function DiagnosesList(props) {
  console.log(props, "................");

  const classes = useStyles();
  return (
    <div>
      <div className={classes.divstyle}>
        <Button variant="contained" onClick={props.handleDialog}>
          {/* <img className={classes.add} src="/images/addIcon.svg" /> */}
         + Add Diagnosis
        </Button>
      </div>

      <div className={classes.divfixing}>
        <table className={classes.table} cellPadding="5">
          <tr className={classes.bgColor}>
            <td className={classes.fontfixing}>General</td>
          </tr>
          {props.state.General.map((row) => (
            <tr className={classes.bgColorChild}>
              <td className={classes.fontfixingchild}>
                {row}
                <img className={classes.img} src="/images/delete_transparent_icon.svg" />
              </td>
            </tr>
          ))}
        </table>

        <table className={classes.table} cellPadding="5">
          <tr className={classes.bgColor}>
            <td className={classes.fontfixing}>Cardiovascular</td>
          </tr>
          {props.state.cardioVascular.map((row) => (
            <tr className={classes.bgColorChild}>
              <td className={classes.fontfixingchild}>
                {row}
                <img className={classes.img} src="/images/delete_transparent_icon.svg" />
              </td>
            </tr>
          ))}
        </table>

        <table className={classes.table} cellPadding="5">
          <tr className={classes.bgColor}>
            <td className={classes.fontfixing}>Pulmonary</td>
          </tr>
          {props.state.Pulmonary.map((row) => (
            <tr className={classes.bgColorChild}>
              <td className={classes.fontfixingchild}>
                {row}
                <div style={{ marginTop: "-10px" }}>
                  <img className={classes.img} src="/images/delete_transparent_icon.svg" />
                </div>
              </td>
            </tr>
          ))}
        </table>
        <DiagnosesButton variant="contained" onClick={props.handleDialog}>
          {/* <img className={classes.add} src="/images/addIcon.svg" /> */}
         + Add Diagnosis
        </DiagnosesButton>
      </div>
    </div>
  );
}
