import React from "react";
import styled from "styled-components";
import {history} from "../../managers/history";

const CardContainer = styled.div`
  background-image: url("/images/AccountSetup_EmailVerified.png");
  height: 132vh;
  width: 100vw;
  background-repeat: no-repeat;
  background-size: cover;
  @media  (max-width:1024px) and (min-width: 768px) {
    background-image: url("/images/verified_background.jpg");
    background-size: cover;
    background-position: center center;
  }
`;
const Container = styled.div`
  background-color: white;

  width: 449px;
  height: 505px;
  padding-top: 10px;
  border-radius: 10px;
  border: solid 1px #e5e5e5;
  @media  (max-width:1024px) and (min-width: 768px) {

    
    height: 300px;
    width: 23%;
    margin-top: -7rem;
  }
 
`;
const Image = styled.img`
  padding-top: 10px;
  width: 132px;
  height: 90px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  @media  (max-width:1024px) and (min-width: 768px) {

    
    width: 100px;
    padding-top: 8px;
    height: 50px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
 
`;
const Checkmark = styled.img`
  text-align: center;
  display: block;

  margin-left: 139px;
  margin-right: auto;
  margin-top: 51px;
  width: 170px;
  height: 167px;
 
  

  @media  (max-width:1024px) and (min-width: 768px) {

    margin-top: 0px;
    height: 60px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width:80px;
  }
`;
const Heading = styled.div`
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #181c1b;
  margin-top: 49px;
  font-family: Roboto;

  font-size: 22px;
  font-weight: 500;
  @media (max-width: 1000px) {
    font-size: 13px;
    margin-top: 22px;
  }
`;
const SubHeading = styled.div`
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;

  font-size: 15px;
  margin-top: 9px;
  margin-bottom: 60px;
  font-family: Roboto;

  font-weight: normal;
  color: #414141;
  @media (max-width: 1000px) {
    font-size: 9px;
    margin-bottom: 30px;
  }
`;

function VerifiedComponent() {
    return (
        <CardContainer className="disp-flex">
            <Container>
                <Image src="Menu_Logo.png" alt="h" height="78px"/>
                <br/>
                <Checkmark
                    src="checkmark.png"
                    height="110px"
                    onClick={() => history.push("/reset-password")}
                />
                <Heading>Your Email is Verified</Heading>
                <SubHeading>You can now setup your account</SubHeading>
            </Container>
        </CardContainer>
    );
}

export default VerifiedComponent;
