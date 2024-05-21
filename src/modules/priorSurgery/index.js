import React, {Component} from 'react'
import PriorSurgeryComponent from './priorSurgeryComponent';
import EditDialog from "./editDialog";
import {connect} from "react-redux";
import Utility, {dispatchAction} from "../../utility";
import {eventConstants} from "../../constants";
import {PatientService} from "../../services";
import moment from "moment";
import Utils from "../../utility";

const rows = [
    {

        SurgeryType: 'Shoulder Reconstruction ',
        Date: 'January 2008',
        AnesthesiaType: 'General"Breathing Tube"',
        SurgicalComplication: 'No',
        AnestheticComplications: 'No',

    },
]

const SEDATION_TYPE_OPTION = [
    {id: "General Breathing Tube", value: "General Breathing Tube"}
];
const SURGICAL_COMPLICATION_OPTION = [
    {id: "Yes", value: "Yes"},
    {id: "No", value: "No"},
];

class PriorSurgery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: rows,
            SEDATION_TYPE_OPTION: SEDATION_TYPE_OPTION,
            SURGICAL_COMPLICATION_OPTION: SURGICAL_COMPLICATION_OPTION,
            open: false,
            edit: false,
            surveyId: '',
            editedObjIndex: -1,
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
            question: '',
            answer: this.props?.questionObject?.answer || '',
            answerValueList: this.props?.questionObject?.answer?.value || [],
            sectionList: [],
            questionList: {},


        }
    }
    componentDidMount() {

        if (this.props.selectedSurgery?.patient?.surveyId ) {
            this.getSectionListByPartWise(this.props.selectedSurgery.patient.surveyId, 'PART_B')
            this.setState({surveyId: this.props.selectedSurgery?.patient?.surveyId || ''})
        }
    }
    componentWillReceiveProps(nextProps, prevProps) {
        if (this.state.surveyId && nextProps && nextProps.selectedSurgery && nextProps.selectedSurgery.patient && nextProps.selectedSurgery.patient.surveyId && nextProps.selectedSurgery.patient.surveyId !== this.state.surveyId) {
            this.getSectionListByPartWise(nextProps.selectedSurgery.patient.surveyId, 'PART_B')
            this.setState({surveyId: nextProps.selectedSurgery.patient.surveyId})
        }
    }

    getSectionListByPartWise = async (surveyId, part) => {
        this.props.dispatchAction(eventConstants.SHOW_LOADER);
        let [error, sectionList] = await Utility.parseResponse(PatientService.getSectionListByPartWise({
            surveyId,
            part
        }));
        this.props.dispatchAction(eventConstants.HIDE_LOADER);
        if (error) {
            return Utility.apiFailureToast(error || "unable to fetch section list.");
        }
        if (sectionList && sectionList.length > 0) {
            this.setState({surveyId, sectionList})
            let sectionIdsList = []
            console.log("sectionList== before", sectionList)
            sectionList.sort((a, b) => a.position - b.position)
            console.log("sectionList== after", sectionList)

            sectionList.forEach((section, index) => index < sectionList.length - 1 && sectionIdsList.push(section.sectionId))
            this.getSectionWiseQuestionList(surveyId, sectionIdsList).catch(error => console.log("error"))
        }
    }
    getSectionWiseQuestionList = async (surveyId, sectionIdsList) => {
        this.props.dispatchAction(eventConstants.SHOW_LOADER);
        let [error, questionList] = await Utility.parseResponse(PatientService.getSectionWiseQuestionList({
            surveyId,
            sectionIdsList: sectionIdsList
        }));
        this.props.dispatchAction(eventConstants.HIDE_LOADER);
        if (error) {
            return Utility.apiFailureToast(error || "unable to fetch question list.");
        }
        this.setState({questionList})
    }


    handleDialog = () => {
        this.setState({
            open: !this.state.open
        })
    }

    editDialog = (question = this.state.question || {}, answerObj = {}, index = -1) => {
        console.log("question====", question)
        if (!question || Object.keys(question).length < 1)
            return
        this.setState({
            editedObjIndex: index,
            shoulderReconstruction: answerObj?.shoulderReconstruction || '',
            surgeryDate: answerObj?.surgeryDate || '',
            sedationType: answerObj?.sedationType || '',
            surgicalComplication: answerObj?.surgicalComplication || '',
            anesthesiaComplication: answerObj?.anesthesiaComplication || '',
            question: question,
            answer: question?.answer || '',
            answerValueList: question?.answer?.value || [],
            edit: !this.state.edit
        })
    }
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
        if (this.state.editedObjIndex > -1) {
            answerValue[this.state.editedObjIndex].shoulderReconstruction = this.state.shoulderReconstruction
            answerValue[this.state.editedObjIndex].surgeryDate = this.state.surgeryDate
            answerValue[this.state.editedObjIndex].sedationType = this.state.sedationType
            answerValue[this.state.editedObjIndex].anesthesiaComplication = this.state.anesthesiaComplication
        } else
            answerValue.push({
                shoulderReconstruction: this.state.shoulderReconstruction,
                surgeryDate: this.state.surgeryDate,
                sedationType: this.state.sedationType,
                surgicalComplication: this.state.surgicalComplication,
                anesthesiaComplication: this.state.anesthesiaComplication,
            })
        this.submitQuestionAnswer(this.state.question, {...this.state.answer, value: answerValue})
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
        this.getSectionListByPartWise(this.state.surveyId, 'PART_B')
        Utils.apiSuccessToast("Previous Surgery Detail has been updated successfully");

        this.setState({
            edit: false,
            shoulderReconstruction: '',
            surgeryDate: 0,
            sedationType: '',
            surgicalComplication: '',
            anesthesiaComplication: '',
            answer: questionUpdateResponse.answer,
            answerValueList: questionUpdateResponse.answer.value
        })
    }

    deleteSurgeryRecord=(question = this.state.question || {}, answerObj = {}, index = -1)=>{
        console.log("question====", question)
        if (!question || Object.keys(question).length < 1, index<=-1)
            return
        let answerValue = question?.answer?.value
        if (!answerValue || answerValue.length<1)
            return;
        answerValue.splice(index,1)
        this.submitQuestionAnswer(question, {...this.state.answer, value: answerValue})
            .catch(error => console.error("submitTextInputAnswer error", error));
    }
    render() {
        return (
            <>
                <PriorSurgeryComponent state={this.state}
                                       handleDialog={this.handleDialog}
                                       editDialog={this.editDialog}
                                       deleteSurgeryRecord={this.deleteSurgeryRecord}
                />

                {this.state.edit ?
                    <EditDialog
                        editDialog={this.editDialog}
                        state={this.state}
                        shoulderReconstruction={this.state.shoulderReconstruction}
                        surgeryDate={this.state.surgeryDate}
                        sedationType={this.state.sedationType}
                        surgicalComplication={this.state.surgicalComplication}
                        anesthesiaComplication={this.state.anesthesiaComplication}
                        nameChange={this.nameChange}
                        handleSelectChange={this.handleSelectChange}
                        handleDatePicker={this.handleDatePicker}
                        saveAnswer={this.saveAnswer}
                    /> : ""
                }
            </>
        )
    }
}


const mapStateToProps = (state) => {
    return {user: state.user}
};

export default connect(mapStateToProps, {dispatchAction})(PriorSurgery);