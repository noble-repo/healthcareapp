import React from "react";
import BaseComponent from "../baseComponent";
import Sidebar from "./sidebar"
import {Column, Row} from "simple-flexbox";
import AnestheologistTable from "./table";
import Header from "../adminPortal/header";
import {Auth0RoleNameConstants, eventConstants} from "../../constants";
import Utility, {dispatchAction} from "../../utility";
import {ClinicService} from "../../services";
import {connect} from "react-redux";


const options = [
  
    "anaesthesiologist",
   
    
  ];
  const options2 = [
  
    "surgeon",
   
    
  ];
  
class Anestheologist extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true,
            clinicList: [],
            patients: [],
            skip: 0,
            limit: 10,
            showInput: false,
            search: '',
            selectedType: "",
            selectedStatus: "",
            options:options,
            options2:options2,
        };
    }

    componentDidMount() {
        this.getClinicList().catch(error => console.error("unable to get clinic-list", error))
    }

    getClinicList = async () => {
        let requestData = {
            clinicType: Auth0RoleNameConstants.ANAESTHESIOLOGIST,
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

    onCheckboxChange = () => {
        this.setState({checked: !this.state.checked});
    };

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
            selectedUser: data,
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
         filteredData = dummydata.filter((obj) => obj.clinicType ===data   || obj.name === this.state.selectedClinic)
     }
     else{  
         filteredData = dummydata.filter((obj) => obj.clinicType ===data   )
    }
             console.log(filteredData, "ABCDE")
             this.setState({clinicList: filteredData || []})

           
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

                 if (this.setState.selectedType)
                 {
                     filteredData = dummy.filter((obj) => obj.name ===userData   || obj.clinicType === this.state.selectedType)
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

         
         
    render() {
        return (
            <div>
                <div>
                    <Header tabName="anaesthesiologist"/>
                </div>
                <Row>
                    <Column>{this.state.isOpen ? <Sidebar rows={this.state.rows} state={this.state} handleSearchUser={this.handleSearchUser}
                                onSelectUser={this.onSelectUser} onSearchSidebar={this.onSearchSidebar}  handleSearchStatus={this.handleSearchStatus}
                                onSelectStatus={this.onSelectStatus} onSearchSide={this.onSearchSide}/>   : " "}
                    </Column>
                    <Column>
                        <AnestheologistTable state={this.state} toggleImage={this.toggleImage}
                                             onCheckboxChange={this.onCheckboxChange}
                                             onSearch={this.onSearch}
                                             onPageNext={this.onPageNext}
                                             onPagePrevious={this.onPagePrevious}/>
                    </Column>
                </Row>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {user: state.user}
};

export default connect(mapStateToProps, {dispatchAction})(Anestheologist);
