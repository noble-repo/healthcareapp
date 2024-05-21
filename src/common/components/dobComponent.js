import React, {useEffect, useState} from 'react'
import styled from "styled-components";
import {Row} from "simple-flexbox";
import moment from "moment";
import {patientInfoQuestionIdsConstants} from "../../constants";

const DateInput = styled.input`
  width: 267px;
  height: 50px;
  margin: 7px 63px 32px 0;
  padding: 16px 18px 15px 15px;
  border: solid 1px #bdbdbd;
  background-color: #ffffff;

`
const AgeInput = styled.div`
  width: 200px;
  height: 150px;
  margin: -95px 3px 0px 3px;
  padding: 45px 37px 39px;
  background-color: #f7f5f5;

`
const Heading = styled.div`
  width: 126px;
  height: 21px;
  margin: 0 0 7px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #181c1b;
`
const AgeHeading = styled.div`
  width: 36px;
  height: 38px;
  margin: 7px 45px 0;
  font-family: Roboto;
  font-size: 32px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
`
const DobComponent = (props) => {
    const [dob1, setDob1] = useState(0)
    const [age, setAge] = useState(0)

    useEffect(() => {
        props.dobQuestionAnswer && setDob1(props.dobQuestionAnswer)
        props.dobQuestionAnswer && calculate_age(props.dobQuestionAnswer)
    }, [props.dobQuestionAnswer])

    function calculate_age(dob1) {
        let today = new Date();
        let birthDate = new Date(dob1);  // create a date object directly from `dob1` argument
        let age_now = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age_now--;
        }
        console.log(age_now);
        setAge(age_now)
        return age_now;
    }

    function handleChange(event) {
        setDob1(moment(event.target.value, 'YYYY-MM-DD').valueOf())
        calculate_age(moment(event.target.value, 'YYYY-MM-DD').valueOf())
        props.handleDatePicker(moment(event.target.value, 'YYYY-MM-DD').valueOf(), patientInfoQuestionIdsConstants.dob)
    }

    return (
        <div>
            <Row>
                <DateInput type="date" name="date_of_birth" defaultValue={dob1 && moment(dob1).format('YYYY-MM-DD')}
                           value={dob1 && moment(dob1).format('YYYY-MM-DD') || ''}
                           onChange={(event) => handleChange(event)}/>
                <AgeInput>
                    <Heading>Calculated Age</Heading>
                    <AgeHeading>
                        {age ? age : ''}
                    </AgeHeading>
                </AgeInput>
            </Row>
        </div>
    )

}

export default DobComponent