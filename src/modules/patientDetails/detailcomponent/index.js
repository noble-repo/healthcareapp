import React, { Component } from 'react'
import DetailComponent from './detailComponent';
import { Row, Column } from 'simple-flexbox';

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rows:[
                {
                    name:"Patrice Page",
                    phone:"302-857-9685",
                    email:"patricepage@gmail.com",
                    gender:"Female",
                    age:"30",
                    surgerytype:"Wrist Surgery",
                    surgerydate:"26 Aug 2020",
                    height:"163",
                    weight:"110",
                    bmi:"19",
                    surgeonname:"Dr.Haris Shield",
                    surgeonphone:"666-555-6789",
                    surgeonemail:"shieldclinic@gmail.com",
                    clearance:"No",
                    dob:"5 July 1990",
                    agecal:"30 Years",
                    pheight:"5 Feet 8 Inch (176 cm)",
                    pweight:"110 lbs (50kg)",
                    pbmi:"22.8",
                    pgender:"Female",
                    edu:"Bachelor's Degree",
                    first:"No",
                    allergy:"Yes",
                    specifyallergy:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
                }
            ]
        };
    }


    render() {
        
        return (
            <DetailComponent
            state={this.state}
             rows={this.state.rows}
              state={this.props.state} toggleImage={this.props.toggleImage}/>
           
            )
    }
}

export default Details;