import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { Column,Row } from "simple-flexbox";

import styled from "styled-components";
import {history} from "../../../managers/history";

const ContainerDiv = styled.div`
  width: 700px;
`;

const useStyles = makeStyles({
  
  
  
  button: {
    width: "450px",
    height: "40px",
    color: "white",
    backgroundColor: "#00a0f0",
   
    fontSize: "13px",
    fontWeight: 500,
    borderRadius: "4px",
    border: " #00a0f0",
    verticalAlign: "center",
    fontFamily: "Roboto",
   
    outline: "none",
    "&:focus": {
      outline: "none",
    },
  },
 
  docChecklistDiv: {
    display: "flex",
    flexWrap: "wrap",
    width: "700px",
    marginLeft: "663px",
    ['@media (max-width:1024px)']: { 
        width:"587px",
       marginLeft:"392px",
          }
          
  },
  CardContent: {
    padding: "0px",
    paddingBottom: "0px",
    boxShadow: "none",
  },
  
  
  checkBox: {
    color: "#29E224",
    padding: "2px !important",
    opacity:0.7
  },
  checklistDoc: {
    minWidth: "10%",
    height: "784px",
    width: "700px",
  
    borderRadius: 0,
    backgroundColor: "#F8F8F8",
    boxShadow: "none !important",
    margin: "103px 32px 12px -239px",
    ['@media (max-width:768px)']: { 
        width:"700px",
    margin: "103px 32px 12px -357px",
      
          }
  },
  nextBtn: {
    width: "378px",
    height: "35px",
    borderRadius: "4px",
    border: "solid 1px #00a0f0",
    color: "#ffffff",
    fontFamily: "Roboto",
    fontSize: "18px",
    fontWeight: 500,
    backgroundColor: "#00a0f0",
   marginTop: "50px",
  //  marginLeft:"50px",
    // float:"right",
    position: "absolute",
    paddingTop:"10px",
    right: 385,
    // marginRight:"15px",
    marginBottom: "0px",
    // margin: "-1px 5 0 ",
    
    ['@media (max-width:1024px)']: { 
        width:"378px",
       margin:"-1px 325px 0 718px",
          },

          ['@media (max-width:768px)']: { 
            width:"378px",
           margin:"-1px 190px 0 718px",
              }
    
  },
  
  box: {
    width: "699px",
    height: "784px",
    fontSize: "16px",
    fontFamily: "Roboto",
    paddingBottom: "90px",
    paddingTop: "40px",
    paddingLeft: "20px",
    color: "grey",
    marginLeft: "1px",
    
    position: "center",
    borderRadius: "4px",
    border: "solid 1px #e5e5e5",
    backgroundColor: "white",
    marginTop: "8px",
  },
  
  conatiner: {
    overflowX: "hidden",
    width: "900px",
  },
  label: {
    marginLeft: "550px",
    marginTop: "10px",
  },
  
 
 
  text: {
    width: "172px",
    height: "19px",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "500",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#ffffff",
  

  },
});
export default function Forms(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState(0);

  const [index, setIndex] = React.useState(0);
  const handleClick = (event) => {
    console.log("test");
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChangeButton = (value) => {
    if (value > 0 && value <= 2) {
      setValue(value);
      setIndex(value);
    }
  };


  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div>
      <Row>
      <container>
        
                
                
           
              <div className={classes.docChecklistDiv}>
                {props.state.row && props.state.row.length
                  ? props.state.row.map((cell) => (
                      <Card className={classes.checklistDoc}>
                        <CardContent className={classes.CardContent}>
                          {cell.imageUrl === "document" ? (
                            <div className={classes.box}>{cell.imageUrl}</div>
                          ) : (
                            <div className={classes.box}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum diam dolor, ullamcorper a orci in, pharetra maximus erat. Duis tincidunt odio vel elit bibendum, at mattis risus varius. Quisque ultrices non urna vel egestas. Sed ut ante aliquam, malesuada ipsum eu, posuere felis. Praesent pretium vehicula purus, sodales volutpat magna rutrum eget. Pellentesque gravida lacus sed sapien fermentum accumsan sit amet vel lacus. Etiam tellus nisl, consectetur a fringilla at, tristique non dui. Duis a ligula consequat, pharetra elit dapibus, convallis turpis. Maecenas at purus at odio auctor sodales efficitur eu dui. Morbi ex arcu, eleifend nec odio a, rhoncus fermentum eros. Aenean vitae erat posuere, faucibus neque  vel, molestie nunc. Cras id dolor ac eros eleifend suscipit. Aliquam erat volutpat. Sed eu dictum felis. Vestibulum eget ligula vel augue malesuada gravida ac sed neque. Fusce a placerat neque. <br/> <br/>

                            Etiam vehicula, justo eget dictum sagittis, eros diam efficitur lacus, a dignissim lectus lorem ut velit. Sed pretium diam nisl, sed porttitor sapien lacinia eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempor velit vel magna accumsan, quis aliquam odio gravida. Morbi feugiat vestibulum erat elementum maximus. Morbi suscipit lacus quis ultrices suscipit. Suspendisse non placerat nibh. Praesent ipsum orci, fermentum eu neque a, pulvinar condimentum tellus. Quisque ornare vel erat quis vehicula. Sed in volutpat nisl. Nam vehicula nibh arcu, sed euismod magna pellentesque vel. Vestibulum id dignissim erat, nec vehicula nulla. <br/> <br/>
                            
                            Praesent ullamcorper molestie semper. Maecenas finibus id dui eu consectetur. Nunc condimentum porta scelerisque. Aenean facilisis sodales enim quis semper. Integer suscipit molestie justo, porttitor malesuada urna. Nunc et magna fermentum, convallis dui vitae, pellentesque risus. Nunc nec augue quis lacus dictum interdum. Ut pellentesque magna ac dolor congue convallis. Curabitur convallis velit porttitor augue ornare, vitae sagittis urna scelerisque. Aliquam scelerisque sapien eu urna imperdiet tincidunt. Curabitur dictum fringilla mattis. Donec dictum ipsum quis nunc elementum, viverra maximus magna lobortis. <br/> <br/>
                            
                            In euismod hendrerit risus quis commodo. Integer quis ultrices magna. Etiam pretium, enim quis blandit malesuada, nisl urna consequat justo, sit amet posuere velit lacus eget neque. Proin venenatis dignissim porttitor. Vivamus porta sapien et molestie fringilla. Suspendisse suscipit nec metus vitae rutrum. Curabitur suscipit purus ac consequat tincidunt. Quisque venenatis magna non placerat placerat. Nunc vestibulum placerat tortor, eleifend rutrum felis. In ultrices vulputate egestas. Vivamus tempor elit gravida nisi porta iaculis.</div>
                          )}
                          <Typography>
                           

                            
                          </Typography>
                        </CardContent>

                      </Card>
                      
                    ))
                  : ""}
              </div>
        
       
      </container>

    
      </Row>
      <Column>
     <btn    
              onClick={() => handleChangeButton()}
              className={classes.nextBtn}
              onClick={() => history.push("/patient/dashboard")}
            >
        <span className={classes.text}> <center>I Accept Hippa Consent  </center></span>
            </btn>
            </Column>
    </div>
  );
}
