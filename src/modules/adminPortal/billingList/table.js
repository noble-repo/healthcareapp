import React from "react";
import { Row, Column } from "simple-flexbox";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from "material-ui";
import { grey } from "@material-ui/core/colors";
import { history } from "../../../managers/history";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {  CSVLink } from "react-csv";
const SearchDataSpan = styled.span`
  width: 230px;
  height: 37px;
  border-radius: 2px;
  border: solid 1px #bdbdbd;
  background-color: white;
  padding: 6px 9px 7px 9px;
  margin-right: 10px;
  border: 1px solid #ccc;
  margin-left: -57px;
  margin-top: 50px;
  font-family:Roboto!important;
`;
const HeadRowLabelHeading = styled.label`
  font-family: Roboto;
  font-size: 18px;
  font-weight: Bolder;
  color: rgba(0, 0, 0, 0.78);
`;
const HeadRowLabelContentSearch = styled.input`
  margin-left: 5px;
  max-width: 180px;
  width: 100%;
  font-family: Roboto;
  padding-top: -15px;
  padding-bottom: 2px;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.3);
  background-color: white;
  border: none;
  outline: none;
  &:focus {
    outline: none;
    border: none;
    color: black;
  }
`;
const Head = styled.div`
  margin-top: 60px;
  margin-left: 15px;
  font-family: Roboto!important;
  font-stretch: normal;
  font-style: normal;
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: normal;
  color: #26292c;
  width: 135px;
  height: 22px;
  padding-left:12px;
`;
const OpenImage = styled.img`
  width: 40px;
  height: 40px;
  margin-left: -18px;
  margin-top: 50px;

`;
const CloseImage = styled.img`
  width: 40px;
  height: 40px;
  margin-left: -18px;
  margin-left: 2px;
  margin-top: 50px;
`;
const Button = styled.button`
width: 116px;
height: 40px;

margin-top: 51.5px;
border-radius: 2px;
  border: solid 1px #00a0f0;
  background-color: #ffffff;
  font-size: 16px;
  color: #00a0f0;
  font-family: Roboto-Medium !important;
  font-weight: 500;
  &:focus {
    outline: blue;
    border: none;
    border: solid 1px #00a0f0;
    color: #00a0f0;
  }
  @media (max-width: 1028px) {

   
    display: none!important;
    }
`;
const Button1 = styled.button`
width: 128px;
height: 40px;

margin-top: -11.5px;
border-radius: 2px;
  border: solid 1px #00a0f0;
  background-color: #ffffff;
  font-size: 16px;
  color: #00a0f0;
  font-family: Roboto-Medium !important;
  font-weight: 500;
  &:focus {
    outline: blue;
    border: none;
    border: solid 1px #00a0f0;
    color: #00a0f0;
  }
  @media (min-width: 1028px) {

   
    display: none!important;
    }
  `;
const MainButton = styled.button`
width: 123px;
height: 40px;
margin-top: 51.5px;
margin-right:11px;
  border-radius: 2px;
  border: 1px solid white;
  background-color: #00a0f0;
  font-size: 16px!important;
  font-style: Roboto!important;
  color: #ffffff;
  
  font-weight: 500;
  &:focus {
    outline: none;
    border: none;
    /* color: black; */
    color: white;
  }
  @media (max-width: 1028px) {

   
    display: none!important;
    }
`;
const MainButton1 = styled.button`
width: 123px;
height: 40px;
margin-top: -11.5px;
margin-right:109px;
  border-radius: 2px;
  border: 1px solid white;
  background-color: #00a0f0;
  font-size: 16px!important;
  margin-left:38px;
  font-style: Roboto!important;
  color: #ffffff;
  
  font-weight: 500;
  &:focus {
    outline: none;
    border: none;
    /* color: black; */
    color: white;
  }
  @media (min-width: 1028px) {

   
    display: none!important;
    }
  `;
const useStyles = makeStyles((theme) => ({
  tabletest: {
    borderCollapse: "separate",
    borderSpacing: "0 15px",
    marginLeft: "30px",
    marginRight: " 18px",
    paddingBottom: "10px",
    marginTop: "18px",

    ['@media (max-width:1028px)']: { 
      display: "none!important",
    }
  },
  
  root: {
      width: "130px",
    textAlign: "left",
    borderBottom: "1px solid #d4d4d4",
    borderTop: "1px solid #d4d4d4",
    padding: "0px",
    fontSize: "14px",
    fontWeight: "normal",
    fontFamily: "roboto",
    color: "#181c1b",
  
  },
  tabletest1: {

    marginLeft: "103px!important",
    borderRight: "1px solid #d4d4d4",
    borderLeft: "1px solid #d4d4d4",
   
    ['@media (min-width:1028px)']: { 
      borderCollapse: "seperate",
      borderSpacing: "0 15px",
      marginLeft: "30px!important",
      marginRight: " 18px",
      paddingBottom: "10px",
      borderRight: "1px solid #d4d4d4",
     display: "none!important",
    }
  },
  toggleactive: {
    width: "130px",
    textAlign: "left",
    
    padding: "0px",
    fontSize: "14px",
    fontWeight: "normal",
    fontFamily: "roboto",
    color: "#181c1b",
    
    "&:hover": {
      textDecoration: "none",
      color: "#181c1b",
     
    },
    // text-align: right;
    // color: #000000;
  },
  tabletest2: {

    marginLeft: "103px!important",
    borderRight: "1px solid #d4d4d4",
    borderLeft: "1px solid #d4d4d4",
    padding:"24px",
    ['@media (min-width:1028px)']: { 
      borderCollapse: "seperate",
      borderSpacing: "0 15px",
      marginLeft: "30px!important",
      marginRight: " 18px",
      paddingBottom: "10px",
      borderRight: "1px solid #d4d4d4",
     display: "none!important",
    }
  },
  tdPadding: {
    paddingLeft: "25px",
    width: "219px",
    textAlign: "left",
    borderBottom: "1px solid #d4d4d4",
    borderTop: "1px solid #d4d4d4",
    padding: "5px",

    fontSize: "14px",
    fontWeight: "normal",
    fontFamily: "roboto",
    color: "#181c1b",
  },
  tdIcon: {
    width: "130px",
    textAlign: "center",
    borderBottom: "1px solid #d4d4d4",
    borderTop: "1px solid #d4d4d4",
    paddingTop: "8px",
    paddingBottom: "5px",
    paddingLeft: "0px",
    paddingRight: "0px",
    fontSize: "12px",
    fontFamily: "roboto",
    borderLeft: "1px solid #d4d4d4",
  },
  td: {
    width: "130px",
    textAlign: "left",
    borderBottom: "1px solid #d4d4d4",
    borderTop: "1px solid #d4d4d4",
    padding: "0px",
    fontSize: "14px",
    fontWeight: "normal",
    fontFamily: "roboto",
    color: "#181c1b",
  },
  td5: {
    width: "130px",
    textAlign: "left",
    borderBottom: "1px solid #d4d4d4",
   
    padding: "9px",
    fontSize: "14px",
    fontWeight: "normal",
    fontFamily: "roboto",
    color: "#181c1b",
  },
  td5a: {
    width: "130px",
    textAlign: "left",
    borderBottom: "1px solid #d4d4d4",
   
    padding: "9px",
    fontSize: "14px",
    fontWeight: "normal",
    fontFamily: "roboto",
    color: "#181c1b",
  },
  td6: {
    width: "130px",
    textAlign: "left",
    
    borderTop: "1px solid #d4d4d4",
    padding: "13px",
    fontSize: "14px",
    fontWeight: "normal",
    fontFamily: "roboto",
    color: "#181c1b",

  
  },
  td1: {
    width: "130px",
    textAlign: "left",
    borderBottom: "1px solid #d4d4d4",
    borderTop: "1px solid #d4d4d4",
    padding: "6px",
    fontSize: "14px",
    fontWeight: "normal",
    fontFamily: "roboto",
    color: "#181c1b",
  },
  divfixing: {
    position: "absolute",
    right: "0",
  },
  divfixing1: {
    position: "absolute",
    center: "0",
  },
  td2: {
    width: "130px",
    textAlign: "left",
    borderBottom: "1px solid #d4d4d4",
    borderTop: "1px solid #d4d4d4",
    padding: "4px",
    fontSize: "14px",
    fontWeight: "normal",
    fontFamily: "roboto",
    color: "#181c1b",
  },
  td3: {
    width: "130px",
    textAlign: "left",
    borderBottom: "1px solid #d4d4d4",
    borderTop: "1px solid #d4d4d4",
    padding: "7px",
    fontSize: "14px",
    fontWeight: "normal",
    fontFamily: "roboto",
    color: "#181c1b",
  },
  tdpaddingLeft20: {
    width: "130px",
    textAlign: "left",
    borderBottom: "1px solid #d4d4d4",
    borderTop: "1px solid #d4d4d4",
    fontSize: "14px",
    fontWeight: "normal",
    fontFamily: "roboto",
    paddingLeft: "30px",
    color: "#181c1b",
  },
  paddingLeft20: {
    paddingLeft: "25px",
    fontSize: "14px",
    fontWeight: "500",
    fontFamily: "Roboto",
    paddingTop: "10px",
    color: "#414141",
  },
  paddingLeft30: {
    paddingLeft: "25px",
    fontSize: "14px",
    fontWeight: "500",
    fontFamily: "Roboto",
    paddingTop: "10px",
    color: "#414141",
  },
  txt: {
    fontFamily: "Roboto!important",
  },
  txt1: {
    fontFamily: "Roboto!important",
    fontSize: "16px",
    width: "47px",
    height: "19px",
  },
  tdColor: {
    color: grey,
    width: "130px",
    textAlign: "left",
    borderBottom: "1px solid #d4d4d4",
    borderTop: "1px solid #d4d4d4",
    padding: "0px",
    fontSize: "12px",
    fontFamily: "roboto",
  },
  avatar: {
    backgroundColor: "#43c43f !important",
    fontSize: "12px !important",
  },

  avatarNo: {
    backgroundColor: "#ff462c !important",
    fontSize: "12px !important",
  },
  tdAvatar: {
    paddingLeft: "20px",
    borderBottom: "1px solid #d4d4d4",
    borderTop: "1px solid #d4d4d4",
  },

  br: {
    borderRight: "1px solid #d4d4d4",
  },
  datebuttonfixing: {
    width: "75px",
    height: "24px",
    margin: "0px 0px 0px 0px",
    padding: "3px 7px 10px 10px",
    borderRadius: "2px",
    border: "solid 1px #00a0f0",
    backgroundColor: "#ffffff",
    fontSize: "11px",
    color: "#00a0f0",
  },
  font: {
    fontSize: "14px",
    fontWeight: "500",
    fontFamily: "Roboto",
    paddingTop: "10px",
    paddingRight: "40px",
    color: "#414141",
  },
  fonts: {
    fontSize: "14px",
    fontWeight: "500",
    fontFamily: "Roboto",
    paddingTop: "10px",
    paddingRight: "40px",
    color: "#414141",
    width: "85px",
    height: "17px",
  },
  image:{
    height: "33px",
marginLeft: "200px;",
['@media (min-width:1028px)']: { 

  display: "none!important",
}
  },
  arrow: {
    padding: 0,
    marginLeft: 870,
    marginBottom: -90,
  },
  arrowNext: {
    padding: 0,
    marginLeft: 1025,
    marginBottom: -90,
  },
}));
export default function BillingTable(props) {
  const classes = useStyles();
  const array=props.state.filteredArray.map(row=>({
    Patient_Name:row.PatientName,
    Anesthesiologist:row.Anesthesiologist,
    VirtualMeeting:row.VirtualMeeting,
    Amount:row.Amount,
    Billingtype:row.Billingtype,
    Billingstatus:row.Billingstatus

  }))
  console.log(props, "................");
  return (
    <div>
      <Row className="justify-content-between m-t-15">
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
          <Column>
            <Head>Billing</Head>
          </Column>
          <Column>
            <SearchDataSpan>
              <HeadRowLabelContentSearch placeholder="Search Billing" />
              <HeadRowLabelHeading>
                <img
                  style={{ marginTop: "-55px", marginLeft: "190px" }}
                  src="/images/noun_Search_2331678.svg"
                  width="18px"
                  height="17px"
                />
              </HeadRowLabelHeading>
            </SearchDataSpan>
          </Column>
          <Row className={classes.divfixing}>
          {/* <button>Add Surgery</button> */}
          <div>
            <MainButton onClick={props.editDialog} > <span className={classes.txt}>View Calendar</span></MainButton>
          </div>

         <CSVLink data={array} filename={'billing-list.csv'} separator={','}>
          <Button onClick={props.handleDialog}><span className={classes.txt1}>Export</span></Button>
          </CSVLink>
        </Row>
        </Row>
        
      </Row>
      {/* {props.state.isOpen ? (
        <img src="images/arrowIcon.svg" className={classes.arrow}></img>
      ) : (
        <img src="images/arrowIcon.svg" className={classes.arrowNext}></img>
      )} */}

      <table className={classes.tabletest}>
        <tr>
          <th></th>
          <th className={classes.font}> Patient&nbsp;Name</th>
          <th className={classes.font}> &nbsp;Anaesthesiologist</th>
          <th className={classes.paddingLeft30}>Virtual&nbsp;Meeting</th>
          <th className={classes.paddingLeft20}>&nbsp; Amount</th>
          <th className={classes.font}> Billing Type</th>
          <th className={classes.font}>Billing&nbsp;Status</th>
         

          <th></th>
        </tr>
        {props.state.filteredArray.map((row) => (
          // <tr onClick={() => history.push("/patient-details")}>
          <tr onClick={() => history.push("/billing-details")}>
            <td className={classes.tdIcon}>
              <Avatar>{row.icon}</Avatar>
            </td>
            <td className={classes.td}><a href="#" className={classes.toggleactive}>{row.PatientName}</a></td>
            <td className={classes.td}><a href="#" className={classes.toggleactive}>{row.Anesthesiologist}</a></td>
            <td className={classes.tdPadding}><a href="#" className={classes.toggleactive}>{row.VirtualMeeting}</a></td>
            <td className={classes.tdpaddingLeft20}><a href="#" className={classes.toggleactive}>{row.Amount}</a></td>
            <td className={classes.td1}><a href="#" className={classes.toggleactive}>{row.Billingtype}</a></td>
            <td className={classes.td3}><a href="#" className={classes.toggleactive}>{row.Billingstatus}</a></td>
            
             
           
            <td className={classes.br}></td>
          </tr>
        ))}
      </table>
      <pre>&emsp;&emsp;&emsp;</pre>

      <Row className={classes.divfixing1}>
          {/* <button>Add Surgery</button> */}
          <div>
            <MainButton1 onClick={props.editDialog} > <span className={classes.txt}>View Calendar</span></MainButton1>
          </div>

          <Button1 onClick={props.handleDialog}><span className={classes.txt1}>Export</span></Button1>
        </Row>
      <br></br>
     
        <br></br>
      <pre></pre>
      <table className={classes.tabletest1}>
        <tr>
       
        </tr>
         <tr onClick={() => history.push("/billing-details")}> 
        <tr>
        <td className={classes.td6}>   <Avatar alt="Cindy Baker" src="download.jpg" style= {{  margin: "10px -27px 12px 88px",
    float: "right"}} /></td>
        <td className={classes.td6}></td>
        </tr>
            <tr>
            <td className={classes.td5}><a href="#" className={classes.toggleactive}><b>Patient&nbsp;Name </b></a></td>
            
            <td className={classes.td5}><a href="#" className={classes.toggleactive}>Patrice&nbsp;Page</a></td>
            
           </tr>
           </tr>

          <tr onClick={() => history.push("/billing-details")}> 
         <tr>
            
            <td className={classes.td5a}><a href="#" className={classes.toggleactive}><b>Anaesthesiologist </b></a></td>
            <td className={classes.td5}><a href="#" className={classes.toggleactive}>Dr.Anjelina&nbsp;Victor</a></td>
           </tr>
           </tr>
           <tr onClick={() => history.push("/billing-details")}> 
           <tr>
            
            <td className={classes.td5}><a href="#" className={classes.toggleactive}><b>Virtual Meeting </b></a></td>
            <td className={classes.td5}><a href="#" className={classes.toggleactive}>28 September 2020, 10:00 AM</a> </td>
           </tr>
           </tr>
          
           <tr onClick={() => history.push("/billing-details")}> 
           <tr>
            
            <td className={classes.td5}><a href="#" className={classes.toggleactive}><b>&nbsp;Amount </b></a></td>
            <td className={classes.td5}><a href="#" className={classes.toggleactive}>$39.00</a></td>
           </tr>
           </tr>
          <tr onClick={() => history.push("/billing-details")}> 
           <tr>
            
            <td className={classes.td5}><a href="#" className={classes.toggleactive}><b>&nbsp;Billing Type </b></a></td>
            <td className={classes.td5}><a href="#" className={classes.toggleactive}>&nbsp;Self-paid</a></td>
           </tr>
           </tr>

            <tr onClick={() => history.push("/billing-details")}> 
           <tr>
            
            <td className={classes.td5}><a href="#" className={classes.toggleactive}><b>Billing&nbsp;Status </b></a></td>
            <td className={classes.td5}><a href="#" className={classes.toggleactive}>Paid </a> </td>
           </tr>
           </tr>
           <tr onClick={() => history.push("/billing-details")}> 
          
           </tr>
           <tr onClick={() => history.push("/billing-details")}> 
           <tr>
            
        
           </tr>
           </tr>
      </table>
      <pre></pre>
      <pre></pre>
      <div className= {classes.image}> </div>
      <pre></pre>
      <table className={classes.tabletest2}>
        <tr>
         
        </tr>
         <tr onClick={() => history.push("/billing-details")}> 
        <tr>
        <td className={classes.td6}>   <Avatar alt="Cindy Baker"  src="download.jpg" style= {{  margin: "10px -27px 12px 88px",
    float: "right"}} /></td>
        <td className={classes.td6}></td>
       </tr>
       <tr>
            <td className={classes.td5}><a href="#" className={classes.toggleactive}><b>Patient&nbsp;Name </b></a></td>
            
            <td className={classes.td5}><a href="#" className={classes.toggleactive}>Patrice&nbsp;Page</a></td>
            
           </tr>
</tr>
          <tr onClick={() => history.push("/billing-details")}> 
         <tr>
            
            <td className={classes.td5}><a href="#" className={classes.toggleactive}><b>Anaesthesiologist </b></a></td>
            <td className={classes.td5}><a href="#" className={classes.toggleactive}>Anesthesiologist Name</a></td>
           </tr>
</tr>
           <tr onClick={() => history.push("/billing-details")}> 
           <tr>
            
            <td className={classes.td5}><a href="#" className={classes.toggleactive}><b>&nbsp;Virtual Meeting </b></a></td>
            <td className={classes.td5}><a href="#" className={classes.toggleactive}>28 September 2020, 9:00 AM</a> </td>
           </tr>
           </tr>
           <tr onClick={() => history.push("/billing-details")}> 
           <tr>
            
            <td className={classes.td5}><a href="#" className={classes.toggleactive}><b>Amount </b></a></td>
            <td className={classes.td5}><a href="#" className={classes.toggleactive}>$39.00</a></td>
           </tr>
           </tr>
           <tr onClick={() => history.push("/billing-details")}> 
           <tr>
            
            <td className={classes.td5}><a href="#" className={classes.toggleactive}><b>Billing Type </b></a></td>
            <td className={classes.td5}><a href="#" className={classes.toggleactive}>&nbsp;Co-paid</a></td>
           </tr>
           </tr>

           <tr onClick={() => history.push("/billing-details")}> 
           <tr>
            
            <td className={classes.td5}><a href="#" className={classes.toggleactive}><b>Billing Status </b> </a></td>
            <td className={classes.td5}><a href="#" className={classes.toggleactive}>Outstanding </a></td>
           </tr>
           </tr>
           <tr onClick={() => history.push("/billing-details")}> 
           
           </tr>
            <tr onClick={() => history.push("/billing-details")}> 
           <tr>
            
          
           </tr>
           </tr>
      </table>
      <pre></pre>
      <div className= {classes.image}> </div>
      <pre></pre>
      <table className={classes.tabletest2}>
        <tr>
         
        </tr>
         <tr onClick={() => history.push("/billing-details")}> 
        <tr>
        <td className={classes.td6}>   <Avatar alt="Cindy Baker"  src="download.jpg" style= {{  margin: "10px -27px 12px 88px",
    float: "right"}} /></td>
        <td className={classes.td6}></td>
       </tr>
       <tr>
            <td className={classes.td5}><a href="#" className={classes.toggleactive}> <b>Patient&nbsp;Name </b></a></td>
            
            <td className={classes.td5}><a href="#" className={classes.toggleactive}>Patrice&nbsp;Page</a></td>
            
           </tr>
</tr>
          <tr onClick={() => history.push("/billing-details")}> 
         <tr>
            
            <td className={classes.td5}><a href="#" className={classes.toggleactive}><b>Anaesthesiologist </b></a></td>
            <td className={classes.td5}><a href="#" className={classes.toggleactive}>Anesthesiologist Name</a></td>
           </tr>
</tr>
           <tr onClick={() => history.push("/billing-details")}> 
           <tr>
            
            <td className={classes.td5}><a href="#" className={classes.toggleactive}><b>&nbsp;Virtual Meeting </b></a></td>
            <td className={classes.td5}><a href="#" className={classes.toggleactive}>28 September 2020, 9:00 AM </a> </td>
           </tr>
           </tr>
           <tr onClick={() => history.push("/billing-details")}> 
           <tr>
            
            <td className={classes.td5}><a href="#" className={classes.toggleactive}><b>Amount </b></a></td>
            <td className={classes.td5}><a href="#" className={classes.toggleactive}>$39.00</a></td>
           </tr>
           </tr>
           <tr onClick={() => history.push("/billing-details")}> 
           <tr>
            
            <td className={classes.td5}><a href="#" className={classes.toggleactive}><b>Billing Type </b></a></td>
            <td className={classes.td5}><a href="#" className={classes.toggleactive}>&nbsp;Co-paid</a></td>
           </tr>
           </tr>

           <tr onClick={() => history.push("/billing-details")}> 
           <tr>
            
            <td className={classes.td5}><a href="#" className={classes.toggleactive}><b>Billing Status </b></a> </td>
            <td className={classes.td5}><a href="#" className={classes.toggleactive}>Invoice Sent</a></td>
           </tr>
           </tr>
           <tr onClick={() => history.push("/billing-details")}> 
           
           </tr>
            <tr onClick={() => history.push("/billing-details")}> 
           <tr>
            
          
           </tr>
           </tr>
      </table>

      

    
      

    </div>

    

    
  );
}
