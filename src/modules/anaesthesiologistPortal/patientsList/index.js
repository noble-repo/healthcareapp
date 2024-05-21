import React from "react";
import BaseComponent from "../../../modules/baseComponent";
import Sidebar from "./sidebar";
import { Column, Row } from "simple-flexbox";
import PatientTable from "./patientsTable";
import Header from "../header";
import Schedule from "./schedulepopup";
import { dispatchAction } from "../../../utility";
import { PatientService } from "../../../services";
import { eventConstants, portalType } from "../../../constants";
import Utility from "../../../utility";
import { connect } from "react-redux";
import moment from "moment";


const options = [

    "Rotator Cuff Repair",


];
const options2 = [

    "ACL Reconstruction",


];
const options3 = [

    "COMPLETED",


];
const options4 = [

    "PENDING",


];
const options5 = [

    "Yes",


];
const options6 = [

    "No",


];
class AnaesthesiologistPatientList extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true,
            isSchedule: false,
            name: '',
            email: '',
            phone: '',
            surgeryType: '',
            nameError: '',
            phoneError: '',
            emailError: '',
            surgeryTypeError: '',
            firstName: '',
            lastName: '',
            searchError: '',
            patientList: [],
            userList: [],
            patients: [],
            selectedUser: "",
            skip: 0,
            limit: 10,
            selectedStatus: "",
            selectedType: "",
            selectedClinic: "",
            showInput: false,
            search: '',
            status: [],
            options: options,
            options2: options2,
            options3: options3,
            options4: options4,
            options5: options5,
            options6: options6,
            meetingTime: '',
            endTime: '',
            time: {}, 
            seconds: 600,
            currentMeetingPatient : [],
        };
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
    }
    secondsToTime(secs){
        let hours = Math.floor(secs / (60 * 60));
    
        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);
    
        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);
    
        let obj = {
          "h": hours,
          "m": minutes,
          "s": seconds
        };
        return obj;
      }

    componentDidMount() {
         
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
        this.getPatientSurgeryList().catch(error => console.error("unable to get patient-list", error))        
    }
    startTimer = ()=> {
        if (this.timer == 0 && this.state.seconds > 0) {
          this.timer = setInterval(this.countDown, 1000);
        }
      }
    
      countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        this.setState({
          time: this.secondsToTime(seconds),
          seconds: seconds,
        });
        
        // Check if we're at zero.
        if (seconds == 0) { 
          clearInterval(this.timer);
        }
      }

    getPatientSurgeryList = async () => {
        let { userDetails } = this.props?.user
        if (!userDetails || !userDetails.clinicId)
            return
        let requestData = {
            clinicId: userDetails.clinicId,
            type: portalType.ANESTHESIOLOGIST_PORTAL,
            limit: parseInt(this.state.limit),
            skip: parseInt(this.state.skip),
        }
        this.props.dispatchAction(eventConstants.SHOW_LOADER);
        let [error, patientList] = await Utility.parseResponse(PatientService.getSurgeryList(requestData));
        this.props.dispatchAction(eventConstants.HIDE_LOADER);
        if (error || patientList.length < 1)
            return;
        console.log("patientList===", patientList)
        this.setState({ patientList, patients: patientList })
        var startTime =  [];
        var endTime = [];
        this.state.patientList.map((patientList)=>{
            if(moment(patientList.virtualMeeting.endTime)>= moment()){
                startTime.push(patientList.virtualMeeting.startTime)
                endTime.push(patientList.virtualMeeting.endTime);
                this.setState({currentMeetingPatient: patientList});
            }
        });
        let MeetingTime = (Math.min(...startTime));
        let EndTime = Math.min(...endTime);
        this.setState({meetingTime: MeetingTime, endTime: EndTime});
        let diffTime = moment(this.state.meetingTime).diff(moment(),'seconds');
        this.setState({seconds: diffTime});
        console.log(moment(this.state.meetingTime).diff(moment(),'minutes'), this.state.seconds);
        if((moment(this.state.meetingTime).diff(moment(),'minutes')) <=10 && (moment(this.state.meetingTime).diff(moment(),'minutes')) > 0){
            this.startTimer();
        }
        console.log(this.state.meetingTime,this.state.endTime);
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value, [`${name}Error`]: '' })
    }

    showInput = () => {
        this.setState({
            showInput: !this.state.showInput,
        });
    };
    toggleImage = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    };
    scheduleSurgery = () => {
        this.setState({
            isSchedule: !this.state.isSchedule,

        });


    }

    onSearch = (event) => {
        this.setState({ [event.target.id]: event.target.value })
        this.filterPatients(event.target.value)
    }

    filterPatients = (searchText) => {
        console.log(this.state.patientList, "Hello")
        //    this.setState ({patients: this.state.clinicList})
        let data = this.state.patients

        if (!searchText.length) {
            console.log(searchText, "ABC")
            this.setState({ patientList: this.state.patients })
            return
        }

        const filteredData = data.filter((obj) => obj.patient?.name.toLowerCase().includes(searchText.trim()))
        this.setState({ patientList: filteredData || [] })
    }

    onPageNext = async () => {
        await this.setState({
            skip: parseInt(this.state.skip) + parseInt(this.state.limit),
        });
        this.getPatientSurgeryList();
    };
    onPagePrevious = async () => {
        let skipValue =
            this.state.skip > 0
                ? parseInt(this.state.skip) - parseInt(this.state.limit)
                : 0;
        await this.setState({ skip: skipValue });
        this.getPatientSurgeryList();
    };

    //FOR SURGERY TYPE
    onSelectUser = async (data) => {
        console.log("ABCDE", data)
        await this.setState({
            selectedUser: data,
            showInput: true,
            search: data || "",

        })
        await this.filterData(data)
    }
    handleSearchUser = (event, data) => {
        const { name, value } = event.target.name
        this.setState({ [name]: event.target.value, [`${name}Error`]: '', showInput: false }, () => this.getPatientSurgeryList())
        console.log(event.target.value)
    }

    onSearchSidebar = (event) => {
        this.setState({ [event.target.id]: event.target.value })
        this.filterData(event.target.value)
    }

    filterData = (data) => {


        console.log(data, "Rohan")
        //    this.setState ({patients: this.state.clinicList})
        let dummydata = this.state.patients
        let filteredData = []
        if (!data.length) {
            console.log(data, "ABC")
            this.setState({ patientList: this.state.patients })
            //  return data.filter((value,index) =>data.indexOf(value)===index); 
        }
        if (this.setState.selectedStatus) {
            filteredData = dummydata.filter((obj) => obj.surgeryType === data || obj.status === this.state.selectedStatus)
        }
        else {
            filteredData = dummydata.filter((obj) => obj.surgeryType === data)
        }
        console.log(filteredData, "ABCDE")
        this.setState({ patientList: filteredData || [] })


    }



    //FOR SURVEY STATUS
    onSelectStatus = async (userData) => {
        console.log("ABCDE", userData)
        await this.setState({
            selectedStatus: userData,
            showInput: true,


        })
        await this.filterValue(userData)
    }
    handleSearchStatus = (event, data) => {
        const { name, value } = event.target.name
        this.setState({ [name]: event.target.value, [`${name}Error`]: '', showInput: false }, () => this.getPatientSurgeryList())
        console.log(event.target.value)
    }


    onSearchSide = (event) => {
        this.setState({ [event.target.id]: event.target.value })
        this.filterValue(event.target.value)
    }
    filterValue = (userData) => {
        console.log(userData, "Steven")


        //    this.setState ({patients: this.state.clinicList})
        let dummy = this.state.patients
        let filteredData = []
        if (!userData.length) {
            console.log(userData, "ABC")
            this.setState({ patientList: this.state.patients })
            //  return data.filter((value,index) =>data.indexOf(value)===index); 
        }

        if (this.setState.selectedType) {
            filteredData = dummy.filter((obj) => obj?.status === userData || obj.surgeryType === this.state.selectedType)
        }
        else {
            filteredData = dummy.filter((obj) => obj?.status === userData)
        }
        console.log(filteredData, "ABCDE")
        this.setState({ patientList: filteredData || [] })


    }

    // const filteredData = dummy.filter((obj) => obj.status ===v )
    //      console.log(filteredData, "ABCDE")
    //      this.setState({clinicList: filteredData || []})

    //  }






    ///FOR SURGERY CLEARENCE (YES AND NO)
    onSelect = async (data) => {
        console.log("ABCDE", data)
        await this.setState({
            selectedClinic: data,
            showInput: true,
            find: data || "",

        })
        await this.filterList(data)
    }
    handleSearchValue = (event, data) => {
        const { name, value } = event.target.name
        this.setState({ [name]: event.target.value, [`${name}Error`]: '', showInput: false }, () => this.getClinicList())
        console.log(event.target.value)
    }

    onSearchValue = (event) => {
        this.setState({ [event.target.id]: event.target.value })
        this.filterList(event.target.value)
    }

    filterList = (val) => {


        console.log(val, "Rohan")
        //    this.setState ({patients: this.state.clinicList})
        let dummydata = this.state.patients
        let filteredData = []
        if (!val.length) {
            console.log(val, "ABC")
            this.setState({ patientList: this.state.patients })
            //  return data.filter((value,index) =>data.indexOf(value)===index); 
        }
        if (this.setState.selectedClinic) {
            filteredData = dummydata.filter((obj) => obj.status === val || obj.surgeryType === this.state.selectedClinic)
        }
        else {
            filteredData = dummydata.filter((obj) => obj.status === val)
        }
        console.log(filteredData, "ABCDE")
        this.setState({ patientList: filteredData || [] })


    }

    render() {
        return (
            <div>
                <div>
                    <Header tabName="patients" patients={this.state.meetingTime} time={this.state.time} endTime={this.state.endTime} currentMeetingPatient={this.state.currentMeetingPatient} />
                </div>
                <Row>
                    <Column>
                        {this.state.isOpen ? <Sidebar state={this.state} handleSearchUser={this.handleSearchUser}
                            onSelectUser={this.onSelectUser} onSearchSidebar={this.onSearchSidebar} handleSearchStatus={this.handleSearchStatus}
                            onSelectStatus={this.onSelectStatus} onSearchSide={this.onSearchSide} onSelect={this.onSelect} onSearchValue={this.onSearchValue} handleSearchValue={this.handleSearchValue} /> : " "}
                    </Column>
                    <Column>
                        <PatientTable
                            state={this.state}
                            toggleImage={this.toggleImage}
                            scheduleSurgery={this.scheduleSurgery}
                            onSearch={this.onSearch}
                            onPageNext={this.onPageNext}
                            onPagePrevious={this.onPagePrevious}
                        />
                        {this.state.isSchedule ? (
                            <Schedule
                                scheduleSurgery={this.scheduleSurgery}
                                state={this.state}
                            />
                        ) : (
                            ""
                        )}
                    </Column>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { user: state.user }
};

export default connect(mapStateToProps, { dispatchAction })(AnaesthesiologistPatientList);

