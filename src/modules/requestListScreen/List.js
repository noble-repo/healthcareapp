import React from "react";
import { Row, Column } from "simple-flexbox";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { history } from "../../managers/history";
const InputBox = styled.input`
  width: 230px;
  height: 40px;
  margin: 14px 119px 37.5px 15px;
  padding: 11px 12px 11px 16px;
  border-radius: 2px;
  border: solid 1px #bdbdbd;
  background-color: #ffffff;
  font-family: Roboto-Regular;
  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #b5b5b5;
  &:focus {
    outline: none;
    transition: all 0.3s;
    border: none;
  }
 
          

`;
const OpenImage = styled.img`
  width: 40px;
  height: 40px;
  margin-left: -61px;
  position:absolute;
  top:86px;
  /* margin-top: 14px; */
`;
const CloseImage = styled.img`
    width: 40px;
    height: 40px;
    margin-left: 4px;
    margin-right: 14px;
    position:absolute;
    top:86px;
    /* margin-top: 14px; */

    @media (max-width:1024px) { 
      margin-left: -215px;
  }

    `;
const MainHeading = styled.span`
width: 75px;
  height: 22px;
  margin: 20px 15px 46px -28px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: normal;
  text-align: left;
  color: #26292c;
  /* position:absolute;
  top:86px;
  */
  
  @media (max-width:1024px) { 
    margin: 23.5px 15px 46px 136px !important;
}
  `;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "100px",
    marginRight: "193px",
    ["@media (max-width:1024px)"]: {
      marginRight: "283px",
    },
  },

  tableHeadingsResponsive: {
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.21",
    letterSpacing: "normal",
    borderLeft: "solid 1px #d4d4d4",
    borderTop: "solid 1px #d4d4d4",
    width: "130px",
    textAlign: "left",
    borderBottom: "1px solid #d4d4d4",
    padding: "13px",
    fontSize: "14px",
    fontWeight: "normal",
    fontFamily: "roboto",
    color: "#181c1b",
  },

  tableIpadResponsive: {
    marginLeft: "103px!important",
    borderSpacing: "0px 6px",
    ["@media (min-width:1028px)"]: {
      marginLeft: "30px!important",
      marginRight: " 18px",
      paddingBottom: "10px",

      display: "none!important",
      borderCollapse: "separate",
      borderSpacing: "0px 16px",
    },
  },
  tableIpadResponsiveclosed: {
    marginLeft: "103px!important",
    ["@media (min-width:1028px)"]: {
      borderCollapse: "seperate",
      borderSpacing: "0 15px",
      marginLeft: "30px!important",
      marginRight: " 18px",
      paddingBottom: "10px",
      display: "none!important",
    },
  
  },

  tableheadings: {
    width: "20%",
    height: "17px",
    margin: "38.5px 124px 13px 95px",
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "500",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.21",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#414141",
    paddingLeft: "10px",
  },

  tableheadings1: {
    width: "20%",
    height: "17px",
    margin: "38.5px 124px 13px 95px",
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "500",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.21",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#414141",
    paddingLeft: "56px",
  },

  tablecontent: {
    width: "20%",
    height: "19px",
    margin: "1px 145px 0 0",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.19",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#181c1b",
    paddingLeft: "14px !important",
    paddingTop: "2px",
    borderTop: "solid 1px #d4d4d4",
    borderBottom: "solid 1px #d4d4d4",
    borderLeft: "solid 1px #d4d4d4",
  },

  tablesecond: {
    width: "80%",
    marginTop: "24px",
    marginLeft: "10px",
    borderCollapse: "separate",
    borderSpacing: "0px 29px",

    ["@media (max-width:1028px)"]: {
      display: "none !important",
      borderSpacing: "0px 29px",
    },
  },
  paddingLastname: {
    width: "20%",
    height: "19px",
    margin: "1px 145px 0 0",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.19",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#181c1b",
    paddingLeft: "10px",
    paddingTop: "2px",
    borderTop: "solid 1px #d4d4d4",
    borderBottom: "solid 1px #d4d4d4",
  },

  paddingEmail: {
    width: "20%",
    height: "19px",
    margin: "1px 145px 0 0",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.19",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#181c1b",
    paddingLeft: "10px",
    paddingTop: "2px",
    borderTop: "solid 1px #d4d4d4",
    borderBottom: "solid 1px #d4d4d4",
  },

  paddingPhone: {
    width: "20%",
    height: "19px",
    margin: "1px 145px 0 0",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.19",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#181c1b",
    paddingLeft: "10px",
    paddingTop: "2px",
    borderTop: "solid 1px #d4d4d4",
    borderBottom: "solid 1px #d4d4d4",
  },

  paddingCompanyname: {
    width: "20%",
    height: "19px",
    margin: "1px 145px 0 0",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.19",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#181c1b",
    paddingLeft: "10px",
    paddingTop: "2px",
    borderTop: "solid 1px #d4d4d4",
    borderBottom: "solid 1px #d4d4d4",
  },
  td5: {
    width: "130px",
    textAlign: "left",
    borderBottom: "1px solid #d4d4d4",
    borderLeft: "1px solid #d4d4d4",
    padding: "9px",
    fontSize: "12px",
    fontWeight: "normal",
    fontFamily: "roboto",
    color: "#181c1b",
    borderTop: "1px solid #d4d4d4",
  },

  td7: {
    width: "130px",
    textAlign: "left",
    borderBottom: "1px solid #d4d4d4",
    borderTop: "1px solid #d4d4d4",
    padding: "7px",
    fontSize: "12px",
    fontWeight: "normal",
    fontFamily: "roboto",
    color: "#181c1b",
    borderRight: "1px solid #d4d4d4",
  },

  paddingService: {
    width: "20%",
    height: "19px",
    margin: "1px 145px 0 0",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.19",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#181c1b",
    paddingLeft: "10px",
    paddingTop: "2px",
    borderTop: "solid 1px #d4d4d4",
    borderBottom: "solid 1px #d4d4d4",
  },

  paddingStatus: {
    width: "20%",
    height: "19px",
    margin: "1px 145px 0 0",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.19",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#181c1b",
    paddingLeft: "10px",
    paddingTop: "2px",
    borderTop: "solid 1px #d4d4d4",
    borderBottom: "solid 1px #d4d4d4",
    borderRight: "solid 1px #d4d4d4",
  },

  tableRow: {
    // width: '1577px',
    width: "100%",
    height: "77px",
    margin: "13px 27px 14px 29px",
    padding: "29px 58px 28px 66px",
    borderRadius: "2px",
    boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.05)",
    border: "solid 1px #d4d4d4 !important",
    backgroundColor: "#ffffff",
  },
  tableContentResponsive: {
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.19",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#181c1b",
    paddingLeft: "40px",
    paddingTop: "3px",
    borderRight: "solid 1px #d4d4d4",
    borderTop: "solid 1px #d4d4d4",
    borderBottom: "solid 1px #d4d4d4",
  },

  mainHeading: {
   
    ["@media (max-width:1028px)"]: {
      marginLeft: "120px",
    },

    ["@media (max-width:768px)"]: {
      marginLeft: "50px",
    },
  },

  // Classes after SideBar is Closed Starts from here.
  rootClosed: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "100px",
    marginRight: "193px",
    ["@media (max-width:1024px)"]: {
      marginRight: "283px",
    },
  },

  mainHeadingClosed: {
    marginLeft:"20px",
    ["@media (max-width:1028px)"]: {
      marginLeft: "120px",
    },

    ["@media (max-width:768px)"]: {
      marginLeft: "50px",
    },
  },

  tableheadingsClosed: {
    width: "20%",
    height: "17px",
    margin: "38.5px 124px 13px 95px",
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "500",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.21",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#414141",
    paddingLeft: "10px",
  },
  tableheadingsClosed1: {
    width: "20%",
    height: "17px",
    margin: "38.5px 124px 13px 95px",
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "500",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.21",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#414141",
    paddingLeft: "59px",
  },
  tablesecondClosed: {
    width: "86%",
    marginTop: "24px",
    marginRight: "268px",
    marginLeft: "10px",
    borderCollapse: "separate",
    borderSpacing: "0px 29px",

    ["@media (max-width:1028px)"]: {
      display: "none !important",
      borderSpacing: "0px 29px",
    },
  },
  tableRowClosed: {
    width: "100%",
    height: "77px",
    margin: "13px 27px 14px 29px",
    padding: "29px 58px 28px 66px",
    borderRadius: "2px",
    boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.05)",
    border: "solid 1px #d4d4d4 !important",
    backgroundColor: "#ffffff",
  },

  tablecontentClosed: {
    width: "20%",
    height: "19px",
    margin: "1px 145px 0 0",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.19",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#181c1b",
    paddingLeft: "14px !important",
    paddingTop: "2px",
    borderTop: "solid 1px #d4d4d4",
    borderBottom: "solid 1px #d4d4d4",
  },
  tablecontentClosed1: {
    width: "20%",
    height: "19px",
    margin: "1px 145px 0 0",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.19",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#181c1b",
    paddingLeft: "14px !important",
    paddingTop: "2px",
    borderTop: "solid 1px #d4d4d4",
    borderBottom: "solid 1px #d4d4d4",
    borderLeft: "solid 1px #d4d4d4",
  },
  tablecontentClosed2: {
    width: "20%",
    height: "19px",
    margin: "1px 145px 0 0",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.19",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#181c1b",
    paddingLeft: "14px !important",
    paddingTop: "2px",
    borderTop: "solid 1px #d4d4d4",
    borderBottom: "solid 1px #d4d4d4",
    borderRight: "solid 1px #d4d4d4",
  },
  tableHeadingsResponsiveClosed: {
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "500",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.21",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#414141",
    paddingTop: "17px",
    borderLeft: "solid 1px #d4d4d4",
    borderTop: "solid 1px #d4d4d4",
    borderBottom: "solid 1px #d4d4d4",
  },
  tableContentResponsiveClosed: {
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.19",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#181c1b",
    paddingRight: "178px",
    paddingTop: "17px",
    borderRight: "solid 1px #d4d4d4",
    borderTop: "solid 1px #d4d4d4",
    borderBottom: "solid 1px #d4d4d4",
  },
  headers:{
    position:"absolute",
    top:85,
    marginLeft:"40px",
  }
}));

function List(props) {
  const classes = useStyles();
  return (
    <div className="w-100">
      <div className={props.state.isOpen ? classes.root : classes.rootClosed}>
        <Column className="w-100">
          <Row>
            {props.state.isOpen ? (
              <OpenImage
                src="/images/toggle_icon.svg"
                class="Group-6"
                onClick={() => {
                  props.toggleImage();
                }}
              />
            ) : (
              <CloseImage 
                className="closeimg"
                src="/images/toggle_icon.svg"
                onClick={() => {
                  props.toggleImage();
                }}
              />
            )}
            <Row className={classes.headers}>
            
            <MainHeading
              className={
                props.state.isOpen
                  ? classes.mainHeading
                  : classes.mainHeadingClosed
              }
            >
              Requests
            </MainHeading>

            <InputBox placeholder="Search Requests" onChange={props.onSearch} />
            <img
              style={{ marginTop: "26px", marginLeft: "-146px" }}
              src="/images/noun_Search_2331678.svg"
              width="18px"
              height="17px"
            />
            </Row>
          </Row>
          <table
            className={
              props.state.isOpen
                ? classes.tablesecond
                : classes.tablesecondClosed
            }
          >
            <tr>
              <th
                className={
                  props.state.isOpen
                    ? classes.tableheadings
                    : classes.tableheadingsClosed
                }
              >
                {"First Name"}
              </th>
              <th
                className={
                  props.state.isOpen
                    ? classes.tableheadings
                    : classes.tableheadingsClosed
                }
              >
                {"Last Name"}
              </th>
              <th
                className={
                  props.state.isOpen
                    ? classes.tableheadings1
                    : classes.tableheadingsClosed1
                }
              >
                {"Email"}
              </th>
              <th
                className={
                  props.state.isOpen
                    ? classes.tableheadings
                    : classes.tableheadingsClosed
                }
              >
                {"Phone"}
              </th>
              <th
                className={
                  props.state.isOpen
                    ? classes.tableheadings
                    : classes.tableheadingsClosed
                }
              >
                {"Company Name"}
              </th>
              <th
                className={
                  props.state.isOpen
                    ? classes.tableheadings
                    : classes.tableheadingsClosed
                }
              >
                {"Service"}
              </th>
              <th
                className={
                  props.state.isOpen
                    ? classes.tableheadings
                    : classes.tableheadingsClosed
                }
              >
                {"Status"}
              </th>
            </tr>
            {props.state.clinicList.length > 0 &&
              props.state.clinicList.map((row, index) => (
                <tr
                  className={
                    props.state.isOpen
                      ? classes.tableRow
                      : classes.tableRowClosed
                  }
                  onClick={() =>
                    history.push("/admin/request-details/" + row.clinicId)
                  }
                  key={index}
                >
                  <td
                    className={
                      props.state.isOpen
                        ? classes.tablecontent
                        : classes.tablecontentClosed1
                    }
                  >
                    {row.owner.firstName || ""}
                  </td>
                  <td
                    className={
                      props.state.isOpen
                        ? classes.paddingLastname
                        : classes.tablecontentClosed
                    }
                  >
                    {row.owner.lastName || ""}
                  </td>
                  <td
                    className={
                      props.state.isOpen
                        ? classes.paddingEmail
                        : classes.tablecontentClosed
                    }
                  >
                    {row.owner.email || ""}
                  </td>
                  <td
                    className={
                      props.state.isOpen
                        ? classes.paddingPhone
                        : classes.tablecontentClosed
                    }
                  >
                    {row.owner.phone || ""}
                  </td>
                  <td
                    className={
                      props.state.isOpen
                        ? classes.paddingCompanyname
                        : classes.tablecontentClosed
                    }
                  >
                    {row.name || ""}
                  </td>
                  <td
                    className={
                      props.state.isOpen
                        ? classes.paddingService
                        : classes.tablecontentClosed
                    }
                  >
                    {row.clinicType || ""}
                  </td>
                  <td
                    className={
                      props.state.isOpen
                        ? classes.paddingStatus
                        : classes.tablecontentClosed2
                    }
                  >
                    {row.status || ""}
                  </td>
                </tr>
              ))}
          </table>
        </Column>
      </div>
      <table className = {props.state.isOpen ?  classes.tableIpadResponsive : classes.tableIpadResponsiveclosed}>
                     {props.state.clinicList.length > 0 &&
              props.state.clinicList.map((row, index) => (
            <tr>
                
              <tr>

              <tr >
    
   
  </tr>    
          
  <tr >
    <th className = {classes.td5}>{"First Name"}</th>
    
    <td className={classes.td7} > {row.owner.firstName || ""}</td>
  </tr>
   
   <tr >
    <th className = {classes.td5}>  {"Last Name"}</th>
    <td className = {classes.td7} > {row.name || ''}</td>
  </tr>
  <tr >
    <th className = {classes.td5}>{"Email"}</th>
    <td className ={classes.td7}>  {row.owner.email || ""} </td>
  </tr>
   <tr >
    <th className = {classes.td5}>{"Phone"}</th>
    <td className = {classes.td7}>{row.owner.phone || ""}</td>
  </tr>
  <tr >
    <th className = {classes.td5}>{"Company Name"}</th>
    <td className = {classes.td7}> {row.name || ""}</td>
  </tr>
   <tr >
    <th className = {classes.td5}>{"Service"}</th>
    <td className = {classes.td7}> {row.clinicType || ""}</td>
  </tr> 
   
  <tr >
   <th className = {classes.td5}>Status</th>
    <td className = {classes.td7}>  {row.status || ""}
                            </td>
                        
  </tr>     
  </tr>
  <pre></pre>
  <pre></pre>
  </tr>
  ))}
</table>


<PrevAndNextBtnView
                            onPagePrevious={props.onPagePrevious}
                            onPageNext={props.onPageNext}
                            state={props.state}
                        />

    </div>
  );


  function PrevAndNextBtnView(props) {
    return (
        <div className="display-flex flex-direction-row justify-content-space-between margin-left-40px">

{/* {props.state.clinicList.length > 0 &&
              props.state.clinicList.map((row, index) => ( */}

            {props.state.clinicList && props.state.clinicList.length > 0 ? (
                props.state.skip === 0 ? (
                  <div className="display-flex flex-direction-column">
                  <button
                      disabled
                      className="prev-and-next-btn cursor-not-allowed"
                      style={{ width: "123px",
                        height: "40px",
                        // margin: 33px 10px 37px 5px;
                        borderRadius: "2px",
                        border: "1px solid white",
                        backgroundColor: "#00a0f0",
                        fontSize: "16px",
                        color: "#ffffff",
                        fontWeight: "500",
                        marginLeft: "10px",
                         display: "none",
                       
                       
                      }}
                      onClick={() => props.onPagePrevious()}
                  >
                      {"<< Previous"}
                  </button>
              </div>
          ) : (
              <div className="display-flex flex-direction-column">
                  {" "}
                  {/* skip greater thn 0 */}
                  <button
                      className="prev-and-next-btn cursor-pointer"
                      style={{ width: "123px",
                        height: "40px",
                        // margin: 33px 10px 37px 5px;
                        borderRadius: "2px",
                        border: "1px solid white",
                        backgroundColor: "#00a0f0",
                        fontSize: "16px",
                        color: "#ffffff",
                        fontWeight: "500",
                        marginLeft: "10px",
                       
                       
                      }}
                      onClick={() => props.onPagePrevious()}
                  >
                      {"<< Previous"}
                  </button>
              </div>
                )
            ) : (
                ""
            )}

            {props.state.clinicList && props.state.clinicList.length > 0 ? (
                props.state.clinicList &&
                props.state.clinicList.length < props.state.limit ? (
                  <div className="display-flex flex-direction-column">
                  <button
                      disabled
                      className="prev-and-next-btn cursor-not-allowed"
                      style={{ width: "123px",
                        height: "40px",
                        // margin: 33px 10px 37px 5px;
                        borderRadius: "2px",
                        border: "1px solid white",
                        backgroundColor: "#00a0f0",
                        fontSize: "16px",
                        color: "#ffffff",
                        fontWeight: "500",
                         display: "none",
                        marginLeft: "889px",
                       
                      }}
                      onClick={() => props.onPageNext()}
                  >
                      {"Next >>"}
                  </button>
              </div>
          ) : (
              <div className="display-flex flex-direction-column">
                  <button
                      className="prev-and-next-btn cursor-pointer m-r-29pxs"
                      style={{ width: "123px",
                        height: "40px",
                        // margin: 33px 10px 37px 5px;
                        borderRadius: "2px",
                        border: "1px solid white",
                        backgroundColor: "#00a0f0",
                        fontSize: "16px",
                        color: "#ffffff",
                        fontWeight: "500",
                        // marginLeft: "849px",
                        position: "absolute",
                        right: "190px",
                        
                       
                      }}
                      onClick={() => props.onPageNext()}
                  >
                      {"Next >>"}
                  </button>
                  {" "}
              
              </div>
                )
            ) : (
                ""
            )}
        </div>
    );
}
}

export default List;
