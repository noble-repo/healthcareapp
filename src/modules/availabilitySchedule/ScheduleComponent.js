import React from "react";
import styled from "styled-components";
import { Row, Column } from 'simple-flexbox';
import { Select } from 'semantic-ui-react'
import { Months } from '../../constants'

const Container = styled.div`
  margin-top: 55px;
`;
const MainHeading = styled.div`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  font-family: roboto;
  color: #26292c;
`;
const SubHeading = styled.div`
  font-size: 16px;
  font-weight: normal;
  margin-top:9px;
  text-align: center;
  font-family: roboto;
  color: #414141;
`;
const MonthButton = styled.div`
  border: solid 1px #00a0f0;
  border-radius: 4px;
  display:flex;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  font-family: Roboto;
  color: #00a0f0;
  background-color: white;
  width: 110px;
  height: 40px;
  &:focus {
    outline: none;
    border-radius: 4px;
    transition: all 0.3s;
    border:solid 1px #00a0f0;
  }
`;
const TableColumn = styled.td`
  padding-top: 15px;
  padding-bottom: 15px;
`;
const StartTableColumn = styled.td`
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left:120px;
`;
const PlusIcon = styled.img`

  height: 21px;
  margin-left: 30px;
`;

const Erase = styled.img`

  height: 15px;
  margin-left: 35px;
`;
const To = styled.td`
  padding-left: 22px;
  padding-right: 24px;
`;
const BottomButton = styled.div`
  
  width: 623px;
  height: 50px;
  color: white;
  font-size: 16px;
  font-weight: 500;
  
  vertical-align: center;
  text-align: center;
  border-radius: 4px;
  background-color: #00a0f0;
  margin-top: 62px;
  padding-top: 16px;
  margin-bottom: 90px;
`;
const CalendarContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const TableDivision = styled.div`
  border-bottom: solid 1px #e0e0e0;
  display: flex;
  padding-bottom: 5px;
`;
const TopDivision = styled.div`
  border-top: solid 1px #e0e0e0;
`;

const PlusColumn = styled.td`
  padding-left: 40px;
`;


const styles = {
  dropdown: {
    //   minWidth: "115px !important",
    // minHeight: "25px !important",
    // maxWidth:"115px !important",
    minWidth: "115px !important",
    fontFamily: "OpenSans !important",
    fontSize: "16px",
    fontWeight: "normal",
    color: "#26292c",
    border: "none",

    borderRadius: "2px",
    backgroundColor: "#fafafa",

    "&:focus": {
      // borderColor: "#bdbdbd",
      outline: "none",
      borderRadius: "2px",
      transition: "all 0.3s",
    }

  },
};


function ScheduleComponent(props) {
  return (
    <CalendarContainer>
      <Container>
        <MainHeading>
          Schedule your availability for Virtual Appointments{" "}
        </MainHeading>
        <SubHeading>
          Patients&nbsp;will&nbsp;be&nbsp;assigned&nbsp;to&nbsp;you&nbsp;according&nbsp;to&nbsp;your&nbsp;available&nbsp;time&nbsp;slots
        </SubHeading>
        <Row justifyContent="space-between" alignItems="center" className="margin-top-40" >

          <Column>
            <Row className="fw-bold fs-22">
              <span>{props.state.month}</span><span className="m-l-xs">{props.state.year}</span>
            </Row>
          </Column>

          <MonthButton >
            <select className="h-30 bg-white select-focus margin-auto" style={styles.dropdown}
              onChange={(event) => props.handleChange(event.target.value, "month")}
              value={props.state.month}
            >
              {Months.map(month => (<option value={month}>{month}</option>))}
            </select>
          </MonthButton>{" "}

        </Row>
        <div className="margin-top-40">

          <TopDivision />
          {props.state.schedules.map(item => {
            return (<>
              <TableDivision>

                <Column className="padding-10">
                  <Row className="margin-top-10">
                    <div className="width-30">{item.day}</div>
                    <PlusColumn>
                      <PlusIcon onClick={() => props.addSchedule(item.day)} src="images\Plus.svg" />
                    </PlusColumn>
                  </Row>
                </Column>
                <div className="margin-auto">
                  {item.schedules.length ? item.schedules.map((schd, index) => (
                    <div>
                      <StartTableColumn>
                        <Select className="h-30" options={props.state.timeOptions} style={styles.dropdown}
                          onChange={(event, data) => props.onHandleTimeChange(index, item.day, data.value, "startTime")}

                          value={getTime(schd, "start")} />
                      </StartTableColumn>
                      <To>to</To>
                      <TableColumn>
                        {" "}
                        <Select className="h-30" options={props.state.timeOptions} style={styles.dropdown}
                          onChange={(event, data) => props.onHandleTimeChange(index, item.day, data.value, "endTime")}
                          value={getTime(schd, "end")} />
                      </TableColumn>
                      <td>
                        <Erase src="images\Erase.svg" onClick={() => props.removeSchedule(item.day, index)} />
                      </td>
                    </div>
                  )) : <div className="margin-auto fc-lightgrey">
                    No Time Slot Added
                </div>
                  }
                </div>
              </TableDivision>
            </>)
          })}


        </div>
        <BottomButton onClick={() => props.saveSchedules()}>
          Set My Calendar
        </BottomButton>
      </Container>
    </CalendarContainer>
  );
}

const getTime = (schd, time) => {
  if (time === "start") {
    return schd.time.split("-")[0]
  }
  return schd.time.split("-")[1]
}

export default ScheduleComponent;
