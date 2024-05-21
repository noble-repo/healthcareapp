import React from "react";
import ProfileComponent from "./profileComponent";
import BaseComponent from "../baseComponent";
import {connect} from "react-redux";
import Utils, {dispatchAction} from "../../utility";
import {Auth0RoleNameConstants, eventConstants} from "../../constants";
import {ClinicService, FileUploadService, UserService} from "../../services";
import Utility from "../../utility";
import moment from "moment";
import {history} from "../../managers/history";

const specialityList = [
    {text: "Select Speciality", value: "Select Speciality"},
    {text: "Neurology", value: "Neurology"},
    {text: "Cardiology", value: "Cardiology"},
]

//TODO save/update profile picture and save information for patient also

class Profile extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            profileOptions: [],
            specialityOptions: specialityList,
            picture: '',
            name: '',
            nameError: '',
            phone: '',
            phoneError: '',
            email: '',
            emailError: '',
            clinicName: '',
            clinicNameError: '',
            clinicType: '',
            clinicTypeError: '',
            speciality: '',
            specialityError: '',
            guardianName: '',
            guardianNameError: '',
            dob: '',
            dobError: '',
            clinicData: '',
        };
    }

    componentDidMount() {
        this.getClinicData()
        this.setDefaultStateValues()
    }

    getClinicData = async () => {
        let {userDetails} = this.props.user
        if (!userDetails || Object.keys(userDetails).length < 1 || !userDetails.referenceIds || userDetails.role === Auth0RoleNameConstants.PATIENT)
            return
        let [error, clinicData] = await Utility.parseResponse(ClinicService.getClinicById({clinicId: userDetails.referenceIds}))
        if (error)
            return;
        this.setState({clinicData, clinicName: clinicData.name})
    }

    setDefaultStateValues = () => {
        let {userDetails} = this.props.user
        if (!userDetails || Object.keys(userDetails).length < 1)
            return
        console.log("userDetails====", userDetails)
        let profileOptions = []
        let profileObj = {text: "", value: ""}
        if (userDetails.role === Auth0RoleNameConstants.SURGEON || userDetails.role === Auth0RoleNameConstants.SUB_SURGEON)
            profileObj = {text: 'Surgaon', value: Auth0RoleNameConstants.SURGEON}
        else if (userDetails.role === Auth0RoleNameConstants.ANAESTHESIOLOGIST || userDetails.role === Auth0RoleNameConstants.SUB_ANAESTHESIOLOGIST)
            profileObj = {text: 'Anaesthelogist', value: Auth0RoleNameConstants.ANAESTHESIOLOGIST}
        profileOptions.push(profileObj)
        this.setState({
            picture: userDetails?.picture || '',
            name: userDetails.name ? userDetails.name : `${userDetails.firstName} ${userDetails.lastName}` || '',
            phone: userDetails?.phone || '',
            dob: userDetails?.dob || '',
            guardianName: userDetails?.miscellaneous?.guardianName || '',
            email: userDetails?.email || '',
            clinicType: userDetails?.role || '',
            speciality: userDetails?.speciality || '',
            profileOptions
        })

    }
    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value, [`${name}Error`]: ''})
    }
    handleSelectChange = (event, data) => {
        this.setState({clinicType: data.value, [`clinicTypeError`]: ''})
    }

    handleSelectSpecialityChange = (event, data) => {
        this.setState({speciality: data.value, [`specialityError`]: ''})
    }

    validateValues = () => {
        let clinicNameError = !this.state.clinicName ? 'Please enter the Clinic Name' : ''
        let nameError = !this.state.name ? 'Please enter the Company Name' : ''
        let phoneError = !this.state.phone ? 'Please enter the phone number' : ''
        let emailError = !this.state.email ? 'Please enter the email address' : ''
        let clinicTypeError = !this.state.clinicType ? 'Please select the clinic type' : ''
        let specialityError = !this.state.speciality ? 'Please select the speciality' : ''
        let dobError = !this.state.dob ? 'Please select the dob' : ''
        if (this.state.clinicType === Auth0RoleNameConstants.SURGEON || this.state.clinicType === Auth0RoleNameConstants.SUB_SURGEON) {
            this.setState({specialityError, clinicNameError, nameError, phoneError, emailError})
            return !!(specialityError || clinicNameError || nameError || phoneError || emailError)

        } else if (this.state.clinicType === Auth0RoleNameConstants.ANAESTHESIOLOGIST || this.state.clinicType === Auth0RoleNameConstants.SUB_ANAESTHESIOLOGIST) {
            this.setState({clinicTypeError, clinicNameError, nameError, phoneError, emailError})
            return !!(clinicTypeError || clinicNameError || nameError || phoneError || emailError)
        } else {
            this.setState({nameError, phoneError, dobError})
            return !!(nameError || phoneError || dobError)
        }
    }

    updateClinic = async () => {
        let {userDetails} = this.props.user
        if (!userDetails || Object.keys(userDetails).length < 1 || !this.state.speciality || !userDetails.referenceIds || userDetails.role !== Auth0RoleNameConstants.SURGEON)
            return
        let [error, clinicData] = await Utility.parseResponse(ClinicService.updateClinic({
            clinicId: userDetails.referenceIds,
            speciality: this.state.speciality,
            owner: {
                picture: this.state.picture,
                email: userDetails.picture,
                phone: userDetails.phone,
                userId: userDetails.userId,
                firstName: userDetails.firstName,
                lastName: userDetails.lastName,

            }
        }))
        if (error)
            return;
        this.setState({clinicData, clinicName: clinicData.name})
    }
    updateProfile = async (isItForProfilePictureUpdate = false) => {
        if (this.validateValues())
            return

        let {userDetails} = this.props.user
        if (!userDetails || Object.keys(userDetails).length < 1 || !userDetails.userId)
            return

        let requestData = {
            userId: userDetails.userId,
            name: this.state.name,
            dob: this.state.dob,
            phone: this.state.phone,
            picture: this.state.picture,
            speciality: this.state.speciality,
            miscellaneous: {...userDetails.miscellaneous, guardianName: this.state.guardianName}
        }
        this.props.dispatchAction(eventConstants.SHOW_LOADER);
        let [error, updateUser] = await Utility.parseResponse(UserService.updateUser(requestData))
        this.props.dispatchAction(eventConstants.HIDE_LOADER);
        if (error)
            return Utility.apiFailureToast(error || 'Unable to update profile details')

        if (userDetails.role === Auth0RoleNameConstants.SURGEON)
            this.updateClinic()

        Utility.apiSuccessToast('Your profile details has been saved successfully.')
        this.props.dispatchAction(eventConstants.UPDATE_USER_DATA_SUCCESS, {userDetails: updateUser});
        if (!isItForProfilePictureUpdate)
            this.redirectToDashboard()
    }

    redirectToDashboard = () => {
        let {userDetails} = this.props.user
        if (userDetails?.role === Auth0RoleNameConstants.SURGEON || userDetails?.role === Auth0RoleNameConstants.SUB_SURGEON)
            history.push('/surgeon/patients-list')
        else if (userDetails?.role === Auth0RoleNameConstants.ANAESTHESIOLOGIST || userDetails?.role === Auth0RoleNameConstants.SUB_ANAESTHESIOLOGIST)
            history.push('/anaesthesiologist/patients-list')
        else if (userDetails?.role === Auth0RoleNameConstants.ADMIN)
            history.push('/admin/patients')
        else if (userDetails?.role === Auth0RoleNameConstants.PATIENT)
            history.push('/patient/dashboard')

    }
    handleDateChange = (event) => {
        this.setState({
            dob: moment(event.target.value, 'YYYY-MM-DD').valueOf() || " ",
            dobError: ''
        });
    }

    onClickRemovePicture = () => {
        this.setState({picture: ''}, () => this.updateProfile(true))
    }
    onClickChangePicture = (event) => {
        let files = event.target.files
        this.uploadFileToS3(files[0]).catch(error => console.error("upload file error", error))
    }
    uploadFileToS3 = async (fileObj) => {
        if (!fileObj)
            return
        const [error, response] = await Utils.parseResponse(FileUploadService.uploadFile('questionImages', fileObj))
        if (error || !response || response.length < 1) {
            return Utils.apiFailureToast('unable to upload file')
        }
        this.setState({picture: response[0].url}, () => this.updateProfile(true));
    }


    render() {

        return (
            <ProfileComponent state={this.state}
                              handleChange={this.handleChange}
                              onClickRemovePicture={this.onClickRemovePicture}
                              onClickChangePicture={this.onClickChangePicture}
                              handleDateChange={this.handleDateChange}
                              handleSelectChange={this.handleSelectChange}
                              handleSelectSpecialityChange={this.handleSelectSpecialityChange}
                              updateProfile={this.updateProfile}
            />

        );
    }
}

const mapStateToProps = (state) => {
    return {user: state.user}
};

export default connect(mapStateToProps, {dispatchAction})(Profile);
