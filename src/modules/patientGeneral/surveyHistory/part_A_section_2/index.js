import React, {Component} from 'react'
import InformationComponent from './informationComponent'
import Header from '../../dashboard/header'
import {Row, Column} from "simple-flexbox";
import Utils from "../../../../utility";
import moment from "moment";
import {FileUploadService, PatientService} from "../../../../services";
import QuestionCell from "../question";
import {patientInfoQuestionIdsConstants, sectionIdsConstants} from "../../../../constants";

const HEIGHT_OPTION = [
    {id: "5 Feet", value: "5 Feet"},
    {id: "6 Feet", value: "6 Feet"},
    {id: "7 Feet", value: "7 Feet"},
]
const HEIGHT_INCHES_OPTION = [
    {id: "1 inches", value: "1 inches"},
    {id: "2 inches", value: "2 inches"},
    {id: "3 inches", value: "3 inches"},
    {id: "4 inches", value: "4 inches"},
    {id: "5 inches", value: "5 inches"},
    {id: "6 inches", value: "6 inches"},
    {id: "7 inches", value: "7 inches"},
    {id: "8 inches", value: "8 inches"},
    {id: "9 inches", value: "9 inches"},
    {id: "10 inches", value: "10 inches"},
    {id: "11 inches", value: "11 inches"},
]
const GENDER_OPTION = [
    {id: "Male", value: "Male"},
    {id: "Female", value: "Female"},
]
const EDUCATION_OPTION = [
    {id: "High School Diploma", value: "High School Diploma"},
    {id: "Less than 12 years", value: "Less than 12 years"},
    {id: "Associates Degree", value: "Associates Degree"},
    {id: "Bachelors Degree", value: "Bachelors Degree"},
    {id: "Masters Degree", value: "Masters Degree"},
    {id: "Doctrate Degree", value: "Doctrate Degree"},
]
const FIRST_TIME_SURGERY_OPTION = [
    {id: "Yes", value: "Yes"},
    {id: "No", value: "No"},
]
const ANY_ALLERGY_OPTION = [
    {id: "Yes", value: "Yes"},
    {id: "No", value: "No"},
]
export default class GeneralInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            surveyId: '',
            HEIGHT_OPTION: HEIGHT_OPTION,
            HEIGHT_INCHES_OPTION: HEIGHT_INCHES_OPTION,
            GENDER_OPTION: GENDER_OPTION,
            EDUCATION_OPTION: EDUCATION_OPTION,
            FIRST_TIME_SURGERY_OPTION: FIRST_TIME_SURGERY_OPTION,
            ANY_ALLERGY_OPTION: ANY_ALLERGY_OPTION,
            heightQuestionAnswer: 0,
            weightQuestionAnswer: 0,
            genderQuestionAnswer: '',
            dobQuestionAnswer: 0,
            educationQuestionAnswer: '',
            firstTimeQuestionAnswer: '',
            anyAllergyToMedicationQuestionAnswer: '',
        };
    }

    submitQuestionAnswer = async (questionObject, answerObj) => {
        let requestData = {};
        requestData['surveyId'] = questionObject.surveyId;
        requestData['questionId'] = questionObject.questionId;
        requestData['sectionId'] = questionObject.sectionId;
        requestData['answer'] = questionObject.answer && !Utils.isEmpty(questionObject.answer.id) && questionObject.answer.id === answerObj.id ? {
            id: "",
            value: ""
        } : answerObj;
        requestData['parentQuestionId'] = questionObject && questionObject.parentQuestionId ? questionObject.parentQuestionId : "";
        let subQuesArray = [];
        if (requestData['answer'].id && questionObject.optionArray && questionObject.optionArray.length > 0) {
            subQuesArray = questionObject.optionArray.filter(obj => obj.id === requestData['answer'].id);
        }
        requestData['subQuesArray'] = subQuesArray.length > 0 && questionObject.subQuesArray && Object.keys(questionObject.subQuesArray).length > 0 ?
            questionObject.subQuesArray[subQuesArray[0].id] : [];

        let [error, questionUpdateResponse] = await Utils.parseResponse(PatientService.submitAnswer(requestData));
        if (error || !questionUpdateResponse) {
            console.error("submitAnswer error for question : " + questionObject.question, error);
            Utils.apiFailureToast("Unable to submit answer!");
            return;
        }
        this.setState({
            name: '',
            height: '',
            heightInches: '',
            gender: '',
            DOB: 0,
            education: '',
            firstSurgery: '',
            anyAllergy: '',
            answer: questionUpdateResponse.answer,
            answerValueList: questionUpdateResponse.answer.value
        })
    }

    componentDidMount() {
        this.mapQuestionAnswerWithState()
    }

    mapQuestionAnswerWithState = () => {
        let heightQuestionAnswer = 0,
            weightQuestionAnswer = 0,
            genderQuestionAnswer = '',
            dobQuestionAnswer = 0,
            educationQuestionAnswer = '',
            firstTimeQuestionAnswer = '',
            anyAllergyToMedicationQuestionAnswer = '';
        this.props?.questionsList.length > 0 && this.props.questionsList.forEach((questionObj) => {
            switch (questionObj.questionId) {
                case patientInfoQuestionIdsConstants.height:
                    heightQuestionAnswer = questionObj?.answer?.value || 0
                    break;
                case patientInfoQuestionIdsConstants.weight:
                    weightQuestionAnswer = questionObj?.answer?.value || 0
                    break;
                case patientInfoQuestionIdsConstants.gender:
                    genderQuestionAnswer = questionObj?.answer?.value || ''
                    break;
                case patientInfoQuestionIdsConstants.dob:
                    dobQuestionAnswer = questionObj?.answer?.value || 0
                    break;
                case patientInfoQuestionIdsConstants.education:
                    educationQuestionAnswer = questionObj?.answer?.value || ''
                    break;
                case patientInfoQuestionIdsConstants.firstTimeSurgery:
                    firstTimeQuestionAnswer = questionObj?.answer?.value || ''
                    break;
                case patientInfoQuestionIdsConstants.allergyToMedication:
                    anyAllergyToMedicationQuestionAnswer = questionObj?.answer?.value || ''
                    break;
            }

        })
        this.setState({
            heightQuestionAnswer, weightQuestionAnswer, genderQuestionAnswer, dobQuestionAnswer,
            educationQuestionAnswer, firstTimeQuestionAnswer, anyAllergyToMedicationQuestionAnswer,
            surveyId: this.props?.questionObject?.surveyId
        })

    }

    handleSelectChange = (event, name, questionId = '') => {
        this.setState({
            [name]: event.target.value, [`${name}Error`]: ''
        });
        this.submitQuestionAnswer({
            questionId,
            sectionId: sectionIdsConstants.PART_A_SECTION_2,
            surveyId: this.state.surveyId
        }, {
            id: event.target.value,
            value: event.target.value
        }).catch(error => console.error("submitTextInputAnswer error", error));
    }
    handleDatePicker = (value, questionId = '') => {
        this.submitQuestionAnswer({
            questionId,
            sectionId: sectionIdsConstants.PART_A_SECTION_2,
            surveyId: this.state.surveyId
        }, {
            id: value,
            value: value
        }).catch(error => console.error("submitTextInputAnswer error", error));
        this.setState({dobQuestionAnswer: value})
    }
    handleChange = (value, name, questionId = '') => {
        this.submitQuestionAnswer({
            questionId,
            sectionId: sectionIdsConstants.PART_A_SECTION_2,
            surveyId: this.state.surveyId
        }, {
            id: value,
            value: value
        }).catch(error => console.error("submitTextInputAnswer error", error));
        this.setState({[name]: value})
    }

    render() {
        return (
            <Column>
                <InformationComponent handleSelectChange={this.handleSelectChange}
                                      state={this.state}
                                      handleDatePicker={this.handleDatePicker}
                                      handleChange={this.handleChange}
                />
            </Column>
        )
    }
}
