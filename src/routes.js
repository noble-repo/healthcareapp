import React from "react";
import { Router, Route } from "react-router-dom";
import { Redirect, Switch } from "react-router";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { connect } from "react-redux";
import {
    AvailabilitySchedule,
    SurveyResult,
    AirwayEvaluation,
    EmailVerified,
    Login,
    MeetingRequest,
    Patients,
    VideoScreen,

} from "./modules";
import { history } from "./managers/history";
import ConsultantListComponents from './modules/listOfConsultants'
import BaseComponent from "./modules/baseComponent";
import patientsList from "./modules/surgeonPortal/patientsList";
import AnaesthesiologistPatientList from "./modules/anaesthesiologistPortal/patientsList";
import Anesthesiologist from "./modules/adminAnestheologist";
import BillingList from "./modules/adminPortal/billingList";
import { VerifyEmail, Profile, Users, PriorSurgery } from "./modules";
import { Password, MakePayment, PatientDetails } from "./modules";
import AdminPatientDetail from "./modules/adminPatientDetail";
import RequestListScreen from './modules/requestListScreen'
import CalendarComponent from './modules/anaesthesiologistPortal/Calendar'

import { Payment, InVoice, InvoiceDetails } from "./modules";
import { Anesthesia } from "./modules";
import DiagnosesList from "./modules/medicalDiagnoses";
import ListOfMedications from "./modules/listOfMedications";
import VirtualChatHistory from "./modules/virtualChatHistory";
import BillingDetails from "./common/billingDetails/";
import Calendar from './modules/surgeonPortal/calendar';
import MedicalClearanceProvider from './modules/medicalClearance'
import FrequentlyAskedQuestion from './modules/patientGeneral/fAQ';
import SurgeonPayment from "./modules/surgeonPortal/payment";
import SurgeonMakePayment from "./modules/surgeonPortal/makePayment";
import SurgeonUsers from "./modules/surgeonPortal/users";
import AnaesthesiologistUsers from "./modules/anaesthesiologistPortal/users";
import { UpcomingMeeting } from "./modules";
import InsuranceSurvey from "./modules/patientGeneral/surveyHistory";
import Screen from "./modules/patientGeneral/supportScreen";
import PatientsDashboard from "./modules/patientGeneral/dashboard";
import SurgeonBillingDetails from "./modules/surgeonPortal/billingDetails";
import SurgeonVideoScreen from "./modules/surgeonPortal/videoScreen";
import VideoScreenPatient from "./modules/patientGeneral/videoScreen";
import DetailsPatients from "./modules/surgeonPortal/detailsPatients";
import AdminAnesthesiologistDetail from "./modules/adminAnestheologistDetail";
import AdminSurgeonDetail from "./modules/adminSurgeonDetail";
import MedicationSurvey from "./modules/patientGeneral/surveyHistory/part_A_section_3";
import Header from "./modules/adminPortal/header";
import GeneralInformation from "./modules/patientGeneral/surveyHistory/part_A_section_2";
import Notifications from "./modules/notificationUi";
import RequestComponent from './modules/requestDetailsScreen'
import SignUp from "./modules/signup";
import { dispatchAction } from "./utility";
import AccountSetup from "./modules/accountSetup";
import AdminPatient from "./modules/adminPatients";

import Consent from "./modules/patientGeneral/consentform";

import SurgeonListComponents from "./modules/listOfSurgeons";
import AdminBillingDetails from "./modules/adminPortal/billingDetails";
import DashboardComponent from "./modules/adminPortal/dashboard";
import CreateRoom from "./modules/patientMeeting/createRoom";
import PatientVideoMeeting from "./modules/patientMeeting";
import AnaesthesiaCreateRoom from "./modules/upcomingMeeting/anaesthesiaCreateRoom";
import AnaesthesiologistPatientDetail from "./modules/anaesthesiologistPortal/patientDetail";

import PatientVirtualMeetingSchedule from "./modules/patientVirtualMeetingSchedule";
import videoChat from "./modules/patientVirtualMeetingSchedule/videoChat";
import LoaderComponent from "./common/components/loader";
import upcomingMeeting from "./modules/upcomingMeeting";

class Routes extends BaseComponent {
    componentDidMount() {
    }

    render() {
        let loader = this.props && this.props.user && this.props.user.loading ? <LoaderComponent /> : null;

        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                {loader}
                <Router history={history}>
                    <Switch>
                        <Route exact path={"/upcoming-meeting"} component={AnaesthesiaCreateRoom} />
                        <Route exact path={"/upcoming-meeting/:roomID"} component={UpcomingMeeting} />
                        <Route exact path={"/make-payment"} component={MakePayment} />
                        <Route exact path={"/patient-details"} component={PatientDetails} />
                        <Route exact path={'/consultant-list'} component={ConsultantListComponents} />
                        <Route exact path={"/patients-list"} component={Patients} />
                        <Route exact path={"/list-of-users"} component={Users} />
                        <Route exact path={"/meeting-request"} component={MeetingRequest} />
                        <Route exact path={"/anesthesia"} component={Anesthesia} />
                        <Route exact path={"/billing"} component={BillingList} />
                        <Route exact path={"/billing-details"} component={AdminBillingDetails} />
                        <Route exact path={"/patients-meeting"} component={CreateRoom} />
                        <Route path={"/patients-meeting/:roomID"} component={PatientVideoMeeting} />
                        <Route exact path={"/notifications"} component={Notifications} />
                        <Route exact path={"/support-screen"} component={Screen} />
                        <Route exact path={"/make-payment"} component={MakePayment} />
                        <Route exact path={"/virtual-chat-history"} component={VirtualChatHistory} />
                        <Route exact path={"/invoice"} component={InVoice} />
                        <Route exact path={"/invoice-details"} component={InvoiceDetails} />
                        <Route exact path={"/list-of-medications"} component={ListOfMedications} />
                        <Route exact path={"/prior-surgery"} component={PriorSurgery} />
                        <Route exact path={"/payment"} component={Payment} />
                        <Route exact path={"/general-information"} component={GeneralInformation} />
                        <Route exact path={"/schedule"} component={AvailabilitySchedule} />
                        <Route exact path={"/survey-result"} component={SurveyResult} />
                        <Route exact path={"/billing-details"} component={BillingDetails} />
                        <Route exact path={"/video-screen"} component={VideoScreen} />

                        {/*// Surgeon portal routes*/}
                        <Route exact path={"/surgeon/patients-list"} component={patientsList} />
                        <Route exact path={"/surgeon/details-patients/:menu"} component={DetailsPatients} />
                        <Route exact path={"/surgeon/calendar"} component={Calendar} />

                        <Route exact path={"/surgeon/payment"} component={SurgeonPayment} />
                        <Route exact path={"/surgeon/billing-details"} component={SurgeonBillingDetails} />
                        <Route exact path={"/surgeon/video-screen"} component={SurgeonVideoScreen} />
                        <Route exact path={"/surgeon/make-payment"} component={SurgeonMakePayment} />
                        <Route exact path={"/surgeon/list-of-users"} component={SurgeonUsers} />

                        {/*// anaesthesiologist portal routes*/}
                        <Route exact path={"/anaesthesiologist/patients-list"}
                            component={AnaesthesiologistPatientList} />
                        <Route exact path={"/anaesthesiologist/details-patients/:menu"} component={AnaesthesiologistPatientDetail} />
                        <Route exact path={"/anaesthesiologist/list-of-users"} component={AnaesthesiologistUsers} />
                        <Route exact path={"/anaesthesiologist/calendar"} component={CalendarComponent} />
                        <Route exact path={"/anesthesiologist/patient-meeting"} component={upcomingMeeting} />

                        {/*// admin portal routes*/}
                        <Route exact path={"/admin/header"} component={Header} />
                        <Route exact path={"/admin/surgeon-list"} component={SurgeonListComponents} />
                        <Route exact path={"/admin/surgeon-detail/:menu"} component={AdminSurgeonDetail} />
                        <Route exact path={"/admin/anesthesiologist"} component={Anesthesiologist} />
                        <Route exact path={"/admin/anesthesiologist-detail/:menu"} component={AdminAnesthesiologistDetail} />
                        <Route exact path={"/admin/dashboard"} component={DashboardComponent} />
                        <Route exact path={"/admin/request-list"} component={RequestListScreen} />
                        <Route exact path={"/admin/request-details/:menu"} component={RequestComponent} />
                        <Route exact path={"/admin/patients"} component={AdminPatient} />
                        <Route exact path={"/admin/patient-detail/:menu"} component={AdminPatientDetail} />


                        {/*// patient portal routes*/}
                        <Route exact path={"/patient/video-screen"} component={VideoScreenPatient} />
                        <Route exact path={"/patient/consentform"} component={Consent} />
                        <Route exact path={"/patient/medication-survey"} component={MedicationSurvey} />
                        <Route exact path={"/patient/survey-history/:menu/:menu"} component={InsuranceSurvey} />
                        <Route exact path={"/patient/dashboard"} component={PatientsDashboard} />
                        <Route exact path={"/patient/virtual-meeting-schedule/:menu"} component={PatientVirtualMeetingSchedule} />
                        <Route exact path={"/patient/video-chat"} component={videoChat} />


                        <Route exact path={"/account-setup"} component={AccountSetup} />
                        <Route exact path={"/verify-otp"} component={VerifyEmail} />
                        <Route exact path={"/email-verified"} component={EmailVerified} />
                        <Route exact path={"/reset-password"} component={Password} />
                        <Route exact path={"/change-password"} component={Password} />
                        <Route exact path={"/profile"} component={Profile} />
                        <Route exact path={"/sign-up"} component={SignUp} />
                        <Route exact path={"/FAQ"} component={FrequentlyAskedQuestion} />

                        <Route exact path={"/"} component={Login} />

                        <Route exact path={"/schedule"} component={AvailabilitySchedule} />
                        <Route exact path={"/airway-evaluation"} component={AirwayEvaluation} />
                        <Route exact path={"/survey-result"} component={SurveyResult} />
                        <Route exact path={"/billing-details"} component={BillingDetails} />
                        <Route exact path={"/video-screen"} component={VideoScreen} />

                        <Route exact path={"/invoice"} component={InVoice} />
                        <Route exact path={"/invoice-details"} component={InvoiceDetails} />
                        <Route exact path={"/payment"} component={Payment} />
                        <Route exact path={"/medical-diagnoses"} component={DiagnosesList} />
                        <Route exact path={"/virtual-chat-history"} component={VirtualChatHistory} />
                        <Route exact path={'/medical-clearance'} component={MedicalClearanceProvider} />
                        <Redirect exact from="*" to="/" />
                    </Switch>
                </Router>
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = (state) => {
    return { user: state.user };
};

export default connect(mapStateToProps, { dispatchAction })(Routes);
