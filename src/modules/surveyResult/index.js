import React, { Component } from "react";
import BaseComponent from "../baseComponent";
import SurveyComponent from "./SurveyComponent";
export class SurveyResult extends BaseComponent {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      surgical: false,
      cardiac: false,
      pulmonary: false,
      renal: false,
      endocrine: false,
      height: "5 feet 10 Inches",
      weight: "154.30",
      bmi: "22.1",
      gender: "Male",
      dob: "1 January 1990",
      age: "30",
      education: "High School Diploma",
      fts: "No",
      surgeryType: "Shoulder Reconstruction",
      surgeryDate: "January 2008",
      sedationType: "General Breathing Tube",
      sComplications: "No",
      anesthesiaComplication: "No",
      familyHistory: "Yes",
      comment: " ",
      allergy: "No",
      cardiacSurvey: [
        {
          ques:
            "Do you have high blood pressure or take blood pressure medicines ?",
          option: "Yes",
        },
        {
          ques: "Have you had Heart Surgery ?",
          option: "Yes",
          info: [
            {
              condition: "If yes, please answer the following",
              query: "Name of the Surgery",
              surgeryName: "Stent Placement",
              query2: "year",
              year: "2015",
              query3: "if Stent were placed",
              stent: "Yes",
              query4: "How Many?",
              count: "2",
            },
          ],
        },
        {
          ques: "Do you have abnormal Heart Rhythm ?",
          option: "Yes",
        },
      ],
    };
  }
  generalAccordian = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  endocrineAccordian = () => {
    this.setState({
      endocrine: !this.state.endocrine,
    });
  };
  surgicalAccordian = () => {
    this.setState({
      surgical: !this.state.surgical,
    });
  };
  cardiacAccordian = () => {
    this.setState({
      cardiac: !this.state.cardiac,
    });
  };
  pulmonaryAccordian = () => {
    this.setState({
      pulmonary: !this.state.pulmonary,
    });
  };
  renalAccordian = () => {
    this.setState({
      renal: !this.state.renal,
    });
  };
  render() {
    return (
      <div>
        <SurveyComponent
          state={this.state}
          cardiacSurvey={this.state.cardiacSurvey}
          generalAccordian={this.generalAccordian}
          cardiacAccordian={this.cardiacAccordian}
          surgicalAccordian={this.surgicalAccordian}
          pulmonaryAccordian={this.pulmonaryAccordian}
          renalAccordian={this.renalAccordian}
          endocrineAccordian={this.endocrineAccordian}
        />
      </div>
    );
  }
}

export default SurveyResult;
