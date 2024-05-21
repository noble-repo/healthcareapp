import React, {PureComponent} from "react";
import BaseComponent from "../../baseComponent";
import Header from "../dashboard/header";
import InsuranceSurveyComponent from "./surveyHistoryComponent";
import {eventConstants} from "../../../constants";
import Utility, {dispatchAction} from "../../../utility";
import {PatientService, NotificationService} from "../../../services";
import {connect} from "react-redux";
import {history} from "../../../managers/history"
import "./index.css"

class InsuranceSurvey extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            selectValue: "",
            selectSubValue: "",
            surveyId: "",
            part: "",
            selectedSection: {},
            selectedSectionIndex: 0,
            sectionList: [],
            questionList: [],
            part_status: [],
            partValues: {
                PART_A: {
                    name: "General and Insurance Information",
                    img: <div  style={{backgroundImage:"url(/images/Bitmap.png)"}} className='img_sectionPart' />
                    
                },
                PART_B: {name: "Surgical History", img: <img src="/images/surgical.jpg" className='img_sectionPart'/>},
                PART_C: {name: "Cardiac Survey", img: <img src="/images/image3.png" className='img_sectionPart' style={{marginLeft:'-40%', width:'244%'}}/>},
                PART_D: {name: "Pulmonary Survey", img: <img src="/images/Pulmonary.jpg" className='img_sectionPart' />},
                PART_E: {name: "Renal Survey", img: <img src="/images/RenalSurvey.jpg"  className='img_sectionPart'/>},
                PART_F: {
                    name: "Endocrine and Heme Survey",
                    img: <img src="/images/EndocrineSurvey.jpg" className='img_sectionPart' />
                },
                PART_G: {name: "Neurological Survey ", img: <img src="/images/make.jpg"  className='img_sectionPart'/>},
                PART_H: {
                    name: "GastroIntestinal Survey",
                    img: <img src="/images/gastrointestinal.jpg"  className='img_sectionPart'/>
                },
                PART_I: {name: "Miscellaneous", img: <img src="/images/Miscellaneous.jpg"  className='img_sectionPart'/>},
            },


        };

    }

    componentDidMount() {
        console.log(this.props?.location?.state?.part_status);
        this.state.part_status.push(this.props?.location?.state?.part_status);
        // this.setState({part_status : this.props?.location?.state?.part_status});
        let pathName = window.location.pathname;
        let pathArray = pathName.split('/');
        console.log("pathArray===", pathArray)
        if (pathArray && pathArray.length === 5) {
            this.getSectionListByPartWise(pathArray[pathArray.length - 2], pathArray[pathArray.length - 1])
            this.setState({surveyId: pathArray[pathArray.length - 2], part: pathArray[pathArray.length - 1]})

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
            this.setState({surveyId, sectionList, selectedSection: sectionList[0]})
            this.getSectionQuestionList(surveyId, sectionList[0].sectionId).catch(error => console.log("error"))
        }
    }

    getSectionQuestionList = async (surveyId, sectionId) => {
        this.props.dispatchAction(eventConstants.SHOW_LOADER);
        let [error, questionList] = await Utility.parseResponse(PatientService.getSectionQuestionList({
            surveyId,
            sectionId
        }));
        this.props.dispatchAction(eventConstants.HIDE_LOADER);
        if (error) {
            return Utility.apiFailureToast(error || "unable to fetch question list.");
        }
        this.setState({questionList})
    }

    onClickSectionTab = async (sectionObj, selectedSectionIndex = 0) => {
        if (!sectionObj || Object.keys(sectionObj).length < 1 || !sectionObj.surveyId || !sectionObj.sectionId)
            return;
        await this.getSectionQuestionList(sectionObj.surveyId, sectionObj.sectionId)
        this.setState({selectedSection: sectionObj, selectedSectionIndex: selectedSectionIndex})
    }

    handleChange = (e) => {
        this.setState({
            selectValue: e.target.value,
        });
        console.log("selected value is", this.state.selectValue);
    };
    handleSubChange = (e) => {
        this.setState({
            selectSubValue: e.target.value,
        });
        console.log("selected value is", this.state.selectSubValue);
    };

    sendNotification = async()=>{
        const userData = this.props?.user?.userDetails;
        let NotificationrequestData = {
            messageProvider:"",
            isCleared:false,
            isRead:false,
            deviceID:"",
            userID: userData?.userId,
            sentFromName: userData?.firstName,
            sentFromEmail:userData?.email,
            priority:1,
            entityID:"",
            notificationFor:userData?.email,
            type:"push",
            isDelivered:true,
            postedToDeviceType:"",
            postedTo:   userData?.email,
            postedBy:   userData?.email,
            description:'<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-...',
            payload:{
                role:  userData?.role,
                notificationType:"APPOINTMENT ACCEPTANCE",
                addedOn: (new Date()).getTime(),
                sentFrom: {
                    email: userData?.email,
                    _id: "",
                    name: userData?.firstName,
                },
                sendTo: {
                    email: userData?.email,
                    _id: "",
                    name: userData?.firstName,
                }
            },
            title: userData?.firstName +  ' has completed the survey ',
        }
        let [err, addNotification] = await Utility.parseResponse(NotificationService.addNotification(NotificationrequestData));
        // if(err){
        //     return Utility.apiFailureToast('Unable to send notification');
        // }
        let NotificationrequestDataEmail = {            
            messageProvider:"",
            isCleared:false,
            isRead:false,
            deviceID:"",
            userID: userData?.userId,
            sentFromName: userData?.firstName,
            sentFromEmail:userData?.email,
            priority:1,
            entityID:"",
            notificationFor:userData?.email,
            type:"email",
            isDelivered:true,
            postedToDeviceType:"",
            postedTo:   userData?.email,
            postedBy:   userData?.email,
            description:'<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-...',
            payload:{
                role:  userData?.role,
                notificationType:"APPOINTMENT ACCEPTANCE",
                addedOn: (new Date()).getTime(),
                sentFrom: {
                    email: userData?.email,
                    _id: "",
                    name: userData?.firstName,
                },
                sendTo: {
                    email: userData?.email,
                    _id: "",
                    name: userData?.firstName,
                }
            },
            title: userData?.firstName +  ' has completed the survey ',
        }
        let [er, addEmailNotification] = await Utility.parseResponse(NotificationService.addNotification(NotificationrequestDataEmail));
        
    }

    onClickPreviousBtn = () => {         
        if (this.state.selectedSectionIndex === 0 || this.state.selectedSectionIndex === this.state.sectionList.length - 1){
            this.state.part_status.map((survey)=>{
                if(survey.completedSection == survey.totalSection){
                    this.sendNotification();
                }
            })
            return history.push('/patient/dashboard')
        }
        else if (this.state.selectedSectionIndex < this.state.sectionList.length - 1)
            return this.onClickSectionTab(this.state.sectionList[this.state.selectedSectionIndex - 1], this.state.selectedSectionIndex - 1)
    }
    onClickNextBtn = () => {
        if (this.state.selectedSectionIndex === this.state.sectionList.length - 1) {
            let nextPart = Utility.getNextPart(this.state.part)
            if (nextPart) {
                this.setState({selectedSectionIndex: 0, part: nextPart})
                this.getSectionListByPartWise(this.state.surveyId, nextPart).catch(error => console.log("error", error))
            }else{
                console.log(this.state.part_status);
                var part_status = this.state.part_status;
                    part_status.map((survey)=>{
                    if(survey.completedSection == survey.totalSection){
                        this.sendNotification();
                    }
                })
            }
            history.push(nextPart ? `/patient/survey-history/${this.state.surveyId}/${nextPart}` : '/patient/dashboard')
        } else if (this.state.selectedSectionIndex < this.state.sectionList.length - 1)
            this.onClickSectionTab(this.state.sectionList[this.state.selectedSectionIndex + 1], this.state.selectedSectionIndex + 1).catch(error => console.log("error", error))
    }

    render() {
        return (
            <div>
                <div>
                    <Header/>
                </div>
                <InsuranceSurveyComponent
                    state={this.state}
                    handleChange={this.handleChange}
                    handleSubChange={this.handleSubChange}
                    onClickSectionTab={this.onClickSectionTab}
                    onClickPreviousBtn={this.onClickPreviousBtn}
                    onClickNextBtn={this.onClickNextBtn}

                />

            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {user: state.user}
};

export default connect(mapStateToProps, {dispatchAction})(InsuranceSurvey);
