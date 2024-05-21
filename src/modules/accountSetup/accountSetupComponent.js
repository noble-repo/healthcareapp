import React, {useState, useEffect} from "react";
import {Column, Row} from "simple-flexbox";
import {Button, CardContent, Divider} from "@material-ui/core";
import CustomInput from "../../common/components/CustomInput";
import {history} from "../../managers/history";
import Style from "./Style.css";
import {Box} from "@material-ui/core";
import {Card} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import styled from "styled-components";

const CardContainer = styled.div`
  background-image: url("/images/DoctorApp_Login.jpg");
  background-repeat: no-repeat;
  background-size: 100vw 100vh;
`;
const Container = styled.div`
  background-color: white;
  width: 449px;
  height: 520px;
  padding-top: 0px;
  border-radius: 10px;
  border: solid 1px #e5e5e5;
`;
const Image = styled.img`
  margin-top: 20px;
  height: 90px;
  width: 132px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

const Input = styled.input`
  width: 390px;
  height: 50px;
  margin: 22px 0 21px 1px;
  padding: 16px 15px 15px 17px;
  border-radius: 4px;
  border: solid 1px #00a0f0;
  background-color: #ffffff;
  color: #181c1b;
  margin-left: 29px;
  &:focus {
    outline: none;
    border-radius: 5px;
    transition: all 0.3s;
    border: solid 1px #00a0f0;
  }
`;
const Heading = styled.div`
  text-align: center;
  padding-top: 20px;
  font-size: 22px;
  font-weight: 500;
  color: #26292c;
  font-family: Roboto;
`;
const SubHeading = styled.div`
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #414141;
  font-family: Roboto;
  text-align: center;
  padding-top: 3px;
`;
const MainButton = styled.button`
  width: 390px;
  height: 50px;
  color: white;
  background-color: #00a0f0;
  margin-top: 14px;
  border-radius: 4px;
  border: 0px #00a0f0;
  vertical-align: center;
  font-family: roboto;
  margin-left: 29px;
  font-size: 16px;
  font-weight: 500;
  &:focus {
    outline: none;
    border-radius: 5px;
    transition: all 0.3s;
    border: none;
  }
`;
const BottomHeading = styled.div`
  font-size: 15px;
  text-align: center;
  color: #262626;
  padding-top: 14px;
  padding-bottom: 14px;
  font-family: Roboto;
`;
const Label = styled.label`
  font-size: 15px;
  padding-top: 20px;
  font-family: Roboto;
  display: block;
  font-weight: 500;
  margin-left: 20px;
  margin-right: 10px;
  text-align: left;
`;
const CheckBox = styled.input`
  width: 9.7px;
  height: 9.2px;
  color: white;
`;
const Privacy = styled.span`
  color: #00a0f0;
`;
const SignIn = styled.span`
  color: #00a0f0;
`;

const Statement = styled.span`
  padding-left: 10px;
`;
const Condition = styled.span`
  color: #00a0f0;
`;
const Policy = styled.span`
  margin-left: 35px;
`;
const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.svg`
  fill: none;
  stroke: #00a0f0;
  stroke-width: 4px;
  margin-bottom: 10px;
`;
const HiddenCheckbox = styled.input.attrs({type: "checkbox"})`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-left: 12px;

  background: ${(props) => (props.checked ? "#ffffff" : "white")};
  border-radius: 2px;
  transition: all 150ms;
  border: 1px solid #979797;

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

const Checkbox = ({className, checked, ...props}) => (
    <CheckboxContainer className={className}>
        <HiddenCheckbox checked={checked} {...props} />
        <StyledCheckbox checked={checked}>
            <Icon viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12"/>
            </Icon>
        </StyledCheckbox>
    </CheckboxContainer>
);

function AccountSetupComponent(props) {
    const {onChangeEvent, state, onContinueClick} = props
    const [display, setDisplay] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setDisplay(true);
        }, 2000);
    });

    return (
        <CardContainer className="disp-flex">

            {display ?
                <Container>
                    <Image src="/Menu_Logo.png" alt="h"/>

                    <Heading>Set up your account</Heading>
                    <SubHeading>Enter your email to continue</SubHeading>
                    <Input type="text" name='email' onChange={onChangeEvent}/>
                    {state.emailError && <div className="fc-red fs-14 py-1 ">{state.emailError}</div>}
                    <br/>
                    <MainButton type="button" onClick={() => onContinueClick()}>
                        Continue
                    </MainButton>
                    <br/>

                    <Label>
                        <Checkbox
                            checked={props.state.checked}
                            onChange={props.onCheckboxChange}
                        />
                        <Statement>I agree with H3A's&nbsp;</Statement>
                        <Condition>Term and Conditions</Condition> and
                        <Privacy>
                            {" "}
                            Privacy <br/>
                            <Policy>policy</Policy>
                        </Privacy>
                    </Label>

                    <hr style={{marginTop: "30px"}}/>
                    <BottomHeading>
                        Already a member?
                        <a href="">
                            <SignIn onClick={() => history.push("/")}>
                                {" "}
                                Sign in
                            </SignIn>
                        </a>{" "}
                    </BottomHeading>
                </Container> : " "}
        </CardContainer>
    );
}

export default AccountSetupComponent;
