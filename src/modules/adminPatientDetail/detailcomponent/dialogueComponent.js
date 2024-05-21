// import React from "react";
// import Dialog from "@material-ui/core/Dialog";
// import styled from "styled-components";
// import { makeStyles } from "@material-ui/core/styles";

// const Card = styled.div`
//   display: flex;
//   justify-content: center;
//   width: 449px;
//   height: 505px;
//   margin-top: 105px;
// `;

// const Container = styled.div`
//   width: 449px;
//   height: 505px;
//   position: center;
//   border-radius: 4px;
//   box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.05);
//   border: solid 1px #e5e5e5;
//   background-color: white;
// `;
// const Title = styled.div`
// font-family: Helvetica;
// font-size: 18px;
// font-weight: 500;
// font-stretch: normal;
// font-style: normal;
// line-height: 1.18;
// letter-spacing: normal;
// text-align: center;
// color: #26292c;
//   width: 365px;
//   height: 25px;
//   margin-left: 37px;
//   margin-top: 22px
  
// `;
// const CloseButton = styled.img`
//   margin-top: -20px;
//   margin-right: 18px;
//   float: right;
//   padding-left: 140px;
// `;
// const Type = styled.div`
//   font-family: Roboto;
//   font-size: 14px;
//   font-weight: normal;
//   font-stretch: normal;
//   font-style: normal;
//   line-height: normal;
//   letter-spacing: normal;
//   color: #181c1b;
//   text-align: left;
//   margin-top: 23px;
//   padding-left: 20px;
//   padding-bottom: 2px;
// `;
// const Conditions = styled.div`
//   font-size: 14px;
//   font-weight: normal;
//   font-stretch: normal;
//   font-style: normal;
//   line-height: normal;
//   letter-spacing: normal;
//   color: #181c1b;
//   text-align: left;
//   padding-top: 23px;
//   padding-left: 20px;
//   padding-bottom: 2px;
// `;
// const Input = styled.input`
//   font-family: Roboto;
//   font-size: 16px;
//   font-weight: normal;
//   font-stretch: normal;
//   font-style: normal;
//   line-height: normal;
//   letter-spacing: normal;
//   color: #b5b5b5;
//   width: 390px;
//   height: 227px;
//   border: 1px solid lightgrey;
//   padding-left: 10px;
//   outline: none;
//   border-radius: 4px;
//   transition: all 0.3s;
//   margin-left: 32px;
// `;
// const Select = styled.select`
//   font-family: Roboto;
//   font-size: 14px;
//   font-weight: normal;
//   font-stretch: normal;
//   font-style: normal;
//   line-height: normal;
//   letter-spacing: normal;
//   color: #181c1b;
//   width: 390px;
//   height: 50px;
//   border: 1px solid lightgrey;
//   padding-left: 10px;
//   outline: none;
//   border-radius: 5px;
//   transition: all 0.3s;
//   margin-left: 32px;
// `;
// const Button = styled.button`
//   font-family: Roboto;
//   font-size: 16px;
//   font-weight: 500;
//   font-stretch: normal;
//   font-style: normal;
//   line-height: normal;
//   letter-spacing: normal;
//   color: #ffffff;
//   width: 390px;
//   height: 50px;
//   background-color: #00a0f0;
//   padding-top: 5px;
//   font-size: 13px;
//   border-radius: 4px;
//   border: #00a0f0;
//   vertical-align: center;
//   font-family: Roboto;
//   margin-top: 21px;
//   margin-left: 32px;
//   &:focus {
//     outline: none;
//     border-radius: 5px;
//     transition: all 0.3s;
//     border: none;
//   }
// `;
// const useStyles = makeStyles({
//   box: {
//     // marginBottom: "140px",
//   },
// });

// export default function AlertDialog(props) {
//   const classes = useStyles();
//   return (
//       <div style= {{marginTop: "92px"}}>
//     <Card>
//       <Dialog
//         open={props.state.open}
//         onClose={props.handleDialog}
//         className={classes.box}
//         marginTop= "300px"
//       >
//         <Container>
//           <Title>Send Reminder</Title>
          
//           <pre></pre>
//           <pre></pre>
//           <Select class="ui dropdown" className="select-fixing">
//             <option value="">Complete Survey Reminder</option>
            
//           </Select>
          
//           <pre></pre>
         
//           <Input type="text" placeholder="Auto Generated Reminder Text" style= {{fontSize: "16px", 
  
  
//   fontFamily: "Helvetica",fontWeight: "bold",paddingLeft: "96px" }}></Input>
         
//           <Button type="button"  onClick={props.handleDialog} value={props.selectValue} onChange={props.handleChange}>Send Reminder</Button>
//         </Container>
//       </Dialog>
//     </Card>
//     </div>
//   );
// }
