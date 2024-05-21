

import BaseComponent from "../../baseComponent";

// import Sidebar from "./sidebar"

 import Header from "./header";

import ConsentForm from "./form";


import {Row,Column} from "simple-flexbox";

import {DropzoneArea} from 'material-ui-dropzone'
import React, { Component } from "react";




  
class Consent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            row:[
                {
                    imageUrl:'',
                },
                
                
            ],
            isAnyDocumentChecked:false,
            checked:false,
            showAlert:false,
            popError:"",
        
            
        }
    }
    
  handleAlert=()=>{
    console.log("hii")
    if (!this.state.isAnyDocumentChecked ) 
    {
      this.setState({popError:"document verification required before clearance"})
      
    }
    
  }

  switchChange=(checked)=> {
    this.setState({ checked: checked });
    if (!this.state.isAnyDocumentChecked ) 
    {
      alert("testiing..")
      this.setState ({showAlert:true})
    }
  }
  checkedDocument=(event)=>  {
    console.log("testing...", event.target.checked);
    this.setState({ isAnyDocumentChecked: event.target.checked });
  }

  render() {
    return (
      <div>
          <div>

              < Header />
          
        <ConsentForm
          handleAlert={this.handleAlert}
          handleSwitch={this. handleSwitch}
          checkedDocument={this.checkedDocument}
          switchChange={this.switchChange}
          state={this.state}
        />
        </div>
      </div>
    );
  }
}
export default Consent;