import React from "react";
import { Column } from "simple-flexbox";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";




export default function Sidebar(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },

    sidebar: {
      width: "276px",
      backgroundColor: "#e8f5fe",
    height: '976.5px',
    margin: '0.5px 40px 0 0',
    padding: '23px 23px 667.5px'
    },


    fontfixing: {
        width: '46px',
        height: '21px',
        margin: '33px 184px 33px 0',
        fontFamily: 'Roboto',
        fontSize: '18px',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.22',
        letterSpacing: 'normal',
        textAlign: 'left',
        color: '#26292c',
    },
    fontfixingchild: {
        fontFamily: 'Roboto',
        fontSize: '15px',
        fontWeight: '500',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.2',
        letterSpacing: 'normal',
        textAlign: 'left',
        color: '#414141',
    },
    marginTop15: {
      marginTop: "20px",
    },
    selectFixing: {
        fontFamily: 'Roboto',
        fontSize: '16px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.19',
        letterSpacing: 'normal',
        textAlign: 'left',
        color: '#414141',
        paddingTop: '7px',
        borderColor: '#ffffff'
    //   "&:focus":{
    //     borderColor:"#bdbdbd",
    //     outline:"none",
    // borderRadius: "5px",
    // transition: "all 0.3s",
    //     }
    },
  }));
  console.log(props, "sidebar props");
  const classes = useStyles();
  return (
    <div className={classes.sidebar}>
      <Column>
        {" "}
        <span className={classes.fontfixing}>Filter</span>
      </Column>


      <Column className={classes.marginTop15}>
        <span className={classes.fontfixingchild}>Plan</span>
        <select class="ui dropdown" className={classes.selectFixing} value={props.state.selectedUser}  
                                   onChange={(event) => props.onSelect(event.target.value)}>
                                     <option  value="" disabled selected hidden> Show all  </option>
        {props.state.options4 && props.state.options4.length > 0 &&

props.state.options4.map((data, index) => ( <option>  {props.state.options4}  </option>))}
{props.state.options5 && props.state.options5.length > 0 &&

props.state.options5.map((data, index) => ( <option>  {props.state.options5}  </option>))}

{props.state.options6 && props.state.options6.length > 0 &&

props.state.options6.map((data, index) => ( <option>  {props.state.options6}  </option>))}

        </select>
      </Column>


      <Column className={classes.marginTop15}>
        <span className={classes.fontfixingchild} >Status</span>
        <select class="ui dropdown" className={classes.selectFixing} value={props.state.search}  
                                   onChange={(event) => props.onSelectUser(event.target.value)} >
           <option  value="" disabled selected hidden> Show all  </option>
           {/* {props.state.patients && props.state.patients.length > 0 &&

props.state.patients.map((data, index) => ( <option> {data.clinicType || ""}  </option>))}
          */}

{props.state.patients && props.state.patients.length > 0 &&

props.state.options.map((data, index) => ( <option > {props.state.options} </option>
))}

{props.state.options2 && props.state.options2.length > 0 &&

props.state.options2.map((data, index) => ( <option > {props.state.options2} </option>
))}
{props.state.options3 && props.state.options3.length > 0 &&

props.state.options3.map((data, index) => ( <option > {props.state.options3} </option>
))}
       
        </select>
      </Column>


      <Column className={classes.marginTop15}>
        <span className={classes.fontfixingchild}>Clinics</span>
        <select class="ui dropdown " className={classes.selectFixing} value={props.state.selectedClinic}  
                                   onChange={(event) => props.onSelectStatus(event.target.value)} >
          {/* <option value="">Show all</option> */}
          <option  value="" disabled selected hidden> Show all  </option>
          {props.state.patients && props.state.patients.length > 0 &&

props.state.patients.map((data, index) => ( <option>  {data.name || ''} </option>))}
        </select>
      </Column>
    </div>
  );
}
