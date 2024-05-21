import React, { PureComponent } from "react";
import BaseComponent from "../../modules/baseComponent";
import DiagnosesList from "./diagnosesList";
import AlertDialog from "./addDiagnoses";

const General = [
  "Morbid (severe) obesity due to excess calories",
  "OverWeight",
];
const cardioVascular = [
  "Essentail (primary) hypertension",
  "Paroxysmal atrial fibrillation",
];
const Pulmonary = ["Asthma"];

const rows = [
  {
    General: "Pulmonary mycobaterial infection",
  },
  {
    Endocrine: "A311 Cutaneous mycobacterial infection",
  },
  {
    Renal: "A318 Other mycobacterial infection",
  },
  {
    Pulmonary: "A319 Mycobacterial infection,unspecified",
  },
  {
    Gastrointestinal: "A320 Cutaneous listeriosis",
  },
  {
    Neurological: "A3211 Listerial meningitis",
  },
  {
    Hematology: "A3212 Listerial meningoencepthalitis",
  },
  {
    Miscellaneous: "A#@& Listerial sepsis",
  },
];


class diagnosisComponent extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      rowHeadings: ["General", "Endocrine"],
      colHeadings1: ["pulmonary", "Gastrointestinal"],
      colHeadings: ["General", "CardioVascular", "Pulmonary"],
      open: false,
      General: General,
      cardioVascular: cardioVascular,
      Pulmonary: Pulmonary,
      rows: rows,
    };
  }

  handleDialog = () => {
    this.setState({
      open: !this.state.open,
    });
    console.log("Im fun");
  };

  render() {
    return (
      <div>
        <div>
          <DiagnosesList
            state={this.state}
            handleClickOpen={this.handleClickOpen}
            handleDialog={this.handleDialog}
            handleClose={this.handleClose}
          />
        </div>
        {this.state.open ? (
          <AlertDialog handleDialog={this.handleDialog} state={this.state} />
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default diagnosisComponent;
