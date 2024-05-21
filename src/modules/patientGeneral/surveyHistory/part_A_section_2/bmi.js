import React from 'react'
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";


const CalculatedBmi = styled.div`
  width: 200px;
  height: 150px;
  margin: 7px 3px 44px 3px;
  padding: 35px 53px 33px 54px;
  background-color: #e8f5fe;

`
const BmiHeading = styled.span`
  width: 93px;
  height: 21px;
  margin: 0 0 23px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #181c1b;
`
const BmiOutput = styled.div`
  width: 63px;
  height: 38px;
  margin: 23px 15px 0;
  font-family: Roboto;
  font-size: 32px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
`
export default  function Bmi(props){
    return (
        <>
            <Column>
                <CalculatedBmi>
                    <BmiHeading>Patient&nbsp;BMI</BmiHeading>
                    <BmiOutput>{ props.bmi || '' }</BmiOutput>
                </CalculatedBmi>
            </Column>
        </>
    )
}

