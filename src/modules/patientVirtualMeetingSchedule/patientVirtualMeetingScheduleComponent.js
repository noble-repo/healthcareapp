import styled from "styled-components";
import React, {useEffect, useState} from "react";
import {Column} from "simple-flexbox";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styling.css";
import moment from "moment";
import Utility from "../../utility";

const Heading = styled.span`
  width: 100%;
  margin-top: 50px;
  font-family: Roboto;
  font-size: 30px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #181c1b;
  @media (max-width:350px){
      font-size:8vw;
  }
`;
const SubHeading = styled.span`
  width: 100%;
  margin-top: 25px;
  font-family: Roboto;
  font-size: 17px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.41;
  letter-spacing: normal;
  text-align: center;
  color: #414141;
  @media (max-width: 480px) and (min-width:351px) {
   font-size:3vw;
  }
  @media (max-width:350px){
      font-size:3vw;
  }
`;

const Image = styled.img`
  width: 90px;
  position: center;
  margin-top: 50px;
  margin-left: 240px;
  @media (max-width: 480px) and (min-width:351px) {
    margin-left: 140px;
    height: 80px;
  }
  @media (max-width:350px){
      margin-left:132px
  }
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
`;

const SetAvailibility = styled.button`
  display: block;
  width: 100%;
  height: 50px;
  border-radius: 2px;
  margin-top: 40px;
  border: solid 1px #00a0f0;
  background-color: #00a0f0;
  color: #ffffff
  @media (max-width: 480px) and (min-width:351px){
      
      margin:9vw 4vw 0vw 0vw;
  }
  @media(max-width:350px){
      margin-left:2.5vw;
      width:95%
  }
  `

export default function PatientVirtualMeetingScheduleComponent(props) {
    const [startDate, setStartDate] = useState();
    const [secondStartDate, setSecondStartDate] = useState();
    const [thirdStartDate, setThirdStartDate] = useState();
    useEffect(() => {
        props.state.schedules.length > 0 && setStartDate(props.state.schedules[0])
        props.state.schedules.length > 0 && setSecondStartDate(props.state.schedules[1])
        props.state.schedules.length > 0 && setThirdStartDate(props.state.schedules[2])
    }, [props.state.schedules])

    function handleOnClick() {
        if (!startDate)
            return Utility.apiFailureToast('Please Select First Preferred Date and Time')
        else if (!secondStartDate)
            return Utility.apiFailureToast('Please Select Second Preferred Date and Time')
        else if (!thirdStartDate)
            return Utility.apiFailureToast('Please Select Third Preferred Date and Time')
        props.updatePatientSchedule([startDate, secondStartDate, thirdStartDate])

    }

    return (
        <div>
            <Card>
                <Column>
                    <Image src="/images/meeting.svg" className="meeting"/>
                    <Heading>Schedule Virtual Meeting</Heading>
                    <SubHeading>
                        Select three time and date options for your availability
                        <br/>
                        We will pick and schedule a virtual meeting with the
                        Anesthesiologist
                        <br/>
                        at one of your selected time.
                    </SubHeading>

                    <DatePicker
                        placeholderText="Add First Preferred Date and Time"
                        selected={startDate && new Date(startDate)}
                        onChange={(date) => setStartDate(moment(date).valueOf())}
                        showTimeSelect
                        dateFormat="MMMM d, yyyy hh:mm a"
                    />

                    <DatePicker
                        placeholderText="Add Second Preferred Date and Time"
                        selected={secondStartDate && new Date(secondStartDate)}
                        onChange={(date) => setSecondStartDate(moment(date).valueOf())}
                        showTimeSelect
                        dateFormat="MMMM d, yyyy hh:mm a"
                    />
                    <DatePicker
                        placeholderText="Add Third Preferred Date and Time"
                        selected={thirdStartDate && new Date(thirdStartDate)}
                        onChange={(date) => setThirdStartDate(moment(date).valueOf())}
                        showTimeSelect
                        dateFormat="MMMM d, yyyy hh:mm a"
                    />
                    <SetAvailibility
                        onClick={() => handleOnClick()}>{props.state.schedules.length > 0 ? 'Edit Availability' : 'Set Availability'}</SetAvailibility>
                </Column>
            </Card>
            <br/>
        </div>
    );
}
