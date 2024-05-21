import React, {Component} from "react";
import SurgeonDetails from "./surgeonDetails";
import Sidebar from "./sidebar";
import {Row, Column} from "simple-flexbox";
import Header from "../adminPortal/header/header";
import {Avatar} from "material-ui";
import {Auth0RoleNameConstants, eventConstants, portalType} from "../../constants";
import Utility, {dispatchAction} from "../../utility";
import {ClinicService, PatientService} from "../../services";
import {connect} from "react-redux";
import {history} from "../../managers/history";


class AdminSurgeonDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true,
            clinicList: [],
            patientList: [],
            selectedClinic: "",
        };
    }

    componentDidMount() {
        this.getClinicList().catch(error => console.error("unable to get clinic-list", error))
        this.getPatientList().catch(error => console.error("unable to get patient-list", error))
    }

    getPatientList = async () => {
        let pathName = window.location.pathname;
        let pathArray = pathName.split('/');
        if (pathArray.length !== 4)
            return

        let requestData = {
            clinicId: pathArray[pathArray.length - 1],
            type: portalType.SURGEON_PORTAL
        }
        this.props.dispatchAction(eventConstants.SHOW_LOADER);
        let [error, patientList] = await Utility.parseResponse(PatientService.getSurgeryList(requestData));
        this.props.dispatchAction(eventConstants.HIDE_LOADER);
        if (error || patientList.length < 1)
            return this.setState({patientList: []});
        this.setState({patientList})
    }

    getClinicList = async () => {
        let requestData = {
            clinicType: Auth0RoleNameConstants.SURGEON
        }
        this.props.dispatchAction(eventConstants.SHOW_LOADER);
        let [error, clinicList] = await Utility.parseResponse(ClinicService.getClinicList(requestData));
        this.props.dispatchAction(eventConstants.HIDE_LOADER);
        if (error || clinicList.length < 1)
            return;
        console.log("clinicList===", clinicList)
        let pathName = window.location.pathname;
        let pathArray = pathName.split('/');
        let index = -1;
        if (pathArray.length === 4)
            index = clinicList.findIndex(obj => obj.clinicId === pathArray[pathArray.length - 1])
        this.setState({clinicList, selectedClinic: clinicList[index > -1 ? index : 0]})
    }

    toggleImage = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    };

    onChangeSelectedClinic = (data) => {
        this.setState({selectedClinic: data})
        history.push('/admin/surgeon-detail/' + data.clinicId)
        this.getPatientList().catch(error => console.error("unable to get patient-list", error))
    }

    render() {
        return (
            <div>
                <Column>
                    <Header tabName="surgeons"/>
                    <Row>
                        <Column>{this.state.isOpen &&
                        <Sidebar state={this.state} onChangeSelectedClinic={this.onChangeSelectedClinic}/>}
                        </Column>
                        <SurgeonDetails state={this.state} toggleImage={this.toggleImage}/>
                    </Row>
                </Column>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {user: state.user}
};

export default connect(mapStateToProps, {dispatchAction})(AdminSurgeonDetail);