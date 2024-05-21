import React, {Component} from "react";
import {connect} from "react-redux";
import Utility, {dispatchAction} from "../../utility";
import {eventConstants} from "../../constants";
import {PatientService} from "../../services";
import PatientGeneralInformationComponent from "./patientGeneralInformationComponent";

class PatientGeneralInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sectionId: '604f631cc53d0210e00f53e0',
            questionList: [],
        }
    }

    componentDidMount() {
        if (this.props?.selectedSurgery?.patient?.surveyId) {
            this.getSectionQuestionList(this.props?.selectedSurgery?.patient?.surveyId, this.state.sectionId).catch(error => console.error(error))
            this.setState({surveyId: this.props?.selectedSurgery?.patient?.surveyId})
        }
    }

    componentWillReceiveProps(nextProps, prevProps) {
        if (this.state.surveyId && nextProps && nextProps.selectedSurgery && nextProps.selectedSurgery.patient && nextProps.selectedSurgery.patient.surveyId && nextProps.selectedSurgery.patient.surveyId !== this.state.surveyId) {
            this.getSectionQuestionList(nextProps.selectedSurgery.patient.surveyId, this.state.sectionId)
            this.setState({surveyId: nextProps.selectedSurgery.patient.surveyId})

        }
    }

    getSectionQuestionList = async (surveyId, sectionId) => {
        this.props.dispatchAction(eventConstants.SHOW_LOADER);
        let [error, questionList] = await Utility.parseResponse(PatientService.getSectionQuestionList({
            surveyId,
            sectionId
        }));
        this.props.dispatchAction(eventConstants.HIDE_LOADER);
        if (error) {
            return Utility.apiFailureToast(error || "unable to fetch question list.");
        }
        this.setState({questionList})
    }

    render() {
        return (
            <PatientGeneralInformationComponent state={this.state}/>)
    }
}


const mapStateToProps = (state) => {
    return {user: state.user}
};

export default connect(mapStateToProps, {dispatchAction})(PatientGeneralInformation);
