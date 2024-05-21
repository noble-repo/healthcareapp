import React, { useState } from "react";
import { Column, Row } from "simple-flexbox";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { SwipeableDrawer } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
const SettingBox = styled.div`
  width: 350px;
  padding-top: 15px;
  padding-left: 20px;
`;
const CrossIcon = styled.img`
  float: right;
  margin-top: 2px;
  margin-right: 15px;
`;
const Heading = styled.span`
  font-size: 14px;
  font-family: roboto;
  font-weight: 550;
  @media (max-width: 1024px) {


    font-size: 22px;

   


    }
`;
const SubHeading = styled.span`
  font-size: 12px;
`;
const TableRows = styled.tr`
  margin-bottom: 20px;
`;
const Days = styled.td`
  font-weight: 550;
  font-size: 12px;
  padding-top: 15px;
`;
const DropDown = styled.select`
  font-size: 12px;
  height: 28px;
  width: 75px;
  border-radius: 2px;
  background-color: #fafafa;
  border: solid 0px;
`;
const ToColumn = styled.td`
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 15px;
  font-size: 12px;
`;
const PlusIcon = styled.td`
  padding-left: 15px;
  padding-right: 40px;
  padding-top: 15px;
`;
const Erase = styled.img`
  padding-left: 10px;
`;
const ScheduleTable = styled.table`
  margin-top: 1px;
  text-align: left;
`;
const TimmingDropDown = styled.select`
  float: right;
  margin-right: 15px;
  font-size: 12px;
  height: 27px;
  width: 85px;
  border-radius: 2px;
`;
const SyncButton = styled.button`
  color: #00a0f0;
  border: solid 1px #00a0f0;
  background-color: white;
  height: 27px;
  width: 85px;
  padding-top: 5px;
  text-align: center;
  border-radius: 2px;
  margin-right: 20px;
`;
const Table = styled.table`
  border: solid 1px #d4d4d4;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 30px;
  @media  (max-width:1024px) and (min-width: 768px) {
    border:none;
    margin-bottom:0px;
    display:none;
    
    
  
}
`;
const ITable = styled.table`
display:none;
  
  @media  (max-width:1024px) and (min-width: 768px) {
    text-align: center;
    margin-top: 10px;
    margin-left:15px;
    border:none;
    margin-bottom:0px;
    display:block;
    
    
  
}
`;
const Columns = styled.td`
  border: solid 1px #d4d4d4;
  background-color: #e8f5fe;
  width: 120px;
  height: 42px;
`;
const Rows = styled.tr`
  border: solid 1px #d4d4d4;
  background-color: #e8f5fe;
  width: 150px;
  height: 84px;
`;
const ColumnComponent = styled.td`
  padding-top: 15px;
`;
const Day = styled.div`
  font-size: 11px;
  font-weight: 550;
  font-family: Roboto;
  @media  (max-width:1024px) and (min-width: 768px) {
    
    padding-right:18px;
     
   
 }


  
`;
const Date = styled.div`
  font-size: 11px;
  opacity: 0.8;
  @media  (max-width:1024px) and (min-width: 768px) {
    padding-left:5px;
    padding-right:7px;
     
   
 }
`;
const EmptyColumn = styled.td`
  height: 500px;
  border-right: solid 1px #d4d4d4;
  vertical-align: top;
`;
const EmptyRow = styled.tr`

  height: 84px;
  // width:500px;
  width:100%;
  border:1px solid #d4d4d4;

  // border-right: solid 1px #d4d4d4;
  // vertical-align: top;
  // height:100px;
  
  // border-top:solid 1px #d4d4d4;
  // horizontal-align:right;
`;
const Today = styled.button`
  font-size: 12px;
  border-radius: 2px;
  border: solid 1px #bdbdbd;
  background-color: #ffffff;
  margin-left: 10px;
  width: 70px;
  height: 23px;
  &:focus {
    outline: none;
    border: solid 1px #bdbdbd;
    color: none;
  }
  @media  (max-width:1024px) and (min-width: 768px) {
    margin-left:20px;    
        
      
    }
`;
const Select = styled.select`
  font-size: 11px;
  width: 70px;
  height: 22px;
  float: left;
  border: solid 1px #bdbdbd;
  padding-left: 7px;
  &:focus {
    outline: none;
    border: solid 1px #bdbdbd;
    color: none;
  }
`;
const LeftArrow = styled.button`
  border: solid 1px #bdbdbd;
  background-color: white;
  height: 22px;
  width: 22px;
  margin-left: 10px;
  &:focus {
    outline: none;
    border: solid 1px #bdbdbd;
    color: none;
  }
`;
const RightArrow = styled.button`
  border: solid 1px #bdbdbd;
  background-color: white;
  height: 22px;
  width: 22px;
  &:focus {
    outline: none;
    border: solid 1px #bdbdbd;
    color: none;
  }
`;
const Settings = styled.button`
  border: solid 1px #bdbdbd;
  margin-left: 10px;
  white-space: normal;
  vertical-align: center;
  height: 22px;
  width: 22px;
  border-radius: 2px;
  background-color: #ffffff;
  &:focus {
    outline: none;
    border: solid 1px #bdbdbd;
    color: none;
  }
`;
const TableHeader = styled.div`
  margin-top: 10px;
  display: flex;
  width: 95.5%;
`;
const MainContainer = styled.div`
  margin-top: 35px;
`;
const MiniContainer = styled.div`
  padding-top: 20px;
`;
const Availability = styled.div`
  font-size: 12px;
  margin-top: 25px;
`;
const SettingIcon = styled.img`
  margin-top: -7px;
  margin-left: -5px;
`;
const LeftArrowIcon = styled.img`
  margin-top: -7px;
`;
const RightArrowIcon = styled.img`
  margin-top: -7px;
`;
const MonthHeader = styled.span`
  font-weight: 550;
  @media  (max-width:1024px) and (min-width: 768px) {
    margin-left:20px;    
        
      
    }
`;
const SyncPartition = styled.div`
  display: flex;
  margin-top: 20px;
  font-size: 12px;
`;
const RightPositioning = styled.div`
  margin-left: auto;
`;
const SyncButtonPositioning = styled.span`
  margin-left: auto;
`;
const PatientName = styled.div`
  font-size: 10px;
  font-weight: 550;
  padding-left: 3px;
`;
const PatientSurgery = styled.div`
  font-size: 8px;
  margin-left: -5px;
`;
const AppointmentCard = styled.div`
  display: flex;
  border: solid 1px #d4d4d4;
  height: 50px;
  border-radius: 2px;
`;
const PatientTime = styled.div`
  font-size: 9px;
  opacity: 0.5;
  padding-left: 3px;
  text-align: left;
  margin-top: 3px;
  margin-: 3px;
`;

const ToggleTable=styled.table`
border: solid 1px #d4d4d4;
  text-align: center;
  margin-top: -1px;
  margin-bottom: 30px;
  width:95%;
  @media  (max-width:1024px) and (min-width: 768px): {
    border:none;
    margin-bottom: 0px;

     
   
 }

`;

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  tdStyle:{
    width:"90%",
  },
  fullList: {
    width: "auto",
  },
  paper: {
    height: "calc(100% - -3px)",
    top: 64,
    ["@media (max-width:1024px)"]: {



   
  
      top: -1,
  
     
  
  
  
     },
  
  
  },
  small: {
    width: theme.spacing(1.2),
    height: theme.spacing(1.2),
  },
}));

function Schedule(props) {
  return (
    <>
      <ColumnComponent>
        <DropDown>
          <option>10:00 AM</option>
        </DropDown>
      </ColumnComponent>
      <ToColumn>to</ToColumn>
      <ColumnComponent>
        <DropDown>
          <option>2:00 PM</option>
        </DropDown>{" "}
      </ColumnComponent>
      <ColumnComponent onClick={props.rem}>
        <Erase src="images/delete_transparent_icon.svg" height="12px" />{" "}
      </ColumnComponent>
    </>
  );
}
function Appointment(props) {
  const classes = useStyles();
  return (
    <AppointmentCard>
      <div>
        <PatientTime>{props.time}</PatientTime>
        <PatientName>{props.rows[0].name}</PatientName>
        <PatientSurgery>{props.rows[0].surgery}</PatientSurgery>
      </div>
      <div style={{ marginLeft: "auto", marginRight: "3px", marginTop: "3px" }}>
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          className={classes.small}
        />
      </div>
    </AppointmentCard>
  );
}
function MeetingCalendar(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  console.log(`props of calendar`, props);
  console.log(props.state.daysAndDates,"days array");
  return (
    <MainContainer>
      <TableHeader>
        <MonthHeader>
          {props.user.monthHeader}
          {" " + props.user.year}
        </MonthHeader>
        <Today>Today</Today>
        <RightPositioning>
          <Select>
            <option>Week</option>
          </Select>
          <LeftArrow
            onClick={() => {
              props.getDay("previous");
            }}
          >
            <LeftArrowIcon src="images\Group 20.svg" height="8px" />
          </LeftArrow>
          <RightArrow
            onClick={() => {
              props.getDay("next");
            }}
          >
            <RightArrowIcon src="images\Group 21.svg" height="8px" />
          </RightArrow>
          <span>
            <Settings>
              <SettingIcon
                src="images\Group 19.svg"
                height="17px"
                onClick={toggleDrawer("right", true)}
              />
            </Settings>
          </span>
        </RightPositioning>
      </TableHeader>
      <div>
        <Table>
          <tr>
            {props.state.daysAndDates.map((dayanddate) => (
              <Columns>
                <Day>{dayanddate.day}</Day>
                <Date>
                  {dayanddate.date}
                  {" " + dayanddate.month}
                  {" " + dayanddate.year}
                </Date>{" "}
              </Columns>
            ))}
          </tr>
          <tr>
            {props.state.daysAndDates.map((dayanddate) => (
              <EmptyColumn>
                {" "}
                {dayanddate.date == props.state.aptDay &&
                dayanddate.month == props.state.aptMonth &&
                dayanddate.year == props.state.aptYear ? (
                  <Appointment
                    rows={props.state.rows}
                    user={props.state}
                    time={props.state.time}
                  />
                ) : (
                  ""
                )}
              </EmptyColumn>
            ))}
          </tr>
        </Table>

       <ITable>
      
         <td>
         {props.state.daysAndDates.map((dayanddate) => (
           

         
           <Rows>
           <Day>{dayanddate.day}</Day>
           <Date>
             {dayanddate.date}
             {" " + dayanddate.month}
             {" " + dayanddate.year}
           </Date>{" "}
         </Rows>
  ))}
         </td>
         <td className={classes.tdStyle}>
         <ToggleTable>

            {props.state.daysAndDates.map((dayanddate) => (
               <EmptyRow>
                {" "}
                {dayanddate.date == props.state.aptDay &&
                dayanddate.month == props.state.aptMonth &&
                dayanddate.year == props.state.aptYear ? (
                  <Appointment
                    rows={props.state.rows}
                    user={props.state}
                    time={props.state.time}
                  />
                ) : (
                // " "
                <p></p>
                )}
                
               </EmptyRow>

            ))}
           

        
           </ToggleTable>

          </td>
     
       </ITable>
      </div>
      <SwipeableDrawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
        onOpen={toggleDrawer("right", true)}
        classes={{ paper: classes.paper }}
      >
        <SettingBox>
          <div>
            <Heading>Calendar Settings</Heading>
            <CrossIcon
              src="images/Group 9.svg"
              height="20px"

              onClick={toggleDrawer("right", false)}
            />
          </div>
          <MiniContainer>
            <SubHeading>Calendar Slots</SubHeading>
            <TimmingDropDown>
              <option selected disabled hidden>
                30 Min
              </option>
              <option>45 Min</option>
              <option>1 Hour</option>
            </TimmingDropDown>
          </MiniContainer>
          <Availability>Set Availability</Availability>
          <ScheduleTable>
            <TableRows>
              <Days>Mon</Days>
              <PlusIcon>
                <img src="images/Plus.svg" height="17px" onClick={props.icon} />
              </PlusIcon>
              {/* {children} */}
              <Schedule />
            </TableRows>
            {props.state.getCount.map((index) => (
              <tr>
                <td></td>
                <td></td>
                <Schedule rem={props.rem} />{" "}
              </tr>
            ))}

            <TableRows>
              <Days>Tue</Days>
              <PlusIcon>
                <img
                  src="images/Plus.svg"
                  height="17px"
                  onClick={props.tueAdd}
                />
              </PlusIcon>
              <Schedule />
            </TableRows>
            {props.state.tueCount.map((index) => (
              <tr>
                <td></td>
                <td></td>
                <Schedule rem={props.remRow2} />{" "}
              </tr>
            ))}
            <TableRows>
              <Days>Wed</Days>
              <PlusIcon>
                <img
                  src="images/Plus.svg"
                  height="17px"
                  onClick={props.wedAdd}
                />
              </PlusIcon>
              <Schedule />
            </TableRows>
            {props.state.wedCount.map((index) => (
              <tr>
                <td></td>
                <td></td>
                <Schedule rem={props.remRow3} />{" "}
              </tr>
            ))}
            <TableRows>
              <Days>Thu</Days>
              <PlusIcon>
                <img
                  src="images/Plus.svg"
                  height="17px"
                  onClick={props.thursAdd}
                />
              </PlusIcon>
              <Schedule />
            </TableRows>
            {props.state.thursCount.map((index) => (
              <tr>
                <td></td>
                <td></td>
                <Schedule rem={props.remRow4} />{" "}
              </tr>
            ))}
            <TableRows>
              <Days>Fri</Days>
              <PlusIcon>
                <img
                  src="images/Plus.svg"
                  height="17px"
                  onClick={props.friAdd}
                />
              </PlusIcon>
              <Schedule />
            </TableRows>
            {props.state.friCount.map((index) => (
              <tr>
                <td></td>
                <td></td>
                <Schedule rem={props.remRow5} />{" "}
              </tr>
            ))}
            <TableRows>
              <Days>Sat</Days>
              <PlusIcon>
                <img
                  src="images/Plus.svg"
                  height="17px"
                  onClick={props.satAdd}
                />
              </PlusIcon>
              <Schedule />
            </TableRows>
            {props.state.satCount.map((index) => (
              <tr>
                <td></td>
                <td></td>
                <Schedule rem={props.remRow6} />{" "}
              </tr>
            ))}
            <TableRows>
              <Days>Sun</Days>
              <PlusIcon>
                <img
                  src="images/Plus.svg"
                  height="17px"
                  onClick={props.sunAdd}
                />
              </PlusIcon>
              <Schedule />
            </TableRows>
            {props.state.sunCount.map((index) => (
              <tr>
                <td></td>
                <td></td>
                <Schedule rem={props.remRow7} />{" "}
              </tr>
            ))}
          </ScheduleTable>
          <SyncPartition>
            <span>
              Sync with Google/Iphone <br /> Calendar
            </span>
            <SyncButtonPositioning>
              <SyncButton className="flex-con-space-around">Sync</SyncButton>
            </SyncButtonPositioning>
          </SyncPartition>
        </SettingBox>
      </SwipeableDrawer>
    </MainContainer>
  );
}

export default MeetingCalendar;
