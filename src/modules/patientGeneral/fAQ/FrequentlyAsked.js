import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";
import { fontSize } from "@material-ui/system";

const Card = styled.div`
  display: flex;
  justify-content: center;
`;

const useStyles = makeStyles((theme) => ({
  iconFixing: {
    width: "88px",
    height: "84px",
    // margin: '63px 39px 0 909px',
    marginTop: "63px",
    marginLeft: "372px",
    padding: "3px 2px 2px 3px",
    alignContent: "center",
    ["@media (max-width:770px)"]: {
      marginLeft: "300px",
    },
    [ "@media  (max-width:360px)"]:{
      marginLeft:'203px !important'
    }
  },

  head: {
    width: "464px",
    height: "28px",
    marginLeft: "186px",
    marginTop: "23px",
    fontFamily: "Roboto",
    fontSize: "24px",
    fontWeight: "500",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 1.17,
    letterSpacing: "normal",
    textAlign: "center",
    color: "#414141",
    alignContent: "center",
    ["@media (max-width:770px)"]: {
      marginLeft: "100px",
    },
   [ "@media  (max-width:360px)"]:{
      marginLeft:'10px !important',
      fontSize:'17px'
    }
    
  },

  root: {
    width: "884px",
    marginTop: "80px",
    // marginLeft: '519px',
    //   display: 'flex',
    // flexWrap: 'wrap',
    // alignContent: 'center',

    // ["@media (max-width:1024px)"]: {
    //   width: '750px',
    //   marginLeft: '130px'
    // },

    ["@media (max-width: 768px)"]: {
      width: "680px",
      // marginRight:"30px",
    },

    ["@media (max-width:360px)"]: {
      width: "325px",
      marginLeft: "36px",
      // marginLeft: '19px'
    },
  },

  accordionSummary: {
    width: "884px",
    height: "39px",
    padding: "5px 21px 6px 16px",
    backgroundColor: "#e8f5fe",

    // ["@media (max-width:1024px)"]: {
    //   width: '750px',
    //   marginLeft: '0px'
    // },

    // ["@media (max-width: 768px)"]: {
    //   marginLeft: "0px",
    //   width:'502px'
    //   },
    ["@media (max-width: 768px)"]: {
      width: "680px",
      marginRight: "30px",
    },
    ["@media (max-width: 360px)"]: {
      width: "320px",
      marginLeft: "36px",
    },

    // ["@media (max-width: 360px)"]: {
    //   marginLeft: "0px",
    //   width:'325px'
    //   },
  },

  // heading: {
  //   padding: '90px'
  // },

  minusIcon: {
    width: "10px",
    height: "2px",
    margin: "14px 0 12px 802px",
    backgroundColor: "#00a0f0",

    ["@media (max-width:1024px)"]: {
      // width: '748px',
      marginLeft: "600px",
    },

    // ["@media (max-width: 768px)"]: {
    //   marginLeft: "430px",
    //   },

    ["@media (max-width: 360px)"]: {
      marginLeft: "256px",
    },
  },

  addIcon: {
    width: "9.7px",
    height: "10.4px",
    margin: "9px 0 8.6px 802px",
    // backgroundColor: '#00a0f0'
    color: "#00a0f0",
    ["@media (max-width:1024px)"]: {
      // width: '748px',
      marginLeft: "600px",
    },
    ["@media (max-width: 360px)"]: {
      marginLeft: "256px",
    },

    // ["@media (max-width:1024px)"]:{
    //     // width: '647px',
    //     marginLeft: '647px'
    // },

    //   ["@media (max-width: 768px)"]: {
    //     marginLeft: "430px",

    //     },

    // ["@media (max-width: 360px)"]: {
    //   marginLeft: "256px",
    //   },
  },

  accordianDrawer: {
    width: "884px",
    height: "110px",
    margin: "0 0 0",
    padding: "11px 21px 13px 16px",
    backgroundColor: "#f7f7f7",
    ["@media (max-width: 768px)"]: {
      width: "680px",
      // marginRight:"30px",
    },
    // ["@media (max-width:1024px)"]: {
    //   width: '750px',
    //   marginLeft: '0px'
    // },

    // ["@media (max-width: 768px)"]: {
    //   marginLeft: "1px",
    //   width:'500px'
    //   },

    ["@media (max-width: 360px)"]: {
      width: "325px",
      marginLeft: "36px",
    },
  },

  content: {
    width: "847px",
    height: "86px",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.75",
    letterSpacing: "normal",
    color: "#414141",
  
  ["@media (max-width: 768px)"]: {
    width: "680px",
    fontSize: "11px",
    // marginRight:"30px",
  },
  ["@media (max-width: 360px)"]: {
    width: "325px",
    fontSize: "11px",
    // marginRight:"30px",
  },},
  // ["@media (max-width: 768px)"]: {
  //   marginLeft: "-8px",
  //   fontSize: '11px'
  //   // width:'500px'
  //   },
  // },

  headingcontent: {
    width: "235px",
    height: "28px",
    margin: "0 -196px 0 0",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "500",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 1.75,
    letterSpacing: "normal",
    color: "#414141",
  
//  ["@media (max-width: 770px) and (min-width:700px)"]: {
  //  margin: "0 0 0 0",
 // },
 
  // ["@media (max-width:768px)"]: {
  //   fontSize:"17px"
  // },
  ["@media (max-width:1024px) and (min-width:780px)"]: {
    // marginLeft:"100px",
    margin: "0 -196px 0 100px",
  },
  ["@media (max-width:700px) and (min-width:600px)"]: {
    // marginLeft:"100px",
    margin: "0 -300px 0 40px;",
  },
  ["@media (max-width:599px) and (min-width:500px)"]: {
    // marginLeft:"100px",
    margin: "0 -358px 0 84px;",
  },
  ["@media (max-width:499px) and (min-width:400px)"]: {
    // marginLeft:"100px",
    margin: "0px -400px 0px 127px;",
    width:"181px",
    fontSize:'13px'
  },
  ["@media (max-width:399px) and (min-width:361px)"]: {
    // marginLeft:"100px",
    margin: "0px -418px 0px 149px;",
    width:"150px",
    fontSize:'11px'
  },

  ["@media (max-width:360px)"]: {
    // marginLeft:"100px",
    fontSize: "11px",
  },
  ["@media (max-width:310px)"]: {
    // marginLeft:"100px",
    fontSize: "8px !important",
    margin:'0px -200px 0 -6px;',
    width:'207px'
  },
  
}
  
}));

export default function FrequentltAsked(props) {
  const classes = useStyles();
  console.log(`props`, props);
  return (
    <Card>
      <Column>
        <img className={classes.iconFixing} src="/images/question.svg" />
        <div className={classes.head}>Frequently Asked Questions</div>

        <div className={classes.root}>
          <Accordion>
            <AccordionSummary
              className={classes.accordionSummary}
              onClick={props.surverAccordian}
            >
              <Typography className={classes.headingcontent}>
                How&nbsp;to&nbsp;fill&nbsp;the&nbsp;patient&nbsp;surver?
              </Typography>
              <Typography className={classes.heading}>
                {props.state.open ? (
                  <span>
                    <RemoveIcon className={classes.minusIcon} />
                  </span>
                ) : (
                  <span>
                    <AddIcon className={classes.addIcon} />
                  </span>
                )}
              </Typography>
            </AccordionSummary>

            <AccordionDetails className={classes.accordianDrawer}>
              <div className={classes.content}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur suscipit turpis rhoncus rutrum ullamcorper.
                <br />
                Maecenas id arcu sit amet massa malesuada pulvinar vitae eu
                enim. Donec et massa purus. Nulla dolor diam,
                <br />
                fermentum quis semper quis, laoreet et libero.
                <br />
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              className={classes.accordionSummary}
              onClick={props.appointmentAccordian}
            >
              <Typography className={classes.headingcontent}>
                How&nbsp;to&nbsp;schedule&nbsp;an&nbsp;appointment&nbsp;with&nbsp;the&nbsp;Anesthesiologist?
              </Typography>
              <Typography className={classes.heading}>
                {props.state.appointment ? (
                  <span>
                    <RemoveIcon className={classes.minusIcon} />
                  </span>
                ) : (
                  <span>
                    <AddIcon className={classes.addIcon} />
                  </span>
                )}
              </Typography>
            </AccordionSummary>

            <AccordionDetails className={classes.accordianDrawer}>
              <div className={classes.content}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur suscipit turpis rhoncus rutrum ullamcorper.
                <br />
                Maecenas id arcu sit amet massa malesuada pulvinar vitae eu
                enim. Donec et massa purus. Nulla dolor diam,
                <br />
                fermentum quis semper quis, laoreet et libero.
                <br />
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              className={classes.accordionSummary}
              onClick={props.paymentAccordian}
            >
              <Typography className={classes.headingcontent}>
                How&nbsp;to&nbsp;make&nbsp;payment&nbsp;if&nbsp;I&nbsp;have&nbsp;a&nbsp;co&nbsp;pay&nbsp;insurance&nbsp;policy?
              </Typography>
              <Typography className={classes.heading}>
                {props.state.payment ? (
                  <span>
                    <RemoveIcon className={classes.minusIcon} />
                  </span>
                ) : (
                  <span>
                    <AddIcon className={classes.addIcon} />
                  </span>
                )}
              </Typography>
            </AccordionSummary>

            <AccordionDetails className={classes.accordianDrawer}>
              <div className={classes.content}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur suscipit turpis rhoncus rutrum ullamcorper.
                <br />
                Maecenas id arcu sit amet massa malesuada pulvinar vitae eu
                enim. Donec et massa purus. Nulla dolor diam,
                <br />
                fermentum quis semper quis, laoreet et libero.
                <br />
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              className={classes.accordionSummary}
              onClick={props.rescheduleAccordian}
            >
              <Typography className={classes.headingcontent}>
                Can&nbsp;I&nbsp;reschedule&nbsp;my&nbsp;appointment?
              </Typography>
              <Typography className={classes.heading}>
                {props.state.reschedule ? (
                  <span>
                    <RemoveIcon className={classes.minusIcon} />
                  </span>
                ) : (
                  <span>
                    <AddIcon className={classes.addIcon} />
                  </span>
                )}
              </Typography>
            </AccordionSummary>

            <AccordionDetails className={classes.accordianDrawer}>
              <div className={classes.content}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur suscipit turpis rhoncus rutrum ullamcorper.
                <br />
                Maecenas id arcu sit amet massa malesuada pulvinar vitae eu
                enim. Donec et massa purus. Nulla dolor diam,
                <br />
                fermentum quis semper quis, laoreet et libero.
                <br />
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              className={classes.accordionSummary}
              onClick={props.virtualmeetingAccordian}
            >
              <Typography className={classes.headingcontent}>
                Can&nbsp;I&nbsp;do&nbsp;the&nbsp;virtual&nbsp;meeting&nbsp;on&nbsp;my&nbsp;mobile?
              </Typography>
              <Typography className={classes.heading}>
                {props.state.virtualmeeting ? (
                  <span>
                    <RemoveIcon className={classes.minusIcon} />
                  </span>
                ) : (
                  <span>
                    <AddIcon className={classes.addIcon} />
                  </span>
                )}
              </Typography>
            </AccordionSummary>

            <AccordionDetails className={classes.accordianDrawer}>
              <div className={classes.content}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur suscipit turpis rhoncus rutrum ullamcorper.
                <br />
                Maecenas id arcu sit amet massa malesuada pulvinar vitae eu
                enim. Donec et massa purus. Nulla dolor diam,
                <br />
                fermentum quis semper quis, laoreet et libero.
                <br />
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </Column>
    </Card>
  );
}
