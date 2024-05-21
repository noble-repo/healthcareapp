import React from "react";
import Dialog from "@material-ui/core/Dialog";
import { Row } from "simple-flexbox";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

const PopupBox = styled.div`
  width: 502px;
  height: 365px;
  padding-left: 10px;
  border: solid 1px #e5e5e5;
  background-color: #ffffff;
`;
const Heading = styled.div`
  font-family: Roboto;
  margin-left: 5px;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #26292c;
  width: 300px;
`;
const CrossIcon = styled.img`
  float: right;
  margin-left: 165px;
  margin-right: 26px;
`;
const ReasonSelect = styled.select`
  margin-top: 28px;
  margin-left: 5px;
  width: 466px;
  height: 50px;
  border-radius: 4px;
  border: solid 1px #bdbdbd;
  background-color: #ffffff;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #181c1b;

  padding-left: 14px;
  &:focus {
    outline: none;
    border: solid 1px #bdbdbd;
    color: none;
  }
`;
const CommentBox = styled.textarea`
  font-size: 16px;
  margin-left: 5px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #b5b5b5;

  width: 466px;
  height: 132px;
  border-radius: 4px;
  border: solid 1px #bdbdbd;
  background-color: #ffffff;
  margin-top: 13px;
  resize: none;
  padding-top: 16px;
  padding-left: 14px;
  &:focus {
    outline: none;
    border: solid 1px #bdbdbd;
    color: none;
  }
`;
const RejectButton = styled.button`
  width: 466px;
  height: 50px;
  border-radius: 4px;
  background-color: #00a0f0;

  border: solid 1px #00a0f0;
  margin-top: 21px;

  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;

  margin-bottom: 16px;
  margin-left: 5px;
  &:focus {
    outline: none;
    border-radius: 5px;
    transition: all 0.3s;
    border: none;
  }
`;
const useStyles = makeStyles((theme) => ({
  dialog: {
    marginBottom: "170px",
  },
  row: {
    marginTop: "26px",
  },
}));
export default function AlertDialog(props) {
  const classes = useStyles();
  return (
    <div>
      <Dialog
        open={props.state.open}
        onClose={props.handleDialog}
        className={classes.dialog}
      >
        {props.removeCard}
        <PopupBox>
          <Row className={classes.row}>
            <Heading>Reject Meeting Request</Heading>
            <CrossIcon
              src="images/Group 9.svg"
              height="18px"
              onClick={props.handleDialog}
            />
          </Row>
          <ReasonSelect>
            Select Reason Of Selection
            <option selected disabled hidden>
              Select Reason of Rejection
            </option>
            <option>Not available</option>
            <option>Not available</option>
          </ReasonSelect>
          <CommentBox type="text" placeholder="Comments (Optional)" />
          <RejectButton>Reject Request</RejectButton>
        </PopupBox>
      </Dialog>
    </div>
  );
}
