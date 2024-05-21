import React from "react";
import styled from "styled-components";

const Card = styled.div`
display: flex;
justify-content: center;
  background-image: url("/images/DoctorApp_Login.jpg");
  height: 100vh;
  width: 100vw;
  background-repeat: no-repeat;
  background-size: 100vw 100vh;


`;
const Container = styled.div`
  /* background-image:url("DoctorApp_Login.jpg"); */
  width: 450px;
  height: 490px;
  position: center;
  border-radius: 10px;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.05);
  border: solid 1px #e5e5e5;
  background-color: white;
  margin-top: 50px;
`;
const Image = styled.img`
  margin-left: 125px;
  width: 132px;
  height: 90px;
  margin-top: 30px !important;
  display: block;
  margin: auto;
`;
const Header = styled.div`
  text-align: center;
  font-size: 22px;
  margin-top: 17px;
  font-family: Roboto !important;
  color: #26292c;
`;
const Input = styled.input`
  background-image: url("/images/lock.svg");
  /* background-image: url("icon.png"); */
  background-position: left center;
  background-position: 5px;
  background-repeat: no-repeat;
  background-size: small;
  height: 50px;
  width: 390px;
  border: 1px solid lightgrey;
  padding-left: 40px;
  outline: none;
  border-radius: 5px;
  transition: all 0.3s;
  font-size: 15px;
  margin-left: 30px;
  margin-top: 15px;
  color: grey;
`;
const EmailInput = styled.input`
  background-image: url("/images/emailIcon.svg");
  /* background-image: url("icon.png"); */
  background-position: left center;
  background-position: 5px;
  background-repeat: no-repeat;
  background-size: small;
  height: 50px;
  padding-left: 40px;
  width: 390px;
  border: 1px solid lightgrey;
  /* padding-left: 20px; */
  outline: none;
  border-radius: 5px;
  transition: all 0.3s;
  font-size: 15px;
  margin-left: 30px;
  margin-top: 15px;
  color: grey;
`;
const MainButton = styled.button`
  width: 390px;
  height: 50px;
  color: #ffffff;
  background-color: #00a0f0;
  padding-top: 5px;
  font-size: 15px;
  border-radius: 4px;
  border: 0 #00a0f0;
  vertical-align: center;
  font-family: roboto !important;
  margin-left: 30px;
  margin-top: 20px;
  &:focus {
    outline: none;
    border-radius: 5px;
    transition: all 0.3s;
    border: none;
  }
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

const ImageLock = styled.img`
  margin-left: 20px;
  padding-bottom: 10px;
`;
const Signed = styled.span`
  font-size: 15px;
  font-family: Roboto-Regular !important;
  color: #262626;
  margin-left: 10px;
`;
const Password = styled.span`
  font-family: Roboto-Regular !important;
  font-size: 15px;
  color: #00a0f0;
  float: right;
  margin-right: 30px;
  cursor: pointer;
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

function LoginComponent(props) {
    const {state, onChangeEvent, onLoginClicked} = props
    return (
        <Card>
            <Container>
                <Image src="Menu_Logo.png"/>

                <Header>
                    <b>Sign in to your Account</b>
                </Header>

                <EmailInput type="text" placeholder="Email" id="email" value={state ? state.email : ""}
                            onChange={onChangeEvent}/>
                {state.emailError && <div className="fc-red fs-14 py-1">{state.emailError}</div>}


                <Input type="password" placeholder="Password" id="password"
                       value={state ? state.password : ""} onChange={onChangeEvent}/>
                {state.passwordError && <div className="fc-red fs-14 py-1">{state.passwordError}</div>}

                <MainButton type="button" onClick={() => onLoginClicked()}>
                    Sign in
                </MainButton>
                <Label>
                    <Checkbox
                        checked={props.state.checked}
                        onChange={props.onCheckboxChange}
                    />
                    <Signed>Stay Signed in </Signed>
                    <Password onClick={()=>props.handlerForOpenDialog()}>Forgot Password?</Password>
                </Label>
            </Container>
        </Card>
    );
}

export default LoginComponent;
