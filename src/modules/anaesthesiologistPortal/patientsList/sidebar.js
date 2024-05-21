import React from "react";
import { Column } from "simple-flexbox";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";


// import classes from '*.module.css';
const option  = styled.option`
width: 19px;
height: 19px;
margin: 0 173px 0 0;
font-family: Roboto;
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
color: #414141;
`;


export default function Sidebar(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    sidebar: {
      width: "270px",
      marginTop:"33px",
      backgroundColor: "#e8f5fe",
      height: "100vh",
      paddingLeft: "15px",
      paddingRight: "15px",
    },
    fontfixing: {
      width: "125px",
      height: "21px",
      marginTop: "14px",
      fontFamily: "Roboto!important",
      fontSize: "18px",
      fontWeight: "bold",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "normal",
      letterSpacing: "normal",
      color: "#26292c",
    },
    fontfixingchild: {
      height: "18px",
     
      fontFamily: "Roboto!important",
      fontSize: "15px",
      fontWeight: "500",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "normal",
      letterSpacing: "normal",
      color: "#414141",
    },
    marginTop15: {
      marginTop: "15px",
    },
    selectFixing: {
      height: "40px",
      width: "230px",
      border: "none",
      fontSize:"16px",
      fontFamily:"Roboto-Regular",
      color:"#414141",
      "&:focus":{
        borderColor:"#bdbdbd",
        outline:"none",
    borderRadius: "5px",
    transition: "all 0.3s",
        }
    },
  }));
  console.log(props, "sidebar props");
  const classes = useStyles();
  return (
    <div className={classes.sidebar}>
      <Column>
        {" "}
        <span className={classes.fontfixing}>Filter Patients</span>
      </Column>
      <br/>
      <Column className={classes.marginTop15}>
        <span className={classes.fontfixingchild}>Surgery Clearance</span>
        <select class="ui dropdown" className={classes.selectFixing} value={props.state.selectedClinic}  
                                   onChange={(event) => props.onSelect(event.target.value)}>
          <option  value="" disabled selected hidden> Show all  </option>
        {props.state.options5 && props.state.options5.length > 0 &&

props.state.options5.map((data, index) => ( <option>  {props.state.options5}  </option>))}
{props.state.options6 && props.state.options6.length > 0 &&

props.state.options6.map((data, index) => ( <option>  {props.state.options6}  </option>))}

        </select>
      </Column>
      <Column className={classes.marginTop15}>
        <span className={classes.fontfixingchild}>Surgery Type</span>

        <select class="ui dropdown" className={classes.selectFixing} value={props.state.search}  
                                   onChange={(event) => props.onSelectUser(event.target.value)} >
        <option  value="" disabled selected hidden> Show all  </option>
           {/* {props.state.patients && props.state.patients.length > 0 &&

props.state.patients.map((data, index) => ( <option> {data.clinicType || ""}  </option>))}
          */}

{props.state.options && props.state.options.length > 0 &&

props.state.options.map((data, index) => ( <option > {props.state.options} </option>
))}

{props.state.options2 && props.state.options2.length > 0 &&

props.state.options2.map((data, index) => ( <option > {props.state.options2} </option>
))}
        </select>
      </Column>
      <Column className={classes.marginTop15}>
        <span className={classes.fontfixingchild}>Survey Status</span>

        <select class="ui dropdown " className={classes.selectFixing } value={props.state.selectedStatus}  
                                   onChange={(event) => props.onSelectStatus(event.target.value)}  >
                                       <option  value="" disabled selected hidden >  Show all</option>
           {props.state.options3 && props.state.options3.length > 0 &&

props.state.options3.map((data, index) => ( <option > {props.state.options3} </option>
))}

{props.state.options4 && props.state.options4.length > 0 &&

props.state.options4.map((data, index) => ( <option > {props.state.options4} </option>
))}
        
        </select>
      </Column>
      <Column className={classes.marginTop15}>
        <span className={classes.fontfixingchild}>Surgery Date</span>

        <select class="ui dropdown" className={classes.selectFixing}>
          <option value="">Current Month</option>
          <option value="1">15-Aug-2020</option>
          <option value="0">09-01-2020</option>
        </select>
      </Column>
    </div>
  );
}
