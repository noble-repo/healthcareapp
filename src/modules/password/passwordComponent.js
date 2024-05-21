import React, {useState} from "react";
import styled from "styled-components";
import {history} from "../../managers/history";
import PasswordStrengthBar from 'react-password-strength-bar';
import {makeStyles} from '@material-ui/core/styles';

const Card = styled.div`
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 449px;
  padding-bottom: 20px;
  position: center;
  border-radius: 4px;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.05);
  border: solid 1px #e5e5e5;
  background-color: white;
  margin-top: 50px;
  //margin-bottom: 479px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Heading = styled.header`
  font-size: 18px;
  font-weight: 500 !important;
  line-height: normal;
  font-family: Roboto !important;
  margin: 20px 12px 8px 13px;
  text-align: center;
  margin-top: 15px;
  color: #26292c;


`;

const MainButton = styled.button`
  width: 390px;
  height: 50px;
  color: white;
  background-color: #00a0f0;
  margin-top: -5px;
  font-size: 15px;
  font-weight: 500;
  border-radius: 4px;
  border: 0px #00a0f0;
  vertical-align: center;
  font-family: roboto !important;
  //margin-left: 29px;

  &:focus {
    outline: none;
    border-radius: 4px;
    transition: all 0.3s;
    border: none;
  }
`;
const Button = styled.button`
  font-size: 11px;
  margin-left: 30px;
  border-color: white;
  background-color: white;
  border: none;
  color: #262626;

  @media only screen and (min-width: 1200px) {
    .Button {
      margin-left: 500px;
    }
  }
`;
const RightButton = styled.button`
  font-size: 12px;
  margin-left: 8px;
  background-color: white;
  border: 1px solid #00a0f0;
  border-radius: 4px;
  color: #00a0f0;
  height: 32px;
  width: 85px;

  @media only screen and (min-width: 1200px) {
    .RightButton {
      margin-left: 500px;
    }
  }
`;
const Header = styled.div`
  font-size: 16px;
  font-weight: normal;
  //margin-left: 36px;
  color: #414141;
  margin-top: 16px;

  font-family: Roboto !important;
  text-align: center;
`;
const Input = styled.input`
  width: 390px;
  //height: 45px;
  border: 1px solid lightgrey;
  padding: 10px 0 10px 10px;
  outline: none;
  border-radius: 4px;
  transition: all 0.3s;
  //font-size: 30px;
  //margin-left: 29px;
  margin-top: 26px;
`;
const InputNext = styled.input`
  width: 390px;
  //height: 45px;
  border: 1px solid lightgrey;
  padding: 10px 0 10px 10px;
  outline: none;
  border-radius: 4px;
  transition: all 0.3s;
  //font-size: 30px;
  //margin-left: 29px;
  margin-top: 19px;
`;

const useStyles = makeStyles((theme) => ({
    passwordStrength: {
        // height:"6px",
        marginLeft: "27px",
        marginRight: "27px",
        marginTop: "20px",
        marginBottom: "20px",
        color: "green",
        width: '85%'
    }
}));

export default function PasswordComponent(props) {
    const classes = useStyles();

    const {handleChange, state, onSetPasswordClicked} = props
    return (
        <div>
            <div class="navi">
                <nav
                    class="navbar navbar-expand-lg navbar-light bg-white border-bottom border-lightgrey "
                    style={{height: "60px"}}>
                    <div class="container-fluid flex-can">
                        <div class="logo">
                            <a href="#">
                                <img
                                    src="Menu_Logo.png"
                                    height="50px"
                                    style={{marginLeft: "-20px"}}
                                />
                            </a>{" "}
                        </div>
                        <div>
                            <Button type="button" class="btn btn-light">
                                Need Help
                            </Button>
                            <RightButton type="button" class="btn btn-outline-info">
                                Contact Us
                            </RightButton>
                        </div>
                    </div>
                </nav>
            </div>
            <Card>
                <Container>
                    <Heading>
                        Set a new password
                    </Heading>
                    <Header class="headerh">
                        Password must be between 8 and 30 characters with
                        <br/>
                        &nbsp; a combination of uppercase and special characters
                    </Header>
                    {props.state.isItForChangePassword && <><Input type="password" name="currentPassword"
                                                                   placeholder={'Current Password'}
                                                                   value={props.state.currentPassword}
                                                                   onChange={handleChange}/>
                        {state.currentPasswordError &&
                        <div className="fc-red fs-14 py-1 m-l-30">{state.currentPasswordError}</div>}
                    </>}
                    <Input type="password" name="password" placeholder={'New Password'} value={props.state.password}
                           onChange={handleChange}/>
                    {state.passwordError && <div className="fc-red fs-14 py-1 m-l-30">{state.passwordError}</div>}
                    <InputNext type="password" name="confirmPassword" placeholder={'Confirm Password'}
                               value={props.state.confirmPassword}
                               onChange={handleChange}/>
                    {state.confirmPasswordError &&
                    <div className="fc-red fs-14 py-1 m-l-30 ">{state.confirmPasswordError}</div>}
                    <PasswordStrengthBar password={props.state.checkPasswordStrength}
                                         className={classes.passwordStrength}/>
                    <MainButton type="button" onClick={() => onSetPasswordClicked()}>
                        {props.state.isItForChangePassword ? 'Change Password' : 'Set Password'}
                    </MainButton>
                </Container>
            </Card>
        </div>
    );
}
