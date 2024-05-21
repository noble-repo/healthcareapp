import React from "react";
import {Row, Column} from "simple-flexbox";
import styled from "styled-components";
import {makeStyles} from "@material-ui/core/styles";
import {Avatar} from "material-ui";
import {history} from "../../../managers/history";
import {statusConstants} from "../../../constants";

const SearchDataSpan = styled.span`
  width: 230px;
  height: 33px;
  border-radius: 2px;
  background-color: white;
  padding: 1px 9px 7px 3px;
  margin-right: 10px;
  border: 1px solid #bdbdbd;
  margin-left: 15px;
  margin-top: 30px;
  font-family:Roboto;
`;

const SearchIcon = styled.img`
  margin-left: 70px;
  margin-top: -5px;
`;

const Circle = styled.span`
  border-radius: 23px;
  padding: 5px 9px;
  border: 2px solid #d5d5d5;
  vertical-align: middle;
`;
const HeadRowLabelHeading = styled.label`
  font-family: Roboto;
  font-size: 10px;
  width:50px;
  height:18px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.78);
`;
const HeadRowLabelContentSearch = styled.input`
  margin-left: 5px;
  max-width: 118px;
  margin-top:4px;
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
  width: 123px;
  height: 40px;
  margin: 33px 4px 37px 14px;
  border-radius: 2px;
  border: solid 1px #00a0f0;
  background-color: #ffffff;
  font-size: 16px;
  color: #00a0f0;
  font-family: Roboto;
  font-weight: 500;
  &:focus {
    outline: blue;
    border: none;
    border: solid 1px #00a0f0;
    color: #00a0f0;
  }
`;
const MainButton = styled.button`
width: 123px;
height: 40px;
background-color: rgb(0, 160, 240);
font-size: 16px;
color: rgb(255, 255, 255);
font-weight: 500;
margin: 33px 10px 37px 5px;
border-radius: 2px;
border-width: 1px;
border-style: solid;
border-color: white;
border-image: initial;
  font-family: Roboto !important;
  font-weight: 500;
  &:focus {
    outline: none;
    border: none;
    /* color: black; */
    color: white;
    font-family: Roboto;
  }
`;
const useStyles = makeStyles((theme) => ({
    rowborder: {
        border: "1px solid black",
        margin: "10px",
    },

    check: {
        width: "10px",
        color: "#8cc63f",
        fontWeight: "bold",
        padding: "5px",
    },

    circles: {
        backgroundColor: "green",
        marginRight: "10px",
        marginLeft: "0px",
        color: "white",
    },
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

    btn: {
        width: "90px",
        height: "30px",
        margin: "0px 10px 37px 5px",
        borderRadius: "2px",
        border: "1px solid white",
        backgroundColor: "#00a0f0",
        fontSize: "11px",
        color: "white",
        fontWeight: "500px",
    },
    tabletest: {
        borderCollapse: "separate",
        borderSpacing: "0 10px",
        marginLeft: "25px",
        marginRight: " 12px",
        marginTop: "21px",
    },

    td: {
        width: "150px",
        height: "55px",
        textAlign: "left",
        borderBottom: "1px solid #e0e0e0",
        borderTop: "1px solid #e0e0e0",
        padding: "5px",
        fontSize: "12px",
        fontFamily: "Roboto",
        color: "#181c1b",
        fontWeight: "normal",
    },
    datebuttonfixing: {
        width: "75px",
        height: "24px",
        margin: "0px 0px 0px 0px",
        padding: "3px 7px 10px 10px",
        borderRadius: "2px",
        border: "solid 1px #00a0f0",
        backgroundColor: "#ffffff",
        fontSize: "11px",
        color: "#00a0f0",
        fontFamily: "Roboto!important"
    },
    avatar: {
        backgroundColor: "#43c43f !important",
        fontSize: "12px !important",
        fontFamily: "Roboto!important",
    },

    avatarNo: {
        backgroundColor: "red !important",
        fontSize: "12px !important",
        fontFamily: "Roboto!important",
    },
    tdAvatar: {
        textAlign: "center",
        borderBottom: "1px solid #e0e0e0",
        borderTop: "1px solid #e0e0e0",
        paddingLeft: "22px",
        fontFamily: "Roboto!important",
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
        paddingLeft: "30px",
        fontSize: "11px",
        paddingBottom: "0px",
    },
    tdPadding: {
        paddingLeft: "30px",
        width: "150px",
        textAlign: "left",
        borderBottom: "1px solid #e0e0e0",
        borderTop: "1px solid #e0e0e0",
        padding: "5px",
        fontSize: "12px",
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
    br: {
        borderRight: "1px solid #e0e0e0",
        borderTop: "1px solid #e0e0e0",
        borderBottom: "1px solid #e0e0e0",
    },
    tdpaddingLeft20: {
        width: "150px",
        textAlign: "left",
        borderBottom: "1px solid #e0e0e0",
        borderTop: "1px solid #e0e0e0",
        // padding:'5px',
        paddingLeft: "20px",
        fontSize: "12px",
        fontFamily: "Roboto",
        color: "#181c1b",
        fontWeight: "normal",
    },
    paddingLeft20: {
        paddingLeft: "20px",
        fontSize: "11px",
        paddingBottom: "0px",
    },
    th: {
        width: "150px",
        textAlign: "left",
        paddingLeft: "5px",
        paddingTop: "5px",

        paddingBottom: "0px",

        paddingRight: "5px",

        fontSize: "11px",
        fontFamily: "Roboto",
        color: "#414141",
    },
    thpadding: {
        width: "150px",
        textAlign: "left",
        paddingLeft: "30px",
        paddingTop: "5px",

        paddingBottom: "0px",

        paddingRight: "5px",

        fontSize: "11px",
        fontFamily: "Roboto",
        color: "#414141",
    },
    thpaddingdate: {
        width: "150px",
        textAlign: "left",
        paddingLeft: "25px",
        paddingTop: "5px",

        paddingBottom: "0px",

        paddingRight: "5px",

        fontSize: "11px",
        fontFamily: "Roboto",
        color: "#414141",

    },
    thpaddingclear: {
        width: "200px",
        textAlign: "left",
        paddingLeft: "23px",
        paddingTop: "5px",

        paddingBottom: "0px",

        paddingRight: "5px",

        fontSize: "11px",
        fontFamily: "Roboto",
        color: "#414141",
    },
    txt: {
        width: "88px",
        height: "19px",
        fontFamily: "Roboto!important",
        fontSize: "16px",
        fontWeight: "500",
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: "normal",
        letterSpacing: "normal",
        color: "#00a0f0",
    }
}));

function PatientTable(props) {
    const classes = useStyles();
    return (
        <div>
            <Row className={classes.row}>
                <Row>
                    <Column>
                        {props.state.isOpen ? (
                            <img
                                className={classes.img}
                                src="/images/left_side_icon.svg"
                                onClick={() => {
                                    props.toggleImage();
                                }}
                            />
                        ) : (
                            <img
                                className={classes.closeimg}
                                src="/images/left_side_icon.svg"
                                onClick={() => {
                                    props.toggleImage();
                                }}
                            />
                        )}
                    </Column>
                    <Column>
                        <span className={classes.spanfixing}>Patients</span>
                    </Column>
                    <Column>
                        <SearchDataSpan>
                            <HeadRowLabelContentSearch placeholder="Search Patient" id="searchText" onChange={props.onSearch}/>
                            <HeadRowLabelHeading>
                                <SearchIcon
                                    src="/images/searchicon.svg"
                                    height="17"
                                    width="18"
                                    marginTop="-5px"
                                />
                            </HeadRowLabelHeading>
                        </SearchDataSpan>
                    </Column>
                </Row>
            </Row>

            <table className={classes.tabletest}>
                <tr>
                    <th/>
                    <th className={classes.th}> Patient Name</th>
                    <th className={classes.th}> Surgery type</th>
                    <th className={classes.paddingLeft30}> Gender</th>
                    <th className={classes.paddingLeft20}> Age</th>
                    <th className={classes.th}> Surgeon</th>
                    <th className={classes.thpadding}> Survey Status</th>
                    <th className={classes.thpaddingdate}> Survey Date</th>
                    <th className={classes.thpaddingclear}> Surgery Clearance</th>
                    <th className={classes.th}/>
                </tr>
                {props.state.patientList.length > 0 && props.state.patientList.map((data) => (
                    <tr>
                        <td className={classes.tdIcon}>
                            <span><Avatar src={data?.patient?.picture || "/images/download.jpg"} width="30px"
                                          height="20px"/></span>
                        </td>
                        <td className={classes.td}
                            onClick={() => history.push({pathname: `/anaesthesiologist/details-patients/${data.surgeryId}`,state:{meetingTime: props.state.meetingTime,time: props.state.time, endTime: props.state.endTime}})}

                        >{data?.patient?.name || ''}</td>
                        <td className={classes.td}
                            onClick={() => history.push({pathname: `/anaesthesiologist/details-patients/${data.surgeryId}`,state:{meetingTime: props.state.meetingTime,time: props.state.time, endTime: props.state.endTime}})}
                        >{data.surgeryType}</td>
                        <td className={classes.tdPadding}
                            onClick={() => history.push({pathname: `/anaesthesiologist/details-patients/${data.surgeryId}`,state:{meetingTime: props.state.meetingTime,time: props.state.time, endTime: props.state.endTime}})}

                        >{data?.patient?.gender}</td>
                        <td className={classes.tdpaddingLeft20}
                            onClick={() => history.push({pathname: `/anaesthesiologist/details-patients/${data.surgeryId}`,state:{meetingTime: props.state.meetingTime,time: props.state.time, endTime: props.state.endTime}})}
                        >{data?.patient?.dob}</td>
                        <td className={classes.td}
                            onClick={() => history.push({pathname: `/anaesthesiologist/details-patients/${data.surgeryId}`,state:{meetingTime: props.state.meetingTime,time: props.state.time, endTime: props.state.endTime}})}

                        >{data?.addedBy?.userName}

                        </td>
                        <td className={classes.tdPadding}
                            onClick={() => history.push({pathname: `/anaesthesiologist/details-patients/${data.surgeryId}`,state:{meetingTime: props.state.meetingTime,time: props.state.time, endTime: props.state.endTime}})}
                        >{data?.status}
                        </td>
                        {data.surgeryDate > 0 ? (
                            <td className={classes.tdColor}
                                onClick={() => history.push({pathname: `/anaesthesiologist/details-patients/${data.surgeryId}`,state:{meetingTime: props.state.meetingTime,time: props.state.time, endTime: props.state.endTime}})}

                            >{data.surgeryDate}</td>
                        ) : data.surgeryDate === "Schedule" ? (
                            <td className={classes.tdpadding}>
                                <button
                                    onClick={() => {
                                        props.scheduleSurgery();
                                    }}
                                    className={classes.datebuttonfixing}>
                                    {data.surgeryDate}
                                </button>
                            </td>
                        ) : (
                            <td className={classes.tdpadding}
                                onClick={() => history.push({pathname: `/anaesthesiologist/details-patients/${data.surgeryId}`,state:{meetingTime: props.state.meetingTime,time: props.state.time, endTime: props.state.endTime}})}

                            >{data.surgeryDate}</td>
                        )}
                        {data.status === statusConstants.COMPLETED ? (
                            <td className={classes.tdAvatar}
                                onClick={() => history.push({pathname: `/anaesthesiologist/details-patients/${data.surgeryId}`,state:{meetingTime: props.state.meetingTime,time: props.state.time, endTime: props.state.endTime}})}
                            >
                                <Avatar className={classes.avatar}>
                                    {'Yes'}
                                </Avatar>
                            </td>
                        ) : (
                            <td className={classes.tdAvatar}
                                onClick={() => history.push({pathname: `/anaesthesiologist/details-patients/${data.surgeryId}`,state:{meetingTime: props.state.meetingTime,time: props.state.time, endTime: props.state.endTime}})}
                            >
                                <Avatar className={classes.avatarNo}>
                                    {'No'}
                                </Avatar>
                            </td>
                        )}
                        <td className={classes.br}/>
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
                                style={{ width: "123px",
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
                                style={{ width: "123px",
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
                                  right: "16px",
                                  
                                 
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
export default PatientTable;