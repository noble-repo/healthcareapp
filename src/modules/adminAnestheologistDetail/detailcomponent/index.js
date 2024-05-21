import React, {Component} from 'react'
import DetailComponent from './detailComponent';

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {

        return (
            <DetailComponent rows={this.state.rows}
                             state={this.props.state} toggleImage={this.props.toggleImage}/>

        )
    }
}

export default Details;