import React from "react";
import { Row, Column } from "simple-flexbox";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.svg`
  fill: none;
  stroke: #00a0f0;
  stroke-width: 4px;
  margin-bottom: 10px;
`;
const HiddenCheckbox = styled.input.attrs({type: "checkbox"})`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
const StyledCheckbox = styled.div`
width: 16px;
height: 16px;
margin: 24.5px 7px 13px 0;
border-radius: 2px;
-webkit-filter: blur(10px);
filter: blur(10px);
border: solid 1px #979797;
background-color: #ffffff;

  background: ${(props) => (props.checked||props.checked2 ? "#ffffff" : "white")};
  border-radius: 2px;
  transition: all 150ms;
  border: 1px solid #979797;

  ${Icon} {
    visibility: ${(props) => (props.checked||props.checked2 ? "visible" : "hidden")};
  }
`;
const UnOrderedList = styled.ul`
margin: 0;
padding: 0;
position: absolute;
  z-index: 100000;
  top: 162px;
    width: 16%;
    left: 12px;

 li {
background: white;
list-style: none;
border-bottom: 1px solid #d8d8d8;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.14);
margin: 0;
padding: 2px;
transition: background 0.2s;
display: flex;
justify-content: space-between;
text-transform: capitalize;
}
`
const Checkbox = ({className, checked, ...props}) => (
    <CheckboxContainer className={className}>
        <HiddenCheckbox checked={checked}  {...props} />
        <StyledCheckbox checked={checked} >
            <Icon viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12"/>
            </Icon>
        </StyledCheckbox>
    </CheckboxContainer>
);

// import classes from '*.module.css';

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
      fontSize: "18px",
      fontFamily: "Roboto!important",
      fontWeight: "bold",
      marginTop: "15px",
      marginLeft: "0px",
      color:"#26292c",
      width: "46px",
  height: "22px",


    },
    fontfixingchild: {
      fontFamily: "Roboto!important",
      fontSize: "15px",
      fontWeight: "bold",
      color:"#414141"
    },
    marginTop15: {
      marginTop: "15px",
    },
    selectFixing: {
      height: "30px",
      border: "none",
      fontSize:"16px",
      fontFamily:"Roboto!important",
      color:"#414141",
      "&:focus":{
        borderColor:"#bdbdbd",
        outline:"none",
    borderRadius: "5px",
    transition: "all 0.3s",
        }
    },
    marginTop15: {
      marginTop: "18px",
    },
    fontfixingchild1: {
      fontFamily: "Roboto!important",
      fontSize: "14px",
      fontWeight: "normal",
      width: "160px",
height: "17px",
marginTop: "-3px",

    },
    fontfixingchild2: {
      fontFamily: "Roboto!important",
      fontSize: "14px",
      fontWeight: "normal",
      width: "170px",
height: "17px",
marginTop: "-3px",

    },
  }));
  console.log( "2354" , props.state.search);
  const classes = useStyles();
  const Checkbox = props => (
    <input type="checkbox" {...props} />
  )
  console.log( "props.state" , props.state);
  return (
    <div className={classes.sidebar}>
      
      <Column>
        {" "}
        <span className={classes.fontfixing}>Filter</span>
      </Column>
     
      <Column className={classes.marginTop15}>
        <span className={classes.fontfixingchild}>Surgeon</span>
        
        
        <select class="ui dropdown" className={classes.selectFixing}  value={props.state.search}  
                                   onChange={(event) => props.onSelectUser(event.target.value)}      >
                                     <option  value="" disabled selected hidden> Show all  </option>
           {props.state.patients && props.state.patients.length > 0 &&

props.state.patients.map((data, index) => ( <option> {data.addedBy.userName}  </option>))}
         
        </select>
        {/* {props.state.patientList && props.state.patientList.length > 0 && !props.state.showInput &&
                        <UnOrderedList className="cursor-pointer">
                            {props.state.patientList.map((data, index) => (
                                <li key={index} onClick={() => props.onSelectUser(data)}>
                                    <div className="display-flex flex-direction-row align-items-center fs-13">
                                       
                                        <span
                                            className="pl-2">  {data.addedBy.userName || ""}</span>
                                    </div>
                                </li>
                            ))}
                        </UnOrderedList>} */}
      </Column>
      <Column className={classes.marginTop15}>
        <span className={classes.fontfixingchild}>Anestheseologist</span>

        <select class="ui dropdown" className={classes.selectFixing} >
          <option value="1">Show All</option>
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>
      </Column>
      <Column className={classes.marginTop15}>
        <span className={classes.fontfixingchild}>Survey Status</span>

        <select class="ui dropdown " className={classes.selectFixing} value={props.state.selectedStatus}  
                                   onChange={(event) => props.onSelectStatus(event.target.value)}>
          <option  value="" disabled selected hidden >  Show all</option>
           {props.state.options && props.state.options.length > 0 &&

props.state.options.map((data, index) => ( <option > {props.state.options} </option>
))}

{props.state.options2 && props.state.options2.length > 0 &&

props.state.options2.map((data, index) => ( <option > {props.state.options2} </option>
))}
         
        </select>
        
      </Column>
      
      <Column className={classes.marginTop15}>
        <span className={classes.fontfixingchild}>Virtual Meeting Date</span>

        <select class="ui dropdown" className={classes.selectFixing}>
          <option value="">Current Month</option>
          <option value="1">15-Aug-2020</option>
          <option value="0">09-01-2020</option>
        </select>
      </Column>
      <Column className={classes.marginTop15}>
          <Row>
      <Checkbox
                        checked={props.state.checked2}
                        onChange={props.onCheckboxChange2}
      />
                      <span className={classes.fontfixingchild1}>&nbsp;Show only Not Assigned</span>
                    
       </Row>
      </Column>
      <Column className={classes.marginTop15}>
          <Row>
      <Checkbox
                        checked={props.state.checked}
                        onChange={props.onCheckboxChange}
                    />
                      <span className={classes.fontfixingchild2}>&nbsp;Show only Assigned</span>
                    
       </Row>
      </Column>
      <Column className="m-t-15 ">
       
      </Column>
    </div>
    
  );
}