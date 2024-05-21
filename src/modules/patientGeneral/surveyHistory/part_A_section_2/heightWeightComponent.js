import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Row, Column} from "simple-flexbox";
import Bmi from "./bmi";
import {patientInfoQuestionIdsConstants} from "../../../../constants";

const Height = styled.input`
  width: 114px;
  height: 50px;
  margin: 7px 16px 23px 0;
  padding: 16px 25px 15px 15px;
  border: solid 1px #bdbdbd;
  background-color: #ffffff;
`;
const HeightInches = styled.input`
  width: 136px;
  height: 50px;
  margin: 7px 16px 23px 0;
  padding: 16px 25px 15px 15px;
  border: solid 1px #bdbdbd;
  background-color: #ffffff;
`;
const Weight = styled.input`
  /* width: 50px;
  height: 21px; */
  width: 266px;
  height: 50px;
  margin: 6px 64px 44px 0;
  padding: 15px 25px 16px 15px;
  border: solid 1px #bdbdbd;
  background-color: #ffffff;
`;
const Heading = styled.span`
  width: 148px;
  height: 21px;
  font-family: Roboto !important;
  font-size: 18px !important;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #181c1b !important;
`;
const HeightWeightComponent = (props) => {
    const [heightFeet, setHeightFeet] = useState(0)
    const [heightInch, setHeightInch] = useState(0)
    const [weight, setWeight] = useState(0)
    const [bmi, setBmi] = useState(0)
    const [bmiResult, setBmiResult] = useState({
        label: '',
        alertClass: '',
    })

    useEffect(() => {
        props.heightQuestionAnswer && setHeightFeet(parseInt(props.heightQuestionAnswer / 12))
        props.heightQuestionAnswer && setHeightInch(parseInt(props.heightQuestionAnswer % 12))
        props.weightQuestionAnswer && setWeight(parseInt(props.weightQuestionAnswer))
        props.heightQuestionAnswer && props.heightQuestionAnswer && calculateBMI(parseInt(props.weightQuestionAnswer), parseInt(props.heightQuestionAnswer))

    }, [props.heightQuestionAnswer || props.weightQuestionAnswer || (props.heightQuestionAnswer && props.weightQuestionAnswer)])

    function handleHeightFeetChange(event) {
        setHeightFeet(event.target.value)
        calculateBMI(parseInt(weight), parseInt(event.target.value) * 12 + parseInt(heightInch))
        props.handleChange(parseInt(event.target.value) * 12, 'heightQuestionAnswer', patientInfoQuestionIdsConstants.height)
    }

    function handleHeightInchChange(event) {
        setHeightInch(event.target.value)
        console.log("parseInt(heightFeet) * 12 + parseInt(event.target.value)==", parseInt(heightFeet) * 12 + parseInt(event.target.value))
        calculateBMI(parseInt(weight), parseInt(heightFeet) * 12 + parseInt(event.target.value))
        props.handleChange(parseInt(heightFeet) * 12 + parseInt(event.target.value), 'heightQuestionAnswer', patientInfoQuestionIdsConstants.height)
    }

    function handleWeightChange(event) {
        setWeight(event.target.value)
        calculateBMI(parseInt(event.target.value), parseInt(heightFeet) * 12 + parseInt(heightInch))
        props.handleChange(parseInt(event.target.value), 'weightQuestionAnswer', patientInfoQuestionIdsConstants.weight)
    }

    function calculateBMI(weightValue = 0, heightValue = 0) {
        let bmiResults = {
            label: "",
            alertClass: "",
        };
        if (weightValue && heightValue) {
            let bmi = (weightValue / (heightValue * heightValue)) * 703 || 0;
            bmi = bmi.toFixed(2);


            if (bmi <= 18.5) {
                bmiResults.label = "Underweight";
                bmiResults.alertClass = "alert-danger";
            } else if (bmi <= 24.9) {
                bmiResults.label = "Normal weight";
                bmiResults.alertClass = "alert-success";
            } else if (bmi <= 29.9) {
                bmiResults.label = "Overweight";
                bmiResults.alertClass = "alert-warning";
            } else if (bmi >= 30) {
                bmiResults.label = "Obesity";
                bmiResults.alertClass = "alert-danger";
            } else {
                bmiResults.label = "BMI";
                bmiResults.alertClass = "alert-primary";
            }
            setBmi(bmi)
            setBmiResult(bmiResults)
        }
    }

    return (
        <Row>
            <Column>
                <Row>

                    <Height placeholder="feet"
                        // className="form-control"
                            id="bmiHeightFeet"
                            type="number"
                            min="1"
                            max="12"
                            value={heightFeet > 0 && heightFeet}
                            onChange={(event) => handleHeightFeetChange(event)}
                    />

                    <HeightInches placeholder="inches"
                        // className="form-control"
                                  id="bmiHeightInch"
                                  type="number"
                                  min="0"
                                  max="12"
                                  value={heightInch > 0 && heightInch}
                                  onChange={(event) => handleHeightInchChange(event)}
                    />
                </Row>
                <Heading>Weight(lbs)</Heading>
                <Weight value={weight > 0 && weight} type={'number'}
                        onChange={(event) => handleWeightChange(event)}
                />

            </Column>
            <Bmi
                bmi={bmi ? bmi : ''}
                label={bmiResult.label}
                alertClass={bmiResult.alertClass}
            />

        </Row>
    );

}
export default HeightWeightComponent