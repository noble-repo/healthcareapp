import React from 'react'
import BaseComponent from '../../baseComponent'
import FAQComponent from './FrequentlyAsked' 
import Header from '../dashboard/header'


export default class FrequentlyAskedQuestion extends BaseComponent {
    constructor(props) {
        super(props)

        this.state = {
            surver: false,
            appointment: false,
            payment: false,
            reschedule: false,
            virtualmeeting: false,
            
        }
    }

    surverAccordian = () => {
        this.setState({
            open: !this.state.open,
        })
    }

    appointmentAccordian = () =>{
        this.setState({
            appointment: !this.state.appointment,
        })
    }

    paymentAccordian = () => {
        this.setState({
            payment: !this.state.payment,
        })
    }

    rescheduleAccordian = () => {
        this.setState({
            reschedule: !this.state.reschedule,
        })
    }

    virtualmeetingAccordian = () => {
        this.setState({
            virtualmeeting: !this.state.virtualmeeting,
        })
    }

    

    render () {
        return(
            <div>
                 <Header tabName="faq"/>
            <FAQComponent 
            state={this.state}
            surverAccordian={this.surverAccordian}
            appointmentAccordian={this.appointmentAccordian}
            paymentAccordian={this.paymentAccordian}
            rescheduleAccordian={this.rescheduleAccordian}
            virtualmeetingAccordian={this.virtualmeetingAccordian}

            
            />
           
            </div>
        )
    }
}