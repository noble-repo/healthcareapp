import React from 'react'
import BaseComponent from '../baseComponent'
import SideBar from './sidebar'
import RequestTableContent from './requestComponent'
import {Column, Row} from "simple-flexbox";
import Header from '../adminPortal/header/header'
import {eventConstants, statusConstants} from "../../constants";
import Utility, {dispatchAction} from "../../utility";
import {ClinicService} from "../../services";
import {connect} from "react-redux";
import {history} from "../../managers/history";

class RequestComponent extends BaseComponent {

    constructor(props) {
        super(props)
        this.state = {
            isOpen: true,
            clinicList: [],
            selectedRequest: "",

        }
    }

    componentDidMount() {
        this.getClinicList().catch(error => console.error("unable to get clinic-list", error))
    }

    getClinicList = async () => {
        let requestData = {
            status: statusConstants.PENDING
        }
        this.props.dispatchAction(eventConstants.SHOW_LOADER);
        let [error, clinicList] = await Utility.parseResponse(ClinicService.getClinicList(requestData));
        this.props.dispatchAction(eventConstants.HIDE_LOADER);
        if (error || clinicList.length < 1)
            return;
        let pathName = window.location.pathname;
        let pathArray = pathName.split('/');
        let index = -1;
        if (pathArray.length === 4)
            index = clinicList.findIndex(obj => obj.clinicId === pathArray[pathArray.length - 1])
        if (index === -1)
            history.push('/admin/request-details/' + clinicList[0].clinicId)

        this.setState({clinicList, selectedRequest: clinicList[index > -1 ? index : 0]})

    }
    toggleImage = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    onChangeSelectedRequest = (data) => {
        history.push('/admin/request-details/' + data.clinicId)
        this.setState({selectedRequest: data})
    }

    updateSelectedRequest = async (action = 'ACCEPT') => {
        if (!this.state.selectedRequest || !this.state.selectedRequest.clinicId)
            return
        let requestData = {
            clinicId: this.state.selectedRequest.clinicId
        }
        if (action === 'ACCEPT')
            requestData['status'] = statusConstants.ACCEPTED
        else
            requestData['status'] = statusConstants.REJECTED
        this.props.dispatchAction(eventConstants.SHOW_LOADER);

        let [error, response] = await Utility.parseResponse(ClinicService.updateClinic(requestData));
        this.props.dispatchAction(eventConstants.HIDE_LOADER);
        if (error)
            return Utility.apiFailureToast(error || 'unable to change the status of this request');
        this.getClinicList()
        Utility.apiSuccessToast('status of this request has been changed successfully.');


    }

    render() {
        return (
            <div>
                <Header tabName="requests"/>
                <br></br>
                <Row>
                    <Column>
                        {this.state.isOpen ?
                            <SideBar state={this.state} onChangeSelectedRequest={this.onChangeSelectedRequest}/> : " "}
                    </Column>
                    <Column>
                        <RequestTableContent state={this.state} toggleImage={this.toggleImage}
                                             updateSelectedRequest={this.updateSelectedRequest}/>
                    </Column>
                </Row>
            </div>


        )
    }
}

const mapStateToProps = (state) => {
    return {user: state.user}
};

export default connect(mapStateToProps, {dispatchAction})(RequestComponent);