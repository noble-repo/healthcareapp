import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { AppBar, Toolbar } from '@material-ui/core';
import styled from "styled-components";
import { Column, Row } from 'simple-flexbox';
import { Divider } from "material-ui";
import { history } from "../../../managers/history";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";




const Calendar = styled.div`
padding-left:0px;
font-size:12px;
font-family:roboto;
font-weight:550;
margin-left:25px;
margin-top:21px;
`
const Users = styled.div`
padding-left:5px;
font-size:12px;
font-family:roboto;
font-weight:550;
margin-left:30px;
text-align:center;
// margin-top:21px;
padding-top:22px;
background-color: #00a0f0;
height:70px;
width:100px;
color:white;
`
const InactiveUsers = styled.div`
padding-left:40px;
font-size:12px;
font-family:roboto;
font-weight:550;
margin-left:0px;
margin-top:21px;
color:black;
`
const Billing = styled.div`
padding-left:40px;
font-size:12px;
font-family:roboto;
font-weight:550;
margin-left:0px;
margin-top:21px;
`
const Videos = styled.div`
padding-left:40px;
font-size:12px;
font-family:roboto;
font-weight:550;
margin-left:0px;
margin-top:21px;
`
const Patients = styled.div`
margin-left:55px;
font-size:12px;
font-family:roboto;
font-weight:550;
background-color: #00a0f0;
text-align:center;
padding-top:22px;
height:70px;
width:100px;
color:white;
`
const InactivePatients = styled.div`
margin-left:55px;
font-size:12px;
font-family:roboto;
font-weight:550;
text-align:center;
padding-top:22px;
height:70px;
width:100px;
color:black;
// background-color: #00a0f0;

`
const Image = styled.img`

width:20px;
height:20px;
margin-left:100px;
`
const SideImage = styled.img`
width:30px;
height:30px;
margin-left:-5px;
`
const Message = styled.div`
margin-top:-30px;
margin-left:30px;
`
const Container = styled.div`
margin-left:400px;
font-size:10px;
color:white;
width:150px;
height:40px;
padding: 5px 13px 7px;
border-radius: 2px;
background-color: #43c43f;
`

const DividerComponent=styled.div`
width: 100%;
height:14px !important;


`
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    height: 50,
  },
  logo: {
    marginLeft: theme.spacing(0),
  },

  toolbar: {
    minHeight: 58,
    paddingLeft: 5,
    paddingTop: -5,
    paddingBottom: -2,
  },
  small: {
    width: theme.spacing(3),
    height: 26,
    marginLeft: 10,
    marginRight: 20,
    
  },
  rowfixing:{
    position:'absolute',
    right:0,
    marginTop:'20px',
  },
  image: {
    height: "28px",
    marginTop: "12px",
    width: "30px",
    marginLeft: "8px",
  },
  fontfixing: {
    paddingTop: "10px",
    paddingLeft: "4px",
    paddingRight: "15px",

    fontSize: "9px",
    fontWeight: "bold",
  },
  parafont: {
    fontSize: "10px",
    paddingLeft: "5px",

    marginTop: "-16px",
    color: "#8f8f8f",
  },
  divfixing: {
    position: "absolute",
    right: 0,
    marginRight: "8px",
  },
  divider: {
    marginTop: "-10px",
  },
  parafixing: {
    fontSize: "11px",
    color: "#181c1b",
    fontWeight: "400",
    fontFamily: "Roboto !important",
    paddingBottom: "0px",
    marginLeft: "10px",
    paddingRight: "30px",
    marginBottom: "3px",
  },
  lastparafixing: {
    fontSize: "11px",
    color: "#181c1b",
    fontWeight: "400",
    fontFamily: "Roboto !important",
    paddingBottom: "0px",
    marginLeft: "10px",
    paddingRight: "30px",
  },
  firstparafixing: {
    fontSize: "11px",
    color: "#181c1b",
    fontWeight: "400",
    fontFamily: "Roboto !important",
    paddingBottom: "0px",
    marginLeft: "10px",
    paddingRight: "30px",
    marginBottom: "3px",
    marginTop: "4px",
  },
  
  
  
}));
function Header(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  // console.log(props, "headerprops");

  return (
    <div>
    <div style={{ height: "70px" }}>
      <Row>
        <Row >
          <Column>
            <img src="/Menu_Logo.png" height="50px" className="image" />
          </Column>
          {props.tabName==="patient"?
          <Column>
            <Patients
             onClick={() => history.push("/surgeon/patients-list")} 

            >PATIENTS</Patients>

          </Column>:
          <Column>
            <InactivePatients
             onClick={() => history.push("/surgeon/patients-list")} 

            
            >PATIENTS</InactivePatients>

          </Column>
}
          <Column>
            <Calendar>CALENDAR</Calendar>
          </Column>
          {props.tabName==="users"?

          <Column>
            <Users
             onClick={() => history.push("/surgeon/list-of-users")} 
            >USERS</Users>
          </Column>:
           <Column>
           <InactiveUsers
            onClick={() => history.push("/surgeon/list-of-users")} 
           >USERS</InactiveUsers>
         </Column>
}

          <Column>
                
            <Billing 
            onClick={() => history.push("/billing-details")} 
            >BILLING</Billing>
          </Column>
          <Column>
            <Videos>VIDEOS</Videos>
          </Column>
        </Row>
        <Row className={classes.rowfixing} >
          <div>
            <img src="/images/Group 12.svg" />
          </div>
          <Avatar alt="Remy Sharp" src="/images/male.jpg"
           onClick={handleClick}
          className={classes.small} />

        </Row>
        <Popover
            className="pop-header"
            className={classes.popover}
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Typography className={classes.typography}>
              <Row>
                <Column>
                  {" "}
                  <Avatar src="/download.jpg" className={classes.image} />
                </Column>
                <Column>
                  <Row>
                    {" "}
                    <p className={classes.fontfixing}>Dr.Angelina Victor</p>
                  </Row>
                  <Row>
                    {" "}
                    <p className={classes.parafont}>Surgeon</p>
                  </Row>
                </Column>
              </Row>
              {/* <p>Admin</p> */}
              <Divider className={classes.divider} />
              <p className={classes.firstparafixing}
                 onClick={() => history.push("/change-password")}>Change Password</p>
              <p className={classes.parafixing} 
              onClick={() => history.push("/profile")}
              >Update Profile</p>
              {/*  */}
              <p className={classes.lastparafixing}
              onClick={() => history.push("/surgeon")}
              >Logout</p>
            </Typography>
          </Popover>
         
      </Row>
      <div> 
      <Divider style={{ marginTop: "0px", height: "12px" }} />
       
        </div>
    </div>
    </div> 
  )
}

export default Header