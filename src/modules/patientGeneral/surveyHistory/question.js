import BaseComponent from "../../baseComponent";
import {genericConstants} from "../../../constants";
import Utility from "../../../utility";
import styled from "styled-components";
import React from "react";
import Select from "@material-ui/core/Select";
import QuestionCell from ".//question";
import CustomInput from "../../../common/components/CustomInput";
// import {DropzoneArea} from 'material-ui-dropzone';
import DatePicker from "../../../common/components/DatePicker";
import Upload from "../../../common/components/upload";
import Utils from "../../../utility";
import {FileUploadService, PatientService} from "../../../services";
import Button from "@material-ui/core/Button";
import {Row} from "simple-flexbox";
import moment from "moment";



const SubHeading = styled.div`
font-family: Roboto;
font-size: 18px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
margin-top:30px;
margin-left:205px;
color: #181c1b;
`;
class QuestionComponent extends BaseComponent {
    constructor(props) {
        super(props);
        let answerState = this.props.questionObject ? this.props.questionObject.answer : null;
        this.state = {
            questionList: [],
            isSaveButtonVisible: false,
            files: [],
            answer: {
                id: answerState ? answerState.id : null,
                value: answerState ? answerState.value : null,
                type: answerState ? answerState.type : null,
            }, questionObject: this.props.questionObject,
            selectedSection: this.props.selectedSection,
            subQuestions: answerState || (this.props.questionObject && this.props.questionObject.type === genericConstants.QUESTION_TYPE.INFO) ? Utility.extractNestedQuestionOnOptionSelection(this.props.questionObject, answerState.id, this.props.questionsList) : [],

        }
    }


    handleSelectChange = (event, optionObj) => {
        let nestedQuestionArray = Utility.extractNestedQuestionOnOptionSelection(this.props.questionObject, optionObj.props.value, this.props.questionsList);
        console.log("nestedQuestionArray==", nestedQuestionArray)
        this.setState({
            subQuestions: nestedQuestionArray,
            answer: {
                ...this.state.answer,
                id: optionObj.props.value,
                value: optionObj.props.children,
            }
        });
        this.submitQuestionAnswer(this.props.questionObject, {
            ...this.state.answer,
            id: optionObj.props.value,
            value: optionObj.props.children,
        }).catch(error => console.error("error handleSelectChange==", error))
    }

    handleInputFieldChange = (event) => {
        this.setState({
            answer: {
                ...this.state.answer,
                id: '',
                value: event.target.value,
            },
            isSaveButtonVisible: true,

        });
    }

    handleChange = (files) => {
        console.log("files===", files[0])
        this.uploadFileToS3(files[0]).catch(error => console.error("upload file error", error))
        this.setState({
            files: files,
        });
    }
    uploadFileToS3 = async (fileObj) => {
        if (!fileObj)
            return
        const [error, response] = await Utility.parseResponse(FileUploadService.uploadFile('questionImages', fileObj))
        console.log("response===", response)
        if (error || !response || response.length < 1) {
            return Utility.apiFailureToast('unable to upload file')
        }
        this.setState({answer: {...this.state.answer, id: '', value: response[0].url,}});
        this.submitQuestionAnswer(this.props.questionObject, {
            ...this.state.answer,
            id: '',
            value: response[0].url,
        }).catch(error => console.error("error handleSelectChange==", error))
    }

    handleDataChange = (event, questionObject) => {
        this.setState({
            answer: {
                ...this.state.answer,
                value: moment(event.target.value, 'YYYY-MM-DD').valueOf() || " ",
            }
        });
        this.submitQuestionAnswer(questionObject, {
            ...this.state.answer,
            value: moment(event.target.value, 'YYYY-MM-DD').valueOf() || " ",
        }).catch(error => console.error("submitTextInputAnswer error", error));
    };
    updateState = (key, value) => {
        this.setState({[key]: value});
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
    }

    async submitTextInputAnswer(questionObject, isItForDatePicker = false) {
        if (!this.state.isSaveButtonVisible && !isItForDatePicker)
            return;
        if (!this.state.answer)
            return;
        this.setState({isSaveButtonVisible: false})
        this.submitQuestionAnswer(questionObject, this.state.answer)
            .catch(error => console.error("submitTextInputAnswer error", error));
    }

    AnswersComponent = (questionObject) => {
        if (!questionObject || !questionObject.type)
            return
        // eslint-disable-next-line default-case
        switch (questionObject.type) {
            case genericConstants.QUESTION_TYPE.DROPDOWN:
                return (<div className="display-flex flex-direction-row justify-content-center">
                    <Select value={this.state?.answer?.id || ''} className="w-530 h-50 cursor-pointer" 
                            onChange={(event, optionObj) => this.handleSelectChange(event, optionObj)}>
                        <option>Select</option>
                        {questionObject?.optionArray.length > 0 && questionObject?.optionArray.map((optionObj, index) =>
                            <option className="cursor-pointer" value={optionObj.id}>{optionObj.value || ''}</option>
                        )}
                    </Select>
                </div>)
            case genericConstants.QUESTION_TYPE.DESCRIPTION :
                return (<>
                    <div className="display-flex flex-direction-row justify-content-center">
                        <CustomInput type='text' value={this.state?.answer?.value} className="w-530 h-50"
                                     onBlur={() => this.submitTextInputAnswer(questionObject)}
                                     onChange={(event) => this.handleInputFieldChange(event)}/>
                    </div>
                    {this.state.isSaveButtonVisible ?
                        <Row className="display-flex align-content-end my-2 w-530 m-auto" horizontal={"end"}>
                            <div>
                                <Button onClick={() => this.updateState("isSaveButtonVisible", false)}
                                        className="outline-none text-transform-capitalize p-2 br-4 b-1-white-two bg-pale-grey fc-brownish-grey mx-1 fw-500 px-3 cursor-pointer">
                                    Cancel
                                </Button>
                                <Button onClick={() => this.submitTextInputAnswer(questionObject)}
                                        className="outline-none text-transform-capitalize p-2 br-4 b-1-white-two bg-blue fc-white mx-1 fw-500 px-3 cursor-pointer">
                                    Save
                                </Button>
                            </div>
                        </Row> : null}
                </>)

            case genericConstants.QUESTION_TYPE.UPLOAD :
                return (<div className="display-flex flex-direction-column justify-content-center w-530 dis-flex m-auto ">
                    <Upload 
                        value={this.state.answer.value || ''}
                        onFileChange={this.handleChange}
                    />
                </div>)
            case genericConstants.QUESTION_TYPE.DATE_PICKER:
                return (<div className="display-flex flex-direction-row justify-content-center w-530 ">
                    <DatePicker
                        value={this.state.answer && this.state.answer.value ? moment(this.state.answer.value).format('YYYY-MM-DD') : ""}
                        questionObject={questionObject}
                        onChange={(event) => this.handleDataChange(event, questionObject)}/>
                </div>)


        }

    }

    render() {
        console.log("this.props====", this.props)
        return (<div>
            <SubHeading
                className="display-flex flex-direction-row "> {this.props?.questionObject?.question || ''}</SubHeading>
            {this.AnswersComponent(this.props?.questionObject)}
            <div className="display-flex flex-direction-column justify-content-center">
                {this.state.subQuestions.length > 0 && this.state.subQuestions[0].sectionId === this.props.selectedSection.sectionId ? this.state.subQuestions.map((questionObject) => {
                    return <QuestionCell
                        questionObject={questionObject}
                        selectedSection={this.props.selectedSection}
                        questionsList={this.props.questionsList}/>
                }) : null}
            </div>
        </div>)
    }
}

export default QuestionComponent
