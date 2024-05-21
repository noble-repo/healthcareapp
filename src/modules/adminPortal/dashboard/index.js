import React, { PureComponent } from "react";
import BaseComponent from "../../baseComponent";
import { Column, Row } from "simple-flexbox";
import DashboardComponent from "./dashboard";
import Header from "../../adminPortal/header";
import { Avatar, Divider } from "material-ui";

const rows = [

  {
    consultation: "Total Consultations",
  },
  {
    completion: "Completed Consultations",
  },
  {
    missed: "Missed Consultations",
  },
  {
    number: "$13,935.00",
  },
  {
    number1: "+$2,589.00",
  },
  {
    number2: "+$5000.00",
  },
  {
    number3: "+$4000.00",
  },
  {
    number4: "+$4935.00",
  },
  {
    number5: "189",
  },
  {
    number6: "+28",
  },
  {
    number7: "49",
  },
  {
    number8: "121",
  },
  {
    number9: "19",
  },
];

class Dashboard extends BaseComponent {
  constructor(props) {
    super(props);

    this.state = {
      colHeadings: ["Date"],
      rows: rows,
      filteredArray: rows,
      isOpen: true,
    };
  }

  render() {
    return (
      <div>
        <div>
          <Header tabName="dashboard" />
        </div>
        <br />
        <br />
        <div></div>

        <DashboardComponent state={this.state} />
      </div>
    );
  }
}

export default Dashboard;
