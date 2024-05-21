import React, { PureComponent } from 'react'
import BaseComponent from '../baseComponent';
import Header from '../adminPortal/header/header';
import Sidebar from './sidebar';
import DetailComponent from './detailcomponent';
import { Row, Column } from 'simple-flexbox';
import {connect} from "react-redux";
import Utility, {dispatchAction} from "../../utility";
import {eventConstants, portalType} from "../../constants";
import {PatientService} from "../../services";

class AdminPatientDetail extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true,
            patientList:[],
            selectedSurgery: "",
        };
    }
    componentDidMount() {
        this.getPatientSurgeryList().catch(error => console.error("unable to get patient-list", error))
    }

    getPatientSurgeryList = async () => {
        let requestData = {
            type: portalType.ADMIN_PORTAL
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
        this.setState({patientList, selectedSurgery: patientList[index > -1 ? index : 0]})
    }

    toggleImage = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
        console.log("fun working");
      };

    onChangeSelectedSurgery = (data) => {
        this.setState({selectedSurgery: data})
    }

    render() {
        
        return (
            <div>
                <div>
                    <Header tabName="patients"/>
                </div>
                <Row>

                {/* <div> */}
                    <Column>
                        {this.state.isOpen &&
                        <Sidebar state={this.state} onChangeSelectedSurgery={this.onChangeSelectedSurgery}/>}
                    </Column> 
                    <Column>
                        <DetailComponent
                         state={this.state} 
                        toggleImage={this.toggleImage}/>
                    </Column>
                    {/* </div> */}
                </Row>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {user: state.user}
};

export default connect(mapStateToProps, {dispatchAction})(AdminPatientDetail);