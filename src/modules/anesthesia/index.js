import React, {Component} from "react";
import AnesthesiaTab from "./anesthesiaTab";
import Utility, {dispatchAction} from "../../utility";
import {PatientService, NotificationService} from "../../services";
import {documentActionTypeConstants, eventConstants, statusConstants} from "../../constants";
import {connect} from "react-redux";


const DOCUMENT_CHECKLIST_TEMPLATE = [
    {
        url: '',
        fileName: '',
        documentType: 'Lab Clearance',
        surgeryDocumentId: '',
        documentActionType: '',
        providerInformation: {},
        isChecked: false,
    },
    {
        url: '',
        fileName: '',
        documentType: 'Lab Documents',
        surgeryDocumentId: '',
        documentActionType: '',
        providerInformation: {},
        isChecked: false,
    },
    {
        url: '',
        fileName: '',
        documentType: 'Medical Clearance',
        surgeryDocumentId: '',
        documentActionType: '',
        providerInformation: {},
        isChecked: false,
    },
    {
        url: '',
        fileName: '',
        documentType: 'Cardiac Clearance',
        surgeryDocumentId: '',
        documentActionType: '',
        providerInformation: {},
        isChecked: false,
    },
    {
        url: '',
        fileName: '',
        documentType: 'Diagnostic Test',
        surgeryDocumentId: '',
        documentActionType: '',
        providerInformation: {},
        isChecked: false,
    },
    {
        url: '',
        fileName: '',
        documentType: 'Other',
        surgeryDocumentId: '',
        documentActionType: '',
        providerInformation: {},
        isChecked: false,

    },

]

class Anesthesia extends Component {
    constructor(props) {
        super(props);
        this.state = {
            row: DOCUMENT_CHECKLIST_TEMPLATE,
            isAnyDocumentChecked: false,
            checked: false,
            showAlert: false,
            popError: "",
            surgeryId: '',
            documentList: [],
            selectedSurgery: '',
            surgeryClearance: false,
            anesthesiologistRecommendation: '',


        }
    }

    componentDidMount() {
        if (this.props?.selectedSurgery?.surgeryId) {
            this.getSurgeryClearanceDocumentList(this.props.selectedSurgery.surgeryId).catch(error => console.error(error))
            this.setState({
                surgeryId: this.props.selectedSurgery.surgeryId,
                selectedSurgery: this.props.selectedSurgery,
                anesthesiologistRecommendation: this.props.selectedSurgery.anesthesiologistRecommendation || '',
                surgeryClearance: !!(this.props.selectedSurgery.status === statusConstants.APPROVED || this.props.selectedSurgery.status === statusConstants.COMPLETED)
            })
        }
    }
    componentWillReceiveProps(nextProps, prevProps) {
        if (this.state.surgeryId && nextProps && nextProps.selectedSurgery && nextProps.selectedSurgery.surgeryId && nextProps.selectedSurgery.surgeryId !== this.state.surgeryId) {
            this.getSurgeryClearanceDocumentList(nextProps.selectedSurgery.surgeryId).catch(error => console.error(error))
            this.setState({
                surgeryId: nextProps.selectedSurgery.surgeryId,
                selectedSurgery: nextProps.selectedSurgery,
                anesthesiologistRecommendation: nextProps.selectedSurgery.anesthesiologistRecommendation || '',
                surgeryClearance: !!(nextProps.selectedSurgery.status === statusConstants.APPROVED || nextProps.selectedSurgery.status === statusConstants.COMPLETED)
            })
        }
    }

    getSurgeryClearanceDocumentList = async (surgeryId) => {
        this.props.dispatchAction(eventConstants.SHOW_LOADER);
        let [error, documentList] = await Utility.parseResponse(PatientService.getSurgeryClearanceDocumentList({
            surgeryId,
        }));
        this.props.dispatchAction(eventConstants.HIDE_LOADER);
        this.mapDocumentListWithStateDocumentList(documentList && documentList.length > 0 ? documentList : [])

        this.setState({documentList: documentList});
    }

    mapDocumentListWithStateDocumentList = (documentList = []) => {
        let list = [], index = -1
        DOCUMENT_CHECKLIST_TEMPLATE.forEach((documentTemplate) => {
            index = documentList.length > 0 ? documentList.findIndex(document => document.documentType === documentTemplate.documentType) : -1
            if (index > -1) {
                documentTemplate.url = documentList[index].url
                documentTemplate.fileName = documentList[index].fileName
                documentTemplate.surgeryDocumentId = documentList[index].surgeryDocumentId
                documentTemplate.documentActionType = documentList[index].documentActionType
                documentTemplate.providerInformation = documentList[index].providerInformation
                documentTemplate.isChecked = true
            } else {
                documentTemplate.url = ''
                documentTemplate.fileName = ''
                documentTemplate.surgeryDocumentId = ''
                documentTemplate.documentActionType = documentActionTypeConstants.FILE_UPLOAD
                documentTemplate.providerInformation = {}
                documentTemplate.isChecked = false
            }

            list.push(documentTemplate)
        })
        console.log("list===", list)

        this.setState({row: list})
    }

    createSurgeryClearanceDocument = async (surgeryId, documentType) => {
        if (!surgeryId || !documentType)
            return;
        let requestData = {
            surgeryId: surgeryId,
            documentType: documentType,
        }
        this.props.dispatchAction(eventConstants.SHOW_LOADER);
        let [error, document] = await Utility.parseResponse(PatientService.createSurgeryClearanceDocument(requestData));
        this.props.dispatchAction(eventConstants.HIDE_LOADER);
        if (error)
            return Utility.apiFailureToast(error || 'Unable add this document type in checkList.')

        this.getSurgeryClearanceDocumentList(surgeryId).catch(error => console.error(error))
        Utility.apiSuccessToast('This document type has been added in the checklist successfully.')
    }
    deleteSurgeryClearanceDocument = async (surgeryId, surgeryDocumentId) => {
        if (!surgeryId || !surgeryDocumentId)
            return;
        let requestData = {
            surgeryId: surgeryId,
            surgeryDocumentId: surgeryDocumentId,
        }
        this.props.dispatchAction(eventConstants.SHOW_LOADER);
        let [error, document] = await Utility.parseResponse(PatientService.deleteSurgeryClearanceDocument(requestData));
        this.props.dispatchAction(eventConstants.HIDE_LOADER);
        if (error)
            return Utility.apiFailureToast(error || 'Unable remove this document type in checkList.')

        this.getSurgeryClearanceDocumentList(surgeryId).catch(error => console.error(error))
        Utility.apiSuccessToast('This document type has been removed from the checklist successfully.')
    }

    handleAlert = () => {
        console.log("hii")
        if (!this.state.isAnyDocumentChecked) {
            this.setState({popError: "document verification required before clearance"})

        }
    }
    onHandleChange = (event) => {
        let {name, value} = event.target
        this.setState({[name]: value})
    }


    switchChange = () => {
        this.setState({surgeryClearance: !this.state.surgeryClearance});
    }
    checkedDocument = (event, documentType, index) => {
        let documentList = this.state.row
        if (!documentType)
            return
        if (event.target.checked)
            this.createSurgeryClearanceDocument(this.state.surgeryId, documentType).catch(error => console.log("unable to create document in checklist", error))
        else
            this.deleteSurgeryClearanceDocument(this.state.surgeryId, documentList[index].surgeryDocumentId).catch(error => console.log("unable to remove document in checklist", error))
    }

    updateSurgeryClearanceData = async ()=>{
        const userData = this.props?.user?.userDetails;
        if(!this.state.surgeryId)
            return
        let requestData ={
            surgeryId: this.state.surgeryId,
            status: this.state.surgeryClearance ? statusConstants.APPROVED : statusConstants.ACCEPTED,
            anesthesiologistRecommendation: this.state.anesthesiologistRecommendation || '',
        }
        this.props.dispatchAction(eventConstants.SHOW_LOADER);
        let [error, document] = await Utility.parseResponse(PatientService.updateSurgery(requestData));
        this.props.dispatchAction(eventConstants.HIDE_LOADER);
        if (error)
            return Utility.apiFailureToast(error || 'Unable to update surgery clearance.')
        let NotificationrequestDataPatient = {
            messageProvider:"",
            isCleared:false,
            isRead:false,
            deviceID:"",
            userID: userData?.userId,
            sentFromName: userData?.firstName,
            sentFromEmail:userData?.email,
            priority:1,
            entityID:"",
            notificationFor: this.props.selectedSurgery.patient.email,
            type:"push",
            isDelivered:true,
            postedToDeviceType:"",
            postedTo:   userData?.email,
            postedBy:   userData?.email,
            description:'<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-...',
            payload:{
                role:  userData?.role,
                notificationType:"SURGERY_CLEARENCE",
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
            title: userData?.firstName + ' gave the surgery clearance to ' + this.props.selectedSurgery.patient.name,
        }
        let [err, addNotification] = await Utility.parseResponse(NotificationService.addNotification(NotificationrequestDataPatient));
        // if(err){
        //     return Utility.apiFailureToast('Unable to send notification');
        // }
        let NotificationrequestDataEmailPatient = {            
            messageProvider:"",
            isCleared:false,
            isRead:false,
            deviceID:"",
            userID: userData?.userId,
            sentFromName: userData?.firstName,
            sentFromEmail:userData?.email,
            priority:1,
            entityID:"",
            notificationFor: this.props.selectedSurgery.patient.email,
            type:"email",
            isDelivered:true,
            postedToDeviceType:"",
            postedTo:   userData?.email,
            postedBy:   userData?.email,
            description:'<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-...',
            payload:{
                role:  userData?.role,
                notificationType:"SURGERY_CLEARENCE",
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
            title: userData?.firstName + ' gave the surgery clearance to ' + this.props.selectedSurgery.patient.name,
        }
        let [er, addEmailNotification] = await Utility.parseResponse(NotificationService.addNotification(NotificationrequestDataEmailPatient));
        
        let NotificationrequestDataSurgeon = {
            messageProvider:"",
            isCleared:false,
            isRead:false,
            deviceID:"",
            userID: userData?.userId,
            sentFromName: userData?.firstName,
            sentFromEmail:userData?.email,
            priority:1,
            entityID:"",
            notificationFor: this.props.selectedSurgery.addedBy.email,
            type:"push",
            isDelivered:true,
            postedToDeviceType:"",
            postedTo:   userData?.email,
            postedBy:   userData?.email,
            description:'<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-...',
            payload:{
                role:  userData?.role,
                notificationType:"SURGERY_CLEARENCE",
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
            title: userData?.firstName + ' gave the surgery clearance to ' + this.props.selectedSurgery.patient.name,
        }
        let [addNotificationSurgeon] = await Utility.parseResponse(NotificationService.addNotification(NotificationrequestDataSurgeon));
        // if(err){
        //     return Utility.apiFailureToast('Unable to send notification');
        // }
        let NotificationrequestDataEmailSurgeon = {            
            messageProvider:"",
            isCleared:false,
            isRead:false,
            deviceID:"",
            userID: userData?.userId,
            sentFromName: userData?.firstName,
            sentFromEmail:userData?.email,
            priority:1,
            entityID:"",
            notificationFor: this.props.selectedSurgery.addedBy.email,
            type:"email",
            isDelivered:true,
            postedToDeviceType:"",
            postedTo:   userData?.email,
            postedBy:   userData?.email,
            description:'<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-...',
            payload:{
                role:  userData?.role,
                notificationType:"SURGERY_CLEARENCE",
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
            title: userData?.firstName + ' gave the surgery clearance to ' + this.props.selectedSurgery.patient.name,
        }
        let [addEmailNotificationSurgeon] = await Utility.parseResponse(NotificationService.addNotification(NotificationrequestDataEmailSurgeon));

        Utility.apiSuccessToast('surgery clearance data has been updated successfully.')
    }

    render() {
        return (
            <div>
                <AnesthesiaTab
                    handleAlert={this.handleAlert}
                    handleSwitch={this.handleSwitch}
                    checkedDocument={this.checkedDocument}
                    switchChange={this.switchChange}
                    onHandleChange={this.onHandleChange}
                    updateSurgeryClearanceData={this.updateSurgeryClearanceData}
                    state={this.state}
                />

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {user: state.user}
};

export default connect(mapStateToProps, {dispatchAction})(Anesthesia);