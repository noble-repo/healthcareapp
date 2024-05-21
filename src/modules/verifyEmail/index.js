import React from 'react'
import BaseComponent from '../baseComponent';
import VerifyComponent from './VerifyComponent';
import Utils, {dispatchAction} from "../../utility";
import {eventConstants} from "../../constants";
import {UserService} from "../../services";
import Utility from "../../utility";
import {connect} from "react-redux";
import {history} from "../../managers/history";


class VerifyEmail extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            otp: "",
            otpError: ""
        };
    }

    componentDidMount() {
        let {userDetails} = this.props.user
        console.log("userDetails===", userDetails.otpAccountVerified)
        this.setState({otp: userDetails?.otpAccountVerified || ''})
    }

    onChangeEvent = (event) => {
        this.setState({[event.target.name]: event.target.value, [`${event.target.name}Error`]: ''});
    };
    validateOTPForm = () => {
        let otpError = this.state.otp.trim() ? "" : "Please enter OTP"
        this.setState({otpError});
        return !!(otpError);
    };

    onContinueClick = async () => {
        if (this.validateOTPForm())
            return;
        let {userDetails} = this.props.user
        if (!userDetails || !userDetails.userId)
            return Utility.apiFailureToast("There is no user record found.")

        this.props.dispatchAction(eventConstants.SHOW_LOADER);
        let [error, userData] = await Utils.parseResponse(UserService.verifyOtp({
            userId: userDetails.userId,
            otp: this.state.otp
        }))
        this.props.dispatchAction(eventConstants.HIDE_LOADER);
        if (error) {
            return Utility.apiFailureToast(error || "Unable to verify your email address.")
        }
        this.props.dispatchAction(eventConstants.UPDATE_USER_DATA_SUCCESS, {userDetails: userData});
        Utility.apiSuccessToast('Your email has been verified.')
        history.push('/email-verified')
    };

    render() {
        return (
            <VerifyComponent
                state={this.state}
                onChangeEvent={this.onChangeEvent}
                onContinueClick={this.onContinueClick}
            />
        )
    }
}


const mapStateToProps = (state) => {
    return {user: state.user}
};

export default connect(mapStateToProps, {dispatchAction})(VerifyEmail);