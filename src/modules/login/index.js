import React from "react";
import BaseComponent from "../baseComponent";
import LoginComponent from "./loginComponent";
import {Auth0RoleNameConstants, eventConstants} from "../../constants";
import Utility, {dispatchAction} from "../../utility";
import {connect} from "react-redux";
import AuthService from '../../services/auth0';
import {history} from '../../managers/history';
import ForgotPasswordDialog from "./forgotPasswordDialog";
import {UserService} from "../../services";


export class Login extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            email: "",
            emailError: "",
            password: "",
            passwordError: "",
            forgotPasswordEmail: "",
            forgotPasswordEmailError: "",
            openForgotPasswordDialog: false,
        };
    }

    onCheckboxChange = () => {
        this.setState({checked: !this.state.checked});
    };

    onChangeEvent = (event) => {
        this.setState({[event.target.id]: event.target.value, [`${event.target.id}Error`]: ''});
    };

    validateLoginForm = () => {
        this.setState({
            emailError: Utility.validateEmail(this.state.email) ? "" : "Email is not valid",
            passwordError: Utility.isPasswordValid(this.state.password) ? "" : "Password must be 8 characters long"
        });
        return Utility.validateEmail(this.state.email) && Utility.isPasswordValid(this.state.password);
    };
    onLoginClicked = async () => {
        if (!this.validateLoginForm())
            return;
        this.props.dispatchAction(eventConstants.SHOW_LOADER);
        this.authObject = new AuthService();
        let [error, authResponse] = await Utility.parseResponse(this.authObject.signin(this.state.email, this.state.password));
        this.props.dispatchAction(eventConstants.HIDE_LOADER);
        if (error) {
            Utility.apiFailureToast("Incorrect email or password.")
            return
        }
        this.props.dispatchAction(eventConstants.SIGN_UP_SUCCESS, authResponse);
        if (authResponse?.userDetails?.role === Auth0RoleNameConstants.SURGEON || authResponse?.userDetails?.role === Auth0RoleNameConstants.SUB_SURGEON)
            history.push('/surgeon/patients-list')
        else if (authResponse?.userDetails?.role === Auth0RoleNameConstants.ANAESTHESIOLOGIST || authResponse?.userDetails?.role === Auth0RoleNameConstants.SUB_ANAESTHESIOLOGIST)
            history.push('/anaesthesiologist/patients-list')
        else if (authResponse?.userDetails?.role === Auth0RoleNameConstants.ADMIN)
            history.push('/admin/patients')
        else if (authResponse?.userDetails?.role === Auth0RoleNameConstants.PATIENT)
            history.push('/patient/dashboard')
    }

    handlerForCloseDialog = () => {
        this.setState({openForgotPasswordDialog: false})
    }
    handlerForOpenDialog = () => {
        this.setState({openForgotPasswordDialog: true})
    }
    validateForgotPasswordForm = () => {
        this.setState({
            forgotPasswordEmailError: Utility.validateEmail(this.state.forgotPasswordEmail) ? "" : "Email is not valid",
        });
        return Utility.validateEmail(this.state.forgotPasswordEmail);
    };
    sendForgotPasswordRequest = async () => {
        if (!this.validateForgotPasswordForm())
            return;
        let requestData = {
            email: this.state.forgotPasswordEmail,
        }
        this.props.dispatchAction(eventConstants.SHOW_LOADER);
        let [error, response] = await Utility.parseResponse(UserService.forgotPassword(requestData))
        this.props.dispatchAction(eventConstants.HIDE_LOADER);
        if (error) {
            return Utility.apiFailureToast("Unable to forgot password.")
        }
        Utility.apiSuccessToast('We\'ve just sent you an email to reset your password')
        this.handlerForCloseDialog()
    }

    render() {
        return (
            <>
                {this.state.openForgotPasswordDialog && <ForgotPasswordDialog
                    state={this.state}
                    onChangeEvent={this.onChangeEvent}
                    handlerForCloseDialog={this.handlerForCloseDialog}
                    sendForgotPasswordRequest={this.sendForgotPasswordRequest}
                />}
                <LoginComponent
                    state={this.state}
                    onCheckboxChange={this.onCheckboxChange}
                    onChangeEvent={this.onChangeEvent}
                    onLoginClicked={this.onLoginClicked}
                    handlerForOpenDialog={this.handlerForOpenDialog}
                />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {user: state.user}
};

export default connect(mapStateToProps, {dispatchAction})(Login);
