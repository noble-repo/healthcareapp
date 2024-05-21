import React from 'react'
import BaseComponent from '../baseComponent';
import VerifyPassword from './passwordComponent';
import Utility, {dispatchAction} from "../../utility";
import {UserService} from "../../services";
import {Auth0RoleNameConstants, eventConstants} from "../../constants";
import {history} from "../../managers/history";
import {connect} from "react-redux";
import AuthService from "../../services/auth0";

class SetPassword extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            password: "",
            passwordError: "",
            confirmPassword: "",
            confirmPasswordError: "",
            currentPassword: "",
            currentPasswordError: "",
            checkPasswordStrength: '',
            isItForChangePassword: false,
        };
    }

    componentDidMount() {
        let pathName = window.location.pathname;
        let pathArray = pathName.split('/');
        this.setState({isItForChangePassword: pathArray[pathArray.length - 1] === 'change-password'})
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            checkPasswordStrength: event.target.value, [`${event.target.name}Error`]: ''
        });
    }
    validateChangePasswordForm = () => {
        let passwordError = Utility.isPasswordValid(this.state.password) ? "" : "Password must be atleast 8 characters with upper and special characters"
        let currentPasswordError = Utility.isPasswordValid(this.state.currentPassword) ? "" : "Password must be atleast 8 characters with upper and special characters"
        let confirmPasswordError = Utility.isPasswordValid(this.state.confirmPassword) ? this.state.confirmPassword !== this.state.password ? 'Password does not matched' : "" : "Password must be atleast 8 characters with upper and special characters"
        this.setState({
            passwordError,
            currentPasswordError,
            confirmPasswordError
        });
        if (this.state.isItForChangePassword)
            return !!(currentPasswordError && passwordError && confirmPasswordError);
        else
            return !!(passwordError && confirmPasswordError);
    };

    onSetPasswordClicked = async () => {
        if (this.validateChangePasswordForm())
            return;
        let {userDetails} = this.props.user
        if (!userDetails || !userDetails.userId)
            return Utility.apiFailureToast("There is no user record found.")
        if (this.state.isItForChangePassword && !await this.validateCurrentPassword())
            return;
        let requestData = {
            password: this.state.password,
            userId: userDetails.userId,
        }
        this.props.dispatchAction(eventConstants.SHOW_LOADER);
        let [error, response] = await Utility.parseResponse(UserService.resetPassword(requestData))
        this.props.dispatchAction(eventConstants.HIDE_LOADER);
        if (error) {
            return Utility.apiFailureToast("Unable to reset password.")
        }
        this.props.dispatchAction(eventConstants.SHOW_LOADER);
        this.authObject = new AuthService();
        let [loginError, authResponse] = await Utility.parseResponse(this.authObject.signin(userDetails.email, this.state.password));
        this.props.dispatchAction(eventConstants.HIDE_LOADER);
        if (error) {
            Utility.apiFailureToast("Incorrect email or password.")
            return
        }
        this.props.dispatchAction(eventConstants.SIGN_UP_SUCCESS, authResponse);
        Utility.apiSuccessToast('Your password has been reset successfully.')

        if (!this.state.isItForChangePassword)
            history.push('/profile')
        else
            this.redirectToUserPortal(authResponse)
    }
    redirectToUserPortal = (user) => {
        if (user?.userDetails?.role === Auth0RoleNameConstants.SURGEON || user?.userDetails?.role === Auth0RoleNameConstants.SUB_SURGEON)
            history.push('/surgeon/patients-list')
        else if (user?.userDetails?.role === Auth0RoleNameConstants.ANAESTHESIOLOGIST || user?.userDetails?.role === Auth0RoleNameConstants.SUB_ANAESTHESIOLOGIST)
            history.push('/anaesthesiologist/patients-list')
        else if (user?.userDetails?.role === Auth0RoleNameConstants.ADMIN)
            history.push('/admin/patients')
        else if (user?.userDetails?.role === Auth0RoleNameConstants.PATIENT)
            history.push('/patient/dashboard')
    }

    validateCurrentPassword = async () => {
        let {userDetails} = this.props.user
        if (!userDetails || !userDetails.email)
            return Utility.apiFailureToast("There is no user record found.")

        this.props.dispatchAction(eventConstants.SHOW_LOADER);
        this.authObject = new AuthService();
        let [error, authResponse] = await Utility.parseResponse(this.authObject.signin(userDetails.email, this.state.currentPassword));
        this.props.dispatchAction(eventConstants.HIDE_LOADER);
        if (error) {
            Utility.apiFailureToast("You have entered incorrect password.")
            return
        }
        return true
    }

    render() {
        return (
            <div>
                <VerifyPassword
                    state={this.state}
                    onSetPasswordClicked={this.onSetPasswordClicked}
                    handleChange={this.handleChange}
                />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {user: state.user}
};

export default connect(mapStateToProps, {dispatchAction})(SetPassword);
