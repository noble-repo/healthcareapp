import React from "react";
import { Row, Column } from "simple-flexbox";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from "material-ui";
import { grey } from "@material-ui/core/colors";
import { history } from "../../../managers/history";

const Image = styled.img`
  margin-left: 125px;
  width: 132px;
  height: 90px;
  margin-top: 30px !important;
  display: block;
  margin: auto;
`;
const Box = styled.div`
  width: 260px;
  height: 136px;
  border-radius: 2px;
  background-color: #f7f7f7;
  border: solid 0.5px #d4d4d4;
`;
const Box1 = styled.div`
  width: 455px;
  height: 100px;
  border-radius: 2px;
  background-color: #f7f7f7;
  border: solid 0.5px #d4d4d4;
  @media (max-width: 1024px) {
   
    width: 378px;
    }
`;

const Box2 = styled.div`
  width: 455px;
  height: 100px;
  border-radius: 2px;
  background-color: #f7f7f7;
  border: solid 0.5px #d4d4d4;
  @media (max-width: 1024px) {
   
    width: 374px;
    }
`;
const Box3 = styled.div`
  width: 170px;
  height: 102px;
  border-radius: 2px;
  background-color: #ffff;
  border: solid 0.5px #d4d4d4;
  @media (max-width: 1024px) {
    
    width: 126px;
    }
`;
const Container = styled.div`
  width: 946px;
  height: 410px;
  margin-left: 244px;
  border-radius: 2px;
  border: solid 0.5px #d4d4d4;
  @media (max-width: 1024px) {
    margin-left: 1px;
    width: 767px;
    }
    // @media (min-width: 1024px) {
    //   margin-left: 45px;
      
    //   }
`;

const Container1 = styled.div`
  width: 456px;
  height: 203px;
  margin: -14px 33px 4px 242px;
  padding: 0 0 1px;
  border-radius: 2px;
  border: solid 0.5px #d4d4d4;
  background-color: #ffffff;
  @media (max-width: 1024px) {
    margin: -14px 33px 4px -1px;
    width: 380px;
    }
    // @media (min-width: 1024px) {
    //   margin: -14px 33px 4px 43px
    //   }
    
`;
const Container2 = styled.div`
  width: 456px;
  height: 203px;
  margin: -14px 104px 4px 2px;
  padding: 0 0 1px;
  border-radius: 2px;
  border: solid 0.5px #d4d4d4;
  background-color: #ffffff;
  @media (max-width: 1024px) {
    margin: -14px 33px 4px -20px;
    width: 376px;
    }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  heading: {
    width: "113px",
    height: "21px",
    marginLeft: "247px",
    fontFamily: "Roboto",
    fontSize: "18px",
    fontWeight: "bold!important",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#181c1b",
    marginTop: "33px",
    "@media (max-width:1024px) ": {
     marginLeft: "2px",
      },
      // "@media (min-width:1024px) ": {
      //   marginLeft: "66px",
      //    }
  },
  selectFixing: {
    width: "248px",
    height: "40px",

    borderRadius: "2px",
    border: "solid 1px #bdbdbd",
    backgroundColor: "#ffffff",
    marginTop: "18px",
    marginLeft: "584px",
    paddingLeft: "26px",
    "@media (max-width:1024px) ": {
      marginLeft: "405px",
    },
  },
  inner: {
    width: "147px",
    height: "20px",
    marginLeft: "48px",
    fontFamily: "Roboto!important",
    fontSize: "17px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#26292c",
  },
  inner1: {
    width: "72px",
    height: "49px",
    margin: "-6px 37px -2px 83px",
    fontFamily: "Roboto",
    fontSize: "42px",
    fontWeight: 500,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#26292c",
  },
  inner2: {
    width: "147px",
    height: "20px",
    marginLeft: "9px",
    fontFamily: "Roboto!important",
    fontSize: "17px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#26292c",
  },
  inner3: {
    width: "72px",
    height: "49px",
    margin: "-6px 37px -2px 83px",
    fontFamily: "Roboto",
    fontSize: "42px",
    fontWeight: 500,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#26292c",
  },
  inner4: {
    width: "147px",
    height: "20px",
    marginLeft: "9px",
    fontFamily: "Roboto!important",
    fontSize: "17px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#26292c",
  },
  inner5: {
    width: "72px",
    height: "49px",
    margin: "-6px 37px -2px 95px",
    fontFamily: "Roboto",
    fontSize: "42px",
    fontWeight: 500,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#26292c",
  },
  inner6: {
    width: "107px",
    height: "20px",
    margin: "0 52px 5px 158px",
    fontFamily: "Roboto",
    fontSize: "17px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#26292c",
  },
  inner12: {
    width: "107px",
    height: "20px",
    margin: "0 52px 5px 158px",
    fontFamily: "Roboto",
    fontSize: "17px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#26292c",
    "@media (max-width:1024px) ": {
      margin: "0 52px 5px 131px",
      }
  },

  inner7: {
    width: "212px",
    height: "49px",
    margin: "5px 140px 4px",
    fontFamily: "Roboto",
    fontSize: "28px",
    fontWeight: 500,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#26292c",
  },
  inner13: {
    width: "212px",
    height: "49px",
    margin: "5px 182px 4px",
    fontFamily: "Roboto",
    fontSize: "28px",
    fontWeight: 500,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#26292c",
    "@media (max-width:1024px) ": {
      margin: "5px 155px 4px",
      }
  },
  inner8: {
    width: "90px",
    height: "21px",
    margin: "15px 166px 6px",
    fontFamily: "Roboto!important",
    fontSize: "16px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#43c43f",
  },
  inner14: {
    width: "90px",
    height: "21px",
    margin: "15px 192px 6px",
    fontFamily: "Roboto!important",
    fontSize: "16px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#43c43f",
    "@media (max-width:1024px) ": {
      margin: "5px 164px 4px",
      }
  },
  inner9: {
    width: "137px",
    height: "38px",
    marginLeft: "2px",
    fontFamily: "Roboto!important",
    fontSize: "22px",
    fontWeight: 500,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#26292c",
    "@media (max-width:1024px) ": {
      marginLeft: "1px",
      }
  },
  inner15: {
    width: "137px",
    height: "38px",
    marginLeft: "5px",
    fontFamily: "Roboto!important",
    fontSize: "22px",
    fontWeight: 500,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#26292c",
    "@media (max-width:1024px) ": {
      marginLeft: "4px",
      }
  },
  inner16: {
    width: "137px",
    height: "38px",
    marginLeft: "4px",
    fontFamily: "Roboto!important",
    fontSize: "22px",
    fontWeight: 500,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#26292c",
  },
  inner17: {
    width: "137px",
    height: "38px",
    marginLeft: "4px",
    fontFamily: "Roboto!important",
    fontSize: "22px",
    fontWeight: 500,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#26292c",
    "@media (max-width:1024px) ": {
      marginLeft: "3px",
      }
  },
  popover: {
    // marginBottom:"90px",
    marginTop: "-13px",
    height: 125,
    // paddingBottom:50,
  },
  subinner: {
    width: "72px",
    height: "20px",
    // margin: "24px 66px 19px 43px",
    fontFamily: "Roboto!important",
    fontSize: "16px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#26292c",
    marginLeft: "40px",
    "@media (max-width:1024px) ": {
      marginLeft: "31px",
      }
  },
  subinner1: {
    width: "72px",
    height: "20px",
    // margin: "24px 66px 19px 16px",
    fontFamily: "Roboto!important",
    fontSize: "16px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#26292c",
    marginLeft: "8px",
    "@media (max-width:1024px) ": {
      fontSize: "15px",
      marginLeft:"2px",
      }
  },
  icon: {

    position:"relative",
  },
  subinner2: {
    width: "72px",
    height: "20px",
    // margin: "24px 66px 19px 16px",
    fontFamily: "Roboto!important",
    fontSize: "16px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#26292c",
    marginLeft: "40px",
    "@media (max-width:1024px) ": {
      marginLeft: "35px",
      
      }
  },
  subinner5: {
    width: "72px",
    height: "20px",
    // margin: "24px 66px 19px 43px",
    fontFamily: "Roboto!important",
    fontSize: "16px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#26292c",
    marginLeft: "6px",
    "@media (max-width:1024px) ": {
    fontSize: "15px",
    marginLeft: "-1px",
      
      }
  },
  subinner6: {
    width: "72px",
    height: "20px",
    // margin: "24px 66px 19px 16px",
    fontFamily: "Roboto!important",
    fontSize: "16px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#26292c",
    marginLeft: "8px",
    "@media (max-width:1024px) ": {
      fontSize: "15px",
      marginLeft: "6px",
      
      }
  },
  iconFixing: {
width:"29px",
height: "30px",
marginTop: "10px",
position: "absolute",
    zIndex: "4000",
    right: "216px",
    top: "13px",

  },
  subinner7: {
    width: "72px",
    height: "20px",
    // margin: "24px 66px 19px 16px",
    fontFamily: "Roboto!important",
    fontSize: "16px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#26292c",
    marginLeft: "10px",
    "@media (max-width:1024px) ": {
      marginLeft: "3px",
      fontSize: "15px",
      
      }
  },
}));
export default function Dashboard(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(props, "................");
  return (
    <div>
      <Row>
        <div className={classes.heading}>Consultations</div>

       
        <div className = {classes. icon}>
          <select class="ui dropdown" className={classes.selectFixing}>
            
            <option value="" disabled selected hidden>
              {" "}
              &nbsp;Sep 1, 2020 - Sep 30, 2020
            </option>
            <option value="0">&nbsp;Today</option>
            <option value="1">&nbsp;Yesterday</option>
            <option value="2">&nbsp;Last 7 days</option>
            <option value="3">&nbsp;Last 30 Days</option>
            <option value="4">&nbsp;This Month</option>
            <option value="5">&nbsp;Last Month</option>
            <option value="6">&nbsp;Custom Date Range</option>
          </select>
          <img className={classes.iconFixing} src="/images/calander.png"/>
       </div>
      </Row>
      <br />

      <Container>
        <Box>
          <pre></pre>
          <pre></pre>
          {props.state.filteredArray.map((row) => (
            <span className={classes.inner}> {row.consultation}</span>
          ))}

          <span className={classes.inner1}> 280</span>
        </Box>
        <Box>
          <pre></pre>
          <pre></pre>
          {props.state.filteredArray.map((row) => (
            <span className={classes.inner2}>{row.completion}</span>
          ))}
          <span className={classes.inner3}> 260</span>
        </Box>
        <Box>
          <pre></pre>
          <pre></pre>
          {props.state.filteredArray.map((row) => (
            <span className={classes.inner4}> {row.missed}</span>
          ))}
          <span className={classes.inner5}> 02</span>
        </Box>
      </Container>

      <br />
      <br />
      <Row>
        <Container1>
          <Box1>
            <span className={classes.inner6}> Total Revenue</span>
            {props.state.filteredArray.map((row) => (
              <span className={classes.inner7}> {row.number}</span>
            ))}
            {props.state.filteredArray.map((row) => (
              <span className={classes.inner8}> {row.number1}</span>
            ))}
          </Box1>
          <Row>
            <Box3>
              <pre></pre>
              <span className={classes.subinner}> Surgeons</span>
              <pre></pre>
              {props.state.filteredArray.map((row) => (
                <span className={classes.inner9}> {row.number2}</span>
              ))}
            </Box3>
            <Box3>
              <pre></pre>
              <span className={classes.subinner1}> Anaesthesiologist</span>
              <pre></pre>
              {props.state.filteredArray.map((row) => (
                <span className={classes.inner9}> {row.number3}</span>
              ))}
            </Box3>
            <Box3>
              <pre></pre>
              <span className={classes.subinner2}> Patients</span>
              <pre></pre>
              {props.state.filteredArray.map((row) => (
                <span className={classes.inner9}> {row.number4}</span>
              ))}
            </Box3>
          </Row>
        </Container1>

        <Container2>
          <Box2>
            <span className={classes.inner12}> New Patients</span>
            {props.state.filteredArray.map((row) => (
              <span className={classes.inner13}> {row.number5}</span>
            ))}

            {props.state.filteredArray.map((row) => (
              <span className={classes.inner14}> {row.number6}</span>
            ))}
          </Box2>
          <Row>
            <Box3>
              <pre></pre>
              <span className={classes.subinner5}> Survey Incomplete</span>
              <pre></pre>
              {props.state.filteredArray.map((row) => (
                <span className={classes.inner15}> {row.number7}</span>
              ))}
            </Box3>
            <Box3>
              <pre></pre>
              <span className={classes.subinner6}> Surgery Approval</span>
              <pre></pre>
              {props.state.filteredArray.map((row) => (
                <span className={classes.inner16}> {row.number8}</span>
              ))}
            </Box3>
            <Box3>
              <pre></pre>
              <span className={classes.subinner7}>Approval Pending</span>
              <pre></pre>
              {props.state.filteredArray.map((row) => (
                <span className={classes.inner17}> {row.number9}</span>
              ))}
            </Box3>
          </Row>
        </Container2>
      </Row>
    </div>
  );
}
