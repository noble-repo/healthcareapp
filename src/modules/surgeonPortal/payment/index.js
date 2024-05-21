import React, { Component } from 'react'
import BaseComponent from '../../baseComponent';
import Payment from './paymentComponent';
import Header from "../shared/header";

export default class Payments extends BaseComponent {
   
    
    constructor(props) {
    super(props);
    this.state={
        planType:'monthly',
    }
}
toggleValue=(event) =>{
    console.log("testing",event.target.value)
    this.setState({
        planType:event.target.value,
    })
}
// onChange = e =>{
//     this.setState({value:e.target.value});
//     }

    render() {
        return (
            <div>
                <Header tabName="patients"/>
                {/* <Payment /> */}
                <Payment
                    state={this.state} 
                    toggleValue={this.toggleValue}/>

            </div>
        )
    }
}
