import React from "react";
import styled from "styled-components";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core/styles";

const Card = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 502px;
  height: 490px;
  position: center;
  border-radius: 4px;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.05);
  border: solid 1px #e5e5e5;
  background-color: white;
`;
const Title = styled.div`
  width: 281px;
  height: 21px;
  /* margin: 3px 159px 44px 0; */
  margin-top:13px;
  margin-left:18px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #26292c;
`;
const CloseButton = styled.img`
  margin-top: -20px;
  margin-right: 18px;
  float: right;
  padding-left: 140px;
`;
const Type = styled.div`
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #181c1b;
  text-align: left;
  margin-top: 23px;
  padding-left: 18px;
  padding-bottom: 2px;
`;
const Conditions = styled.div`
  width: 35px;
  height: 16px;
  margin-top:14px;
  margin-left:18px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #181c1b;
`;
const Input = styled.input`
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #181c1b;
  width: 466px;
  height: 50px;
  border: 1px solid lightgrey;
  padding-left: 10px;
  outline: none;
  border-radius: 4px;
  transition: all 0.3s;
  margin-top:5px;
  margin-left:18px;
`;

const Button = styled.button`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
  width: 466px;
  height: 50px;
  background-color: #00a0f0;
  padding-top: 5px;
  font-size: 13px;
  border-radius: 4px;
  border: #00a0f0;
  vertical-align: center;
  font-family: Roboto;
  margin-top: 21px;
  margin-left: 18px;
  &:focus {
    outline: none;
    border-radius: 5px;
    transition: all 0.3s;
    border: none;
  }
`;
const useStyles = makeStyles({
  box: {
    // marginBottom: "140px",
  },
});

export default function EditDialog(props) {
  const classes = useStyles();
  return (
    <Card>
      <Dialog
        open={props.state.edit}
        onClose={props.editDialog}
        className={classes.box}
      >
        <Container>
          <Title>Medical Clerance Provider</Title>
          <CloseButton
            src="/images/cross.svg"
            class="Group-9"
            onClick={props.editDialog}
          ></CloseButton>
          <Type>Name</Type>
          <Input type="text" ></Input>
          <Conditions>Clinic</Conditions>
          <Input type="text"></Input>
          <Conditions>Email</Conditions>
          <Input type="text"></Input>
          <Conditions>Phone</Conditions>
          <Input type="text"></Input>
          <Button type="button">Add </Button>
        </Container>
      </Dialog>
    </Card>
  );
}