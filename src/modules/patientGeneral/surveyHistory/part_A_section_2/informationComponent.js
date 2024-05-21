import React, {useState} from "react";
import styled from "styled-components";
import {Row, Column} from "simple-flexbox";
import {makeStyles} from "@material-ui/core/styles";
import {patientInfoQuestionIdsConstants} from "../../../../constants";
import DobComponent from "../../../../common/components/dobComponent";
import HeightWeightComponent from "./heightWeightComponent";

const Select3 = styled.select`
  width: 267px;
  height: 50px;
  margin: 7px 63px 22px 0;
  padding: 14px 18px 17px 15px;
  border: solid 1px #bdbdbd;
  background-color: #ffffff;
`;
const Select4 = styled.select`
  width: 530px;
  height: 50px;
  margin: 7px 3px 37px 0;
  padding: 16px 27px 15px 15px;
  border: solid 1px #bdbdbd;
  background-color: #ffffff;
`;
const Select5 = styled.select`
  width: 530px;
  height: 50px;
  margin: 7px 3px 37px 0;
  padding: 16px 27px 15px 15px;
  border: solid 1px #bdbdbd;
  background-color: #ffffff;
`;
const Select6 = styled.select`
  width: 530px;
  height: 50px;
  margin: 7px 3px 37px 0;
  padding: 16px 27px 15px 15px;
  border: solid 1px #bdbdbd;
  background-color: #ffffff;
`;
const Options = styled.option`
  margin-left: 20px;
  color: #000000;
`;

const useStyles = makeStyles((theme) => ({
    rowFixing: {
        marginLeft: "20px",
        marginRight: "20px",
    },
    title: {
        width: "148px",
        height: "21px",
        margin: "11px 385px 7px 0",
        fontFamily: "Roboto",
        fontSize: "18px",
        fontWeight: "normal",
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: "normal",
        letterSpacing: "normal",
        color: "#181c1b",
    },
    title5: {
        fontFamily: "Roboto",
        fontSize: "18px",
        fontWeight: "normal",
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: "normal",
        letterSpacing: "normal",
        color: "#181c1b",
    },
    styleDatePicker: {
        width: "270px !important",
        height: "50px",
        backgroundColor: "#ffffff",
        fontSize: "16px",
        fontFamily: "roboto",
        color: "#000000",
    },
    root: {
        display: "flex",
        flexWrap: "wrap",
        "& > *": {
            margin: "-20px -385px -122px -44px",
            padding: "35px 53px 33px 54px",
            width: "170px",
            height: "111px",
            backgroundColor: "#e8f5fe",
        },
    },

    root1: {
        display: "flex",
        flexWrap: "wrap",
        "& > *": {
            margin: "-85px -400px -130px 17px",
            padding: "35px 53px 33px 54px",
            width: "170px",
            height: "111px",
            backgroundColor: "#f7f5f5",
        },
    },
    inner: {
        width: "115px",
        height: "21px",
        // margin: "23px 34px  19px",
        // marginRight:"10px",
        marginTop: "-10px",
        marginLeft: "-20px",
        fontFamily: "Roboto",
        fontSize: "18px",
        fontWeight: "normal",
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: "normal",
        letterSpacing: "normal",
        color: "#181c1b",
    },
    inner1: {
        width: "63px",
        height: "38px",
        margin: "25px 53px 0",
        fontFamily: "Roboto",
        fontSize: "32px",
        fontWeight: "normal",
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: "normal",
        letterSpacing: "normal",
        color: "#000000",
    },
    inner2: {
        width: "126px",
        height: "21px",
        // margin: "24px 21px 19px",
        marginTop: "-10px",
        marginLeft: "-29px",
        fontFamily: "Roboto",
        fontSize: "18px",
        fontWeight: "normal",
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: "normal",
        letterSpacing: "normal",
        color: "#181c1b",
    },
    inner3: {
        width: "63px",
        height: "38px",
        margin: "21px 63px 0",
        fontFamily: "Roboto",
        fontSize: "32px",
        fontWeight: "normal",
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: "normal",
        letterSpacing: "normal",
        color: "#000000",
    },
}));

export default function InformationComponent(props) {
    const classes = useStyles();
    const {handleSelectChange, isValuesDisabled = false} = props

    return (
        <div className="m-l-200">
            <span className={classes.title}>{'Patient Height'}</span>
            <HeightWeightComponent heightQuestionAnswer={props.state.heightQuestionAnswer}
                 weightQuestionAnswer={props.state.weightQuestionAnswer}
                 handleChange={props.handleChange}
            />
            <span className={classes.title}>{'Gender'} </span>
            <Row>
                <Column>
                    <Select3
                        onChange={(event) => handleSelectChange(event, 'genderQuestionAnswer', patientInfoQuestionIdsConstants.gender)}
                        value={props.state.genderQuestionAnswer || ''} disabled={isValuesDisabled}>
                        <Options>Select</Options>
                        {props?.state.GENDER_OPTION.length > 0 && props?.state.GENDER_OPTION.map((optionObj, index) =>
                            <Options value={optionObj.id}>{optionObj.value || ''}</Options>
                        )}

                    </Select3>
                    <span className={classes.title}>{'Date of Birth'}</span>
                    <DobComponent dobQuestionAnswer={props.state.dobQuestionAnswer}
                                  handleDatePicker={props.handleDatePicker}/>
                </Column>
            </Row>

            <span className={classes.title}>{'Education Level'}</span>
            <Row>
                <Select4
                    onChange={(event) => handleSelectChange(event, 'educationQuestionAnswer', patientInfoQuestionIdsConstants.education)}
                    value={props.state.educationQuestionAnswer || ''} disabled={isValuesDisabled}>
                    <Options>Select</Options>
                    {props?.state.EDUCATION_OPTION.length > 0 && props?.state.EDUCATION_OPTION.map((optionObj, index) =>
                        <Options value={optionObj.id}>{optionObj.value || ''}</Options>
                    )}


                </Select4>
            </Row>
            <span className={classes.title}>{'First Time Surgery'} </span>
            <Row>
                <Select5
                    onChange={(event) => handleSelectChange(event, 'firstTimeQuestionAnswer', patientInfoQuestionIdsConstants.firstTimeSurgery)}
                    value={props.state.firstTimeQuestionAnswer || ''} disabled={isValuesDisabled}>
                    <Options>Select</Options>
                    {props?.state.FIRST_TIME_SURGERY_OPTION.length > 0 && props?.state.FIRST_TIME_SURGERY_OPTION.map((optionObj, index) =>
                        <Options value={optionObj.id}>{optionObj.value || ''}</Options>
                    )}

                </Select5>
            </Row>
            <span className={classes.title5}>{'Any Allergy to Medications'} </span>
            <Row>
                <Select6
                    onChange={(event) => handleSelectChange(event, 'anyAllergyToMedicationQuestionAnswer', patientInfoQuestionIdsConstants.allergyToMedication)}
                    value={props.state.anyAllergyToMedicationQuestionAnswer || ''} disabled={isValuesDisabled}>
                    <Options>Select</Options>
                    {props?.state.ANY_ALLERGY_OPTION.length > 0 && props?.state.ANY_ALLERGY_OPTION.map((optionObj, index) =>
                        <Options value={optionObj.id}>{optionObj.value || ''}</Options>
                    )}

                </Select6>
            </Row>
        </div>
    );
}