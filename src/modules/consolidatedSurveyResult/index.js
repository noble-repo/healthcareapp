import React from "react";
import BaseComponent from "../baseComponent";
import {connect} from "react-redux";
import Utility, {dispatchAction} from "../../utility";
import {eventConstants} from "../../constants";
import {PatientService} from "../../services";
import ConsolidatedSurveyResultComponent from "./consolidatedSurveyResultComponent";

class ConsolidatedSurveyResult extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            surgeryId: '',
            part: 'PART_A',
            sectionList: [],
            questionList: {},
            partValues: {
                PART_A: {name: "General"},
                PART_B: {name: "Surgical History"},
                PART_C: {name: "Cardiac Survey"},
                PART_D: {name: "Pulmonary Survey"},
                PART_E: {name: "Renal Survey"},
                PART_F: {name: "Endocrine and Heme Survey"},
                PART_G: {name: "Neurological Survey "},
                PART_H: {name: "GastroIntestinal Survey"},
                PART_I: {name: "Miscellaneous"},
            },
        };
    }

    componentDidMount() {
        console.log("this.props?.selectedSurgery?.patient?.surveyId===", this.props?.selectedSurgery?.patient?.surveyId)
        if (this.props?.selectedSurgery?.patient?.surveyId) {
            this.getSectionListByPartWise(this.props?.selectedSurgery?.patient?.surveyId, 'PART_A').catch(error => console.error(error))
            this.setState({surveyId: this.props?.selectedSurgery?.patient?.surveyId})
        }
    }

    // componentWillReceiveProps(nextProps, prevProps) {
    //     if (this.state.surveyId && nextProps && nextProps.selectedSurgery && nextProps.selectedSurgery.patient && nextProps.selectedSurgery.patient.surveyId && nextProps.selectedSurgery.patient.surveyId !== this.state.surveyId) {
    //         this.getSectionListByPartWise(this.props?.selectedSurgery?.patient?.surveyId, 'PART_A').catch(error => console.error(error))
    //         this.setState({surgeryId: this.props?.selectedSurgery?.patient?.surveyId})
    //     }
    // }

    getSectionListByPartWise = async (surveyId, part) => {
        this.props.dispatchAction(eventConstants.SHOW_LOADER);
        let [error, sectionList] = await Utility.parseResponse(PatientService.getSectionListByPartWise({
            surveyId,
            part
        }));
        this.props.dispatchAction(eventConstants.HIDE_LOADER);
        if (error) {
            return Utility.apiFailureToast(error || "unable to fetch section list.");
        }
        if (sectionList && sectionList.length > 0) {
            this.setState({surveyId, sectionList})
            let sectionIdsList = []
            sectionList.sort((a, b) => a.position - b.position)

            sectionList.forEach((section) => sectionIdsList.push(section.sectionId))
            this.getSectionWiseQuestionList(surveyId, sectionIdsList).catch(error => console.log("error", error))
        }
    }
    getSectionWiseQuestionList = async (surveyId, sectionIdsList) => {
        this.props.dispatchAction(eventConstants.SHOW_LOADER);
        let [error, questionList] = await Utility.parseResponse(PatientService.getSectionWiseQuestionList({
            surveyId,
            sectionIdsList: sectionIdsList
        }));
        this.props.dispatchAction(eventConstants.HIDE_LOADER);
        if (error) {
            return Utility.apiFailureToast(error || "unable to fetch question list.");
        }
        this.setState({questionList})
    }


    render() {
        return (<>
            <ConsolidatedSurveyResultComponent state={this.state}
                                               getSectionListByPartWise={this.getSectionListByPartWise}/>
        </>)
    }

}

const mapStateToProps = (state) => {
    return {user: state.user};
};

export default connect(mapStateToProps, {dispatchAction})(ConsolidatedSurveyResult);