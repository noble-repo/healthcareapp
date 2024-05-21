import React from 'react';
import { Row, Column } from 'simple-flexbox'
import styled from "styled-components"
import moment from 'moment';


const MainHeading = styled.span`
// width: 206px;
height: 20px;
margin-left: 20px;
font-family: Roboto;
font-size: 18px;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
color: #181c1b;`

const SubHeading = styled.span`
// width: 373px;
height: 18px;
margin-top: 4px;
margin-left: 20px;
font-family: Roboto;
font-size: 15px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
color: #bdbdbd;`

const Box = styled.div`
height: 80px;
margin: 5px 20px 15px 15px;
padding: 10px;
border-radius: 2px;
border: solid 1px #d4d4d4;
background-color: #ffffff;
width: 380px;
`

const Image = styled.img`
width: 60px;
height: 60px;
margin:auto`

const PatientName = styled.span`
// width: 97px;
height: 20px;
margin-left: 5px;
font-family: Roboto;
font-size: 17px;
font-weight: 600;
`

const SurgeryType = styled.span`
// width: 89px;
margin-left: 5px;
font-family: Roboto;
font-size: 13px;
color: #262626;
`

const MeetingTime = styled.span`
margin-left: 5px;
font-family: Roboto;
font-size: 14px;
color: #8f8f8f;
`
const RightButton = styled.button`
width: 34px;
height: 34px;
margin: auto;
// padding: 11px 8px;
border: none;
border-radius: 35.5px;
color: #ffffff;
background-color: #43c43f;
// background-image: url("/images/Group 33.svg");
// background-repeat: no-repeat;
`

const WrongButton = styled.button`
width: 34px;
height: 34px;
margin: auto;
// padding: 10px;
border: none;
border-radius: 35.5px;
color: #ffffff;
text-align: center;
background-color: #ff462c;
// background-image: url("/images/Group 31.svg")
`

export default function Sidebar(props) {

    return (

        <Column>
            <MainHeading >Virtual Meeting Requests</MainHeading>
            <SubHeading >Accept requests to book appointment with patients</SubHeading>
            {props.state.requests.map((row, index) => (
                <Box>
                    <Row>
                        <Column>
                            <Image src={row.patient.picture} />
                        </Column>
                        <Column>
                            <PatientName>{row.patient.name}</PatientName>
                            <SurgeryType>{row.surgeryType}</SurgeryType>
                            <MeetingTime>{row.patient?.schedules[0] && moment(row.patient?.schedules[0]).format("HH:mm A, DD MMM YYYY") || ''}</MeetingTime>

                        </Column>
                        <Column className="ml-auto">
                            <Row className="margin-auto">
                                <RightButton className="margin-right-10" onClick={() => props.handleAccept(index)}>✔</RightButton>
                                <WrongButton onClick={() => props.handleReject(index)} > X</WrongButton>
                            </Row>
                        </Column>
                    </Row>
                </Box>
            ))}
        </Column>

    )
}