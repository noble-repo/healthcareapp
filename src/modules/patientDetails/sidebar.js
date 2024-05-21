import React from 'react'
import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';


const drawerWidth = 239;
// const drawerWidth = 245;

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        position:'static',
        backgroundColor:"#e6f2ff",
        marginTop:15,
        height:'258%',
        marginLeft:"2px",
      },
      drawerPaper: {
        width: drawerWidth,
        // backgroundColor:"#e6f2ff",
        border:0,
        marginTop:65
      },
      drawcol:{
        // backgroundColor:'#e6e6e6',
        marginTop:-64,
        // color:'#ebebe0',
        height:11
      },
      drawerContainer: {
        overflow: 'auto',
      },
      pat: {
        paddingLeft: 13,
        paddingTop:-1,
        fontFamily: "Roboto",
  fontSize: "15px",
  fontWeight: "bold",
  fontStretch: "normal",
  fontStyle:"normal",
  lineHeight: "normal",
  letterSpacing:"normal",
  color: "#26292c",
        // fontSize:12,
        // fontWeight:'bold',
        // fontFamily:'Arial, Helvetica, sans-serif',
        marginTop:20
      },
      search: {
        position: 'relative',
        borderRadius: 0,
        backgroundColor: 'white',
        marginLeft: 13,
        marginRight:12,
        marginTop:0,
        height:28
      },
      searchIcon: {
        // color:'#d6d6c2',
        opacity:0.5,
        color:"#000000",
        position: 'absolute',
        alignItems: 'right',
        justifyContent: 'left',
        marginLeft:185,
        marginTop:2
      },
      searchsize:{
        height:19
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        // vertical padding + font size from searchIcon
        // paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        paddingLeft:"10px",
        width: '100%',
        // fontSize:11,
        fontFamily:"Roboto",
  fontSize: "15px",
  fontWeight:"normal",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight:"normal",
  letterSpacing:"normal",
  color: "#b5b5b5",
        // fontFamily:'Arial, Helvetica, sans-serif',
        marginLeft:-33,
        marginTop:2
      },
      root: {
        '& > *': {
          margin: theme.spacing(1),
        
        },
      },
      root2:{
        marginTop:19,
        marginLeft:12,
        marginRight:12,
        display: 'flex',
        backgroundColor:'#3399ff',
        color:'white',
        borderRadius:0,
        boxShadow:'none'
      },
      cover: {
        margin:8,
        marginRight:0,
        width: 40,
        height:40,
        borderRadius:'50%'
      },
      contents: {
        marginTop:-4,
        // fontFamily:'Arial, Helvetica, sans-serif',
        fontFamily: "Roboto",
  fontWeight:"500px",
  fontStretch: "normal",
  fontStyle:"normal",
  lineHeight: "normal",
  letterSpacing:"normal",
  // color: "#ffffff",
        fontSize:13
      },
      details: {
        height:10
      },
      cpp:{
        marginTop:2,

        // fontWeight:'bold'
      },
      cp:{
        marginTop:-25,
        fontFamily: "Roboto",
  
  // color: "#ffffff",
        fontSize:10,
        fontWeight:0
      },
      rooot: {
        marginTop:14,
        marginLeft:12,
        marginRight:12,
        display: 'flex',
        borderRadius:0,
        boxShadow:'none'
      },
      grow: {
        flexGrow: 1,
        marginTop:"16px",
       "@media  (max-width:1024px) and (min-width: 768px)": {
         display:"none", 
          
        
      },
      },
      searchInput:{
        marginLeft:"34px" ,
        height:"30px", 
        width:"180px",
        paddingBottom:"5px",
      },
}))

export default function Sidebar(props) {
    const classes = useStyles();
    return (
        <div className={classes.grow} >
            <div
        className={classes.drawer}
        position="static"
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawcol}>.</div>
        <div className={classes.drawerContainer}>
        <p className={classes.pat}>Patients</p>
        <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon className={classes.searchsize}/>
            </div>
            <InputBase className={classes.searchInput}
              placeholder="Search Patient"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          
          
    <Card className={classes.root2}>
    <CardMedia
        className={classes.cover}
        image="download.jpg"
      />
      <div className={classes.details}>
        <CardContent className={classes.contents}>
        <p className={classes.cpp}>Patrice Page</p>
          <br/>
            <p className={classes.cp}>26 Aug 2020</p>
          
        </CardContent>
      </div>
      <FiberManualRecordIcon
        style={{
        marginTop:20,
        color:'red',
        height:15,
        marginLeft:26
      }}
      />
    </Card>
    
    {props.rows.map((row,index)=>(
    <Card className={classes.rooot}>
    <CardMedia
        className={classes.cover}
        image={row.img}
      />
      <div className={classes.details}>
        <CardContent className={classes.contents}>
        <p className={classes.cpp}
        style={{color:"#262626"}}>{row.name}</p>
          <br/>
          <p className={classes.cp} style={{color:"#8f8f8f"}}>{row.date}</p>
          
        </CardContent>
      </div>
      <FiberManualRecordIcon
        style={{
        marginTop:20,
        color:'red',
        height:15,
        marginLeft:17
      }}
      />
    </Card>
    ))}
        </div>
      </div>
        </div>
    )
}
