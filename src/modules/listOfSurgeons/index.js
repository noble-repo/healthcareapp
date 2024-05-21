import React from 'react'
import SurgeonList from './SurgeonList'
import BaseComponent from '../baseComponent'
import Header from '../adminPortal/header/header'
import Sidebar from './sidebar'
import {Column, Row} from "simple-flexbox";
import {Avatar} from "material-ui";
import {connect} from "react-redux";
import Utility, {dispatchAction} from "../../utility";
import {Auth0RoleNameConstants, eventConstants} from "../../constants";
import {ClinicService} from "../../services";

const options = [
  
    "ACCEPTED",
   
    
  ];
  const options2 = [
  
    "PENDING",
   
    
  ];
  const options3 = [
  
    "REJECTED",
   
    
  ];
  const options4 = [
  
    "N/A",
   
    
  ];

  const options5 = [
  
    "Gold",
   
    
  ];
  const options6 = [
  
    "Silver",
   
    
  ];


const rows = [
    {

        icon: <Avatar alt="Cindy Baker" src="download.jpg"/>,
        Name: "Dr Haris Shield",
        Clinic: "Wellness Clinic",
        Speciality: "Neurology",
        Plan: "Silver",
        Validity: "1-Sep-2021",
        Patients: "50",
        Clearance: "40",
        Status: "Active",

    },
    {
        icon: <Avatar alt="Cindy Baker" src="download.jpg"/>,
        Name: "Dr Alex Foster",
        Clinic: "ABC Clinic",
        Speciality: "Cardiology",
        Plan: "Gold",
        Validity: "25-Aug-2020",
        Patients: "89",
        Clearance: "62",
        Status: "Active",
    },
];


class SurgeonListComponents extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            colHeadings: [
                "",
                "Patient Name",
                "Surgery type",
                "Gender",
                "Age",
                "Surgeon",
                "Survey Status",
                "Surgery Date",
                "Surgery Clearance",
            ],
            rows: rows,
            filteredArray: rows,
            isOpen: true,
            clinicList: [],
            patients: [],
            skip: 0,
            limit: 10,
            showInput: false,
            search: '',
            status: [],
            options:options,
            options2:options2,
            options3:options3,
            options4:options4,
            options5:options5,
            options6:options6,
            selectedService: "",
            selectedStatus: "",

        };
    }


    componentDidMount() {
        this.getClinicList().catch(error => console.error("unable to get clinic-list", error))
    }

    getClinicList = async () => {
        let requestData = {
            clinicType: Auth0RoleNameConstants.SURGEON,
            limit: parseInt(this.state.limit),
            skip: parseInt(this.state.skip),
        }
        this.props.dispatchAction(eventConstants.SHOW_LOADER);
        let [error, clinicList] = await Utility.parseResponse(ClinicService.getClinicList(requestData));
        this.props.dispatchAction(eventConstants.HIDE_LOADER);
        if (error || clinicList.length < 1)
            return;
        console.log("clinicList===", clinicList)
        this.setState({clinicList, patients:clinicList})
    }
    toggleImage = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    onSearch = (event) => {
        this.setState({[event.target.id]: event.target.value})
        this.filterPatients(event.target.value)
    }

    filterPatients = (searchText) => {
   console.log(this.state.clinicList, "Hello")
//    this.setState ({patients: this.state.clinicList})
        let data = this.state.patients
       
        if (!searchText.length) {
            console.log(searchText, "ABC")
            this.setState({clinicList: this.state.patients})
return 
        }

        const filteredData = data.filter((obj) => obj.owner?.firstName.toLowerCase().includes(searchText.trim()))
        this.setState({clinicList: filteredData || []})
    }

    onPageNext = async () => {
        await this.setState({
            skip: parseInt(this.state.skip) + parseInt(this.state.limit),
        });
        this.getClinicList();
    };
    onPagePrevious = async () => {
        let skipValue =
            this.state.skip > 0
                ? parseInt(this.state.skip) - parseInt(this.state.limit)
                : 0;
        await this.setState({skip: skipValue});
        this.getClinicList();
    };
  
    onSelectUser = async (data) => {
        console.log("ABCDE", data)
        await this.setState({
            selectedStatus: data,
            showInput: true,
            search: data || "",
        
        })
        await this.filterData(data)
    }
    handleSearchUser = (event, data) => {
        const {name, value} = event.target.name
        this.setState({[name]: event.target.value, [`${name}Error`]: '', showInput: false}, () => this.getClinicList())
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
                 this.setState({clinicList: this.state.patients})
    //  return data.filter((value,index) =>data.indexOf(value)===index); 
             }
     if (this.setState.selectedClinic)
     {
         filteredData = dummydata.filter((obj) => obj.status ===data   || obj.name  === this.state.selectedClinic )
     }
     else{  
         filteredData = dummydata.filter((obj) => obj.status ===data  )
    }
             console.log(filteredData, "ABCDE")
             this.setState({clinicList: filteredData || []})

           
         }


         onSelectStatus = async (userData) => {
            console.log("ABCDE", userData)
            await this.setState({
                selectedClinic: userData,
                showInput: true,
              
            
            })
            await this.filterValue(userData)
        }
        handleSearchStatus = (event, data) => {
            const {name, value} = event.target.name
            this.setState({[name]: event.target.value, [`${name}Error`]: '', showInput: false}, () => this.getClinicList())
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
                     this.setState({clinicList: this.state.patients})
        //  return data.filter((value,index) =>data.indexOf(value)===index); 
                 }

                 if (this.setState.selectedStatus)
                 {
                     filteredData = dummy.filter((obj) => obj.name ===userData   || obj.status=== this.state.selectedStatus)
                 }
                 else{  
                     filteredData = dummy.filter((obj) => obj.name ===userData )
                }
                         console.log(filteredData, "ABCDE")
                         this.setState({clinicList: filteredData || []})
            
                       
                     }
         
            // const filteredData = dummy.filter((obj) => obj.status ===v )
            //      console.log(filteredData, "ABCDE")
            //      this.setState({clinicList: filteredData || []})
               
            //  }


            onSelect= async (data) => {
                console.log("ABCDE", data)
                await this.setState({
                    selectedUser: data,
                    showInput: true,
                    find: data || "",
                
                })
                await this.filterList(data)
            }
            handleSearchValue = (event, data) => {
                const {name, value} = event.target.name
                this.setState({[name]: event.target.value, [`${name}Error`]: '', showInput: false}, () => this.getClinicList())
                console.log(event.target.value)
            }
        
            onSearchValue = (event) => {
                this.setState({[event.target.id]: event.target.value})
                this.filterList(event.target.value)
            }
            
            filterList = (val) => {
        
        
                console.log(val, "Rohan")
             //    this.setState ({patients: this.state.clinicList})
                     let dummydata = this.state.patients
                    let filteredData = []
                     if (!val.length) {
                         console.log(val, "ABC")
                         this.setState({clinicList: this.state.patients})
            //  return data.filter((value,index) =>data.indexOf(value)===index); 
                     }
             if (this.setState.val)
             {
                 filteredData = dummydata.filter((obj) => obj.plan || 'N/A' === val || obj.status=== this.state.selectedUser )
             }
             else{  
                 filteredData = dummydata.filter((obj) => obj.plan || 'N/A' ===val )
            }
                     console.log(filteredData, "ABCDE")
                     this.setState({clinicList: filteredData || []})
        
                   
                 }
        
        
    
    render() {
        return (
            <div>
                <div>
                    <Header tabName="surgeons"/>
                </div>
                <div>
                </div>
                <Row>

                    <Column>{this.state.isOpen ? <Sidebar rows={this.state.rows} state={this.state}handleSearchUser={this.handleSearchUser}
                                onSelectUser={this.onSelectUser} onSearchSidebar={this.onSearchSidebar}  handleSearchStatus={this.handleSearchStatus}
                                onSelectStatus={this.onSelectStatus} onSearchSide={this.onSearchSide} onSelect={this.onSelect} onSearchValue={this.onSearchValue}  handleSearchValue={this.handleSearchValue}
                                  /> : " "}
                    </Column>
                    <Column>
                        <SurgeonList state={this.state} toggleImage={this.toggleImage}
                        onSearch={this.onSearch}
                        onPageNext={this.onPageNext}
                     onPagePrevious={this.onPagePrevious}/>
                    </Column>
                </Row>
            </div>


        )
    }

}

const mapStateToProps = (state) => {
    return {user: state.user}
};

export default connect(mapStateToProps, {dispatchAction})(SurgeonListComponents);