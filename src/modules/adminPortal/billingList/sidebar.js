import React from "react";
import { Column } from "simple-flexbox";
import { makeStyles } from "@material-ui/core/styles";
import {Row} from "simple-flexbox";
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

  background: ${(props) => (props.checked ? "#ffffff" : "white")};
  border-radius: 2px;
  transition: all 150ms;
  border: 1px solid #979797;

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;
const Checkbox = ({className, checked, ...props}) => (
    <CheckboxContainer className={className}>
        <HiddenCheckbox checked={checked} {...props} />
        <StyledCheckbox checked={checked}>
            <Icon viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12"/>
            </Icon>
        </StyledCheckbox>
    </CheckboxContainer>
);

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
      fontSize: "15px",
      fontWeight: "bold!important",
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
    fontfixingchildDate: {
      fontFamily: "Roboto",
      fontSize: "14px",
      fontWeight: "500px",
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
      backgroundColor: "#ffff",
    },
  }));

  const Checkbox = props => (
    <input type="checkbox" {...props} />
  )
  
  const classes = useStyles();
  
  return (
    <div className={classes.sidebar}>
      <Column>
        {" "}
        <span className={classes.fontfixing}>Filter</span>
      </Column>
      <br/>
      <Column className={classes.marginTop15}>
        <span className={classes.fontfixingchild}>&nbsp;Anaesthesiologist</span>
        <select class="ui dropdown" className={classes.selectFixing}>
          <option value="">&nbsp;Show all</option>
        
        </select>
      </Column>
      <Column className={classes.marginTop15}>
        <span className={classes.fontfixingchild}>&nbsp;Billing Type</span>
        <select class="ui dropdown" className={classes.selectFixing}>
          <option value="">&nbsp;Show all</option>
          
        </select>
      </Column>
      <Column className={classes.marginTop15}>
        <span className={classes.fontfixingchild}>&nbsp;Billing Status</span>
        <select class="ui dropdown" className={classes.selectFixing}>
          <option value="">&nbsp;Show all</option>
        
        </select>
      </Column>
      <Column className={classes.marginTop15}>
        <span className={classes.fontfixingchild}>&nbsp;Meeting Date</span>
        <select class="ui dropdown" className={classes.selectFixing}>
          <option value="">&nbsp;Current Month</option>
        
        </select>
      </Column>
      <Column className="m-t-15 ">
       
      </Column>
    </div>
  );
}
