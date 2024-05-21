import React from "react";
import BaseComponent from "../../baseComponent";
import Header from "../../surgeonPortal/shared/header";
import Sidebar from "./sidebar";
import DetailComponent from "./patientDetailComponent";
import {Row, Column} from "simple-flexbox";
import {eventConstants, portalType} from "../../../constants";
import Utility, {dispatchAction} from "../../../utility";
import {PatientService} from "../../../services";
import {connect} from "react-redux";
import {history} from '../../../managers/history'

class PatientDetails extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true,
            patientList: [],
            selectedSurgery: "",
            patients: [],
        };
    }

    componentDidMount() {
        this.getPatientSurgeryList().catch(error => console.error("unable to get patient-list", error))
    }

    getPatientSurgeryList = async () => {
        let {userDetails} = this.props?.user
        if (!userDetails || !userDetails.clinicId)
            return
        let requestData = {
            clinicId: userDetails.clinicId,
            type: portalType.SURGEON_PORTAL
        }
        this.props.dispatchAction(eventConstants.SHOW_LOADER);
        let [error, patientList] = await Utility.parseResponse(PatientService.getSurgeryList(requestData));
        this.props.dispatchAction(eventConstants.HIDE_LOADER);
        if (error || patientList.length < 1)
            return;
        let pathName = window.location.pathname;
        let pathArray = pathName.split('/');
        let index = -1;
        if (pathArray.length === 4)
            index = patientList.findIndex(obj => obj.surgeryId === pathArray[pathArray.length - 1])
        this.setState({patientList, selectedSurgery: patientList[index > -1 ? index : 0], patients:patientList })
    }
    toggleImage = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    };
    onChangeSelectedSurgery = (data) => {
        history.push('/surgeon/details-patients/'+data.surgeryId)
        this.setState({selectedSurgery: data})
    }
    onSearch = (event) => {
        this.setState({[event.target.id]: event.target.value})
        this.filterPatients(event.target.value)
    }

    filterPatients = (searchText) => {
   console.log(this.state.patientList, "Hello")
//    this.setState ({patients: this.state.clinicList})
        let data = this.state.patients
       
        if (!searchText.length) {
            console.log(searchText, "ABC")
            this.setState({patientList: this.state.patients})
return 
        }

        const filteredData = data.filter((obj) => obj.patient?.name.toLowerCase().includes(searchText.trim()))
        this.setState({patientList: filteredData || []})
    }

    render() {
        return (
            <div>
                <div>
                    <Header tabName="patients"/>
                </div>
                <Row>
                    <Column>
                        {this.state.isOpen &&
                        <Sidebar state={this.state} onChangeSelectedSurgery={this.onChangeSelectedSurgery}  onSearch={this.onSearch}/>}
                    </Column>
                    <Column>
                        <DetailComponent
                            state={this.state}
                            toggleImage={this.toggleImage}
                            state={this.state}
                            rows={this.state.rows}
                        />
                    </Column>
                </Row>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {user: state.user}
};

export default connect(mapStateToProps, {dispatchAction})(PatientDetails);