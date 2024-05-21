import React, { Component } from 'react'
import BaseComponent from '../baseComponent';
import Payment from './paymentComponent';
import HeaderComponent from '../profile/header';

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
                <HeaderComponent />
                {/* <Payment /> */}
                <Payment
                    state={this.state} 
                    toggleValue={this.toggleValue}/>

            </div>
        )
    }
}
