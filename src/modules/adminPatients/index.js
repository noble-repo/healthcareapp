import React, {Component} from "react";
import PatientList from "./patientList";
import Sidebar from "./sidebar";
import {Column, Row} from "simple-flexbox";
import Header from "../adminPortal/header";
import {eventConstants, portalType} from "../../constants";
import Utility, {dispatchAction} from "../../utility";
import {PatientService} from "../../services";
import {connect} from "react-redux";

const options = [
  
    "COMPLETED",
   
    
  ];
  const options2 = [
  
    "PENDING",
   
    
  ];
  
class AdminPatient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true,
            patientList: [],
            patients: [],
            skip: 0,
            limit: 10,
            selectedUser: "",
            selectedUserName: "",
            selectedStatus: "",
            showInput: false,
            search: '',
            uniqueModels: [],
            options:options,
            options2:options2,
            checked:false,
            checked2:false
        };
    }

    componentDidMount() {
        this.getPatientSurgeryList().catch(error => console.error("unable to get patient-list", error))
    }

    getPatientSurgeryList = async () => {
        let requestData = {
            type: portalType.ADMIN_PORTAL,
            limit: parseInt(this.state.limit),
            skip: parseInt(this.state.skip),
        }
        this.props.dispatchAction(eventConstants.SHOW_LOADER);
        let [error, patientList] = await Utility.parseResponse(PatientService.getSurgeryList(requestData));
        this.props.dispatchAction(eventConstants.HIDE_LOADER);
        if (error || patientList.length < 1)
            return;
        this.setState({patientList, patients:patientList})
    
        
    }
    toggleImage = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
        console.log("fun working");
    };
    onCheckboxChange = () => {
        this.setState({checked: !this.state.checked});
    };

    onCheckboxChange2 = () => {
        this.setState({checked2: !this.state.checked2});
    };

    onChangeEvent = (event) => {
        this.setState({[event.target.id]: event.target.value});
    };
    onSearch = (event) => {
        this.setState({[event.target.id]: event.target.value})
        this.filterPatients(event.target.value)
    }

    filterPatients = (searchText) => {
   console.log(this.state.patientList, "Hello")
//    this.setState ({patients: this.state.clinicList})
        let data = this.state.patients
       
        if (!searchText.length) {
            console.log(searchText, "ABC")
            this.setState({patientList: this.state.patients})
return 
        }

        const filteredData = data.filter((obj) => obj.patient?.name.toLowerCase().includes(searchText.trim()))
        this.setState({patientList: filteredData || []})
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
        await this.setState({skip: skipValue});
        this.getPatientSurgeryList();
    };

   
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
        const {name, value} = event.target.name
        this.setState({[name]: event.target.value, [`${name}Error`]: '', showInput: false}, () => this.getPatientSurgeryList())
        console.log(event.target.value)
    }

    onSearchSidebar = (event) => {
        this.setState({[event.target.id]: event.target.value})
        this.filterData(event.target.value)
    }
    
    filterData = (data) => {


        console.log(data, "Rohan")
     //    this.setState ({patients: this.state.clinicList})
             let dummydata = this.state.patients
            let filteredData = []
             if (!data.length) {
                 console.log(data, "ABC")
                 this.setState({patientList: this.state.patients})
    //  return data.filter((value,index) =>data.indexOf(value)===index); 
             }
     if (this.setState.selectedStatus)
     {
         filteredData = dummydata.filter((obj) => obj.addedBy.userName ===data   || obj.status === this.state.selectedStatus)
     }
     else{  
         filteredData = dummydata.filter((obj) => obj.addedBy.userName ===data   )
    }
             console.log(filteredData, "ABCDE")
             this.setState({patientList: filteredData || []})

           
         }


         onSelectStatus = async (userData) => {
            console.log("ABCDE", userData)
            await this.setState({
                selectedStatus: userData,
                showInput: true,
              
            
            })
            await this.filterValue(userData)
        }
        handleSearchStatus = (event, data) => {
            const {name, value} = event.target.name
            this.setState({[name]: event.target.value, [`${name}Error`]: '', showInput: false}, () => this.getPatientSurgeryList())
            console.log(event.target.value)
        }


        onSearchSide = (event) => {
            this.setState({[event.target.id]: event.target.value})
            this.filterValue(event.target.value)
        }
        filterValue = (userData) => {
            console.log(userData, "Steven")


         //    this.setState ({patients: this.state.clinicList})
                 let dummy = this.state.patients
                let filteredData = []
                 if (!userData.length) {
                     console.log(userData, "ABC")
                     this.setState({patientList: this.state.patients})
        //  return data.filter((value,index) =>data.indexOf(value)===index); 
                 }

                 if (this.setState.selectedUserName)
                 {
                     filteredData = dummy.filter((obj) => obj.status ===userData   || obj.addedBy.userName === this.state.selectedUserName)
                 }
                 else{  
                     filteredData = dummy.filter((obj) => obj.status ===userData )
                }
                         console.log(filteredData, "ABCDE")
                         this.setState({patientList: filteredData || []})
            
                       
                     }
         
            // const filteredData = dummy.filter((obj) => obj.status ===v )
            //      console.log(filteredData, "ABCDE")
            //      this.setState({clinicList: filteredData || []})
               
            //  }

         
         
     
    render() {
        
        return (
            <div>
                <div>
                    <Header tabName="patients"/>
                </div>
                <Row>
                    <Column>
                        {this.state.isOpen ? <Sidebar state={this.state}  handleSearchUser={this.handleSearchUser}
                                onSelectUser={this.onSelectUser} onSearchSidebar={this.onSearchSidebar}  handleSearchStatus={this.handleSearchStatus}
                                onSelectStatus={this.onSelectStatus} onSearchSide={this.onSearchSide} onCheckboxChange={this.onCheckboxChange} onCheckboxChange2={this.onCheckboxChange2} /> : " "}
                    </Column>
                    <PatientList state={this.state} toggleImage={this.toggleImage}
                                 onCheckboxChange={this.onCheckboxChange}
                                 onSearch={this.onSearch} 
                                 onPageNext={this.onPageNext}
                                 onPagePrevious={this.onPagePrevious}/>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {user: state.user}
};

export default connect(mapStateToProps, {dispatchAction})(AdminPatient);