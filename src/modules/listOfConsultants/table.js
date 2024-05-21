import React from "react";
import { Row, Column } from "simple-flexbox";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from "material-ui";
import { grey } from "@material-ui/core/colors";
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const CalenderButton = styled.button`
width: 123px;
height: 40px;
margin: -50.5px 14px 38px 601px;
padding: 11px 10px 10px;
border-radius: 2px;
background-color: #00a0f0;
font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  border: none;

  '@media (max-width:1028px)': { 
    margin: 19.5px 14px 38px 255px;
},



`

const ExportButton = styled.button`
width: 116px;
  height: 40px;
  margin: -50.5px 27px 38px 14px;
  padding: 11px 34px 10px 35px;
  border-radius: 2px;
  border: solid 1px #00a0f0;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: normal;
  text-align: left;
  color: #00a0f0;
  background-color: #ffffff;

`


const InputBox =  styled.input`
width: 230px;
height: 40px;
margin: -51px 119px 37.5px 41px;
padding: 11px 12px 11px 16px;
border-radius: 2px;
border: solid 1px #bdbdbd;
background-color: #ffffff;
font-family: Roboto-Regular;
  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #b5b5b5;

`

const OpenImage = styled.img`
    width: 40px;
    height: 40px;
    margin-left: -18px;
    margin-top: -50px;
`

const CloseImage = styled.img`
    width: 40px;
    height: 40px;
    margin-left: 4px;
    margin-top: -51px;
    `

const MainHeading = styled.span`
width: 75px;
  height: 22px;
  margin: -43.5px 15px 46px 29px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: normal;
  text-align: left;
  color: #26292c;
  
  ['@media (max-width:1024px)']: { 
    margin: 23.5px 15px 46px 136px !important;
},
  `

  

const useStyles = makeStyles((theme)=> ({
    root: {
        display: "flex",
        justifyContent: "center",
        marginTop: "100px",
        marginRight: "193px",
        ['@media (max-width:1024px)']: { 
          marginRight: "283px",
      },
    },

    tableHeadingsResponsive: {
      fontFamily: 'Roboto',
      fontSize: '14px',
      fontWeight: '500',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: '1.21',
      letterSpacing: 'normal',
      textAlign: 'left',
      color: '#414141',
      paddingTop: "17px",
      borderLeft: "solid 1px #d4d4d4",
      borderTop: "solid 1px #d4d4d4",
      borderBottom: "solid 1px #d4d4d4",
    },

    tableroot: {
      display: "flex",
      justifyContent: "center",
      marginLeft: "54px",
      paddingRight: "120px",
      width: "100%",

      '@media (max-width:1028px)': { 
        display: "none!important",
    },
    },

    

    tableheadings: {
      width: '67px',
      height: '17px',
      margin: '38.5px 124px 13px 95px',
      fontFamily: 'Roboto',
      fontSize: '14px',
      fontWeight: '500',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: '1.21',
      letterSpacing: 'normal',
      textAlign: 'left',
      color: '#414141',
      paddingLeft: "103px",
    },

    tableIcon: {
      width: '46px',
      height: '19px',
      margin: '1px 145px 0 0',
      fontFamily: 'Roboto',
      fontSize: '16px',
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: '1.19',
      letterSpacing: 'normal',
      textAlign: 'left',
      color: '#181c1b',
      paddingTop: "2px",
      borderTop: "solid 1px #d4d4d4",
      borderBottom: "solid 1px #d4d4d4",
      borderLeft: "solid 1px #d4d4d4",
    },

    tablesecond: {
      marginTop:"24px",
      marginLeft: "10px",
      borderCollapse: "separate",
      borderSpacing: "0px 29px",

      '@media (max-width:1028px)': { 
        display: "none!important",
        borderSpacing: "0px 29px",
    },

    },

   
    paddingName: {
      width: '46px',
      height: '19px',
      margin: '1px 145px 0 0',
      fontFamily: 'Roboto',
      fontSize: '16px',
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: '1.19',
      letterSpacing: 'normal',
      textAlign: 'left',
      color: '#181c1b',
      paddingLeft: "103px",
      paddingTop: "2px",
      borderTop: "solid 1px #d4d4d4",
      borderBottom: "solid 1px #d4d4d4",
    },

    paddingAnesthesiologist: {
      width: '46px',
      height: '19px',
      margin: '1px 145px 0 0',
      fontFamily: 'Roboto',
      fontSize: '16px',
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: '1.19',
      letterSpacing: 'normal',
      textAlign: 'left',
      color: '#181c1b',
      paddingLeft: "69px",
      paddingTop: "2px",
      borderTop: "solid 1px #d4d4d4",
      borderBottom: "solid 1px #d4d4d4",
    },

    paddingVirtualMeeting: {
      width: '46px',
      height: '19px',
      margin: '1px 145px 0 0',
      fontFamily: 'Roboto',
      fontSize: '16px',
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: '1.19',
      letterSpacing: 'normal',
      textAlign: 'left',
      color: '#181c1b',
      paddingRight: "65px",
      paddingTop: "2px",
      borderTop: "solid 1px #d4d4d4",
      borderBottom: "solid 1px #d4d4d4",
    },

    paddingStatus:{
      width: '46px',
      height: '19px',
      margin: '1px 145px 0 0',
      fontFamily: 'Roboto',
      fontSize: '16px',
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: '1.19',
      letterSpacing: 'normal',
      textAlign: 'left',
      color: '#181c1b',
      paddingRight: "27px",
      paddingTop: "2px",
      borderTop: "solid 1px #d4d4d4",
      borderBottom: "solid 1px #d4d4d4",

    },

    paddingService: {
      width: '46px',
      height: '19px',
      margin: '1px 145px 0 0',
      fontFamily: 'Roboto',
      fontSize: '16px',
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: '1.19',
      letterSpacing: 'normal',
      textAlign: 'left',
      color: '#181c1b',
      paddingRight: "58px",
      paddingTop: "2px",
      borderTop: "solid 1px #d4d4d4",
      borderBottom: "solid 1px #d4d4d4",

    },

    paddingRating: {

      width: '46px',
      height: '19px',
      margin: '1px 145px 0 0',
      fontFamily: 'Roboto',
      fontSize: '16px',
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: '1.19',
      letterSpacing: 'normal',
      textAlign: 'left',
      color: '#181c1b',
      // paddingLeft: "65px",
      paddingTop: "2px",
      borderTop: "solid 1px #d4d4d4",
      borderBottom: "solid 1px #d4d4d4",
      borderRight: "solid 1px #d4d4d4"
    },


    tableRow: {
      
      // width: '1577px',
      width: '100%',
      height: '77px',
      margin: '13px 27px 14px 29px',
      padding: '29px 58px 28px 66px',
      borderRadius: '2px',
      boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.05)',
      border: 'solid 1px #d4d4d4 !important',
      backgroundColor: '#ffffff',

    },

    newTable: {
      marginLeft: "33px",
      borderSpacing: '1px 5px',
      borderCollapse: 'separate',

      
      '@media (min-width:1028px)': { 
        marginLeft: "33px",
        display: "none"
    },

    '@media (max-width:768px)': { 
      marginLeft: "30px",
  },
      
    },

    tableContentResponsive: {
      fontFamily: 'Roboto',
      fontSize: '16px',
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: '1.19',
      letterSpacing: 'normal',
      textAlign: 'left',
      color: '#181c1b',
      paddingLeft: "40px",
      paddingTop: "17px",
      borderRight: "solid 1px #d4d4d4",
      borderTop: "solid 1px #d4d4d4",
      borderBottom: "solid 1px #d4d4d4",
      '@media (max-width:1028px)': { 
        paddingRight: "368px"
    },
    '@media (max-width:768px)': { 
      paddingRight: "200px"
  },
    },

    mainHeading:{
      '@media (max-width:1028px)': { 
        marginLeft: "10px",
    },

    '@media (max-width:768px)': { 
      marginLeft: "50px",
  },
      
    },

    calendarButton:{
      '@media (max-width:1028px)': { 
        margin: '-50.5px 14px 38px 101px',
    },
      '@media (max-width:768px)': { 
        margin: '12.5px 14px 38px -303px',
    }
    },
    
    exportButton: {
      
      '@media (max-width:768px)': { 
        margin: '12.5px 27px 38px 14px'
    }
    },

    // Classes after SideBar is closed starts from here.

    root_closed: {
      display: "flex",
      justifyContent: "center",
      marginTop: "100px",
      marginRight: "193px",
      '@media (max-width:1024px)': { 
        marginRight: "283px",
    },
    },

    mainHeading_closed: {
      '@media (max-width:1028px)': { 
        marginLeft: "10px",
    },

    '@media (max-width:768px)': { 
      marginLeft: "50px",
    },
  },

    calendarButton_closed: {
       marginLeft: "752px",
      '@media (max-width:1028px)': { 
        margin: '-50.5px 14px 38px 101px',
    },
      
      '@media (max-width:768px)': { 
        margin: '12.5px 14px 38px -303px',
    },
  },

    exportButton_closed: {
        '@media (max-width:768px)': { 
          margin: '11.5px 27px 38px 13px',
      
    

    },

    },


    tableroot_closed: {
      display: "flex",
      justifyContent: "center",
      marginLeft: "-48px",
      
      width: "98%",

      '@media (max-width:1028px)': { 
        display: "none!important",
    },

    },

    tablesecond_closed: {
      marginTop:"24px",
      marginLeft: "50px",
      borderCollapse: "separate",
      borderSpacing: "0px 29px",
      width: "1434px",

      '@media (max-width:1028px)': { 
        display: "none!important",
        borderSpacing: "0px 29px",
    },

    },

    newTable_closed:  {
      marginLeft: "55px",
      borderSpacing: '1px 5px',
      borderCollapse: 'separate',

      
      '@media (min-width:1028px)': { 
        marginLeft: "90px",
        display: "none"
    },

    '@media (max-width:768px)': { 
      marginLeft: "30px",
  },

    },

    tableheadings_closed: {
      width: '67px',
      height: '17px',
      margin: '38.5px 124px 13px 95px',
      fontFamily: 'Roboto',
      fontSize: '14px',
      fontWeight: '500',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: '1.21',
      letterSpacing: 'normal',
      textAlign: 'left',
      color: '#414141',
      paddingLeft: "152px",
    },

    tableRow_closed: {
      width: '100%',
      height: '77px',
      margin: '13px 27px 14px 29px',
      padding: '29px 58px 28px 66px',
      borderRadius: '2px',
      boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.05)',
      border: 'solid 1px #d4d4d4 !important',
      backgroundColor: '#ffffff',
    },

    tableContentResponsive_closed: {
      fontFamily: 'Roboto',
      fontSize: '16px',
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: '1.19',
      letterSpacing: 'normal',
      textAlign: 'left',
      color: '#181c1b',
      paddingLeft: "40px",
      paddingRight: "500px",
      paddingTop: "17px",
      borderRight: "solid 1px #d4d4d4",
      borderTop: "solid 1px #d4d4d4",
      borderBottom: "solid 1px #d4d4d4",
    },
    '@media (max-width:768px)': { 
      paddingRight: "400px",
  },

    tableHeadingsResponsive_closed: {
      fontFamily: 'Roboto',
      fontSize: '14px',
      fontWeight: '500',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: '1.21',
      letterSpacing: 'normal',
      textAlign: 'left',
      color: '#414141',
      paddingTop: "17px",
      borderLeft: "solid 1px #d4d4d4",
      borderTop: "solid 1px #d4d4d4",
      borderBottom: "solid 1px #d4d4d4",

    },

    tablecontent_closed: {
      // width: '46px',
      height: '19px',
      margin: '1px 145px 0 0',
      fontFamily: 'Roboto',
      fontSize: '16px',
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: '1.19',
      letterSpacing: 'normal',
      textAlign: 'left',
      color: '#181c1b',
      paddingRight: "113px",
      paddingTop: "2px",
      borderTop: "solid 1px #d4d4d4",
      borderBottom: "solid 1px #d4d4d4",
    },
    




}))

export default function ConsultantList(props){
    const classes = useStyles()
    return(
      <div>
        {props.state.isOpen ? (
    <div className = {classes.root}>
        <Column>
        <Row>
        {props.state.isOpen ? (
            <OpenImage
              src="/images/toggle_icon.svg"
              class="Group-6"
              onClick={() => {
                props.toggleImage();
              }}
            ></OpenImage>
          ) : (
            <CloseImage
              className="closeimg"
              src="/images/toggle_icon.svg"
              onClick={() => {
                props.toggleImage();
              }}
            />
          )}
          <MainHeading className = {classes.mainHeading}>Consultations</MainHeading>
          
          <InputBox placeholder= "Search Consultation" />
          <img
                  style={{ marginTop: "-40px", marginLeft: "-146px" }}
                  src="/images/noun_Search_2331678.svg"
                  width="18px"
                  height="17px"
          />

          <CalenderButton className = {classes.calendarButton}>View&nbsp;Calender</CalenderButton>
          <ExportButton className = {classes.exportButton}>Export</ExportButton>
        </Row>


        <table className = {classes.tableroot}>
          <tr>
            <th className = {classes.tableheadings}>Surgeon&nbsp;Name</th>
            <th className = {classes.tableheadings}>Anesthesiologist</th>
            <th className = {classes.tableheadings}>Virtual&nbsp;Meeting</th>
            <th className = {classes.tableheadings}>Status</th>
            <th className = {classes.tableheadings}>Surgery&nbsp;Clearance</th>
            <th className = {classes.tableheadings}>Rating</th>
          </tr>
          </table>
          <table className = {classes.tablesecond}>
          {props.state.filteredArray.map((row) => (
          <tr className = {classes.tableRow}>
            <td className = {classes.tableIcon}>{row.icon}</td>
            <td className = {classes.paddingName}>{row.Name}</td>
            <td className = {classes.paddingAnesthesiologist}>{row.Anesthesiologist}</td>
            <td className = {classes.paddingVirtualMeeting}>{row.VirtualMeeting}</td>
            <td className = {classes.paddingStatus}>{row.Status}</td>
            <td className = {classes.paddingService}>{row.SurgeryClearance}</td>
            <td className = {classes.paddingRating}>{row.Rating}</td>
          </tr>
          ))}
          </table>


          {props.state.filteredArray.map((row) => (
          <table className = {classes.newTable}>
            <tr>
              <tr>

    
  
  <tr >
    <th className = {classes.tableHeadingsResponsive}></th>
    <td className = {classes.tableContentResponsive}>{row.icon}</td>
  </tr>
          
  <tr >
    <th className = {classes.tableHeadingsResponsive}>Surgeon&nbsp;Name</th>
    <td className = {classes.tableContentResponsive}>{row.Name}</td>
  </tr>
  
  <tr >
    <th className = {classes.tableHeadingsResponsive}>Anesthesiologist</th>
    <td className = {classes.tableContentResponsive}>{row.Anesthesiologist}</td>
  </tr>
  <tr >
    <th className = {classes.tableHeadingsResponsive}>Virtual&nbsp;Meeting</th>
    <td className = {classes.tableContentResponsive}>{row.VirtualMeeting}</td>
  </tr>
  <tr >
    <th className = {classes.tableHeadingsResponsive}>Status</th>
    <td className = {classes.tableContentResponsive}>{row.Status}</td>
  </tr>
  <tr >
    <th className = {classes.tableHeadingsResponsive}>Surgery&nbsp;Clearance</th>
    <td className = {classes.tableContentResponsive}>{row.SurgeryClearance}</td>
  </tr>
  <tr >
    <th className = {classes.tableHeadingsResponsive}>Rating</th>
    <td className = {classes.tableContentResponsive}>{row.Rating}</td>
  </tr>

  </tr>
  </tr>
  
</table>
))}
        
        </Column>
    </div>
    ) : (
      <div className = {classes.root_closed}>
        <Column>
        <Row>
        {props.state.isOpen ? (
            <OpenImage
              src="/images/toggle_icon.svg"
              class="Group-6"
              onClick={() => {
                props.toggleImage();
              }}
            ></OpenImage>
          ) : (
            <CloseImage
              className="closeimg"
              src="/images/toggle_icon.svg"
              onClick={() => {
                props.toggleImage();
              }}
            />
          )}
          <MainHeading className = {classes.mainHeading_closed}>Consultations</MainHeading>
          
          <InputBox placeholder= "Search Consultation" />
          <img
                  style={{ marginTop: "-40px", marginLeft: "-146px" }}
                  src="/images/noun_Search_2331678.svg"
                  width="18px"
                  height="17px"
          />

          <CalenderButton className = {classes.calendarButton_closed}>View&nbsp;Calender</CalenderButton>
          <ExportButton className = {classes.exportButton_closed}>Export</ExportButton>
        </Row>


        <table className = {classes.tableroot_closed}>
          <tr>
            <th className = {classes.tableheadings_closed}>Surgeon&nbsp;Name</th>
            <th className = {classes.tableheadings_closed}>Anesthesiologist</th>
            <th className = {classes.tableheadings_closed}>Virtual&nbsp;Meeting</th>
            <th className = {classes.tableheadings_closed}>Status</th>
            <th className = {classes.tableheadings_closed}>Surgery&nbsp;Clearance</th>
            <th className = {classes.tableheadings_closed}>Rating</th>
          </tr>
          </table>
          <table className = {classes.tablesecond_closed}>
          {props.state.filteredArray.map((row) => (
          <tr className = {classes.tableRow_closed}>
            <td className = {classes.tableIcon}>{row.icon}</td>
            <td className = {classes.tablecontent_closed}>{row.Name}</td>
            <td className = {classes.tablecontent_closed}>{row.Anesthesiologist}</td>
            <td className = {classes.tablecontent_closed}>{row.VirtualMeeting}</td>
            <td className = {classes.tablecontent_closed}>{row.Status}</td>
            <td className = {classes.tablecontent_closed}>{row.SurgeryClearance}</td>
            <td style = {{borderRight: "solid 1px #d4d4d4"}} className = {classes.tablecontent_closed}>{row.Rating}</td>
          </tr>
          ))}
          </table>


          {props.state.filteredArray.map((row) => (
          <table className = {classes.newTable_closed}>
            <tr>
              <tr>

    
  
  <tr >
    <th className = {classes.tableHeadingsResponsive_closed}></th>
    <td className = {classes.tableContentResponsive_closed}>{row.icon}</td>
  </tr>
          
  <tr >
    <th className = {classes.tableHeadingsResponsive_closed}>Surgeon&nbsp;Name</th>
    <td className = {classes.tableContentResponsive_closed}>{row.Name}</td>
  </tr>
  
  <tr >
    <th className = {classes.tableHeadingsResponsive_closed}>Anesthesiologist</th>
    <td className = {classes.tableContentResponsive_closed}>{row.Anesthesiologist}</td>
  </tr>
  <tr >
    <th className = {classes.tableHeadingsResponsive_closed}>Virtual&nbsp;Meeting</th>
    <td className = {classes.tableContentResponsive_closed}>{row.VirtualMeeting}</td>
  </tr>
  <tr >
    <th className = {classes.tableHeadingsResponsive_closed}>Status</th>
    <td className = {classes.tableContentResponsive_closed}>{row.Status}</td>
  </tr>
  <tr >
    <th className = {classes.tableHeadingsResponsive_closed}>Surgery&nbsp;Clearance</th>
    <td className = {classes.tableContentResponsive_closed}>{row.SurgeryClearance}</td>
  </tr>
  <tr >
    <th className = {classes.tableHeadingsResponsive_closed}>Rating</th>
    <td className = {classes.tableContentResponsive_closed}>{row.Rating}</td>
  </tr>

  </tr>
  </tr>
  
</table>
))}
        
        </Column>
    </div>
    )}
    </div>

    )
}