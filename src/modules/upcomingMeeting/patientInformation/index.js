import React from "react";
import BaseComponent from "../../baseComponent";
import InformationComponent from "./patientInformation";
import Header from "../../anaesthesiologistPortal/header";
import {eventConstants} from "../../../constants";
import Utility, {dispatchAction} from "../../../utility";
import {PatientService} from "../../../services";

class PatientInformationComponent extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      isInformationContent: false,
      isSurgicalHistory: false,
      isCardiacSurvey: false,
      isPulmonarySurvey: false,
      isRenalSurvey: false,
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
      generalPatientInformation: [
        {
          patientImage: "/images/advil.png",
          patientHeight: "5 feets 6 inches",
          patientWeight: "135 lbs",
          PatientBmi: "22.9",
          gender: "Female",
          dateOfBirth: " 3/20/1989",
          ageCalculated: "31 Years",
          educationLevel: " Master's Degree",
          firstTimeSurgery: "Yes",
          anyAllergiesToMedications: "No",
        },
      ],

      checked: false,
    };
  }

  checkedDocument = (event) => {
    this.setState({ isAnyDocumentChecked: event.target.checked });
  };
  componentDidMount() {
    if (this.props?.selectedSurgery?.patient?.surveyId) {
      this.getSectionListByPartWise(this.props?.selectedSurgery?.patient?.surveyId, 'PART_A').catch(error => console.error(error))
      this.setState({surveyId: this.props?.selectedSurgery?.patient?.surveyId})
  }
    this.toggleState();
  }

  toggleState = (key) => {
    if (!key) return;
    this.setState({ [key]: !this.state[key] });
  };
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
    return (
      <div>
        <Header />
        <InformationComponent
          state={this.state}
          toggleState={this.toggleState}
        />
      </div>
    );
  }
}
export default PatientInformationComponent;
