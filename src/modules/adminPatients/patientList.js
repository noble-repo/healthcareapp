import React from "react";
import { Row, Column } from "simple-flexbox";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from "material-ui";
import { history } from "../../managers/history";
import { statusConstants } from "../../constants";
import { CSVDownload, CSVLink } from "react-csv";


const SearchDataSpan = styled.span`
  width: 230px;
  height: 37px;
  border-radius: 2px;
  background-color: white;
  padding: 1px 9px 7px 3px;
  margin-right: 10px;
  border: 1px solid #bdbdbd;
  margin-left: 15px;
  margin-top: 30px;
`;

const SearchIcon = styled.img`
  margin-left: 70px;
  margin-top: -5px;
`;

const HeadRowLabelHeading = styled.label`
  font-family: Roboto;
  font-size: 10px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.78);
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
const Button = styled.button`
  width: 116px;
  height: 40px;
  margin: 33px 4px 37px 14px;
  border-radius: 2px;
  border: solid 1px #00a0f0;
  background-color: #ffffff;
  font-size: 16px;
  color: #00a0f0;
  font-family: Roboto !important;
  font-weight: 500;
  &:focus {
    outline: blue;
    border: solid 1px #00a0f0;
    color: #00a0f0;
  }
  @media (max-width: 1028px) {
    display: none !important;
  }
`;
const MainButton = styled.button`
  width: 123px;
  height: 40px;
  margin: 33px 10px 37px 5px;
  border-radius: 2px;
  border: 1px solid white;
  background-color: #00a0f0;
  font-size: 16px;
  color: #ffffff;

  font-weight: 500;
  &:focus {
    outline: none;
    border: none;
    /* color: black; */
    color: white;
  }
  @media (max-width: 1028px) {
    display: none !important;
  }
`;
const MainButton1 = styled.button`
  width: 123px;
  height: 40px;
  margin: 33px 10px 37px 92px;
  border-radius: 2px;
  border: 1px solid white;
  background-color: #00a0f0;
  font-size: 16px;
  color: #ffffff;

        marginLeft: "103px!important",
       
      
       
        borderSpacing: "0px 6px",
       
        ['@media (min-width:1028px)']: { 
          borderCollapse: "seperate",
          borderSpacing: "0 15px",
          marginLeft: "30px!important",
          marginRight: " 18px",
          paddingBottom: "10px",
        
        display: "none !important",
         borderCollapse: "separate",
         borderSpacing: "0px 16px",
        }
      },
      tableIpadResponsiveclosed: {
  
        marginLeft: "103px!important",
        
        borderLeft: "1px solid #d4d4d4",
       
        ['@media (min-width:1028px)']: { 
          borderCollapse: "seperate",
          borderSpacing: "0 15px",
          marginLeft: "30px!important",
          marginRight: " 18px",
          paddingBottom: "10px",
         
         display: "none!important",
        }
      },
  font-weight: 500;
  &:focus {
    outline: none;
    border: none;
    /* color: black; */
    color: white;
  }
  @media (min-width: 1028px) {
    display: none !important;
  }
`;
const Button1 = styled.button`
  width: 116px;
  height: 40px;
  margin: 33px 4px 37px 14px;
  border-radius: 2px;
  border: solid 1px #00a0f0;
  background-color: #ffffff;
  font-size: 16px;
  color: #00a0f0;
  font-family: Roboto !important;
  font-weight: 500;
  &:focus {
    outline: blue;
    border: solid 1px #00a0f0;
    color: #00a0f0;
  }
  @media (min-width: 1028px) {
    display: none !important;
  }
`;
const useStyles = makeStyles((theme) => ({
  row: {
    justifyContent: "between",
    marginTop: "15px",
  },
  img: {
    marginLeft: "-15px",
    height: "31px",
    marginRight: "5px",
    marginTop: "30px",
  },
  closeimg: {
    marginLeft: "2px",
    marginTop: "10px",
  },
  spanfixing: {
    fontSize: "18px",
    fontFamily: "Roboto!important",
    fontWeight: "500",
    marginLeft: "5px",
    marginTop: "33px",
    color: "#26292c",
  },
  divfixing: {
    position: "absolute",
    right: "0",
  },
  tabletest: {
    borderCollapse: "separate",
    borderSpacing: "0 10px",
    marginLeft: "25px",
    marginRight: " 12px",
    marginTop: "20px",
    ["@media (max-width:1028px)"]: {
      display: "none!important",
    },
  },

  td: {
    width: "150px",
    height: "55px",
    textAlign: "left",
    borderBottom: "1px solid #e0e0e0",
    borderTop: "1px solid #e0e0e0",
    padding: "5px",
    fontSize: "14px",
    fontFamily: "Roboto",
    color: "#181c1b",
    fontWeight: "normal",
  },
  avatar: {
    backgroundColor: "#43c43f !important",
    fontSize: "14px !important",
    fontFamily: "Roboto!important",
  },

  avatarNo: {
    backgroundColor: "red !important",
    fontSize: "12px !important",
  },
  tdAvatar: {
    textAlign: "center",
    borderBottom: "1px solid #e0e0e0",
    borderTop: "1px solid #e0e0e0",
    paddingLeft: "22px",
    fontFamily: "Roboto!important",
    borderRight: "1px solid #d4d4d4",
  },
  tdAvatar1: {
    textAlign: "center",

    fontFamily: "Roboto!important",
  },
  avatarNo1: {
    backgroundColor: "red !important",
    fontSize: "12px !important",
  },
  tdIcon: {
    width: "100px",
    textAlign: "center",
    borderBottom: "1px solid #e0e0e0",
    borderTop: "1px solid #e0e0e0",
    paddingTop: "5px",
    paddingBottom: "5px",
    paddingLeft: "0px",
    paddingRight: "0px",
    fontSize: "13px",
    fontFamily: "roboto",
    borderLeft: "1px solid #e0e0e0",
  },
  paddingLeft30: {
    // paddingLeft: "30px",
    paddingLeft: "5px",
    fontSize: "14px",
    paddingBottom: "0px",
    fontFamily: "Roboto!important",
  },
  tdPadding: {
    // paddingLeft: "30px",
    paddingLeft: "5px",
    width: "150px",
    textAlign: "left",
    borderBottom: "1px solid #e0e0e0",
    borderTop: "1px solid #e0e0e0",
    padding: "5px",
    fontSize: "14px",
    fontFamily: "Roboto",
    color: "#181c1b",
    fontWeight: "normal",
  },
  tdPaddingMeet: {
    // paddingLeft: "30px",
    // paddingLeft:"5px",
    width: "150px",
    textAlign: "left",
    borderBottom: "1px solid #e0e0e0",
    borderTop: "1px solid #e0e0e0",
    // padding: "5px",
    fontSize: "13px",
    fontFamily: "Roboto",
    color: "#181c1b",
    fontWeight: "normal",
  },
  tdColor: {
    color: "#bdbdbd",
    width: "150px",
    textAlign: "left",
    borderBottom: "1px solid #d4d4d4",
    borderTop: "1px solid #d4d4d4",
    padding: "5px",
    paddingLeft: "25px",
    fontSize: "12px",
    fontFamily: "Roboto",
    fontWeight: "normal",
  },
  tdpadding: {
    width: "150px",
    height: "55px",
    textAlign: "left",
    borderBottom: "1px solid #e0e0e0",
    borderTop: "1px solid #e0e0e0",
    padding: "5px",
    paddingLeft: "25px",
    fontSize: "12px",
    fontFamily: "Roboto",
    color: "#181c1b",
    fontWeight: "normal",
  },

  th: {
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
  thpadding: {
    width: "150px",
    textAlign: "left",
    // paddingLeft: "30px",
    paddingLeft: "5px",
    paddingTop: "0px",

    paddingBottom: "0px",

    paddingRight: "5px",

    fontSize: "14px",
    fontFamily: "Roboto",
    color: "#414141",
  },
  thpaddingdate: {
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
  txt: {
    fontFamily: "Roboto!important",
  },
  thpaddingclear: {
    width: "200px",
    textAlign: "left",
    paddingLeft: "23px",
    paddingTop: "0px",
    paddingBottom: "0px",
    paddingRight: "5px",
    fontSize: "14px",
    fontFamily: "Roboto",
    color: "#414141",
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
    },
  },
  fix: {
    marginLeft: "-34px",
  },
  tableIpadResponsive: {
    marginLeft: "103px!important",
    borderSpacing: "0px 6px",
    ["@media (min-width:1028px)"]: {
      borderCollapse: "seperate",
      borderSpacing: "0 15px",
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
}));

function PatientList(props) {

  function Tabledisplay() {
    return (
      <table className={classes.tabletest}>
        <tr>
          <th />
          <th className={classes.th}> Patient Name</th>
          <th className={classes.th}> Surgery</th>
          <th className={classes.paddingLeft30}>Surgeon</th>
          <th className={classes.th}> Anestheseologist</th>
          <th className={classes.thpadding}> Survey Status</th>
          <th className={classes.thpaddingdate}>Virtual Meeting</th>
          <th className={classes.thpaddingclear}> Surgery Clearance</th>
        </tr>
        {props.state.patientList.length > 0 &&
          props.state.patientList.map((data, index) => (
            <tr onClick={() => history.push("/admin/patient-detail/" + data.surgeryId)} key={index}>
              <td className={classes.tdIcon}>
                <span>
                  <Avatar
                    src={data?.patient?.picture || "/images/download.jpg"}
                    width="30px"
                    height="20px"
                  />
                </span>
              </td>
              <td
                className={classes.td}
                onClick={() => history.push()}
              >
                <a href="#" className={classes.toggleactive}>
                  {data?.patient?.name || ""}{" "}
                </a>
              </td>
              <td className={classes.td}>{data.surgeryType}</td>
              <td className={classes.tdPadding}>
                {data.addedBy.userName || ""}
              </td>
              <td className={classes.td}>
                {data.anesthesiologist.userName || ""}
              </td>
              <td className={classes.tdPadding}>{data.status}</td>
              <td className={classes.tdPaddingMeet}>
                {(data.surgeryDate > 0 && data.surgeryDate) || "Not Assigned"}
              </td>

              {data.status === statusConstants.COMPLETED ? (
                <td className={classes.tdAvatar}>
                  <Avatar className={classes.avatar}>{"Yes"}</Avatar>
                </td>
              ) : (
                <td className={classes.tdAvatar}>
                  <Avatar className={classes.avatarNo}>{"No"}</Avatar>
                </td>
              )}
            </tr>
          ))}
      </table>)


  }
  function TabledisplayAssinged() {
    return (
      <table className={classes.tabletest}>
        <tr>
          <th />
          <th className={classes.th}> Patient Name</th>
          <th className={classes.th}> Surgery</th>
          <th className={classes.paddingLeft30}>Surgeon</th>
          <th className={classes.th}> Anestheseologist</th>
          <th className={classes.thpadding}> Survey Status</th>
          <th className={classes.thpaddingdate}>Virtual Meeting</th>
          <th className={classes.thpaddingclear}> Surgery Clearance</th>
        </tr>
        {props.state.patientList.length > 0 &&
          props.state.patientList.map((data, index) => (data.surgeryDate > 0 ?

            <tr onClick={() => history.push("/admin/patient-detail/" + data.surgeryId)} key={index}>
              <td className={classes.tdIcon}>
                <span>
                  <Avatar
                    src={data?.patient?.picture || "/images/download.jpg"}
                    width="30px"
                    height="20px"
                  />
                </span>
              </td>
              <td
                className={classes.td}
                onClick={() => history.push()}
              >
                <a href="#" className={classes.toggleactive}>
                  {data?.patient?.name || ""}{" "}
                </a>
              </td>
              <td className={classes.td}>{data.surgeryType}</td>
              <td className={classes.tdPadding}>
                {data.addedBy.userName || ""}
              </td>
              <td className={classes.td}>
                {data.anesthesiologist.userName || ""}
              </td>
              <td className={classes.tdPadding}>{data.status}</td>
              <td className={classes.tdPaddingMeet}>
                {(data.surgeryDate > 0 && data.surgeryDate)}
              </td>

              {data.status === statusConstants.COMPLETED ? (
                <td className={classes.tdAvatar}>
                  <Avatar className={classes.avatar}>{"Yes"}</Avatar>
                </td>
              ) : (
                <td className={classes.tdAvatar}>
                  <Avatar className={classes.avatarNo}>{"No"}</Avatar>
                </td>
              )}
            </tr> : ''

          ))}
      </table>
    )

  }


  function TabledisplayNotAssinged() {
    return (
      <table className={classes.tabletest}>
        <tr>
          <th />
          <th className={classes.th}> Patient Name</th>
          <th className={classes.th}> Surgery</th>
          <th className={classes.paddingLeft30}>Surgeon</th>
          <th className={classes.th}> Anestheseologist</th>
          <th className={classes.thpadding}> Survey Status</th>
          <th className={classes.thpaddingdate}>Virtual Meeting</th>
          <th className={classes.thpaddingclear}> Surgery Clearance</th>
        </tr>
        {props.state.patientList.length > 0 &&
          props.state.patientList.map((data, index) => (data.surgeryDate <= 0 ?

            <tr onClick={() => history.push("/admin/patient-detail/" + data.surgeryId)} key={index}>
              <td className={classes.tdIcon}>
                <span>
                  <Avatar
                    src={data?.patient?.picture || "/images/download.jpg"}
                    width="30px"
                    height="20px"
                  />
                </span>
              </td>
              <td
                className={classes.td}
                onClick={() => history.push()}
              >
                <a href="#" className={classes.toggleactive}>
                  {data?.patient?.name || ""}{" "}
                </a>
              </td>
              <td className={classes.td}>{data.surgeryType}</td>
              <td className={classes.tdPadding}>
                {data.addedBy.userName || ""}
              </td>
              <td className={classes.td}>
                {data.anesthesiologist.userName || ""}
              </td>
              <td className={classes.tdPadding}>{data.status}</td>
              <td className={classes.tdPaddingMeet}>
                {"Not Assigned"}
              </td>

              {data.status === statusConstants.COMPLETED ? (
                <td className={classes.tdAvatar}>
                  <Avatar className={classes.avatar}>{"Yes"}</Avatar>
                </td>
              ) : (
                <td className={classes.tdAvatar}>
                  <Avatar className={classes.avatarNo}>{"No"}</Avatar>
                </td>
              )}
            </tr> : ''

          ))}
      </table>
    )

  }



  const checked = props.state.checked
  const checked2 = props.state.checked2
  const array = props.state.patientList.map(row=>({
    PatientName:row?.patient?.name,
    Surgery:row.surgeryType,
    Surgeon:row.addedBy.userName,
    Anestheseologist:row.anesthesiologist.userName,
    Survey_Status:row.status,
    Virtual_Meeting:row.surgeryDate > 0 ?  row.surgeryDate : "Not Assigned",
    Surgery_Clearance:row.status === statusConstants.COMPLETED ?'Yes':'NO'


  }));
  

  const classes = useStyles();
  return (
    <div>
      <Row className={classes.row}>
        <Row>
          <Column>
            {props.state.isOpen ? (
              <img
                className={classes.img}
                src="/images/toggle_icon.svg"
                onClick={() => props.toggleImage()}
              />
            ) : (
              <img
                className={classes.closeimg}
                src="/images/toggle_icon.svg"
                onClick={() => props.toggleImage()}
              />
            )}
          </Column>
          <Column>
            <span className={classes.spanfixing}>Patients</span>
          </Column>
          <Column>
            <SearchDataSpan>
              <HeadRowLabelContentSearch placeholder="Search Patient" id="searchText" onChange={props.onSearch} />
              <HeadRowLabelHeading>
                <SearchIcon
                  src="/images/searchicon.svg"
                  height="17"
                  width="18"
                />
              </HeadRowLabelHeading>
            </SearchDataSpan>
          </Column>
        </Row>
        <Row className={classes.divfixing}>
          <div>
            <MainButton>
              <span className={classes.txt}>View Calendar</span>
            </MainButton>
          </div>
          <CSVLink data={array} separator={","} filename={'patient-list.csv'} target="_blank" onClick={() => {
             
            return true; 
          }}>
            <Button>Export</Button>
          </CSVLink>

        </Row>
      </Row>
      <pre></pre>
      {(checked == false && checked2 == false) || (checked == true && checked2 == true) ? <Tabledisplay /> : checked == true && checked2 == false ? <TabledisplayAssinged /> : <TabledisplayNotAssinged />}



      <Row>
        <div>
          <MainButton1>
            <span className={classes.txt}>View Calendar</span>
          </MainButton1>
        </div>
        <Button1>Export</Button1>
      </Row>
      <table
        className={
          props.state.isOpen
            ? classes.tableIpadResponsive
            : classes.tableIpadResponsiveclosed
        }

      >
        {props.state.patientList.length > 0 &&
          props.state.patientList.map((data) => (
            <tr>
              <tr>
                <tr>
                  <th className={classes.td5}> </th>
                  <th className={classes.td7}>
                    {" "}
                    <span className={classes.fix}>
                      <Avatar
                        src={data?.patient?.picture || "/images/download.jpg"}
                        width="30px"
                        height="20px"
                      />
                    </span>
                  </th>
                </tr>

                <tr>
                  <th className={classes.td5}> Patient Name</th>

                  <td
                    className={classes.td7}
                    onClick={() => history.push()}
                  >
                    <a href="#" className={classes.toggleactive}>
                      {data?.patient?.name || ""}{" "}
                    </a>
                  </td>
                </tr>

                <tr>
                  <th className={classes.td5}> Surgery</th>
                  <td className={classes.td7}> {data.surgeryType}</td>
                </tr>
                <tr>
                  <th className={classes.td5}>Surgeon</th>
                  <td className={classes.td7}>
                    {" "}
                    {data.addedBy.userName || ""}{" "}
                  </td>
                </tr>
                <tr>
                  <th className={classes.td5}>Anestheseologist</th>
                  <td className={classes.td7}>
                    {data.anesthesiologist.userName || ""}
                  </td>
                </tr>
                <tr>
                  <th className={classes.td5}>Survey Status</th>
                  <td className={classes.td7}>{data.status}</td>
                </tr>
                <tr>
                  <th className={classes.td5}>Virtual Meeting</th>
                  <td className={classes.td7}>
                    {(data.surgeryDate > 0 && data.surgeryDate) ||
                      "Not Assigned"}
                  </td>
                </tr>
                <tr>
                  <th className={classes.td5}>SurgeryClearence</th>
                  <td className={classes.td7}>
                    {" "}
                    {data.status === statusConstants.COMPLETED ? (
                      <td className={classes.tdAvatar1}>
                        <Avatar className={classes.avatar}>{"Yes"}</Avatar>
                      </td>
                    ) : (
                      <td className={classes.tdAvatar1}>
                        <Avatar className={classes.avatarNo1}>{"No"}</Avatar>
                      </td>
                    )}
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
      <Row>
        <div className="display-flex flex-direction-row justify-content-space-between margin-left-40px">


          {/* {props.state.patientList.length > 0 &&
          props.state.patientList.map((data, index) => ( */}

          {props.state.patientList && props.state.patientList.length > 0 ? (
            props.state.skip === 0 ? (
              <div className="display-flex flex-direction-column">
                <button
                  disabled
                  className="prev-and-next-btn cursor-not-allowed"
                  style={{
                    width: "123px",
                    height: "40px",
                    // margin: 33px 10px 37px 5px;
                    borderRadius: "2px",
                    border: "1px solid white",
                    backgroundColor: "#00a0f0",
                    fontSize: "16px",
                    color: "#ffffff",
                    fontWeight: "500",
                    marginLeft: "24px",
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
                  style={{
                    width: "123px",
                    height: "40px",
                    // margin: 33px 10px 37px 5px;
                    borderRadius: "2px",
                    border: "1px solid white",
                    backgroundColor: "#00a0f0",
                    fontSize: "16px",
                    color: "#ffffff",
                    fontWeight: "500",
                    marginLeft: "24px",


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

          {props.state.patientList && props.state.patientList.length > 0 ? (
            props.state.patientList &&
              props.state.patientList.length < props.state.limit ? (
              <div className="display-flex flex-direction-column">
                <button
                  disabled
                  className="prev-and-next-btn cursor-not-allowed"
                  style={{
                    width: "123px",
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
                  style={{
                    width: "123px",
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
                    right: "11px",


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
      </Row>
    );
  }
}

export default PatientList;
