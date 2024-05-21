import React from "react";
import styled from "styled-components";
import {history} from "../../managers/history";

const CardContainer = styled.div`
  background-image: url("/images/VerifyEmail.png");
  height: 132vh;
  /* width:100vw; */
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 1000px) {
    background-image: url("/images/VerifyEmail.png");
    background-size: cover;
    background-position: center center;
  }
`;
const Container = styled.div`
  /* margin-top: -175px; */
  background-color: white;
  /* width: 320px;
  height: 370px; */
  width: 449px;
  height: 505px;
  padding-top: 15px;
  border-radius: 10px;
  border: solid 1px #e5e5e5;
  @media  (max-width:1024px) and (min-width: 768px) {
    height: 300px;
    width: 23%;
    margin-top: -8rem;
    // margin-bottom:105px;
    
    
  
}
  
`;
const Image = styled.img`
width: 132px;
  height: 90px;
  padding-top: 12px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  @media  (max-width:1024px) and (min-width: 768px) {
    
    width:100px;
    padding-top: 8px;
    height: 45px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  
}
  
`;
const MainHeading = styled.div`
  width: 365px;
  height: 25px;
  margin-left: 40px;
  margin-top: 15px;
  /* margin: 25px 12px 9px 13px; */
  font-family: Roboto !important;

  font-size: 22px;
  font-weight: 500;
  text-align: center;
  color: #26292c;
  @media  (max-width:1024px) and (min-width: 768px) {
    
    font-size: 12px;
    margin-top:10px;
    width:178px;
    margin-left:0px;
  
}
  // @media (max-width: 1000px) {
  //   font-size: 12px;
  //   margin-top: 10px;
  // }
`;
const SubHeading = styled.div`
  font-size: 16px;
  text-align: center;
  padding-top: 5px;
  font-family: Roboto !important;
 font-weight:500; 
  color: #414141;
 
  @media  (max-width:1024px) and (min-width: 768px) {
    font-size:10px;
    margin:0px 5px;
  
}
`;
const Input = styled.input`
  /* height: 40px;
  width: 280px; */
  width: 390px;
  height: 50px;
  border: 1px solid lightgrey;
  text-align: center;
  /* padding-left: 50px; */
  outline: none;
  color: #b5b5b5;
  border-radius: 4px;
  font-size: 16px;
  transition: all 0.3s;
  font-size: 15px;
  margin-left: 29px;
  margin-top: 25px;
  color: grey;

  @media  (max-width:1024px) and (min-width: 768px) {
    width: 82%;
    height: 20px;
    margin-top: 10px;
    
    
    margin-left:15px;
  
}
  
    border-radius: 4px;
  
`;
const MainButton = styled.button`
  /* width: 280px;
  height: 40px; */
  width: 390px;
  height: 50px;
  color: white;
  background-color: #00a0f0;
  margin-top: 28px;
  /* font-size: 11px; */
  font-size: 16px;
  font-weight: 500;
  border-radius: 4px;
  border: 0px #00a0f0;
  vertical-align: center;
  font-family: roboto;
  margin-left: 29px;
  &:focus {
    outline: none;
    border-radius: 4px;
    transition: all 0.3s;
    border: none;
  }

  @media  (max-width:1024px) and (min-width: 768px) {
    
    
    margin-left:15px;
    width: 82%;
    height: 20px;
    margin-top: 10px;
    border-radius: 4px;
    font-size: 9px;
  
}
  
`;
const Timer = styled.div`
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #8f8f8f;
  margin: 54px 43px 58px; 
  font-size: 15px;
  @media (max-width: 1000px) {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 10px;
  }
`;

function VerifyComponent(props) {
    const {onChangeEvent, state, onContinueClick} = props

    return (
        <CardContainer className="dis-flex">
            <Container>
                <Image src="Menu_Logo.png" alt="h" height="80px"/>
                <MainHeading>Verify your email</MainHeading>
                <SubHeading>
                    We have sent an One Time Password <br/>
                    (OTP) to verify your email{" "}
                </SubHeading>
                <Input type="text" placeholder="Enter OTP" value={state.otp} name="otp" onChange={onChangeEvent}/>
                {state.otpError && <div className="fc-red fs-14 py-1 ">{state.otpError}</div>}
                <br/>
                <MainButton
                    type="button"
                    onClick={() => onContinueClick()}
                >
                    Continue
                </MainButton>
                <Timer>
                    Resend OTP:
                    <span style={{fontWeight: "700", color: "#414141"}}>
            &nbsp;0:45
          </span>
                </Timer>
            </Container>
        </CardContainer>
    );
}

export default VerifyComponent;
