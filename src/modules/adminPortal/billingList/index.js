import React, { PureComponent } from "react";
import BaseComponent from "../../baseComponent";
import Sidebar from "./sidebar"
import { Column, Row } from "simple-flexbox";
import BillingTable from "./table";
import Header from "../../adminPortal/header";
import { Avatar, Divider } from "material-ui";

const rows = [
  {
    
    icon: <Avatar alt="Cindy Baker" src="download.jpg" />,
    PatientName: "Patrice Page",
    Anesthesiologist: "Dr. Anjelina Victor",
    VirtualMeeting: "28 September 2020, 10:00 AM ",
    Amount: "$39.00",
    Billingtype: "Self-paid",
    Billingstatus: "Paid",
  
  
    
  },
  {
    icon: <Avatar alt="Cindy Baker"  src="download.jpg" />,
    PatientName: "Patrice Page",
    Anesthesiologist: "Anesthesiologist Name",
    VirtualMeeting: "28 September 2020, 9:00 AM ",
    Amount: "$39.00",
    Billingtype: "Co-paid",
    Billingstatus: "Outstanding",
  
   
  },
  {
    icon: <Avatar alt="Cindy Baker"  src="download.jpg" />,
    PatientName: "Patrice Page",
    Anesthesiologist: "Anesthesiologist Name",
    VirtualMeeting: "28 September 2020, 9:00 AM ",
    Amount: "$39.00",
    Billingtype: "Co-paid",
    Billingstatus: "Invoice Sent",
  
   
  },
];

class Billing extends BaseComponent {
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
  onCheckboxChange = () => {
    this.setState({checked: !this.state.checked});
};

onChangeEvent = (event) => {
    this.setState({[event.target.id]: event.target.value});
};

  toggleImage = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <div>
        <Header tabName="billing" />
        </div>
        <div>
        </div>
        <Row>
          
             <Column>{this.state.isOpen ? <Sidebar rows={this.state.rows} state={this.state} /> : " "}
                    </Column> 
          <Column>
            <BillingTable state={this.state} toggleImage={this.toggleImage}   onCheckboxChange={this.onCheckboxChange}/>
          </Column>
        </Row>
      </div>
    );
  }
}

export default Billing;
