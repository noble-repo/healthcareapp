import React from "react";
import BaseComponent from "../baseComponent";
import AirwayComponent from "./AirwayComponent";
import {eventConstants} from "../../constants";
import Utility, {dispatchAction} from "../../utility";
import {PatientService} from "../../services";
import {connect} from "react-redux";

export class AirwayEvaluation extends BaseComponent {
    constructor(props) {
        super(props);

        this.state = {
            radioValue: false,
            changeColor: false,
            isOpen: false,
            open: true,
            currentToothId: "",
            surgeryId: '',
            missing: [],
            chipped: [],
            loose: [],
            mallampatiScore: '',
            neckRom: '',
            mouthOpening: '',
            locationOfTeeth: '',
            thyromentalDistance: '',
            intercisorGap: '',

        };
    }

    componentDidMount() {
        let pathName = window.location.pathname;
        let pathArray = pathName.split('/');
        console.log("pathArray==", pathArray)
        if (pathArray.length === 4) {
            this.getSurgeryAirWayEvaluationBySurgeryId(pathArray[pathArray.length - 1]).catch(error => console.log(error))
            this.setState({surgeryId: pathArray[pathArray.length - 1]})
        }
    }

    componentWillReceiveProps(nextProps, prevProps) {
        if (this.state.surgeryId && nextProps && nextProps.selectedSurgery && nextProps.selectedSurgery.surgeryId && nextProps.selectedSurgery.surgeryId !== this.state.surgeryId) {
            this.getSurgeryAirWayEvaluationBySurgeryId(nextProps.selectedSurgery.surgeryId).catch(error => console.log(error))
            this.setState({surgeryId: nextProps.selectedSurgery.surgeryId})
        }
    }

    getSurgeryAirWayEvaluationBySurgeryId = async (surgeryId) => {
        this.props.dispatchAction(eventConstants.SHOW_LOADER);
        let [error, surgeryAirWayEvaluationDetail] = await Utility.parseResponse(PatientService.getSurgeryAirWayEvaluationBySurgeryId({surgeryId}));
        this.props.dispatchAction(eventConstants.HIDE_LOADER);
        if (error || surgeryAirWayEvaluationDetail.length < 1)
            return;
        let missingResponse = surgeryAirWayEvaluationDetail[0]?.missing.length > 0 && surgeryAirWayEvaluationDetail[0]?.missing.forEach((id) => document.getElementById(id).style.fill = "#ff00ba")
        let chippedResponse = surgeryAirWayEvaluationDetail[0]?.chipped.length > 0 && surgeryAirWayEvaluationDetail[0]?.chipped.forEach((id) => document.getElementById(id).style.fill = "#136afc")
        let looseResponse = surgeryAirWayEvaluationDetail[0]?.loose.length > 0 && surgeryAirWayEvaluationDetail[0]?.loose.forEach((id) => document.getElementById(id).style.fill = "#ff462c")
        this.setState({
            surgeryId: surgeryId,
            surgeryAirWayEvaluationDetail: surgeryAirWayEvaluationDetail[0],
            missing: surgeryAirWayEvaluationDetail[0]?.missing || [],
            chipped: surgeryAirWayEvaluationDetail[0]?.chipped || [],
            loose: surgeryAirWayEvaluationDetail[0]?.loose || [],
            mallampatiScore: surgeryAirWayEvaluationDetail[0]?.mallampatiScore || '',
            neckRom: surgeryAirWayEvaluationDetail[0]?.neckRom || '',
            mouthOpening: surgeryAirWayEvaluationDetail[0]?.mouthOpening || '',
            locationOfTeeth: surgeryAirWayEvaluationDetail[0]?.locationOfTeeth || '',
            thyromentalDistance: surgeryAirWayEvaluationDetail[0]?.thyromentalDistance || '',
            intercisorGap: surgeryAirWayEvaluationDetail[0]?.intercisorGap || '',
        })
    }

    updateSurgeryAirWayEvaluation = async (requestData) => {
        let request = {
            surgeryId: this.state.surgeryId,
            ...requestData
        }
        this.props.dispatchAction(eventConstants.SHOW_LOADER);
        let [error, surgeryAirWayEvaluationDetail] = await Utility.parseResponse(PatientService.updateSurgeryAirWayEvaluation(request));
        this.props.dispatchAction(eventConstants.HIDE_LOADER);
        if (error)
            return Utility.apiFailureToast('Unable to update airway evaluation');
        this.setState({
            surgeryId: this.state.surgeryId,
            surgeryAirWayEvaluationDetail: surgeryAirWayEvaluationDetail,
            missing: surgeryAirWayEvaluationDetail?.missing || [],
            chipped: surgeryAirWayEvaluationDetail?.chipped || [],
            loose: surgeryAirWayEvaluationDetail?.loose || [],
            mallampatiScore: surgeryAirWayEvaluationDetail?.mallampatiScore || '',
            neckRom: surgeryAirWayEvaluationDetail?.neckRom || '',
            mouthOpening: surgeryAirWayEvaluationDetail?.mouthOpening || '',
            locationOfTeeth: surgeryAirWayEvaluationDetail?.locationOfTeeth || '',
            thyromentalDistance: surgeryAirWayEvaluationDetail?.thyromentalDistance || '',
            intercisorGap: surgeryAirWayEvaluationDetail?.intercisorGap || '',
        })
        Utility.apiSuccessToast('airway evaluation data has been updated successfully.')
    }

    onToothSelect = (type) => {
        if (type === "missing") {
            this.state.missing.push(this.state.currentToothId)
            this.updateSurgeryAirWayEvaluation({missing: this.state.missing}).catch(error => console.log(error))
            document.getElementById(this.state.currentToothId).style.fill = "#ff00ba";
        }
        if (type === "loose") {
            this.state.loose.push(this.state.currentToothId)
            this.updateSurgeryAirWayEvaluation({loose: this.state.loose}).catch(error => console.log(error))
            document.getElementById(this.state.currentToothId).style.fill = "#ff462c";
        }
        if (type === "chipped") {
            this.state.chipped.push(this.state.currentToothId)
            this.updateSurgeryAirWayEvaluation({chipped: this.state.chipped}).catch(error => console.log(error))
            document.getElementById(this.state.currentToothId).style.fill = "#136afc";
        }
    };
    handleToggleDialog = (id = '') => {
        this.setState({isOpen: !this.state.isOpen, currentToothId: id});
    };
    handleChange = (event) => {
        let {name, value} = event.target
        this.updateSurgeryAirWayEvaluation({[name]: value}).catch(error => console.log(error))
        // this.setState({[name]: value})
    }

    render() {
        return (
            <div>
                <AirwayComponent
                    state={this.state}
                    handleArr={this.handleArr}
                    onToothSelect={this.onToothSelect}
                    handleToggleDialog={this.handleToggleDialog}
                    handleChange={this.handleChange}

                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {user: state.user};
};

export default connect(mapStateToProps, {dispatchAction})(AirwayEvaluation);
