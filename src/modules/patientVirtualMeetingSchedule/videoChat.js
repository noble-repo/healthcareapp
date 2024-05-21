import React, {Component} from 'react';
import Header from "../patientGeneral/dashboard/header";

class videoChat extends Component {
    constructor(props){
        super(props);
        this.state={
            url : '',
        }
    }

    componentDidMount(){
        this.setState({url: this.props?.location?.state?.url});
    }
    render(){
        return(
            <div>
                <Header />
                <iframe src={this.state.url} width="70%" style={{marginTop: '3%', height: '650px'}} allow="camera; microphone" />
            </div>
        );
    }
}
export default videoChat;