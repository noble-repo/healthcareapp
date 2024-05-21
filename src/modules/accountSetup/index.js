import React from "react";
import BaseComponent from "../baseComponent";
import AccountSetupComponent from "./accountSetupComponent";
import Utils, {dispatchAction} from "../../utility";
import {UserService} from "../../services";
import {eventConstants} from "../../constants";
import Utility from "../../utility";
import {connect} from "react-redux";
import {history} from "../../managers/history";


class AccountSetup extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            emailError: "",
            checked: false,
        };
    }

    onChangeEvent = (event) => {
        this.setState({[event.target.name]: event.target.value, [`${event.target.name}Error`]: ''});
    };
    onCheckboxChange = (event) => {
        this.setState({checked: !this.state.checked});
    };

    validateLoginForm = () => {
        let emailError = Utils.validateEmail(this.state.email) ? "" : "Invalid email address"

        this.setState({emailError});
        return !!(emailError);
    };

    onContinueClick = async () => {
        if (this.validateLoginForm())
            return;
        this.props.dispatchAction(eventConstants.SHOW_LOADER);
        let [error, userData] = await Utils.parseResponse(UserService.verifyEmailAndSendOtp({email: this.state.email}))
        this.props.dispatchAction(eventConstants.HIDE_LOADER);
        if (error) {
            return Utility.apiFailureToast(error || "Unable to verify your email address.")
        }
        this.props.dispatchAction(eventConstants.UPDATE_USER_DATA_SUCCESS, {userDetails: userData});
        Utility.apiSuccessToast('We have sent an OTP to verify your email.')
        history.push('/verify-otp')
    };

    render() {
        return (
            <AccountSetupComponent
                state={this.state}
                onChangeEvent={this.onChangeEvent}
                onContinueClick={this.onContinueClick}
                onCheckboxChange={this.onCheckboxChange}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {user: state.user}
};

export default connect(mapStateToProps, {dispatchAction})(AccountSetup);
