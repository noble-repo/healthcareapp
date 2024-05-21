import React from "react";
import { Row, Column } from "simple-flexbox";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from "material-ui";
import { grey } from "@material-ui/core/colors";
import { history } from "../../managers/history";

const Head = styled.div`
  margin-top: 45px;
  margin-left: 15px;
  font-size: 18px;
  font-family: "Roboto";
  color: #26292c;
`;
const SearchDataSpan = styled.span`
  width: 230px;
  height: 28px;
  border-radius: 3px;
  background-color: white;
  padding: 1px 9px 7px 3px;
  margin-right: 10px;
  border: 1px solid #ccc;
  margin-left: 15px;
  margin-top: 45px;
`;

const HeadRowLabelHeading = styled.label`
  font-family: Roboto;
  font-size: 13px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.78);
`;
const HeadRowLabelContentSearch = styled.input`
  margin-left: 5px;
  max-width: 195px;
  width: 100%;
  font-family: Roboto;
  font-weight: 550;
  font-size: 12px;
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

const useStyles = makeStyles((theme) => ({
  tabletest: {
    borderCollapse: "separate",
    borderSpacing: "0 15px",
    marginLeft: "40px",
    marginRight: " 18px",
    paddingBottom: "10px",
  },
  contentTime: {
    paddingLeft: "25px",
    width: "131px",
    textAlign: "left",
    borderBottom: "1px solid #d4d4d4",
    borderTop: "1px solid #d4d4d4",
    padding: "5px",
    fontSize: "16px",
    fontFamily: "roboto",
    color: "#181c1b",
  },
  tdIcon: {
    width: "130px",
    textAlign: "center",
    borderBottom: "1px solid #d4d4d4",
    borderTop: "1px solid #d4d4d4",
    paddingTop: "10px",
    paddingBottom: "5px",
    paddingLeft: "0px",
    paddingRight: "0px",
    fontSize: "12px",
    fontFamily: "roboto",
    borderLeft: "1px solid #d4d4d4",
  },
  content: {
    width: "140px",
    textAlign: "left",
    borderBottom: "1px solid #d4d4d4",
    borderTop: "1px solid #d4d4d4",
    padding: "0px",
    fontSize: "16px",
    fontFamily: "roboto",
    color: "#181c1b",
  },
  surgeryContent: {
    width: "175px",
    textAlign: "left",
    borderBottom: "1px solid #d4d4d4",
    borderTop: "1px solid #d4d4d4",
    padding: "0px",
    fontSize: "16px",
    fontFamily: "roboto",
    color: "#181c1b",
  },
  contentBill: {
    width: "155px",
    borderBottom: "1px solid #d4d4d4",
    borderTop: "1px solid #d4d4d4",
    paddingLeft: "40px",
    fontSize: "16px",
    fontFamily: "roboto",
    color: "#181c1b",
  },
  contentDate: {
    width: "143px",
    textAlign: "left",
    borderBottom: "1px solid #d4d4d4",
    borderTop: "1px solid #d4d4d4",
    fontSize: "16px",
    fontFamily: "roboto",
    paddingLeft: "30px",
    color: "#181c1b",
  },
  meetingDate: {
    paddingLeft: "30px",
    fontSize: "14px",
    paddingTop: "10px",
    color: "#414141",
  },
  meetingTime: {
    paddingLeft: "25px",
    fontSize: "14px",
    paddingTop: "10px",
    color: "#414141",
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
  },
  avatar: {
    backgroundColor: "#43c43f !important",
    fontSize: "12px !important",
  },

  avatarNo: {
    backgroundColor: "red !important",
    fontSize: "12px !important",
  },
  tdAvatar: {
    paddingLeft: "20px",
    borderBottom: "1px solid #d4d4d4",
    borderTop: "1px solid #d4d4d4",
  },
  icon: {
    width: "130px",
    textAlign: "center",
    borderBottom: "1px solid #d4d4d4",
    borderTop: "1px solid #d4d4d4",
    paddingTop: "5px",
    paddingBottom: "0px",
    paddingLeft: "0px",
    paddingRight: "0px",
    fontSize: "12px",
    fontFamily: "roboto",
    borderLeft: "1px solid #d4d4d4",
  },
  spaceContent: {
    borderRight: "1px solid #d4d4d4",
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
  },
  font: {
    fontSize: "14px",
    fontFamily: "Roboto",
    paddingTop: "10px",
    paddingRight: "20px",
    color: "#414141",
  },

  fontBill: {
    fontSize: "14px",
    fontFamily: "Roboto",
    paddingTop: "10px",
    paddingLeft: "40px",
    color: "#414141",
  },
  img: {
    marginLeft: "-20px",
    marginTop: "35px",
  },
  closeimg: {
    marginLeft: "-15px",
    marginTop: "35px",
  },
  
}));
export default function PatientInvoiceTable(props) {
  const classes = useStyles();
  return (
    <div>
      <Row className="justify-content-between m-t-15">
        <Row>
          <Column>
            {props.state.isOpen ? (
              <img
                className={classes.img}
                src="/images/toggle_icon.svg"
                onClick={() => {
                  props.toggleImage();
                }}
              />
            ) : (
              <img
                className={classes.closeimg}
                src="/images/toggle_icon.svg"
                onClick={() => {
                  props.toggleImage();
                }}
              />
            )}
          </Column>
          <Column>
            <Head>
              <b>Invoices</b>
            </Head>
          </Column>
          <Column>
            <SearchDataSpan>
              <HeadRowLabelContentSearch placeholder="Search Patient" />
              <HeadRowLabelHeading>
                <img src="/images/searchicon.svg" height="12" width="12" />
              </HeadRowLabelHeading>
            </SearchDataSpan>
          </Column>
        </Row>
      </Row>
      <table className={classes.tabletest}>
        <tr>
          <th></th>
          <th className={classes.font}> Patient Name</th>
          <th className={classes.font}> Surgery type</th>
          <th className={classes.meetingTime}>Meeting Time</th>
          <th className={classes.meetingDate}>Meeting Date</th>
          <th className={classes.fontBill}>Bill Amount</th>
          <th className={classes.font}>Invoices Status</th>
          <th className={classes.font}>Paid On</th>
          <th></th>
        </tr>
        {props.state.filteredArray.map((row) => (
          <tr onClick={() => history.push("/invoice-details")}>
            <td className={classes.icon}>
              <Avatar>{row.icon}</Avatar>
            </td>
            <td className={classes.content}>{row.patientName}</td>
            <td className={classes.surgeryContent}>{row.SurgeryType}</td>
            <td className={classes.contentTime}>{row.MeetingTime}</td>
            <td className={classes.contentDate}>{row.MeetingDate}</td>
            <td className={classes.contentBill}>{row.BillAmount}</td>
            <td className={classes.content}>{row.InvoicesStatus}</td>
            <td className={classes.content}>{row.PaidOn}</td>
            <td className={classes.spaceContent}></td>
          </tr>
        ))}
      </table>
    </div>
  );
}
