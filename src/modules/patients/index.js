import React, { PureComponent } from "react";
import BaseComponent from "../baseComponent";
import Sidebar from "./sidebar"
import { Column, Row } from "simple-flexbox";
import PatientTable from "./table";
import Header from "../shared/header";
import { Avatar, Divider } from "material-ui";

const rows = [
  {
    
    icon: <Avatar alt="Cindy Baker" src="download.jpg" />,
    patientName: "Patrice Page",
    SurgeryType: "Wrist Surgery",
    Gender: "Female",
    Age: "30",
    Surgeon: "Dr.Haris Shield",
    surveyStatus: "Completed",
    surgeryDate: "26 Aug 2020",
    surgeryClearance: "No",
    
  },
  {
    icon: <Avatar alt="Cindy Baker" src="download.jpg" />,
    patientName: "Derek Diamon",
    SurgeryType: "ACL Reconstruction",
    Gender: "Male",
    Age: "28",
    Surgeon: "Dr.John Altrac",
    surveyStatus: "Completed",
    surgeryDate: "28 Aug 2019",
    surgeryClearance: "No",
  },
];

class patientsList extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      colHeadings: [
        "",
        "Patient Name",
        "Surgery type",
        "Gender",
        "Age",
        "Surgeon",
        "Survey Status",
        "Surgery Date",
        "Surgery Clearance",
      ],
      rows: rows,
      filteredArray: rows,
      isOpen: true,
    };
  }

  toggleImage = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <div>
          <Header tabName= "patients" />
        </div>
        <div>
        </div>
        <Row>
          
             <Column>{this.state.isOpen ? <Sidebar rows={this.state.rows} state={this.state} /> : " "}
                    </Column> 
          <Column>
            <PatientTable state={this.state} toggleImage={this.toggleImage} />
          </Column>
        </Row>
      </div>
    );
  }
}

export default patientsList;
