import React, {Component, PureComponent} from "react";
import BaseComponent from "../../baseComponent";
import UserComponent from "./userComponent";

// import Header from "../header/headercomponent";
import Header from "../shared/header";

import EditUser from "./editUser";
import AddUser from "./addUser";
import {eventConstants, portalType} from "../../../constants";
import Utility, {dispatchAction} from "../../../utility";
import {UserService} from "../../../services";
import {connect} from "react-redux";

class ListofUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openEdit: false,
            open: false,
            isActive: false,
            userId: "",
            picture: "",
            name: "",
            email: "",
            role: "",
            addPatient: false,
            inviteUser: false,
            scheduleSurgery: false,
            billing: false,
            nameError: "",
            emailError: "",
            roleError: "",
            admin: "Clinic admin",
            image: "download.jpg",
            userList: [],
            patients: []
        };
    }

    componentDidMount() {
        this.getUserList().catch(error => console.error("unable to get user-list", error))
    }

    getUserList = async () => {
        let {userDetails} = this.props?.user
        if (!userDetails || !userDetails.clinicId)
            return
        let requestData = {
            clinicId: userDetails.clinicId,
            type: portalType.SURGEON_PORTAL
        }
        this.props.dispatchAction(eventConstants.SHOW_LOADER);
        let [error, userList] = await Utility.parseResponse(UserService.getUserList(requestData));
        this.props.dispatchAction(eventConstants.HIDE_LOADER);
        if (error || userList.length < 1)
            return;
        console.log("userList===", userList)
        this.setState({userList, patients:userList})
    }
    handleEditDialog = (userData) => {
        console.log("UserData.role",userData.role)
        let permissions = typeof userData?.permissions === "string" && userData?.permissions.length > 0 && JSON.parse(userData.permissions) || {}
        this.setState({
            isActive: userData?.isActive || false,
            userId: userData?.userId || "",
            picture: userData?.picture || "",
            name: userData?.name || "",
            email: userData?.email || "",
            role: userData?.role || "",
            addPatient: permissions?.addPatient || false,
            inviteUser: permissions?.inviteUser || false,
            scheduleSurgery: permissions?.scheduleSurgery || false,
            billing: permissions?.billing || false,
            openEdit: !this.state.openEdit,
        });
    };
    handleDialog = () => {
        this.setState({
            open: !this.state.open,
        });
    };

    handleFieldChange = (event) => {
        console.log("event===", event.target)
        this.setState({[event.target.name]: event.target.value, [`${event.target.name}Error`]: ''});
    };
    handleSelectChange = (event, name) => {
        console.log("event===", event.target)
        this.setState({[name]: event.target.value, [`${name}Error`]: ''});
    };

    validateValues = () => {
        let nameError = !this.state.name ? 'Please enter the name' : ''
        let emailError = !this.state.email ? 'Please enter the email' : ''
        let roleError = !this.state.role ? 'Please select role' : ''
        this.setState({nameError, emailError, roleError})
        return !!(nameError || emailError || roleError)
    }
    inviteUser = async () => {
        if (this.validateValues())
            return
        let {userDetails} = this.props?.user
        if (!userDetails || !userDetails.clinicId)
            return
        let requestData = {
            name: this.state.name,
            email: this.state.email,
            password: process.env.REACT_APP_INVITE_USER_PASSWORD,
            roleName: this.state.role,
            permissions: JSON.stringify({
                addPatient: this.state.addPatient,
                inviteUser: this.state.inviteUser,
                scheduleSurgery: this.state.scheduleSurgery,
                billing: this.state.billing,
            }),
            referenceIds: userDetails.clinicId,
            invitedBy: {
                userId: userDetails?.userId || '',
                email: userDetails?.email || '',
                name: userDetails?.name ? userDetails?.name : `${userDetails?.firstName || ''} ${userDetails?.lastName || ''}`,
            }
        }
        this.props.dispatchAction(eventConstants.SHOW_LOADER);
        let [error, user] = await Utility.parseResponse(UserService.addUser(requestData));
        this.props.dispatchAction(eventConstants.HIDE_LOADER);
        if (error)
            return Utility.apiFailureToast(error || 'Unable to invite user.')
        Utility.apiSuccessToast('User has been invited successfully')
        this.setState({
            name: '',
            email: '',
            role: '',
            addPatient: false,
            inviteUser: false,
            scheduleSurgery: false,
            billing: false
        })
        this.getUserList().catch(error => console.error("unable to get user-list", error))
        this.handleDialog()

    }

    updateUser = async () => {
        if (this.validateValues())
            return
        let {userDetails} = this.props?.user
        if (!userDetails || !userDetails.clinicId || !this.state.userId)
            return
        let requestData = {
            name: this.state.name,
            userId: this.state.userId,
            roleName: this.state.role,
            isActive: !!(this.state.isActive && (this.state.isActive === true || this.state.isActive === "true")),
            permissions: JSON.stringify({
                addPatient: this.state.addPatient,
                inviteUser: this.state.inviteUser,
                scheduleSurgery: this.state.scheduleSurgery,
                billing: this.state.billing,
            }),
        }
        this.props.dispatchAction(eventConstants.SHOW_LOADER);
        let [error, user] = await Utility.parseResponse(UserService.updateUser(requestData));
        this.props.dispatchAction(eventConstants.HIDE_LOADER);
        if (error)
            return Utility.apiFailureToast(error || 'Unable to update user.')
        Utility.apiSuccessToast('User has been updated successfully.')
        this.getUserList().catch(error => console.error("unable to get user-list", error))
        this.handleEditDialog({})
    }
    onSearch = (event) => {
        this.setState({[event.target.id]: event.target.value})
        this.filterUser(event.target.value)
    }

    filterUser = (searchText) => {
   console.log(this.state.userList, "Hello")
//    this.setState ({patients: this.state.clinicList})
        let data = this.state.patients
       
        if (!searchText.length) {
            console.log(searchText, "ABC")
            this.setState({userList: this.state.patients})
return 
        }

        const filteredData = data.filter((obj) => obj?.name.toLowerCase().includes(searchText.trim()))
        this.setState({userList: filteredData || []})
    }


    render() {
        return (
        <div>
                <div>
                    <Header tabName="users"/>
                </div>
                <div>
                    <UserComponent
                        handleEditDialog={this.handleEditDialog}
                        handleDialog={this.handleDialog}
                        state={this.state}
                        onSearch={this.onSearch}
                    />
                </div>
                {this.state.openEdit ? (
                    <EditUser
                        handleEditDialog={this.handleEditDialog}
                        state={this.state}
                        handleFieldChange={this.handleFieldChange}
                        handleSelectChange={this.handleSelectChange}
                        updateUser={this.updateUser}

                    />
                ) : (
                    ""
                )}

                {this.state.open ? (
                    <AddUser
                        handleDialog={this.handleDialog}
                        state={this.state}
                        handleFieldChange={this.handleFieldChange}
                        handleSelectChange={this.handleSelectChange}
                        inviteUser={this.inviteUser}
                    />
                ) : (
                    ""
                )}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {user: state.user}
};

export default connect(mapStateToProps, {dispatchAction})(ListofUsers);