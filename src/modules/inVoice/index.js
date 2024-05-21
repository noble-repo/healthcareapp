import React from "react";
import BaseComponent from "../baseComponent";
import Sidebar from "../patients/sidebar";
import { Column, Row } from "simple-flexbox";
import PatientInvoiceTable from "./inVoiceTable";
import { Avatar } from "material-ui";
import Header from "../shared/header";

const rows = [
  {
    icon: <Avatar alt="Cindy Baker" src="download.jpg" />,
    patientName: "Patrice Page",
    SurgeryType: "Wrist Surgery",
    MeetingTime: "10:00 AM",
    MeetingDate: "18 Aug 2020",
    BillAmount: "$49.00",
    InvoicesStatus: "Paid",
    PaidOn: "18 Aug 2020",
  },
  {
    icon: <Avatar alt="Cindy Baker" src="download.jpg" />,
    patientName: "Derek Diamon",
    SurgeryType: "ACL Reconstruction",
    MeetingTime: "10:30 AM",
    MeetingDate: "19 Aug 2020",
    BillAmount: "$49.00",
    InvoicesStatus: "Paid",
    PaidOn: "19 Aug 2019",
  },
];

class Invoice extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      colHeadings: [
        "",
        "Patient Name",
        "Surgery type",
        "Meeting Time",
        "Meeting Date",
        "Bill Amount",
        "Invoices Status",
        "Paid On",
      ],
      rows: rows,
      filteredArray: rows,
      isOpen: true,
    };
  }
  toggleImage = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <div>
        <div>
          <Header tabName="invoice" />
        </div>
        <div></div>
        <Row>
          <Column>
            {this.state.isOpen ? <Sidebar state={this.state} /> : " "}
          </Column>

          <Column>
            <PatientInvoiceTable
              state={this.state}
              toggleImage={this.toggleImage}
            />
          </Column>
        </Row>
      </div>
    );
  }
}

export default Invoice;
