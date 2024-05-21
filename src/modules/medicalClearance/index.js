import React from 'react'
import BaseComponent from '../baseComponent'
import Header from '../patientGeneral/dashboard/header'
import {Row,Column} from 'simple-flexbox'
import Surgery from '../patientGeneral/dashboard/Surgery'
import MeetingHistory from './meetingHistory'
import Document from './Clearance'
import EditDialog from './detailComponent';



export default class MedicalClearanceProvider extends BaseComponent {


    constructor(props){
        super(props)
        this.state = {
            edit:false,
        }
    }
    editDialog = () => {
        this.setState({
            edit: !this.state.edit
        })
        console.log("testinggggg...")
    }

    render () {
        return (
            
            <div>
            <Header />
            <br />
            <br />
            <Row>
            <Surgery/>
           <MeetingHistory/>
            </Row> 
            <Document state={this.state} editDialog={this.editDialog}/>
            {this.state.edit ?
                            <EditDialog
                                editDialog={this.editDialog}
                                state={this.state}
                                /> : ""
                        }

           
            </div>
        )
    }
}


