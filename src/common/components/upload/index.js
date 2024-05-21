import BaseComponent from "../../../modules/baseComponent";
import React from "react";
import Utils, {dispatchAction} from "../../../utility";
import {connect} from "react-redux";
import UploadDocumentComponent from "./MultipleFileUploadField";

class UploadDocument extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            imagePreviewUrl: '',
            selectedFile: props.value || '',
            selectedFileName: props.value || '',
        }
    }

    onCloseModal = () => {
        this.setState({open: !this.state.open})
    }

    onFileCancel = () => {
        this.setState({selectedFile: '', imagePreviewUrl: ''})
    }

    render() {
        return (
            <UploadDocumentComponent
                state={this.state}
                selectedFileName={this.props.value}
                isOpenDialog={this.props.isOpenDialog}
                onCloseModal={this.onCloseModal}
                onFileChange={this.props.onFileChange}
                onFileCancel={this.onFileCancel}
            />)
    }
}

const mapStateToProps = (state) => {
    return {user: state.user}
};
export default connect(mapStateToProps, {dispatchAction})(UploadDocument);