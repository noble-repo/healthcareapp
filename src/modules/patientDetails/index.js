import React, { PureComponent } from 'react'
import BaseComponent from '../baseComponent';
import Header from '../shared/header';
import Sidebar from './sidebar';
import DetailComponent from './detailcomponent';
import { Row, Column } from 'simple-flexbox';

class PatientDetails extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            rows:[
                {
                    img:"download.jpg",
                    name:"Derek Diamon",
                    date:"28 Aug 2020",
                }
            ],
            isOpen: true
        };
    }

    toggleImage = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
        console.log("fun working");
      };

    render() {
        
        return (
            <div>
                <div>
                    <Header tabName="patients"/>
                </div>
                <Row> 
                {/* <div> */}
                    <Column>{this.state.isOpen ? <Sidebar rows={this.state.rows} state={this.state} /> : " "}
                    
                    </Column> 
                    <Column>
                        <DetailComponent
                         state={this.state} 
                        toggleImage={this.toggleImage}/>
                    </Column>
                    {/* </div> */}
                </Row>
            </div>
        )
    }
}

export default PatientDetails;