import React from "react";
import { Row, Column } from "simple-flexbox";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from "material-ui";
import { grey } from "@material-ui/core/colors";
import { history } from "../../managers/history";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
const SearchDataSpan = styled.span`
  width: 230px;
  height: 37px;
  border-radius: 2px;
  background-color: white;
  padding: 1px 9px 7px 3px;
  margin-right: 10px;
  border: 1px solid #bdbdbd;
  margin-left: 15px;
  margin-top: 53px;
`;
const HeadRowLabelHeading = styled.label`
  font-family: Roboto;
  font-size: 10px;
  font-weight: 500;
  color: "rgba(0, 0, 0, 0.78)";
`;
const HeadRowLabelContentSearch = styled.input`
  margin-left: 5px;
  max-width: 118px;
  margin-top: 4px;
  width: 100%;
  font-family: Roboto !important;
  font-size: 15px;
  color: #b5b5b5;
  background-color: #ffffff;
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
const useStyles = makeStyles((theme) => ({
  tabletest: {
    borderCollapse: "separate",
    borderSpacing: "0 15px",
    marginLeft: "30px",
    marginRight: " 18px",
    paddingBottom: "10px",

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
  tdPadding: {
    paddingLeft: "25px",
    width: "130px",
    textAlign: "left",
    borderBottom: "1px solid #d4d4d4",
    borderTop: "1px solid #d4d4d4",
    padding: "5px",

    fontSize: "14px",
    fontWeight: "normal",
    fontFamily: "roboto",
    color: "#181c1b",
  },
  toggleactive: {
    width: "130px",
    textAlign: "left",
    
    padding: "0px",
    fontSize: "13px",
    fontWeight: "normal",
    fontFamily: "roboto",
    color: "#181c1b",
    
    "&:hover": {
      textDecoration: "none",
      color: "#181c1b",
     
    }
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
    paddingLeft:"23px",
    fontSize: "14px",
    paddingBottom: "0px",
    fontFamily: "Roboto!important",
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
    backgroundColor: " #ff462c !important",
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
    width: "150px",
    textAlign: "left",
    paddingLeft: "5px",
    paddingTop: "0px",

    paddingBottom: "0px",

    paddingRight: "5px",

    fontSize: "14px",
    fontFamily: "Roboto",
    color: "#414141",
  },
  font1: {
    width: "150px",
    textAlign: "left",
    paddingLeft: "25px",
    paddingTop: "0px",

    paddingBottom: "0px",

    paddingRight: "5px",

    fontSize: "14px",
    fontFamily: "Roboto",
    color: "#414141",
  },
  td7: {
    width: "130px",
    textAlign: "left",
    borderBottom: "1px solid #d4d4d4",
   
    padding: "7px",
    fontSize: "14px",
    fontWeight: "normal",
    fontFamily: "roboto",
    color: "#181c1b",
  },
  font2: {
    width: "150px",
    textAlign: "left",
    paddingLeft: "0px",
    paddingTop: "0px",

    paddingBottom: "0px",

    paddingRight: "5px",

    fontSize: "14px",
    fontFamily: "Roboto",
    color: "#414141",
  },
  fonts: {
    width: "150px",
    textAlign: "left",
    // paddingLeft: "25px",
    // paddingLeft:"5px",
    paddingTop: "0px",
    paddingBottom: "0px",
    paddingRight: "5px",
    fontSize: "14px",
    fontFamily: "Roboto",
    color: "#414141",
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
export default function PatientTable(props) {
  const classes = useStyles();
  console.log(props, "................");
  return (
    <div>
      <Row className="justify-content-between m-t-15">
        <Row>
          {props.state.isOpen ? (
            <OpenImage
              src="/images/left_side_icon.svg"
              class="Group-6"
              onClick={() => {
                props.toggleImage();
              }}
            ></OpenImage>
          ) : (
            <CloseImage
              className="closeimg"
              src="/images/left_side_icon.svg"
              onClick={() => {
                props.toggleImage();
              }}
            />
          )}
          <Column>
            <Head>Patients</Head>
          </Column>
          <Column>
            <SearchDataSpan>
              <HeadRowLabelContentSearch placeholder="Search Patient" />
              <HeadRowLabelHeading>
                <img
                  style={{ marginTop: "-49px", marginLeft: "190px" }}
                  src="/images/noun_Search_2331678.svg"
                  height="17"
                  width="18"
                />
              </HeadRowLabelHeading>
            </SearchDataSpan>
          </Column>
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
          <th className={classes.font}> Surgery&nbsp;type</th>
          <th className={classes.paddingLeft30}> Gender</th>
          <th className={classes.font1}> Age</th>
          <th className={classes.font}> Surgeon</th>
          <th className={classes.font2}> Survey&nbsp;Status</th>
          <th className={classes.fonts}> Surgery&nbsp;Date</th>

          <th className={classes.font}> Surgery&nbsp;Clearance</th>
          <th></th>
        </tr>
        {props.state.filteredArray.map((row) => (
          <tr onClick={() => history.push("/patient-details")}>
            <td className={classes.tdIcon}>
              <Avatar>{row.icon}</Avatar>
            </td>
            <td className={classes.td}>{row.patientName}</td>
            <td className={classes.td}>{row.SurgeryType}</td>
            <td className={classes.tdPadding}>{row.Gender}</td>
            <td className={classes.tdpaddingLeft20}>{row.Age}</td>
            <td className={classes.td}>{row.Surgeon}</td>
            <td className={classes.td}>{row.surveyStatus}</td>
            {row.surgeryDate === "No Clearance" ? (
              <td className={classes.tdColor}>{row.surgeryDate}</td>
            ) : row.surgeryDate === "Schedule" ? (
              <td className={classes.td}>
                <button className={classes.datebuttonfixing}>
                  {row.surgeryDate}
                </button>
              </td>
            ) : (
              <td className={classes.td}>{row.surgeryDate}</td>
            )}
            {row.surgeryClearance === "Yes" ? (
              <td className={classes.tdAvatar}>
                <Avatar className={classes.avatar}>
                  {row.surgeryClearance}
                </Avatar>
              </td>
            ) : (
              <td className={classes.tdAvatar}>
                <Avatar className={classes.avatarNo}>
                  {row.surgeryClearance}{" "}
                </Avatar>
              </td>
            )}
            <td className={classes.br}></td>
          </tr>
        ))}
      </table>
      <pre>&emsp;&emsp;&emsp;</pre>
      <br></br>

    
      <pre></pre>
      <table className={classes.tabletest1}>
  <tr>
 
  </tr>
   <tr onClick={() => history.push("/patient-details")}> 
  <tr>
  <td className={classes.td6}>   <Avatar alt="Cindy Baker" src="/images/download.jpg" style= {{  margin: "10px -27px 12px 88px",
float: "right"}} /></td>
  <td className={classes.td6}></td>
  </tr>
      <tr>
      <td className={classes.td5}><a href="#" className={classes.toggleactive}><b>Patient&nbsp;Name </b></a></td>
      
      <td className={classes.td5}><a href="#" className={classes.toggleactive}>Patrice&nbsp;Page</a></td>
      
     </tr>
     </tr>

    <tr > 
   <tr>
      
      <td className={classes.td5}><a href="#" className={classes.toggleactive}><b>Surgery&nbsp;Type </b></a></td>
      <td className={classes.td5}><a href="#" className={classes.toggleactive}>Wrist&nbsp;Surgery</a></td>
     </tr>
     </tr>
     <tr > 
     <tr>
      
      <td className={classes.td5}><a href="#" className={classes.toggleactive}> <b>Gender </b></a></td>
      <td className={classes.td5}><a href="#" className={classes.toggleactive}>Female</a></td>
     </tr>
     </tr>
    
     
    <tr > 
     <tr>
      
      <td className={classes.td5}><a href="#" className={classes.toggleactive}><b>Age </b></a></td>
      <td className={classes.td5}><a href="#" className={classes.toggleactive}>30</a></td>
     </tr>
     </tr>

      <tr > 
     <tr>
      
      <td className={classes.td5}><a href="#" className={classes.toggleactive}><b>Surgeon </b> </a></td>
      <td className={classes.td5}><a href="#" className={classes.toggleactive}>Dr. Harris Shield</a></td>
     </tr>
     </tr>
     <tr > 
     <tr>
      
      <td className={classes.td5}><a href="#" className={classes.toggleactive}><b>Survey&nbsp;Status </b></a> </td>
      <td className={classes.td5}><a href="#" className={classes.toggleactive}>Completed </a> </td>
     </tr>
     </tr>
     <tr > 
     <tr>
      
      <td className={classes.td5}><a href="#" className={classes.toggleactive}><b>Survey&nbsp;Date </b></a> </td>
      <td className={classes.td5}><a href="#" className={classes.toggleactive}>26 Aug 2020 </a> </td>
     </tr>
     </tr>
     <tr > 
     <tr>
     <td className={classes.td5}><a href="#" className={classes.toggleactive}><b>Surgery&nbsp;Clearence </b></a> </td>
      <td className={classes.td5}><a href="#" className={classes.toggleactive}></a> <Avatar className={classes.avatar}>No</Avatar></td>
  
     </tr>
     </tr>
</table>
<pre></pre>
<pre></pre>
<div className= {classes.image}> </div>
<pre></pre>
<table className={classes.tabletest1}>
  <tr>
   
  </tr>
   <tr > 
  <tr onClick={() => history.push("/patient-details")}> 
  <td className={classes.td6}>    <Avatar alt="Cindy Baker" src="/images/download.jpg"  style= {{  margin: "10px -27px 12px 88px",
float: "right"}} /></td>
  <td className={classes.td6}></td>
 </tr>
 <tr>
      <td className={classes.td7}><a href="#" className={classes.toggleactive}><b>Patient&nbsp;Name</b></a></td>
      
      <td className={classes.td7}><a href="#" className={classes.toggleactive}>Darek&nbsp;Damon</a></td>
      
     </tr>
</tr>
    <tr> 
   <tr>
      
      <td className={classes.td7}><a href="#" className={classes.toggleactive}><b>Surgery</b></a></td>
      <td className={classes.td7}><a href="#" className={classes.toggleactive}>ACL&nbsp;Reconstruction</a></td>
     </tr>
</tr>
     <tr > 
     <tr>
      
      <td className={classes.td7}><a href="#" className={classes.toggleactive}><b>Gender </b></a></td>
      <td className={classes.td7}><a href="#" className={classes.toggleactive}>Male </a></td>
     </tr>
     </tr>
     <tr> 
     <tr>
      
      <td className={classes.td7}><a href="#" className={classes.toggleactive}><b>Age </b></a></td>
      <td className={classes.td7}><a href="#" className={classes.toggleactive}>28</a></td>
     </tr>
     </tr>

     <tr > 
     <tr>
      
      <td className={classes.td7}><a href="#" className={classes.toggleactive}><b>Surgeon </b></a> </td>
      <td className={classes.td7}><a href="#" className={classes.toggleactive}>Dr. John Altrac</a></td>
     </tr>
     </tr>
     <tr > 
     <tr>
      
      <td className={classes.td7}><a href="#" className={classes.toggleactive}><b>Survey&nbsp;Status </b></a> </td>
      <td className={classes.td7}><a href="#" className={classes.toggleactive}>Completed  </a> </td>
     </tr>
     </tr>
     <tr > 
     <tr>
      
      <td className={classes.td7}><a href="#" className={classes.toggleactive}><b>Surgery&nbsp;Date </b></a> </td>
      <td className={classes.td7}><a href="#" className={classes.toggleactive}>28 Aug 2019 </a> </td>
     </tr>
     </tr>
      <tr > 
     <tr>
      
     <td className={classes.td7}><a href="#" className={classes.toggleactive}><b>Surgery&nbsp;Clearence</b></a> </td>
      <td className={classes.td7}><a href="#" className={classes.toggleactive}></a> <Avatar className={classes.avatar}>No</Avatar></td>
     </tr>
     </tr>
</table>





    

    </div>

    
  );
}
