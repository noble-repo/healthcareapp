import React, {Component} from "react";
import BaseComponent from "../../baseComponent";
import DashboardComponent from "./dashboard";
import Header from "./header";
import Button from '@material-ui/core/Button';
import Surgery from "./Surgery";
import {Row} from "simple-flexbox";
import Card from "./Card";
import "./dashboard.css";
import {connect} from "react-redux";
import Utility, {dispatchAction} from "../../../utility";
import {documentActionTypeConstants, eventConstants, portalType, statusConstants} from "../../../constants";
import {FileUploadService, PatientService, NotificationService} from "../../../services";
import {Column} from "simple-flexbox";
import UploadAnesthesiaClearanceDocument
    from "../uploadAnesthesiaClearanceDocument/uploadAnesthesiaClearanceDocumentComponent";
import Utils from "../../../utility";
import ShowAlert from "./Surgery"

class PatientsDashboard extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            surveyId: '',
            rows: [
                {
                    img: <img src="/images/Bitmap.png"/>,
                    button: <Button variant="outlined" size="small" width="100px"
                                    height="42px" padding="12px 32px 11px 33px"
                                    borderRadius="2px"
                                    backgroundColor="#ffffff"
                                    float="right">
                        Start
                    </Button>,
                    backgroundColor: "blue",
                    name: "General and Insurance Information",
                    part: 'PART_A',

                },
                {
                    img: <img src="/images/surgical.jpg"/>,
                    name: " Surgical History",
                    part: 'PART_B',
                },
                {
                    img: <img src="/images/image3.png"/>,
                    name: "Cardiac Survey",
                    part: 'PART_C',
                },
                {
                    img: <img src="/images/imag4.png"/>,
                    name: "Pulmonary Survey",
                    part: 'PART_D',
                },

                {
                    img: <img src="/images/image5.png"/>,
                    name: "Renal Survey",
                    part: 'PART_E',
                },

                {
                    img: <img src="/images/image6.png"/>,
                    name: "Endocrine and Heme Survey",
                    part: 'PART_F',
                },
                {
                    img: <img src="/images/image7.png"/>,
                    name: " Neurological Survey ",
                    part: 'PART_G',
                },
                {
                    img: <img src="/images/image8.png"/>,
                    name: " GastroIntestinal Survey",
                    part: 'PART_H',
                },
                {
                    img: <img src="/images/image9.jpg"/>,
                    name: "Miscellaneous",
                    part: 'PART_I',

                },
            ],
            Notifications: [
                // {
                //     notification: " Dr Christina Hardaway has provided surgical clearance",
                //     time: "10:20 AM",
                //     markAsRead: "mark as read"
                // },
                // {
                //     notification: "Sara Smith has completed the patient survey",
                //     time: "8 Aug 2020",
                //     markAsRead: ""
                // },
                // {
                //     notification: "Sara Smith has uploaded the documents for Anaesthesia Clearance",
                //     time: "8 Aug 2020",
                //     markAsRead: ""
                // },
                // {
                //     notification: "Sara Smith has accpepted the request",
                //     time: "8 Aug 2020",
                //     markAsRead: ""
                // },

            ],
            partStatus: {
                PART_A: {
                    totalSection: 0,
                    completedSection: 0,
                    sectionList: [],
                    name: "General and Insurance Information"
                },
                PART_B: {totalSection: 0, completedSection: 0, sectionList: [], name: "Surgical History"},
                PART_C: {totalSection: 0, completedSection: 0, sectionList: [], name: "Cardiac Survey"},
                PART_D: {totalSection: 0, completedSection: 0, sectionList: [], name: "Pulmonary Survey"},
                PART_E: {totalSection: 0, completedSection: 0, sectionList: [], name: "Renal Survey"},
                PART_F: {totalSection: 0, completedSection: 0, sectionList: [], name: "Endocrine and Heme Survey"},
                PART_G: {totalSection: 0, completedSection: 0, sectionList: [], name: "Neurological Survey "},
                PART_H: {totalSection: 0, completedSection: 0, sectionList: [], name: "GastroIntestinal Survey"},
                PART_I: {totalSection: 0, completedSection: 0, sectionList: [], name: "Miscellaneous"},
            },
            surgeryList: [],
            surgeryClearanceDocuments: [],
            selectedSurgery: '',
        };
    }

    componentDidMount() {
        let {userDetails} = this.props?.user
        console.log(userDetails);
        console.log("userDetails====", userDetails.miscellaneous.surveyId)
        this.getSurgeryList()
        this.setState({surveyId: userDetails?.miscellaneous?.surveyId || ''})
        this.getSectionListBySurveyId(userDetails?.miscellaneous?.surveyId || '').catch(error => console.error(error))
        setInterval(()=> this.getNotification(), 10000);
    }

    getNotification= async () => {
        // console.log(userDetails, this.props.user);
        let requestData = {
            "queryObj":{
                "userID":this.props?.user?.userDetails.userId,
                "type":"push"
              },
              "selectionString":"addedOn title isRead"
        }
        let [error, getNotification] = await Utility.parseResponse(NotificationService.getNotification(requestData));
        if (error) {
            this.setState({ Notifications: error.responseData });
        } else {
            this.setState({ Notifications: getNotification });
        }
        console.log(this.state.Notifications)
    }

    getSurgeryList = async () => {
        let {userDetails} = this.props?.user
        if (!userDetails || !userDetails.userId)
            return
        let requestData = {
            userId: userDetails.userId,
            type: portalType.PATIENT_PORTAL,
            statusList: [statusConstants.PENDING, statusConstants.ACCEPTED, statusConstants.APPROVED]
        }
        this.props.dispatchAction(eventConstants.SHOW_LOADER);
        let [error, surgeryList] = await Utility.parseResponse(PatientService.getSurgeryList(requestData));
        this.props.dispatchAction(eventConstants.HIDE_LOADER);
        if (error || surgeryList.length < 1)
            return;
        console.log("surgeryList===", surgeryList)
        this.getSurgeryClearanceDocumentList(surgeryList[0].surgeryId).catch(error => console.log("error", error))
        this.setState({surgeryList: surgeryList, selectedSurgery: surgeryList[0]})

    }

    getSurgeryClearanceDocumentList = async (surgeryId) => {
        this.props.dispatchAction(eventConstants.SHOW_LOADER);
        let [error, surgeryClearanceDocuments] = await Utility.parseResponse(PatientService.getSurgeryClearanceDocumentList({surgeryId}));
        this.props.dispatchAction(eventConstants.HIDE_LOADER);
        if (error || surgeryClearanceDocuments.length < 1)
            return;
        this.setState({surgeryClearanceDocuments: surgeryClearanceDocuments})
    }

    updateSurgeryClearanceDocument = async (requestData) => {
         
        if (!requestData || Object.keys(requestData).length < 1 || !requestData.surgeryDocumentId || !requestData.surgeryId)
            return;
        this.props.dispatchAction(eventConstants.SHOW_LOADER);
        let [error, surgeryClearanceDocument] = await Utility.parseResponse(PatientService.updateSurgeryClearanceDocument(requestData));
        this.props.dispatchAction(eventConstants.HIDE_LOADER);
        if (error || Object.keys(surgeryClearanceDocument).length < 1)
            return Utility.apiFailureToast('Unable to add anesthesia clearance document');
        let index = this.state.surgeryClearanceDocuments.findIndex((obj) => obj.surgeryDocumentId === surgeryClearanceDocument.surgeryDocumentId)
        if (index < -1){
            return
        }
        this.state.surgeryClearanceDocuments[index] = surgeryClearanceDocument
        this.setState({surgeryClearanceDocuments: this.state.surgeryClearanceDocuments})
        Utility.apiSuccessToast('Anesthesia clearance document has been added successfully')
    }

    getSectionListBySurveyId = async (surveyId) => {
        if (!surveyId)
            return
        this.props.dispatchAction(eventConstants.SHOW_LOADER);
        let [error, sectionList] = await Utility.parseResponse(PatientService.getSectionListBySurveyId({
            surveyId,
        }));
        this.props.dispatchAction(eventConstants.HIDE_LOADER);
        if (error) {
            return Utility.apiFailureToast(error || "unable to fetch section list.");
        }
        let partStatus = {
            PART_A: {totalSection: 0, completedSection: 0, sectionList: [], name: "General and Insurance Information"},
            PART_B: {totalSection: 0, completedSection: 0, sectionList: [], name: "Surgical History"},
            PART_C: {totalSection: 0, completedSection: 0, sectionList: [], name: "Cardiac Survey"},
            PART_D: {totalSection: 0, completedSection: 0, sectionList: [], name: "Pulmonary Survey"},
            PART_E: {totalSection: 0, completedSection: 0, sectionList: [], name: "Renal Survey"},
            PART_F: {totalSection: 0, completedSection: 0, sectionList: [], name: "Endocrine and Heme Survey"},
            PART_G: {totalSection: 0, completedSection: 0, sectionList: [], name: "Neurological Survey "},
            PART_H: {totalSection: 0, completedSection: 0, sectionList: [], name: "GastroIntestinal Survey"},
            PART_I: {totalSection: 0, completedSection: 0, sectionList: [], name: "Miscellaneous"},
        }
        sectionList.length > 0 && sectionList.forEach((section) => {
            partStatus[section.part].sectionList.push(section);
            partStatus[section.part].totalSection += 1;
            partStatus[section.part].completedSection = section.status === statusConstants.COMPLETED ? partStatus[section.part].completedSection + 1 : partStatus[section.part].completedSection;
        })
        console.log("partStatus====", partStatus)
        this.setState({surveyId, partStatus})
    }

    onFileChange = (files, document) => {
        this.uploadFileToS3(files[0], document).catch(error => console.error("upload file error", error))
    }

    uploadFileToS3 = async (fileObj, document) => {
        if (!fileObj || !document || Object.keys(document).length < 1)
            return
        const [error, response] = await Utils.parseResponse(FileUploadService.uploadFile('surgeryClearanceDocuments', fileObj))
        if (error || !response || response.length < 1) {
            return Utils.apiFailureToast('Unable to upload file')
        }
        let requestData = {
            surgeryId: document.surgeryId || '',
            surgeryDocumentId: document.surgeryDocumentId || '',
            documentActionType: documentActionTypeConstants.FILE_UPLOAD,
            fileName: response[0].name || '',
            key: response[0].sourceFileName || '',
            url: response[0].url || '',
        }
        this.updateSurgeryClearanceDocument(requestData).catch(error => console.log(error))
    }
    onClickCloseIconOfUploadedClearanceDocument =(document)=>{
        if(!document || Object.keys(document).length<1)
            return;
        let index = this.state.surgeryClearanceDocuments.findIndex((obj) => obj.surgeryDocumentId === document.surgeryDocumentId)
        if (index < -1)
            return
        this.state.surgeryClearanceDocuments[index].url = ''
        this.setState({surgeryClearanceDocuments: this.state.surgeryClearanceDocuments})
    }

    markAsRead = async ()=>{
         
        let requestData = {
            "queryObj":{
                "userID":this.props?.user?.userDetails.userId
              }
        }
        let [error, markasReadNotification] = await Utility.parseResponse(NotificationService.markNotificationRead(requestData));
        // if (error) {
        //     this.setState({ Notifications: error.responseData });
        // } else {
        //     this.setState({ Notifications: getNotification });
        // }
        console.log(error, markasReadNotification);
    }

    sendMissingDocumentNotification = async ()=>{
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
            notificationFor: userData?.email,
            type:"push",
            isDelivered:true,
            postedToDeviceType:"",
            postedTo:   userData?.email,
            postedBy:   userData?.email,
            description:'<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-...',
            payload:{
                role:  userData?.role,
                notificationType:"MISSING_DOCUMENT",
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
            title: userData?.firstName + ' missed some documents',
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
            notificationFor: userData?.email,
            type:"email",
            isDelivered:true,
            postedToDeviceType:"",
            postedTo:   userData?.email,
            postedBy:   userData?.email,
            description:'<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-...',
            payload:{
                role:  userData?.role,
                notificationType:"MISSING_DOCUMENT",
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
            title: userData?.firstName + ' missed some documents',
        }
        let [er, addEmailNotification] = await Utility.parseResponse(NotificationService.addNotification(NotificationrequestDataEmail));
    }

    render() {
         

        return (
            <div>
                <Header state={this.state} tabName="dashboard" markAsRead={this.markAsRead} />{" "}
                <br/>
                <br/>
                <br/>
               
                <div style={{width: '80%', margin: "auto"}}>
                    <Column justifyContent={"center"} alignItems={"center"}>
                        <Surgery state={this.state}/>
                        {/*<DashboardComponent/>*/}

                    </Column>
                    {this.state.surgeryClearanceDocuments?.length > 0 && (this.state.selectedSurgery?.status === statusConstants.APPROVED || this.state.selectedSurgery?.status === statusConstants.ACCEPTED)?
                        <Column>
                            <UploadAnesthesiaClearanceDocument state={this.state}
                                                               updateSurgeryClearanceDocument={this.updateSurgeryClearanceDocument}
                                                               onClickCloseIconOfUploadedClearanceDocument={this.onClickCloseIconOfUploadedClearanceDocument}
                                                               onFileChange={this.onFileChange}
                                                               sendMissingDocumentNotification={this.sendMissingDocumentNotification} />
                        </Column> :
                        <div className="div__style">
                            <Card state={this.state}/>
                        </div>}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {user: state.user}
};

export default connect(mapStateToProps, {dispatchAction})(PatientsDashboard);