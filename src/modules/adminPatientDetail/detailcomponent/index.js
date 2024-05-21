import React, { Component } from 'react'
import DetailComponent from './detailComponent';
import { Row, Column } from 'simple-flexbox';
import AlertDialog from"./dialogueComponent";
class AdminPatientDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open:false,
        };
    }
    handleDialog = () => {
        this.setState({
            open: !this.state.open
        })
        console.log("testing...")
    }


    render() {
        
        return (
            <div>
            <DetailComponent
             rows={this.state.rows}
              state={this.props.state} toggleImage={this.props.toggleImage}
              handleDialog={this.handleDialog}/>
              
              {this.state.open ?
                <AlertDialog
                    handleDialog={this.handleDialog}
                    state={this.state}
                    state={this.state}
                    handleChange={this.handleChange}
                    /> : ""

            }
            </div>
            )
            
    }
}

export default AdminPatientDetail;