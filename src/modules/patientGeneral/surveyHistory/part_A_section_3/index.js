import React, {Component} from 'react'
import MedicationComponent from './medicationComponent'
import {FileUploadService, PatientService} from "../../../../services";
import Utils from "../../../../utility";

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
export default class Part_A_Section_3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
            answer: this.props?.questionObject?.answer || '',
            answerValueList: this.props?.questionObject?.answer?.value || [],
        };
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
            name: '',
            dosage: '',
            frequency: '',
            url: '',
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
            <div>
                <MedicationComponent saveAnswer={this.saveAnswer}
                                     onRemoveAnswerObj={this.onRemoveAnswerObj}
                                     nameChange={this.nameChange}
                                     onFileChange={this.onFileChange}
                                     handleChange={this.handleChange} handleSelectChange={this.handleSelectChange}
                                     state={this.state}/></div>
        )
    }
}
