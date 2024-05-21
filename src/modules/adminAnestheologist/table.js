import React from "react";
import { Row, Column } from "simple-flexbox";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from "material-ui";
import { grey } from "@material-ui/core/colors";
import { history } from "../../managers/history";
import {  CSVLink } from "react-csv";
import { List } from "react-bootstrap/lib/Media";

const SearchDataSpan = styled.span`
  width: 230px;
  height: 37px;
  border-radius: 2px;
  border: solid 1px #bdbdbd;
  background-color: white;
  padding: 6px 9px 7px 9px;
  margin-right: 10px;
  border: 1px solid #ccc;
  margin-left: 13px;
  margin-top: 50px;
  font-family:Roboto!important;
`;
const HeadRowLabelHeading = styled.label`
  font-family: Roboto;
  font-size: 18px;
  font-weight: Bolder;
  color: rgba(0, 0, 0, 0.78);
`;
const HeadRowLabelContentSearch = styled.input`
  margin-left: 5px;
  max-width: 180px;
  width: 100%;
  font-family: Roboto;
  padding-top: -15px;
  padding-bottom: 2px;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.3);
  background-color: white;
  border: none;
  outline: none;
  &:focus {
    outline: none;
    border: none;
    color: black;
  }
`;
const Head = styled.div`
  margin-top: 60px;
  margin-left: 15px;
  font-family: Roboto!important;
  font-stretch: normal;
  font-style: normal;
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: normal;
  color: #26292c;
  width: 135px;
  height: 22px;
`;
const OpenImage = styled.img`
  width: 40px;
  height: 40px;
  margin-left: -18px;
  margin-top: 50px;

`;
const CloseImage = styled.img`
  width: 40px;
  height: 40px;
  margin-left: -18px;
  margin-left: 2px;
  margin-top: 50px;
`;
const Button = styled.button`
width: 116px;
height: 40px;

margin-top: 51.5px;
border-radius: 2px;
  border: solid 1px #00a0f0;
  background-color: #ffffff;
  font-size: 16px;
  color: #00a0f0;
  font-family: Roboto-Medium !important;
  font-weight: 500;
  &:focus {
    outline: blue;
    border: none;
    border: solid 1px #00a0f0;
    color: #00a0f0;
  }
  @media (max-width: 1028px) {

   
    display: none!important;
    }
`;

const MainButton = styled.button`
width: 123px;
height: 40px;
margin-top: 51.5px;
margin-right:11px;
  border-radius: 2px;
  border: 1px solid white;
  background-color: #00a0f0;
  font-size: 16px!important;
  font-style: Roboto !important;
  color: #ffffff;
  
  font-weight: 500;
  &:focus {
    outline: none;
    border: none;
    /* color: black; */
    color: white;
  }
  @media (max-width: 1028px) {

   
    display: none!important;
    }
`;


const useStyles = makeStyles((theme) => ({
    tableroot: {
        borderCollapse: "separate",
        borderSpacing: "0 15px",
        marginLeft: "30px",
        marginRight: " 18px",
        paddingBottom: "10px",

        ['@media (max-width:1028px)']: {
            display: "none!important",
        }
    },

    root: {
        width: "130px",
        textAlign: "left",
        borderBottom: "1px solid #d4d4d4",
        borderTop: "1px solid #d4d4d4",
        padding: "0px",
        fontSize: "14px",
        fontWeight: "normal",
        fontFamily: "roboto",
        color: "#181c1b",

    },
    toggleactive: {
        width: "130px",
        textAlign: "left",
        padding: "0px",
        fontSize: "14px",
        fontWeight: "normal",
        fontFamily: "roboto",
        color: "#181c1b",

        "&:hover": {
            textDecoration: "none",
            color: "#181c1b",

        },
        // text-align: right;
        // color: #000000;
    },

    tdPadding: {
        paddingLeft: "25px",
        width: "130px",
        textAlign: "left",
        borderBottom: "1px solid #d4d4d4",
        borderTop: "1px solid #d4d4d4",
        padding: "5px",
        fontSize: "14px",
        fontWeight: "normal",
        fontFamily: "roboto",
        color: "#181c1b",
    },
    tdIcon: {
        width: "130px",
        textAlign: "center",
        borderBottom: "1px solid #d4d4d4",
        borderTop: "1px solid #d4d4d4",
        paddingTop: "8px",
        paddingBottom: "5px",
        paddingLeft: "0px",
        paddingRight: "0px",
        fontSize: "12px",
        fontFamily: "roboto",
        borderLeft: "1px solid #d4d4d4",
    },
    td: {
        width: "130px",
        textAlign: "left",
        borderBottom: "1px solid #d4d4d4",
        borderTop: "1px solid #d4d4d4",
        padding: "0px",
        fontSize: "14px",
        fontWeight: "normal",
        fontFamily: "roboto",
        color: "#181c1b",
    },


    td1: {
        width: "130px",
        textAlign: "left",
        borderBottom: "1px solid #d4d4d4",
        borderTop: "1px solid #d4d4d4",
        padding: "6px",
        fontSize: "14px",
        fontWeight: "normal",
        fontFamily: "roboto",
        color: "#181c1b",
    },
    divfixing: {
        position: "absolute",
        right: "0",
    },
    td3: {
        width: "130px",
        textAlign: "left",
        borderBottom: "1px solid #d4d4d4",
        borderTop: "1px solid #d4d4d4",
        padding: "7px",
        fontSize: "14px",
        fontWeight: "normal",
        fontFamily: "roboto",
        color: "#181c1b",
    },
    tdpaddingLeft20: {
        width: "130px",
        textAlign: "left",
        borderBottom: "1px solid #d4d4d4",
        borderTop: "1px solid #d4d4d4",
        fontSize: "14px",
        fontWeight: "normal",
        fontFamily: "roboto",
        paddingLeft: "30px",
        color: "#181c1b",
    },
    paddingLeft20: {
        paddingLeft: "25px",
        fontSize: "14px",
        fontWeight: "500",
        fontFamily: "Roboto",
        paddingTop: "10px",
        color: "#414141",
    },
    paddingLeft30: {
        paddingLeft: "25px",
        fontSize: "14px",
        fontWeight: "500",
        fontFamily: "Roboto",
        paddingTop: "10px",
        color: "#414141",
    },
    txt: {
        fontFamily: "Roboto!important",
    },
    txt1: {
        fontFamily: "Roboto!important",
        fontSize: "16px",
        width: "47px",
        height: "19px",
    },
    tdColor: {
        color: grey,
        width: "130px",
        textAlign: "left",
        borderBottom: "1px solid #d4d4d4",
        borderTop: "1px solid #d4d4d4",
        padding: "0px",
        fontSize: "12px",
        fontFamily: "roboto",
        borderRight: "1px solid #d4d4d4"
    },


    font: {
        fontSize: "14px",
        fontWeight: "500",
        fontFamily: "Roboto",
        paddingTop: "10px",
        paddingRight: "40px",
        color: "#414141",
    },
    fonts: {
        fontSize: "14px",
        fontWeight: "500",
        fontFamily: "Roboto",
        paddingTop: "10px",
        paddingRight: "40px",
        color: "#414141",
    },

    tableRow: {

        // width: '1577px',
        width: '100%',
        height: '77px',
        margin: '13px 27px 14px 29px',
        padding: '29px 58px 28px 66px',
        borderRadius: '2px',
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.05)',
        border: 'solid 1px #d4d4d4 !important',
        backgroundColor: '#ffffff',

    },

    newTable: {
        marginLeft: "104px",
        borderSpacing: '1px 5px',
        borderCollapse: 'separate',


        ['@media (min-width:1028px)']: {
            marginLeft: "32px",
            display: "none"
        },

        ['@media (max-width:768px)']: {
            marginLeft: "30px",
        },

    },

    tableContentResponsive: {
        fontFamily: 'Roboto',
        fontSize: '16px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.19',
        letterSpacing: 'normal',
        textAlign: 'left',
        color: '#181c1b',
        paddingLeft: "40px",
        paddingTop: "17px",
        borderRight: "solid 1px #d4d4d4",
        borderTop: "solid 1px #d4d4d4",
        borderBottom: "solid 1px #d4d4d4",
    },

    tableHeadingsResponsive: {
        fontFamily: 'Roboto',
        fontSize: '14px',
        fontWeight: '500',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.21',
        letterSpacing: 'normal',
        textAlign: 'left',
        color: '#414141',
        paddingTop: "17px",
        borderLeft: "solid 1px #d4d4d4",
        borderTop: "solid 1px #d4d4d4",
        borderBottom: "solid 1px #d4d4d4",
    },


    // Classes after SideBar is closed.

    rootClosed: {
        marginTop: "100px",
        marginRight: "193px",
        ['@media (max-width:1024px)']: {
            marginRight: "283px",

        },

    },

    tablerootClosed: {
        borderCollapse: "separate",
        borderSpacing: "0 15px",
        marginLeft: "30px",
        marginRight: " 18px",
        paddingBottom: "10px",
        width: "130%",

        ['@media (max-width:1028px)']: {
            display: "none!important",
        }
    },


    tableheadingsClosed: {
        width: '20%',
        height: '17px',
        margin: '38.5px 124px 13px 95px',
        fontFamily: 'Roboto',
        fontSize: '14px',
        fontWeight: '500',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.21',
        letterSpacing: 'normal',
        textAlign: 'left',
        color: '#414141',
        paddingLeft: "55px",

    },

    tablesecondClosed: {
        width: '110%',
        marginTop: "24px",
        borderCollapse: "separate",
        borderSpacing: "0px 29px",

        ['@media (max-width:1028px)']: {
            display: "none!important",
            borderSpacing: "0px 29px",


        },

    },

    tableRowClosed: {
        width: '100%',
        height: '77px',
        margin: '13px 27px 14px 29px',
        padding: '29px 58px 28px 66px',
        borderRadius: '2px',
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.05)',
        border: 'solid 1px #d4d4d4 !important',
        backgroundColor: '#ffffff',

    },

    tablecontentClosed: {
        width: '46px',
        height: '19px',
        margin: '1px 145px 0 0',
        fontFamily: 'Roboto',
        fontSize: '16px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.19',
        letterSpacing: 'normal',
        textAlign: 'left',
        color: '#181c1b',
        paddingLeft: "58px!important",
        paddingTop: "2px",
    },

    newTableClosed: {
        marginLeft: "104px",
        borderSpacing: '1px 5px',
        borderCollapse: 'separate',


        ['@media (min-width:1028px)']: {
            marginLeft: "32px",
            display: "none",
            width: "100%"
        },

        ['@media (max-width:768px)']: {
            marginLeft: "155px",
            width: "100%"
        },

    },

    tableHeadingsResponsiveClosed: {
        fontFamily: 'Roboto',
        fontSize: '14px',
        fontWeight: '500',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.21',
        letterSpacing: 'normal',
        textAlign: 'left',
        color: '#414141',
        paddingTop: "17px",
        borderLeft: "solid 1px #d4d4d4",
        borderTop: "solid 1px #d4d4d4",
        borderBottom: "solid 1px #d4d4d4",

    },

    tableContentResponsiveClosed: {
        fontFamily: 'Roboto',
        fontSize: '16px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.19',
        letterSpacing: 'normal',
        textAlign: 'left',
        color: '#181c1b',
        paddingRight: "178px",
        paddingTop: "17px",
        borderRight: "solid 1px #d4d4d4",
        borderTop: "solid 1px #d4d4d4",
        borderBottom: "solid 1px #d4d4d4",

    },


}));
function AnestheologistTable(props) {
    const classes = useStyles();
   const array = props.state.clinicList.map(row => ({

        Name:row.owner.firstName + "  "+row.owner.lastName,
        Clinic:row.name,
        Type:row.clinicType,
        Patients:row.totalPatients, 
        Meeting:row.totalMeetings ,
        Status:row.status,
        Plan:row.plan || 'N/A'

    }))

    return (
        <div>
            <Row className="justify-content-between m-t-15">
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
                    <Column>
                        <Head>Anesthesiologist</Head>
                    </Column>
                    <Column>
                        <SearchDataSpan>
                            <HeadRowLabelContentSearch placeholder="Search Anesthesiologist" id="searchText" onChange={props.onSearch} />
                            <HeadRowLabelHeading>
                                <img
                                    style={{ marginTop: "-55px", marginLeft: "190px" }}
                                    src="/images/noun_Search_2331678.svg"
                                    width="18px"
                                    height="17px"
                                />
                            </HeadRowLabelHeading>
                        </SearchDataSpan>
                    </Column>
                    <Row className={classes.divfixing}>
                        {/* <button>Add Surgery</button> */}
                        <div>
                            <MainButton onClick={props.editDialog}> <span
                                className={classes.txt}>View Calendar</span></MainButton>
                        </div>
                         <CSVLink data={array} separator={","} filename={"anesthesiologist-List.csv"}>
                        <Button onClick={props.handleDialog}><span className={classes.txt1}>Export</span></Button>
                        </CSVLink>
                    </Row>
                </Row>

            </Row>


            <table className={props.state.isOpen ? classes.tableroot : classes.tablerootClosed}>
                <tr>
                    <th />
                    <th className={classes.font}> &nbsp;Name</th>
                    <th className={classes.font}> &nbsp;Clinic</th>
                    <th className={classes.paddingLeft30}> Type</th>
                    <th className={classes.paddingLeft20}> Patients</th>
                    <th className={classes.font}> Meeting</th>
                    <th className={classes.font}>&nbsp;Status</th>
                    <th className={classes.fonts}> &nbsp;Plan</th>
                </tr>

                {props.state.clinicList.length > 0 && props.state.clinicList.map((row) => (
                    <tr onClick={() => history.push("/admin/anesthesiologist-detail/" + row.clinicId)}>
                        <td className={classes.tdIcon}>
                            <Avatar><a href="#" className={classes.toggleactive}><Avatar alt="Cindy Baker"
                                src={row.picture || "/images/male.jpg"} /></a></Avatar>
                        </td>
                        <td className={classes.td}><a href="#"
                            className={classes.toggleactive}>{`${row.owner.firstName || ''} ${row.owner.lastName || ''}`}</a>
                        </td>
                        <td className={classes.td}><a href="#" className={classes.toggleactive}>{row.name || ''}</a>
                        </td>
                        <td className={classes.tdPadding}><a href="#"
                            className={classes.toggleactive}>{row.clinicType || ''}</a>
                        </td>
                        <td className={classes.tdpaddingLeft20}><a href="#"
                            className={classes.toggleactive}>{row.totalPatients || 0}</a>
                        </td>
                        <td className={classes.td1}><a href="#"
                            className={classes.toggleactive}>{row.totalMeetings || 0}</a>
                        </td>
                        <td className={classes.td3}><a href="#" className={classes.toggleactive}>{row.status}</a></td>
                        <td className={classes.tdColor}>{row.plan || 'N/A'}</td>

                    </tr>
                ))
                }
            </table>

            <table className={props.state.isOpen ? classes.newTable : classes.newTableClosed}>
                {props.state.clinicList.length > 0 && props.state.clinicList.map((row) => (
                    <tr>
                        <tr>
                            <tr>
                                <td className={classes.tdIcon}>
                                    <Avatar><a href="#" className={classes.toggleactive}><Avatar alt="Cindy Baker"
                                        src={row.picture || "/images/male.jpg"} /></a></Avatar>
                                </td>
                                <td className={classes.tableContentResponsive}></td>
                            </tr>

                            <tr>
                                <th className={props.state.isOpen ? classes.tableHeadingsResponsive : classes.tableHeadingsResponsiveClosed}>{'Name'}</th>
                                <td className={props.state.isOpen ? classes.tableContentResponsive : classes.tableContentResponsiveClosed}>{`${row.owner.firstName || ''} ${row.owner.lastName || ''}`}</td>
                            </tr>

                            <tr>
                                <th className={props.state.isOpen ? classes.tableHeadingsResponsive : classes.tableHeadingsResponsiveClosed}>{'Clinic'}</th>
                                <td className={props.state.isOpen ? classes.tableContentResponsive : classes.tableContentResponsiveClosed}>{row.name || ''}</td>
                            </tr>
                            <tr>
                                <th className={props.state.isOpen ? classes.tableHeadingsResponsive : classes.tableHeadingsResponsiveClosed}>{'Type'}</th>
                                <td className={props.state.isOpen ? classes.tableContentResponsive : classes.tableContentResponsiveClosed}>{row.clinicType || ''}</td>
                            </tr>
                            <tr>
                                <th className={props.state.isOpen ? classes.tableHeadingsResponsive : classes.tableHeadingsResponsiveClosed}>{'Patients'}</th>
                                <td className={props.state.isOpen ? classes.tableContentResponsive : classes.tableContentResponsiveClosed}>{row.totalPatients || 0}</td>
                            </tr>
                            <tr>
                                <th className={props.state.isOpen ? classes.tableHeadingsResponsive : classes.tableHeadingsResponsiveClosed}>{'Meeting'}</th>
                                <td className={props.state.isOpen ? classes.tableContentResponsive : classes.tableContentResponsiveClosed}>{row.totalMeetings || 0}</td>
                            </tr>
                            <tr>
                                <th className={props.state.isOpen ? classes.tableHeadingsResponsive : classes.tableHeadingsResponsiveClosed}>{'Status'}</th>
                                <td className={props.state.isOpen ? classes.tableContentResponsive : classes.tableContentResponsiveClosed}>{row.status || ''}</td>
                            </tr>
                            <tr>
                                <th className={props.state.isOpen ? classes.tableHeadingsResponsive : classes.tableHeadingsResponsiveClosed}>{'Plan'}</th>
                                <td className={props.state.isOpen ? classes.tableContentResponsive : classes.tableContentResponsiveClosed}>{row.plan || 'N/A'}</td>
                            </tr>
                        </tr>
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

                    {props.state.clinicList && props.state.clinicList.length > 0 ? (
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

                    {props.state.clinicList && props.state.clinicList.length > 0 ? (
                        props.state.clinicList &&
                            props.state.clinicList.length < props.state.limit ? (
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
                                        right: "131px",


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

export default AnestheologistTable;

