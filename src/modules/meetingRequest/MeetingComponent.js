import React, { useState } from "react";
import Header from "../shared/header";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import MeetingCalendar from "./MeetingCalendar";
import Toolbar from "@material-ui/core/Toolbar";
import Avatar from "@material-ui/core/Avatar";
import MeetingRequest from "./index";
import { Divider } from "material-ui";

const Container = styled.div`
  background-color: white;
  margin-top: 15px;
`;
const LeftContainer = styled.div`
  padding-top: 10px;
  padding-left: 20px;
  width: 350px;
`;
const Heading = styled.div`
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  color: #181c1b;
`;
const SubHeading = styled.div`
  font-size: 13px;
  font-weight: normal;
  color: #bdbdbd;
  font-family: Roboto;
`;
const Card = styled.div`
  width: 90%;
  border: solid 1px #d4d4d4;
  margin-top: 20px;
  height: 60px;
`;
const Cards = styled.div`
  border: solid 1px #d4d4d4;
  height: 72px;
  width: 393px;
  margin-top: 20px;
  display: flex;
  padding-left: 10px;
  padding-top: 10px;
  @media  (max-width:1024px) and (min-width: 768px) {
    width:720px;
    height:80px;  
     }
  
      
    
  }

`;
const CardName = styled.div`
  margin-left: 10px;
  font-size: 11px;
  @media (max-width: 928px) {
    font-size: 8px;
    margin-left: 8px;
  }
  
`;
const SelectIcon = styled.img`
  margin-top: 6px;
`;
const PatientName = styled.div`
  font-size: 17px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  font-family: Roboto;
  color: #262626;
`;
const SurgeyName = styled.div`
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  font-family: Roboto;
  color: #262626;
  padding:2px 0px;
`;
const CrossIcon = styled.img`
  margin-top: 6px;
  margin-right: 10px;
`;
const AcceptTag = styled.div`
  background-color: white;
  height: 20px;
  font-size: 12px;
  margin-top: 8px;
  margin-right: 2px;
  width: 50px;
  text-align: center;
  border: solid 1px #d4d4d4;
`;
const Treatment = styled.span`
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  font-family: Roboto;
  color: #8f8f8f;
`;
const DetailsDivision = styled.div`
  display: flex;
  @media  (max-width:1024px) and (min-width: 768px) {
    display: flex;
  
  flex-flow:column wrap;   
  
      
    
  }
`;
const Requests = styled.div`
  margin-left: 20px;
  margin-top: 50px;
  width: 27%;
  @media  (max-width:1024px) and (min-width: 768px) {
  
    width:43%;  
          
        
      }
`;
const ApproveIcons = styled.div`
  margin-left: auto;
`;
const CalendarAdjustment = styled.div`
  margin-top: 5px;
  width: 70%;
  @media  (max-width:1024px) and (min-width: 768px) {
    width:100%;
    
    
  
}
`;
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  divider:{
    marginTop: "13px !important", 
    height: "12px !important"  
  },
  avatar:{
    width: "50px", 
    height: "50px" 
  },
}));
export default function MeetingComponent(props) {
  const classes = useStyles();
  console.log("props aree", props);
  const newFunction = () => {
    console.log("new Function")
  }
  return (
    <div>
      <Header tabName="calender" />
      {/* <Divider className={classes.divider}/> */}
      <DetailsDivision>
        <Requests>
          <Heading>Virtual Meeting Requests</Heading>
          <SubHeading>
            Accept&nbsp;requests&nbsp;to&nbsp;book&nbsp;appointments&nbsp;with&nbsp;the&nbsp;patients
          </SubHeading>
          {props.rows.map((row, index) => (
            <Cards>
              <Avatar
                alt="Remy Sharp"
                src="sara.jpg"
                className={classes.avatar}
              />
              <CardName>
                 
                <PatientName>{row.name}</PatientName>
                <SurgeyName>{row.surgery}</SurgeyName>

                <Treatment>{row.timeAndDate} </Treatment>
              </CardName>

              <ApproveIcons>
                {props.state.show ? <AcceptTag>Accept</AcceptTag> : ""}
               
                <SelectIcon
                  src="images\Group 33.svg"
                  height="34px"
                  width="34px"
                  onClick={() => props.handleApt(row.timeAndDate)}
                  
                  // onClick={props.removeCard}
                ></SelectIcon>
                 
                
                <CrossIcon
                  // onClick={props.handleDialog}
                  
                  src="images\Group 31.svg"
                  height="34px"
                  width="34px"



                  // onClick={props.handleDialog}
                ></CrossIcon>
              </ApproveIcons>
            </Cards>
          ))}
        </Requests>
        <CalendarAdjustment>
          {" "}
          <MeetingCalendar
            user={props.state}
            getDay={props.getDateAndDay}
            state={props.state}
            handleSidebar={props.handleSidebar}
            icon={props.icon}
            rem={props.rem}
            tueAdd={props.tueAdd}
            wedAdd={props.wedAdd}
            thursAdd={props.thursAdd}
            friAdd={props.friAdd}
            satAdd={props.satAdd}
            sunAdd={props.sunAdd}
            remRow2={props.remRow2}
            remRow3={props.remRow3}
            remRow4={props.remRow4}
            remRow5={props.remRow5}
            remRow6={props.remRow6}
            remRow7={props.remRow7}
            rows={props.state.rows}
            time={props.state.time}
            removeCard={props.removeCard}
          />{" "}
        </CalendarAdjustment>
      </DetailsDivision>
    </div>
  );
}
