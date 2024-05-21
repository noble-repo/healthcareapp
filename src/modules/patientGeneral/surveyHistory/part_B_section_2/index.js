import React, {Component} from 'react'
import PreviousSurgery from './previousSurgery'
import {Row, Column} from "simple-flexbox";
import Header from '../../dashboard/header'
import moment from "moment";
import Utils from "../../../../utility";
import {PatientService} from "../../../../services";

const SEDATION_TYPE_OPTION = [
    {id: "General Breathing Tube", value: "General Breathing Tube"}
];
const SURGICAL_COMPLICATION_OPTION = [
    {id: "Yes", value: "Yes"},
    {id: "No", value: "No"},
];
const rows = [
    {

        SurgeryType: 'Shoulder Reconstruction ',
        SurgeryDate: 'Surgery Date',
        SedationType: 'Sedation Type',
        SurgicalComplication: 'Surgical Complications',
        AnestheticComplications: 'Anesthesia Complication (Nausea, vomiting, difficult intubation)',
    },
]

export default class PreviousSurgerySurvey extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rowCounter: 1,
            getCount: [],
            rows: rows,
            SEDATION_TYPE_OPTION: SEDATION_TYPE_OPTION,
            SURGICAL_COMPLICATION_OPTION: SURGICAL_COMPLICATION_OPTION,
            shoulderReconstruction: '',
            surgeryDate: '',
            sedationType: '',
            surgicalComplication: '',
            anesthesiaComplication: '',
            shoulderReconstructionError: '',
            surgeryDateError: '',
            sedationTypeError: '',
            surgicalComplicationError: '',
            anesthesiaComplicationError: '',
            answer: this.props?.questionObject?.answer || '',
            answerValueList: this.props?.questionObject?.answer?.value || [],
        };
    }

    validateValues = () => {
        let shoulderReconstructionError = !this.state.shoulderReconstruction ? 'Please enter shoulder reconstruction' : ''
        let surgeryDateError = !this.state.surgeryDate ? 'Please select surgery date' : ''
        let sedationTypeError = !this.state.sedationType ? 'Please select sedation type' : ''
        let surgicalComplicationError = !this.state.surgicalComplication ? 'Please select surgical complication' : ''
        let anesthesiaComplicationError = !this.state.anesthesiaComplication ? 'Please select anesthesia complication' : ''
        this.setState({
            shoulderReconstructionError,
            surgeryDateError,
            sedationTypeError,
            surgicalComplicationError,
            anesthesiaComplicationError
        })
        return !!(shoulderReconstructionError || surgeryDateError || sedationTypeError || surgicalComplicationError || anesthesiaComplicationError)
    }

    saveAnswer = () => {
        if (this.validateValues())
            return
        let answerValue = this.state.answerValueList
        answerValue.push({
            shoulderReconstruction: this.state.shoulderReconstruction,
            surgeryDate: this.state.surgeryDate,
            sedationType: this.state.sedationType,
            surgicalComplication: this.state.surgicalComplication,
            anesthesiaComplication: this.state.anesthesiaComplication,
        })
        this.submitQuestionAnswer(this.props.questionObject, {...this.state.answer, value: answerValue})
            .catch(error => console.error("submitTextInputAnswer error", error));
    };
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
            shoulderReconstruction: '',
            surgeryDate: 0,
            sedationType: '',
            surgicalComplication: '',
            anesthesiaComplication: '',
            answer: questionUpdateResponse.answer,
            answerValueList: questionUpdateResponse.answer.value
        })
    }
    onRemoveAnswerObj = (index) => {
        if (index < 0)
            return;
        let newAnswerObj = this.state.answerValueList.map((obj, innerIndex) => innerIndex !== index)
        this.submitQuestionAnswer(this.props.questionObject, {
            ...this.state.answer,
            value: newAnswerObj[0] === false ? [] : newAnswerObj
        })
            .catch(error => console.error("submitTextInputAnswer error", error));
    };

    nameChange = (event) => {
        let {name, value} = event.target;
        this.setState({[name]: value, shoulderReconstructionError: ''});
    }

    handleSelectChange = (event, name) => {
        this.setState({
            [name]: event.target.value, [`${name}Error`]: ''
        });
    }
    handleDatePicker = (event) => {
        this.setState({
            surgeryDate: event.target?.value && moment(event.target.value, 'YYYY-MM-DD').valueOf() || "",
            surgeryDateError: ''
        })

    }

    render() {
        return (
            <div>
                <PreviousSurgery saveAnswer={this.saveAnswer} onRemoveAnswerObj={this.onRemoveAnswerObj}
                                 nameChange={this.nameChange}
                                 handleSelectChange={this.handleSelectChange}
                                 handleDatePicker={this.handleDatePicker}
                                 state={this.state}
                />
            </div>
        )
    }
}

