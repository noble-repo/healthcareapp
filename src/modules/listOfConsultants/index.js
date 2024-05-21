import React, { PureComponent } from "react";
import BaseComponent from "../baseComponent";
import ConsultantSidebar from './sidebar'
import { Column, Row } from "simple-flexbox";
import ConsultantList from './table'
import Rating from '@material-ui/lab/Rating';
import Header from '../adminPortal/header/header'

import { Avatar, Divider } from "material-ui";

const rows = [
  {
    
    icon: <Avatar alt="Cindy Baker" src="download.jpg" />,
    Name: "Dr. Haris Shield",
    Anesthesiologist: "Dr Anjelina Victor",
    VirtualMeeting: "28 Sep 2020, 10:00 AM",
    Status: "Individual",
    SurgeryClearance: <Avatar alt = "Surgery-Clearance" src = "/images/Group 40.svg" style={{backgroundColor: "#ffffff", marginLeft:"23px"}} />,
    Rating: <Rating
    name="simple-controlled" />
    
  },
  {
    icon: <Avatar alt="Cindy Baker"  src="/images/male.jpg" />,
    Name: "Dr. Alex Foster",
    Anesthesiologist: "Anesthesiologist Name",
    VirtualMeeting: "28 Sep 2020, 09:00 AM",
    Status: "Group",
    SurgeryClearance: <Avatar alt = "Surgery-Clearance" src = "/images/Group 40.svg" style={{backgroundColor: "#ffffff", marginLeft:"23px"}} />,
    Rating: <Rating
    name="simple-controlled" />
   
  },
];

class anestheologistList extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {

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
         
        </div>
        <div>
        </div>
        
          <Header tabName = "consultations"/>
          
        <Row>
          
          
             <Column>{this.state.isOpen ? <ConsultantSidebar rows={this.state.rows} state={this.state} /> : " "}
                    </Column> 
          <Column>
          <ConsultantList state={this.state} toggleImage={this.toggleImage}/>
          </Column>
        </Row>
      </div>
    );
  }
}

export default anestheologistList;
