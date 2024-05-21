import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { BorderStyle, PinDropSharp } from '@material-ui/icons';
import { Hidden } from '@material-ui/core';
import Typography from "@material-ui/core/Typography";
import { spacing } from 'material-ui/styles';
import { cellClick } from '@syncfusion/ej2-react-schedule';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from "@material-ui/core/DialogTitle";
import {Row,Column} from "simple-flexbox";


const useStyles = makeStyles({
 
  table: {
    width: "644px",
    height: "455px",
    margin: "-5px 166px 0px -24px",
  padding: "16px 13px 32px 17px",
  borderRadius: "2px",
  boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.05)",
  border: "solid 1px #e8e8e8",
  backgroundColor: "#ffffff",
  borderCollapse: "collapse",
  
  },

  link2: {

    width: "181px",
  height: "23px",
 margin: "23px 12px 37px 11px",
  fontFamily: "Roboto",
  fontSize: "16px",
  fontWeight: "normal",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "1.75",
  letterSpacing: "normal",
  textAlign: "center",
  color: "#8f8f8f",
},
//Monday
link3: {
    width: "181px",
  height: "23px",
  margin: "0 12px 0 -20px",
  fontFamily: "Roboto",
  fontSize: "16px",
  fontWeight: "500px",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "1.75",
  letterSpacing: "normal",
  textAlign: "center",
  color: "#141414",


},
link4: {

    width: "181px",
  height: "23px",
 margin: "23px 12px 37px",
  fontFamily: "Roboto",
  fontSize: "16px",
  fontWeight: "normal",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "1.75",
  letterSpacing: "normal",
  textAlign: "center",
  color: "#8f8f8f",

    
},
link5 : {
    width: "181px",
    height: "23px",
    margin: "0 12px 0 11px",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "500px",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.75",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#141414",
},
link6 : {
    width: "181px",
    height: "23px",
    margin: "0 12px 0 11px",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "500px",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.75",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#141414",
},

link7 : {
    width: "181px",
    height: "23px",
   margin: "23px 12px 37px",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.75",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#8f8f8f",
},
link8: {
    width: "181px",
  height: "23px",
  margin: "0 12px -9 12px",
  fontFamily: "Roboto",
  fontSize: "16px",
  fontWeight: "500px",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "1.75",
  letterSpacing: "normal",
  textAlign: "center",
  color: "#141414",

},
link9: {
    width: "181px",
    height: "23px",
    margin: "23px 6px 37px 12px",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.75",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#8f8f8f",
  },
 link10: {
  width: "60px",
  height: "19px",
  margin: "0 0 1px 43px",
  fontFamily: "Roboto",
  fontSize: "16px",
  fontWeight: "normal",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "normal",
  letterSpacing: "normal",
  textAlign: "center",
  color: "#bdbdbd",


 },

 iconFixing: {

  width: "44px",
  height: "35px",
 marginLeft: "3px",
  
  backgroundColor: "#ffffff",
 },
 iconFixing1: {

  width: "26px",
  height: "24px",
 marginLeft: "3px",
  
  backgroundColor: "#ffffff",
 },

 
});


function createData( Mon16Aug2020, Tue17Aug2020, Wed18Aug2020, Thu19Aug2020) {
  return { Mon16Aug2020, Tue17Aug2020, Wed18Aug2020, Thu19Aug2020 };
 
}
const classes = createData();
const rows = [
  
  createData(<span style = {{color: "#bdbdbd",
  height: "19px",
  margin: "0 0 1px 43px",
  fontFamily: "Roboto",
  fontSize: "16px",
  fontWeight: "normal",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "normal",
  letterSpacing: "normal",
  textAlign: "center",
  boxSizing: "border-box",
}}>9:00 AM&emsp;&ensp;&ensp;</span>, 
  
  <span style = {{width: "60px",
    height: "19px",
    margin: "0 8px 0 0",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#bdbdbd",
  }}>9:00 AM &emsp;&ensp;&nbsp;</span>, 
  
  <span style = {{width: "60px",
    height: "19px",
    margin: "0 0 0 12px",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#bdbdbd",
  }}> 9:00 AM &emsp;&ensp;&nbsp;</span> , <span style = {{width: "60px",
    height: "19px",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#bdbdbd",}}>9:00 AM &emsp;&ensp;</span>),
  createData(<span style = {{width: "69px",
    height: "19px",
    margin: "3px 29px 0 39px",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#bdbdbd",}}>10:00 AM</span>, <span style = {{width: "69px",
      height: "19px",
      margin: "4px 10px 0 0",
      fontFamily: "Roboto", 
      fontSize: "16px",
      fontWeight: "normal",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "normal",
      letterSpacing: "normal",
      textAlign: "center",
      color: "#ffffff",
      backgroundColor: "#ff462c" ,
      backgroundSize: "300px 100px",
      borderStyle: "groove",
      boxShadow: "0 2px 4px 0", 
    }}>10:00 AM &emsp;&ensp; </span>, <span style = {{width: "69px",
      height: "19px",
      margin: "4px 0 0 15px",
      fontFamily: "Roboto",
      fontSize: "16px",
      fontWeight: "normal",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "normal",
      letterSpacing: "normal",
      textAlign: "center",
      color: "#bdbdbd",
      
    }}>10:00 AM &emsp;&ensp; </span>, <span style = {{width: "69px",
      height: "19px",
      fontFamily: "Roboto",
      fontSize: "16px",
      fontWeight: "normal",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "normal",
      letterSpacing: "normal",
      textAlign: "center",
      color: "#bdbdbd",
    }}>10:00 AM &emsp;&nbsp;</span>),
  createData(<span style = {{width: "69px",
    height: "19px",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#bdbdbd",
  }}>&emsp;&emsp;&emsp;11:00 AM</span>, <span style = {{width: "69px",
    height: "19px",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#bdbdbd",}}>11:00 AM &emsp;&emsp; </span>, <span style = {{width: "69px",
      height: "19px",
      fontFamily: "Roboto",
      fontSize: "16px",
      fontWeight: "normal",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "normal",
      letterSpacing: "normal",
      textAlign: "center",
      color: "#bdbdbd",}}>11:00 AM &emsp;&ensp; </span>, <span style = {{width: "69px",
      height: "19px",
      fontFamily: "Roboto",
      fontSize: "16px",
      fontWeight: "normal",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "normal",
      letterSpacing: "normal",
      textAlign: "center",
      color: "#bdbdbd",}} >11:00 AM &emsp;&nbsp;</span>),
  createData(<span style = {{width: "68px",
    height: "19px",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#bdbdbd",
  }}>&emsp;&emsp;&emsp;12:00 PM</span>, <span style = {{width: "68px",
  height: "19px",
  fontFamily: "Roboto",
  fontSize: "16px",
  fontWeight: "normal",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "normal",
  letterSpacing: "normal",
  textAlign: "center",
  color: "#bdbdbd",
}}>12:00 PM &emsp;&emsp; </span>, <span style = {{width: "68px",
height: "19px",
fontFamily: "Roboto",
fontSize: "16px",
fontWeight: "normal",
fontStretch: "normal",
fontStyle: "normal",
lineHeight: "normal",
letterSpacing: "normal",
textAlign: "center",
color: "#bdbdbd",
}}>12:00 PM &emsp;&ensp; </span>, <span style = {{width: "68px",
height: "19px",
fontFamily: "Roboto",
fontSize: "16px",
fontWeight: "normal",
fontStretch: "normal",
fontStyle: "normal",
lineHeight: "normal",
letterSpacing: "normal",
textAlign: "center",
color: "#bdbdbd",
}}>12:00 PM &emsp;&nbsp;</span>),
  createData(<span style = {{width: "59px",
    height: "19px",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#bdbdbd",
  }}> &emsp;&emsp;&emsp;&ensp;1:00 PM</span>, <span style = {{width: "59px",
  height: "19px",
  fontFamily: "Roboto",
  fontSize: "16px",
  fontWeight: "normal",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "normal",
  letterSpacing: "normal",
  textAlign: "center",
  color: "#bdbdbd",
}}>1:00 PM &emsp;&emsp;&nbsp;</span>, <span style = {{width: "59px",
height: "19px",
fontFamily: "Roboto",
fontSize: "16px",
fontWeight: "normal",
fontStretch: "normal",
fontStyle: "normal",
lineHeight: "normal",
letterSpacing: "normal",
textAlign: "center",
color: "#ffffff",
backgroundColor: "#43c43f",
borderStyle: "groove",
      boxShadow: "0 2px 4px 0", 
}}>1:00 PM &emsp;&ensp;&nbsp;</span>, <span style = {{width: "59px",
height: "19px",
fontFamily: "Roboto",
fontSize: "16px",
fontWeight: "normal",
fontStretch: "normal",
fontStyle: "normal",
lineHeight: "normal",
letterSpacing: "normal",
textAlign: "center",
color: "#bdbdbd",
}}>1:00 PM &emsp;&ensp;</span>),

];


export default function Schedule(props) {
  
  const classes = useStyles();

  
   
  return (
    
    <div>
      <Dialog
        open={props.state.isSchedule}
        onClose={props.scheduleSurgery}
        className="p-100 "
        PaperProps={{
        style: {
          minHeight: '75vh',
          minWidth: '51vw',
        },
      }}
        // className={}
      >
        
        
              <Table className ={classes.table} striped bordered hover >
        
      
         <TableHead>
           {/* <TableRow>
             <TableCell> Monday
               <div>
                 17 aug 2020
               </div>
             </TableCell>
             <TableCell> Monday</TableCell>
             <TableCell> Monday</TableCell>
             <TableCell> Monday</TableCell>

           </TableRow> */}
    
       
          <TableRow>
          
      

          <TableCell> <img className={classes.iconFixing} src="/images/back.svg"/> <span className={classes.link3} >&emsp;&nbsp;&nbsp;Mon </span>  <br></br> <span className={classes.link2}>&emsp;&nbsp;17 Aug 2020</span></TableCell>
          <TableCell align="right"> <span className={classes.link5} >Tue &emsp;&emsp;&ensp;</span> <br></br> <span className={classes.link4}>18 Aug 2020&ensp;&nbsp;</span></TableCell>
          <TableCell align="right"><span href="#" className={classes.link6}>Wed &emsp;&emsp;&nbsp; </span><br></br> <span href="#" className={classes.link7}>19 Aug 2020 &ensp; </span></TableCell>
          <TableCell align="right"> <span href="#" className={classes.link8}>Thu &ensp; <img className={classes.iconFixing1} src="/images/next.jpg"/> </span><br></br><span className={classes.link9}>20 Aug 2020 &nbsp;</span></TableCell>
                  </TableRow> 
        </TableHead>
        <TableBody>


          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.Mon16Aug2020}
              
              </TableCell>
              
              <TableCell align="right">{row.Tue17Aug2020}</TableCell>
              <TableCell align="right">{row.Wed18Aug2020}</TableCell>
              <TableCell align="right">{row.Thu19Aug2020}</TableCell>
              
            </TableRow>
            
          
          ))}
          
          
   
        </TableBody>
       
   
      </Table>
        

        
       
        
      </Dialog>

    </div>



    
  );


}