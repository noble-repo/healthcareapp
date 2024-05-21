import React from "react";
import BaseComponent from "../baseComponent";
import SignUpComponent from "./signupComponent";
import {Auth0RoleNameConstants, eventConstants} from "../../constants";
import Utility, {dispatchAction} from "../../utility";
import ClinicService from "../../services/clinic";
import {connect} from "react-redux";

const profileOptions = [
    {
        text: "Anaesthelogist",
        value: Auth0RoleNameConstants.ANAESTHESIOLOGIST,
    },
    {
        text: "Surgeon",
        value: Auth0RoleNameConstants.SURGEON,
    },

];


class SignUp extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            profileOptions: profileOptions,
            firstName: '',
            lastName: '',
            name: '',
            phone: '',
            email: '',
            clinicType: '',
            firstNameError: '',
            lastNameError: '',
            nameError: '',
            phoneError: '',
            emailError: '',
            clinicTypeError: '',
        };
    }

    handleChange = (event, data) => {
        const {name, value} = event.target

        this.setState({[name]: value, [`${name}Error`]: ''})
    }
    handleSelectChange = (event, data) => {
        this.setState({clinicType: data.value, [`clinicTypeError`]: ''})
    }
    validateRegisterValues = () => {
        let firstNameError = !this.state.firstName ? 'Please enter the first Name' : ''
        let lastNameError = !this.state.lastName ? 'Please enter the last Name' : ''
        let nameError = !this.state.name ? 'Please enter the Company Name' : ''
        let phoneError = !this.state.phone ? 'Please enter the phone number' : ''
        let emailError = !this.state.email ? 'Please enter the email address' : ''
        let clinicTypeError = !this.state.clinicType ? 'Please select the clinic type' : ''
        this.setState({firstNameError, lastNameError, nameError, phoneError, emailError, clinicTypeError})
        return !!(firstNameError || lastNameError || nameError || phoneError || emailError || clinicTypeError)
    }
    register = async () => {
        console.log(" this.state===", this.state)
        if (this.validateRegisterValues())
            return

        let requestData = {
            owner: {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                phone: this.state.phone
            },
            name: this.state.name,
            clinicType: this.state.clinicType,
        }
        this.props.dispatchAction(eventConstants.SHOW_LOADER);
        let [error, response] = await Utility.parseResponse(ClinicService.createClinic(requestData));
        this.props.dispatchAction(eventConstants.HIDE_LOADER);
        console.log("error===", error)
        if (error) {
            Utility.apiFailureToast(error || "unable to register.");
            return
        }
        Utility.apiSuccessToast("Your request has been sent to admin.");
    }

    render() {
        return (
            <SignUpComponent state={this.state}
                             handleChange={this.handleChange}
                             handleSelectChange={this.handleSelectChange}
                             register={this.register}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {user: state.user}
};

export default connect(mapStateToProps, {dispatchAction})(SignUp);