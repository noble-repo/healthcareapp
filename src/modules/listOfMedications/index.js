import React from 'react';
import MedicationComponent from './medicationComponent';
import BaseComponent from '../baseComponent';
import {connect} from "react-redux";
import Utility, {dispatchAction} from "../../utility";
import {eventConstants} from "../../constants";
import {FileUploadService, PatientService} from "../../services";
import AddMedication from "./addMedication";
import Utils from "../../utility";

const DOSAGE_OPTION = [
    {id: "400 mg", value: "400 mg"},
    {id: "500 mg", value: "500 mg"},
    {id: "600 mg", value: "600 mg"},
]
const FREQUENCY_OPTION = [
    {id: "Once a day", value: "Once a day"},
    {id: "Twice a day", value: "Twice a day"},
    {id: "Thrice a day", value: "Thrice a day"},
]

class ListOfMedications extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            surveyId: '',
            questionId: "60640a6cac5eab0e0904ad66",
            sectionId: "606409aa633ac20de20a6983",
            questionData: '',
            answer: '',
            answerValueList: this.props?.questionObject?.answer?.value || [],
            open: false,
            DOSAGE_OPTION: DOSAGE_OPTION,
            FREQUENCY_OPTION: FREQUENCY_OPTION,
            name: '',
            dosage: '',
            frequency: '',
            url: '',
            nameError: '',
            dosageError: '',
            frequencyError: '',
            urlError: '',
        }
    }

    componentDidMount() {
        if (this.props?.selectedSurgery?.patient?.surveyId) {
            this.getQuestionDetail(this.props?.selectedSurgery?.patient?.surveyId, this.state.sectionId, this.state.questionId).catch(error => console.error(error))
            this.setState({surveyId: this.props?.selectedSurgery?.patient?.surveyId})
        }
    }
    componentWillReceiveProps(nextProps, prevProps) {
        if (this.state.surveyId && nextProps && nextProps.selectedSurgery && nextProps.selectedSurgery.patient && nextProps.selectedSurgery.patient.surveyId && nextProps.selectedSurgery.patient.surveyId !== this.state.surveyId) {
            this.getQuestionDetail(this.props?.selectedSurgery?.patient?.surveyId, this.state.sectionId, this.state.questionId).catch(error => console.error(error))
            this.setState({surveyId: this.props?.selectedSurgery?.patient?.surveyId})
        }
    }

    getQuestionDetail = async (surveyId, sectionId, questionId) => {
        if (!surveyId)
            return;
        this.props.dispatchAction(eventConstants.SHOW_LOADER);
        let [error, questionData] = await Utility.parseResponse(PatientService.getQuestionDetail({
            surveyId,
            sectionId, questionId
        }));
        this.props.dispatchAction(eventConstants.HIDE_LOADER);
        if (error) {
            return Utility.apiFailureToast(error || "unable to fetch questionData.");
        }
        this.setState({
            questionData: questionData,
            answer: questionData.answer || '',
            answerValueList: questionData.answer?.value || []
        })
    }

    handleDialog = () => {
        this.setState({open: !this.state.open})
    }
    validateValues = () => {
        let nameError = !this.state.name ? 'Please enter the name' : ''
        let dosageError = !this.state.dosage ? 'Please select dosage' : ''
        let frequencyError = !this.state.frequency ? 'Please select frequency' : ''
        let urlError = !this.state.url ? 'Please upload images' : ''
        this.setState({nameError, dosageError, frequencyError, urlError})
        return !!(nameError || dosageError || frequencyError || urlError)
    }

    saveAnswer = () => {
        if (this.validateValues())
            return
        let answerValue = this.state.answerValueList
        answerValue.push({
            name: this.state.name,
            dosage: this.state.dosage,
            frequency: this.state.frequency,
            url: this.state.url
        })
        this.submitQuestionAnswer({...this.state.answer, value: answerValue})
            .catch(error => console.error("submitTextInputAnswer error", error));
    };

    submitQuestionAnswer = async (answerObj) => {
        let requestData = {};
        requestData['surveyId'] = this.state.surveyId;
        requestData['questionId'] = this.state.questionId;
        requestData['sectionId'] = this.state.sectionId;
        requestData['answer'] = this.state.questionData.answer && !Utils.isEmpty(this.state.questionData.answer.id) && this.state.questionData.answer.id === answerObj.id ? {
            id: "",
            value: ""
        } : answerObj;
        requestData['parentQuestionId'] = this.state.questionData && this.state.questionData.parentQuestionId ? this.state.questionData.parentQuestionId : "";
        let subQuesArray = [];
        if (requestData['answer'].id && this.state.questionData.optionArray && this.state.questionData.optionArray.length > 0) {
            subQuesArray = this.state.questionData.optionArray.filter(obj => obj.id === requestData['answer'].id);
        }
        requestData['subQuesArray'] = subQuesArray.length > 0 && this.state.questionData.subQuesArray && Object.keys(this.state.questionData.subQuesArray).length > 0 ?
            this.state.questionData.subQuesArray[subQuesArray[0].id] : [];

        let [error, questionUpdateResponse] = await Utils.parseResponse(PatientService.submitAnswer(requestData));
        if (error || !questionUpdateResponse) {
            console.error("submitAnswer error for question : " + this.state.questionData.question, error);
            Utils.apiFailureToast("Unable to submit answer!");
            return;
        }
        this.setState({
            name: '',
            dosage: '',
            frequency: '',
            url: '',
            open: false,
            questionData: questionUpdateResponse,
            answer: questionUpdateResponse.answer,
            answerValueList: questionUpdateResponse.answer.value
        })
    }
    nameChange = (event) => {
        let {name, value} = event.target;
        this.setState({[name]: value, nameError: ''});

    };

    handleSelectChange = (event, name) => {
        this.setState({
            [name]: event.target.value, [`${name}Error`]: ''
        });
    }

    onFileChange = (event) => {
        let files = event.target.files
        this.uploadFileToS3(files[0]).catch(error => console.error("upload file error", error))
        this.setState({
            files: files, urlError: ''
        });
    }
    uploadFileToS3 = async (fileObj) => {
        console.log("hello1==")
        if (!fileObj)
            return
        const [error, response] = await Utils.parseResponse(FileUploadService.uploadFile('questionImages', fileObj))
        if (error || !response || response.length < 1) {
            return Utils.apiFailureToast('unable to upload file')
        }
        this.setState({url: response[0].url, urlError: ''});
    }

    render() {
        return (
            <>
                {<AddMedication
                    open={this.state.open}
                    state={this.state}
                    name={this.state.name}
                    url={this.state.url}
                    dosage={this.state.dosage}
                    frequency={this.state.frequency}
                    handleDialog={this.handleDialog}
                    nameChange={this.nameChange}
                    onFileChange={this.onFileChange}
                    handleSelectChange={this.handleSelectChange}
                    saveAnswer={this.saveAnswer}
                />}
                <MedicationComponent state={this.state} handleDialog={this.handleDialog} afterMeeting={this.props.afterMeeting ? this.props.afterMeeting : false} />
            </>

        )
    }
}


const mapStateToProps = (state) => {
    return {user: state.user}
};

export default connect(mapStateToProps, {dispatchAction})(ListOfMedications);
