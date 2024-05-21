import React from "react";
import BaseComponent from "../../baseComponent";
import AirwayComponent from "./airwayComponent";
import {eventConstants} from "../../../constants";
import Utility, {dispatchAction} from "../../../utility";
import {PatientService} from "../../../services";
import {connect} from "react-redux";


class AirwayEvaluation extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      surgeryId: this.props.selectedSurgery.surgeryId,
      missing: [],
      chipped: [],
      loose: [],
      mallampatiScore: '',
      neckRom: '',
      mouthOpening: '',
      locationOfTeeth: '',
      thyromentalDistance: '',
      intercisorGap: '',
    };
  }
  switchChange = (checked) => {
    this.setState({ checked: checked });
  };
  
  componentWillMount(){
    this.getSurgeryAirWayEvaluationBySurgeryId(this.props.selectedSurgery.surgeryId).catch(error => console.log(error))
    // this.setState({surgeryId: })
  }
  

  getSurgeryAirWayEvaluationBySurgeryId = async (surgeryId) => {
    debugger;
    this.props.dispatchAction(eventConstants.SHOW_LOADER);
    let [error, surgeryAirWayEvaluationDetail] = await Utility.parseResponse(PatientService.getSurgeryAirWayEvaluationBySurgeryId({surgeryId}));
    this.props.dispatchAction(eventConstants.HIDE_LOADER);
    if (error || surgeryAirWayEvaluationDetail.length < 1)
        return;
    // let missingResponse = surgeryAirWayEvaluationDetail[0]?.missing.length > 0 && surgeryAirWayEvaluationDetail[0]?.missing.forEach((id) => document.getElementById(id).style.fill = "#ff00ba")
    // let chippedResponse = surgeryAirWayEvaluationDetail[0]?.chipped.length > 0 && surgeryAirWayEvaluationDetail[0]?.chipped.forEach((id) => document.getElementById(id).style.fill = "#136afc")
    // let looseResponse = surgeryAirWayEvaluationDetail[0]?.loose.length > 0 && surgeryAirWayEvaluationDetail[0]?.loose.forEach((id) => document.getElementById(id).style.fill = "#ff462c")
    this.setState({
        surgeryId: surgeryId,
        surgeryAirWayEvaluationDetail: surgeryAirWayEvaluationDetail[0],
        missing: surgeryAirWayEvaluationDetail[0]?.missing || [],
        chipped: surgeryAirWayEvaluationDetail[0]?.chipped || [],
        loose: surgeryAirWayEvaluationDetail[0]?.loose || [],
        mallampatiScore: surgeryAirWayEvaluationDetail[0]?.mallampatiScore || '',
        neckRom: surgeryAirWayEvaluationDetail[0]?.neckRom || '',
        mouthOpening: surgeryAirWayEvaluationDetail[0]?.mouthOpening || '',
        locationOfTeeth: surgeryAirWayEvaluationDetail[0]?.locationOfTeeth || '',
        thyromentalDistance: surgeryAirWayEvaluationDetail[0]?.thyromentalDistance || '',
        intercisorGap: surgeryAirWayEvaluationDetail[0]?.intercisorGap || '',
    })
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <AirwayComponent
          checkedDocument={this.checkedDocument}
          switchChange={this.switchChange}
          state={this.state}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {user: state.user};
};

export default connect(mapStateToProps, {dispatchAction})(AirwayEvaluation);
