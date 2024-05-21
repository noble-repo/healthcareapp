import React from "react";
import BaseComponent from "../../../modules/baseComponent";
import Sidebar from "./sidebar";
import {Column, Row} from "simple-flexbox";
import PatientTable from "./patientsTable";
import Header from "../shared/header";
import CreatePatientDialog from "./createPatientDialog";
import Schedule from "./schedulepopup";
import {dispatchAction} from "../../../utility";
import {PatientService, UserService} from "../../../services";
import {Auth0RoleNameConstants, eventConstants, portalType} from "../../../constants";
import Utility from "../../../utility";
import {connect} from "react-redux";
import AddSurgeryDialog from "./addSurgeryDialog";
import { List } from "material-ui";
import {statusConstants} from "../../../constants";


const options = [
  
    "COMPLETED",
   
    
  ];
  const options2 = [
  
    "PENDING",
   
    
  ];

  const options3 = [
  
    "Yes"
   
    
  ];

  const options4 = [
  
    "No",
   
    
  ];


  
class patientsList extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true,
            open: false,
            edit: false,
            showInput: false,
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
            search: '',
            searchError: '',
            patientList: [],
            userList: [],
            selectedUser: "",
            patients: [],
            skip: 0,
            limit: 10,
            selectedClear: "",
            selectedUserName: "",
            selectedStatus: "",
            surgeryDate: "",
            selectedData: "",
            options:options,
            options2:options2,
            options3:options3,
            options4:options4,
            isFiltered: false,
            searchingUser:''
           

        };
    }

    componentDidMount() {
        this.getPatientSurgeryList().catch(error => console.error("unable to get patient-list", error))
    }

    getPatientSurgeryList = async () => {
        let {userDetails} = this.props?.user
        if (!userDetails || !userDetails.clinicId)
            return
        let requestData = {
            clinicId: userDetails.clinicId,
            type: portalType.SURGEON_PORTAL,
            limit: parseInt(this.state.limit),
            skip: parseInt(this.state.skip),
        }
        this.props.dispatchAction(eventConstants.SHOW_LOADER);
        let [error, patientList] = await Utility.parseResponse(PatientService.getSurgeryList(requestData));
        this.props.dispatchAction(eventConstants.HIDE_LOADER);
        if (error || patientList.length < 1)
            return;
        console.log("patientList===", patientList)
        this.setState({patientList, patients:patientList})
    }

    handleDialog = () => {
        this.setState({
            open: !this.state.open,

        });
    };
    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value, [`${name}Error`]: ''})
    }
    handleSearchUserForSurgery = (event, data) => {
        const {name, value} = event.target
        this.setState({[name]: value, [`${name}Error`]: '', showInput: false}, () => this.getSearchUserList())
    }
    onSelectUser = (data) => {
        this.setState({
            selectedUser: data,
            showInput: true,
            searchingUser: data?.name ? `${data?.name || ''}` : `${data?.firstName || ''} ${data?.lastName || ''}`
        })
    }

    getSearchUserList = async () => {
        let {userDetails} = this.props?.user
        if (!userDetails || !userDetails.clinicId || !this.state.searchingUser)
            return
        let requestData = {
            clinicId: userDetails.clinicId,
            role: Auth0RoleNameConstants.PATIENT,
            name: this.state.searchingUser
        }
        let [error, userList] = await Utility.parseResponse(UserService.searchUser(requestData));
        if (error || userList.length < 1)
            return this.setState({userList: []})
        this.setState({userList: userList})

    }


    validateRegisterValues = () => {
        let nameError = !this.state.name ? 'Please enter the  Name' : ''
        let emailError = !this.state.email ? 'Please enter the email address' : ''
        let phoneError = !this.state.phone ? 'Please enter the phone number' : ''

        let surgeryTypeError = !this.state.surgeryType ? 'Please enter the Surgery type' : ''
        this.setState({nameError, phoneError, emailError, surgeryTypeError})
        return !!(nameError || phoneError || emailError || surgeryTypeError)
    }


    createPatient = async () => {
        if (this.validateRegisterValues())
            return
        let {userDetails} = this.props?.user
        if (!userDetails || !userDetails.clinicId)
            return
        let requestData = {
            patient: {
                name: this.state.name,
                email: this.state.email,
                phone: this.state.phone
            },
            surgeryType: this.state.surgeryType,
            addedBy: {
                clinicId: userDetails.clinicId || '',
                userId: userDetails.userId || '',
                email: userDetails.email || '',
                userName: userDetails.name || '',
                role: userDetails.role || '',
                phone: userDetails.phone || '',
            }
        }
        this.createSurgery(requestData, true).catch(error => console.error('unable to create patient', error))
    }

    createSurgery = async (requestData, isForCreatePatientUser = false) => {
        if (!requestData || Object.keys(requestData).length < 1)
            return
        this.props.dispatchAction(eventConstants.SHOW_LOADER);
        let [error, addPatient] = await Utility.parseResponse(PatientService.createSurgery({
            ...requestData,
            isForCreatePatientUser
        }));
        this.props.dispatchAction(eventConstants.HIDE_LOADER);
        console.log("error===", error)
        if (error) {
            Utility.apiFailureToast(error || "unable to register.");
            return
        }
        let successMessage = 'Patient surgery has been added successfully.'
        if (isForCreatePatientUser) {
            successMessage = 'Patient has been added successfully.'
            this.handleDialog()
        } else this.editDialog()
        Utility.apiSuccessToast(successMessage);
        this.getPatientSurgeryList()
    }

    validateAddSurgeryForm = () => {
        let searchError = !this.state.searchingUser ? 'Please enter the Patient Name or H3A ID' : ''
        let surgeryTypeError = !this.state.surgeryType ? 'Please enter the Surgery type' : ''
        this.setState({searchError, surgeryTypeError})
        return !!(searchError || surgeryTypeError)
    }
    addSurgery = async () => {
        if (this.validateAddSurgeryForm())
            return
        if (!this.state.selectedUser || Object.keys(this.state.selectedUser).length < 1)
            return
        let {userDetails} = this.props?.user
        if (!userDetails || !userDetails.clinicId)
            return

        let requestData = {
            patient: {
                name: this.state.selectedUser?.name ? this.state.selectedUser?.name : `${this.state.selectedUser?.firstName || ''} ${this.state.selectedUser?.lastName || ''} `,
                userId: this.state.selectedUser?.userId || '',
                email: this.state.selectedUser?.email || '',
                phone: this.state.selectedUser?.phone || '',
                gender: this.state.selectedUser?.gender || '',
                dob: this.state.selectedUser?.dob || 0,
                picture: this.state.selectedUser?.picture || '',
                surveyId: this.state.selectedUser?.miscellaneous?.surveyId || '',
            },
            surgeryType: this.state.surgeryType,
            addedBy: {
                clinicId: userDetails.clinicId || '',
                userId: userDetails.userId || '',
                email: userDetails.email || '',
                userName: userDetails.name || '',
                role: userDetails.role || '',
                phone: userDetails.phone || '',
            }
        }
        this.createSurgery(requestData).catch(error => console.error('unable to create patient', error))

    }

    showInput = () => {
        this.setState({
            showInput: !this.state.showInput,
        });
    };
    editDialog = () => {
        this.setState({
            edit: !this.state.edit,
        });
    };
    toggleImage = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
        console.log("fun working");
    };
    scheduleSurgery = () => {
        this.setState({
            isSchedule: !this.state.isSchedule,

        });
        console.log("in schedule surgery");


    }

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
        this. getPatientSurgeryList();
    };
    onPagePrevious = async () => {
        let skipValue =
            this.state.skip > 0
                ? parseInt(this.state.skip) - parseInt(this.state.limit)
                : 0;
        await this.setState({skip: skipValue});
        this. getPatientSurgeryList();
    };


  
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
     if (this.state.selectedStatus) 
     {
         filteredData = dummydata.filter((obj) => obj.surgeryType ===data   || obj.status === this.state.selectedStatus || obj.surgeryDate === this.state.selectedStatus)
     }
     else{  
         filteredData = dummydata.filter((obj) => obj.surgeryType ===data)
    }
             console.log(filteredData, "ABCDE")
             this.setState({patientList: filteredData || []})

           
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
                     filteredData = dummy.filter((obj) => obj.status ===userData   || obj.surgeryType=== this.state.selectedUserName)
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


/// *********** FOR SURGERY DATE
          
            handleSearchValue = (event, data) => {
                const {name, value} = event.target.name
                this.setState({[name]: event.target.value, [`${name}Error`]: '', showInput: false}, () => this.getPatientSurgeryList())
                console.log(event.target.value)
            }
        
            onSearchValue = (event) => {
                this.setState({[event.target.id]: event.target.value})
                this.filterList(event.target.value)
            }
            
           
        
        
        ///FOR  SURGERY CLEARENCE
    

                     onSelectData= async (data,key,name) => {
                        console.log("ABCDE", data, name)
                        await this.setState({
                         [name]: data,
                            showInput: true,
                           
                        
                        })
                        await this.filterList(data,key)
                    }
                    handleSearchData = (event, data) => {
                        const {name, value} = event.target.name
                        this.setState({[name]: event.target.value, [`${name}Error`]: '', showInput: false}, () => this.getPatientSurgeryList())
                        console.log(event.target.value)
                    }
                
                    onSearchData = (event) => {
                        this.setState({[event.target.id]: event.target.value})
                        this.filterList(event.target.value)
                    }
                    
                    filterList = (selectedValue,key) => {
                
                
                        console.log(key, "Flame")
                        // console.log(list)
                     //    this.setState ({patients: this.state.clinicList})
                             let list = this.state.patients
                            console.log(list, "VVV", this.state.selectedData)
                             let filteredData = []
                               
                          let listname = list.filter(item => {    if  ( 
                            key==="surgeryClearence" ) {
                
                
                                if (selectedValue==="Yes") {
return  item.status === statusConstants.COMPLETED 

                }

                else {
                    return item.status !== statusConstants.COMPLETED 
                }

                            } 
                            
                            else  

                            {
                           console.log(item [key], selectedValue) 

                           return item [key] == selectedValue }})   
                            
                         ///

                        //  listname.length > 1 
                          this.setState({patientList: listname})
                                 
              
                         }
                

           


    render() {
        return (
            <div>
                <div>
                    <Header tabName="patients" patientList = {this.state.patientsList} />
                </div>
                <Row>
                    <Column>
                        {this.state.isOpen ? <Sidebar state={this.state} handleSearchUser={this.handleSearchUser}
                             onSearchSidebar={this.onSearchSidebar}  handleSearchStatus={this.handleSearchStatus}
                               onSearchSide={this.onSearchSide} onSelect={this.onSelect} onSearchValue={this.onSearchValue}  handleSearchValue={this.handleSearchValue} onSelectData={this.onSelectData} onSearchData={this.onSearchData}  handleSearchData={this.handleSearchData} /> : " "}
                    </Column>
                    <Column>
                        <PatientTable
                            state={this.state}
                            handleDialog={this.handleDialog}
                            toggleImage={this.toggleImage}
                            editDialog={this.editDialog}
                            scheduleSurgery={this.scheduleSurgery}
                            onSearch={this.onSearch}
                            onPageNext={this.onPageNext}
                            onPagePrevious={this.onPagePrevious}
                        />
                        {this.state.open ? (
                            <CreatePatientDialog
                                handleDialog={this.handleDialog}
                                handleChange={this.handleChange}
                                state={this.state}
                                createPatient={this.createPatient}
                            />
                        ) : (
                            ""
                        )}

                        {this.state.edit ? (
                            <AddSurgeryDialog
                                showInput={this.showInput}
                                editDialog={this.editDialog}
                                state={this.state}
                                addSurgery={this.addSurgery}
                                handleSearchUser={this.handleSearchUser}
                                handleSearchUserForSurgery={this.handleSearchUserForSurgery}
                                onSelectUser={this.onSelectUser}
                                handleChange={this.handleChange}
                            />
                        ) : (
                            ""
                        )}
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
    return {user: state.user}
};

export default connect(mapStateToProps, {dispatchAction})(patientsList);

