import React, { Component } from 'react';
import SupportScreen from './supportScreen';
import Header from '../dashboard/header';
 

export default class Screen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        contactNumber: "1-855-477-3942",
         
        };
      }
    render() {
        return (
            <div>
                <Header tabName="support"/>
                <SupportScreen  state={this.state}/>
            </div>
        )
    }
}
