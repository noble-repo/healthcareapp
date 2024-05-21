import React from "react";
import { Column } from "simple-flexbox";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
    
const RatingFixer = styled.div`
position: absolute;
margin-top: 13px;
margin-left: 9px;
`

export default function ConsultantSidebar(props) {
  const useStyles = makeStyles((theme) => ({

    ratingFixing: {
      positon: "absolute !important",
    marginTop: '13px',
    marginLeft: '6px',

    },

    dropdownFixing: {
      position: "relative"

    },

      
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    sidebar: {
      width: "220px",
      backgroundColor: "#e8f5fe",
      // height: "580px",
      paddingLeft: "15px",
      paddingRight: "15px",
      marginTop:"33px",
      height:"100vh",
      minHeight: "100%",
      overflowY:"auto",
      ['@media (max-width:1028px)']: { 
        marginTop: "16px",
    },

    },


    fontfixing: {
    width: '46px',
  height: '22px',
//   margin: '0 184px 32px 0',
margin: '31px 184px 32px 0',
  fontFamily: 'Helvetica',
  fontSize: '18px',
  fontWeight: 'bold',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: '1.17',
  letterSpacing: 'normal',
  textAlign: 'left',
  color: '#26292c',
    },
    fontfixingchild: {
        width: '276px',
        // height: '976.5px',
        margin: '-28.5px 40px 0 -24px',
        
        padding: '0 23px 22.5px',
        backgroundColor: '#e8f5fe',
    },
    marginTop15: {
      marginTop: "18px",
    },
    selectFixing: {
        // width: '230px',
        width: '179px',
  height: '40px',
//   margin: '2px 0 27px',
margin: '-21px 0 27px',
  padding: '11px 18px 10px 10px',
  borderRadius: '2px',
  backgroundColor: '#ffffff',
  border: 'none'
    },
  }));

  const [value, setValue] = React.useState(2);

  const classes = useStyles();


  
  return (
    <div className={classes.sidebar}>
      <Column>
        {" "}
        <span className={classes.fontfixing}>Filter</span>
      </Column>
      <br/>
      <Column className={classes.marginTop15}>
        <span className={classes.fontfixingchild}>&nbsp;Anesthesiologist</span>
        <select class="ui dropdown" className={classes.selectFixing}>
          <option value="">&nbsp;Show all</option>
        
        </select>
      </Column>
      <Column className={classes.marginTop15}>
        <span className={classes.fontfixingchild}>&nbsp;Status</span>
        <select class="ui dropdown" className={classes.selectFixing}>
          <option value="">&nbsp;Completed</option>
          
        </select>
      </Column>

      <Column className={classes.marginTop15}>
        <span className={classes.fontfixingchild}>&nbsp;Ratings</span>
        <div className = {classes.dropdownFixing}>
        <select class="ui dropdown" className={classes.selectFixing}>
          <option value="">
          </option>
          
        </select>
        </div>
        {/* <div className = {classes.ratingFixing}> */}
        <RatingFixer>
        <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
      </RatingFixer>
        {/* </div> */}
      </Column>

      <Column className={classes.marginTop15}>
        <span className={classes.fontfixingchild}>&nbsp;Virtual Meeting</span>
        <select class="ui dropdown" className={classes.selectFixing}>
          <option value="">&nbsp;This Month</option>
          
        </select>
      </Column>
    </div>
  );
}
