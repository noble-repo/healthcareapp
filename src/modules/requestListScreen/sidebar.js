import React from "react";
import { Column } from "simple-flexbox";
import { makeStyles } from "@material-ui/core/styles";
import styled from 'styled-components'
import Autocomplete from '@material-ui/lab/Autocomplete';
const MainHeading = styled.span`
  width: 46px;
  height: 22px;
  margin: 0 184px 32px 0;
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: normal;
  text-align: left;
  color: #26292c;
`;

const Input = styled.input`
height: 50px;
width: 234px;
border : 1px  solid lightgrey;
padding-left: 10px;
outline: none;
border-radius: 5px;
font-size:17px;
transition: all 0.3s;
font-size: 12px;
margin-left:2px;
color:grey;
`

const useStyles = makeStyles((theme)=> ({
    tableRoot: {
        display: "flex",
        justifyContent: "center",
        width: '276px',
        height: '976.5px',
        margin: '83.5px 40px 0 0',
        padding: '23px 23px 753.5px',
        backgroundColor: '#e8f5fe',
    },

  dropdownHeading: {
    width: "50px",
    height: "18px",
    margin: "32px 180px 2px 0",
    fontFamily: "Roboto",
    fontSize: "15px",
    fontWeight: "500",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.2",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#414141",
  },

  dropdownOptions: {
    width: "230px",
    height: "40px",
    margin: "1px 0 0",
    padding: "11px 18px 10px 10px",
    borderRadius: "2px",
    backgroundColor: "#ffffff",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.19",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#414141",
    border: "none",
  },
}));

// export default function Sidebar() {
//   const classes = useStyles();
//   return (
//     <div className={classes.tableRoot}>
//       <Column>
//         <MainHeading>Filter</MainHeading>
//         <span className={classes.dropdownHeading}>Service</span>
//         <select class="ui dropdown" className={classes.dropdownOptions}>
//           <option value="">Show all</option>
//         </select>


export default function Sidebar(props){
    const classes = useStyles()


    return(
        <div className = {classes.tableRoot}>
            <Column>
            <MainHeading>Filter</MainHeading>
            <span className = {classes.dropdownHeading}>Service</span>
            <select class="ui dropdown" className={classes.selectFixing}  value={props.state.search}  
                                   onChange={(event) => props.onSelectUser(event.target.value)}      >
                                       
                                     <option  value="" disabled selected hidden> Show all  </option>
           {/* {props.state.patients && props.state.patients.length > 0 &&

props.state.patients.map((data, index) => ( <option> {data.clinicType || ""}  </option>))}
          */}

{props.state.patients && props.state.patients.length > 0 &&

props.state.options3.map((data, index) => ( <option > {props.state.options3} </option>
))}

{props.state.options4 && props.state.options4.length > 0 &&

props.state.options4.map((data, index) => ( <option > {props.state.options4} </option>
))}
       
        </select>

            <span className = {classes.dropdownHeading}>Status</span>
            

            <select class="ui dropdown" className={classes.selectFixing}  value={props.state.selectedStatus}  
                                   onChange={(event) => props.onSelectStatus(event.target.value)}      >
                                       
                                       <option  value="" disabled selected hidden >  Show all</option>
           {props.state.options && props.state.options.length > 0 &&

props.state.options.map((data, index) => ( <option > {props.state.options} </option>
))}

{props.state.options2 && props.state.options2.length > 0 &&

props.state.options2.map((data, index) => ( <option > {props.state.options2} </option>
))}
         
        </select>
           
            </Column>
        </div>

    )
}
