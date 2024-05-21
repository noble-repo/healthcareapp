import React, {Component, PureComponent} from "react";
import BaseComponent from "../baseComponent";
import UserComponent from "./userComponent";
import Header from "../shared/header";
import EditUser from "./editUser";
import AddUser from "./addUser";
import {eventConstants, portalType} from "../../constants";
import Utility, {dispatchAction} from "../../utility";
import {PatientService, UserService} from "../../services";
import {connect} from "react-redux";

class ListofUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openEdit: false,
            open: false,
            isChecked: false,
            name: "Raymond Hillary",
            email: "hillary@harisclinic.com",
            admin: "Clinic admin",
            image: "download.jpg",
            rows: [
                {
                    name: "Dr. Angelina Victor",
                    designation: "Anesthesiologist",
                    role: "Admin",
                    imageUrl: "download.jpg",
                },
                {
                    name: "Dr. Smith Victor",
                    designation: "Anesthesiologist",
                    role: "Admin",
                    imageUrl: "download.jpg",
                },
                {
                    name: "Dr. John Victor",
                    designation: "Anesthesiologist",
                    role: "Admin",
                    imageUrl: "download.jpg",
                },
            ],
            userList:[]
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
            type: portalType.ANESTHESIOLOGIST_PORTAL
        }
        this.props.dispatchAction(eventConstants.SHOW_LOADER);
        let [error, userList] = await Utility.parseResponse(UserService.getUserList(requestData));
        this.props.dispatchAction(eventConstants.HIDE_LOADER);
        if (error || userList.length < 1)
            return;
        console.log("userList===", userList)
        this.setState({userList})
    }

    handleEditDialog = () => {
        this.setState({
            openEdit: !this.state.openEdit,
        });
    };
    handleDialog = () => {
        this.setState({
            open: !this.state.open,
        });
    };
    onChangeChecked = () => {
        this.setState({isChecked: !this.state.isChecked});
    };

    render() {
        return (
            <div>
                <div>
                    <Header tabName="users"/>
                </div>
                <div>
                    <UserComponent
                        rows={this.state.rows}
                        handleEditDialog={this.handleEditDialog}
                        handleDialog={this.handleDialog}
                        state={this.state}
                    />
                </div>
                {this.state.openEdit ? (
                    <EditUser
                        handleEditDialog={this.handleEditDialog}
                        state={this.state}
                        onChangeChecked={this.onChangeChecked}
                    />
                ) : (
                    ""
                )}

                {this.state.open ? (
                    <AddUser
                        handleDialog={this.handleDialog}
                        state={this.state}
                        onChangeChecked={this.onChangeChecked}
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

export default connect(mapStateToProps, {dispatchAction})(ListofUser);
