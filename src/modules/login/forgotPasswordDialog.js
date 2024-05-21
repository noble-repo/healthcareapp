import Dialog from "@material-ui/core/Dialog";
import React from "react";
import styled from "styled-components";
import {makeStyles} from "@material-ui/core/styles";

const Card = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 400px;
  position: center;
  border-radius: 4px;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.05);
  border: solid 1px #e5e5e5;
  background-color: white;
  align-items: center;
`;
const Title = styled.div`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: normal;
  color: #26292c;
  margin-top: 15px;
  width: 100%;
  text-align: center;
`;
const CloseButton = styled.img`
  float: right;
  margin-right: 10px;
`;
const Type = styled.div`
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #181c1b;
  text-align: left;
  margin-top: 23px;
  padding-bottom: 2px;
  width: 90%;
`;
const Input = styled.input`
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #181c1b;
  width: 90%;
  height: 44px;
  border: 1px solid lightgrey;
  outline: none;
  border-radius: 4px;
  transition: all 0.3s;
`;

const Button = styled.button`
  font-weight: 500;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
  height: 44px;
  background-color: #00a0f0;
  font-size: 13px;
  border-radius: 4px;
  border: #00a0f0;
  vertical-align: center;
  font-family: Roboto;
  margin: 15px 0 15px 0;
  padding: 0 25px;

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
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  align-items: center;
  margin: auto;
`;

const ForgotPasswordDialog = (props) => {
    const classes = useStyles();

    return (
        <Card>
            <Dialog open={props.state.openForgotPasswordDialog} onClose={props.handlerForCloseDialog}
                    className={classes.box}>
                <Container>
                    <div className="display-flex flex-direction-row justify-content-between">
                        <Title>{'Forgot Password'}</Title>
                        <CloseButton src="/images/cross.svg" width={'20px'} onClick={props.handlerForCloseDialog}/>
                    </div>
                    <Wrapper>
                        <Type>Enter Email Address</Type>
                        <Input onChange={(event) => props.onChangeEvent(event)} value={props.state.forgotPasswordEmail}
                               id={'forgotPasswordEmail'}/>
                        {props.state.forgotPasswordEmailError &&
                        <div className="fc-red fs-14 py-1">{props.state.forgotPasswordEmailError}</div>}

                        <Button type="button"
                                onClick={() => props.sendForgotPasswordRequest()}>{'Confirm'}</Button>
                    </Wrapper>
                </Container>
            </Dialog>
        </Card>
    );
}
export default ForgotPasswordDialog