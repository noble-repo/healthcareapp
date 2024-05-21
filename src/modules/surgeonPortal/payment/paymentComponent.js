import React from "react";
import styled from "styled-components";
import { history } from "../../../managers/history";
import { Column, Row } from "simple-flexbox";

const Header = styled.div`
  text-align: left;
  font-size: 18px;
  font-weight: 500;
  margin-top: 39px;
  margin-left: 70px;
  color: #26292c;
  @media all and (max-width: 1200px) and (min-width: 900px) {
    margin-left: 0px;
  }
`;
const Container = styled.div`
  width: 320px;
  height: 440px;
  position: center;
  padding: 23px 30px 45px 29px;
  border-radius: 4px;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.05);
  border: solid 1px #e5e5e5;
  background-color: #ffffff;
  margin-top: 29px;
  margin-bottom: 445px;
`;
const MiddleContainer = styled.div`
  width: 320px;
  height: 440px;
  margin-bottom: 445px;
  position: right;
  padding: 23px 30px 45px 29px;
  border-radius: 4px;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.05);
  border: solid 1px #e5e5e5;
  background-color: #ffffff;
  margin-left: 40px;
  margin-top: 29px;
`;
const RightContainer = styled.div`
  width: 320px;
  height: 440px;
  margin-left: 40px;
  margin-bottom: 445px;
  margin-top: 29px;
  position: right;
  padding: 23px 30px 45px 29px;
  border-radius: 4px;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.05);
  border: solid 1px #e5e5e5;
  background-color: #ffffff;
`;
const UpperHeading = styled.div`
  font-size: 22px;
  font-weight: 500;
  font-family: Roboto;
  color: #262626;
`;
const InnerHeading = styled.div`
  font-size: 16px;
  margin-top: 6px;
  font-weight: normal;
  text-align: left;
  color: #414141;
`;
const Heading = styled.div`
  font-size: 16px;
  font-weight: normal;
  text-align: left;
  color: #8f8f8f;
  margin-top: -15px;
  margin-left: 20px;
`;
const MHeading = styled.div`
  font-size: 16px;
  font-weight: normal;
  text-align: left;
  color: #8f8f8f;
  margin-top: -14px;
  margin-left: 20px;
`;

const Price = styled.div`
  margin-top: 90px;
  font-size: 28px;
  font-weight: 500;
  font-family: Roboto;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.41;
  letter-spacing: normal;
  color: #262626;
`;
const Image = styled.img`
  width: 9.7px;
  height: 9.2px;
  position: left;
  margin-top: 39px;
`;
const MImage = styled.img`
  width: 9.7px;
  height: 9.2px;
  position: left;
  margin-top: 20.8px;
`;
const MiddleHeading = styled.div`
  margin-top: -2px;
`;
const Button = styled.div`
  width: 141px;
  height: 40px;
  color: #ffffff;
  background-color: #00a0f0;
  margin-top: 15px;
  margin-bottom: 36px !important;
  font-size: 15px;
  font-weight: normal;
  border-radius: 2px;
  border: 0px #00a0f0;
  vertical-align: center;
  font-family: roboto;
  text-align: center;
  position: center;
  padding-top: 8px;
  &:focus {
    outline: none;
    border-radius: 5px;
    transition: all 0.3s;
    border: none;
  }
`;
const MPlan = styled.div`
  text-align: left;
  margin-left: 30px;
  font-family: Roboto;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #414141;
`;

const YPlan = styled.div`
  text-align: left;
  margin-left: 26px;
  font-family: Roboto;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #414141;
`;
const Form = styled.form`
  margin-top: 14px;
  position: left;
  margin-left:120px;
`;
const Radio = styled.input`
  width: "14px";
  height: "14px";
`;
const PlanLabel = styled.label`
  margin-left: 9px;
  margin-top:10px;
`;
const BackIcon = styled.img`
 width: 80px;
 height:80px;
  /* margin: 36px 240px 0 37px; */
  padding: 16px 13px 14px 10px;
`
export default function PaymentComponent(props) {
  return (
    <div>
      <div>
        <Row>
        <BackIcon src="/images/back_icon.svg"></BackIcon>
        <Header>Change your Plan</Header>
        
        </Row>
        <div >
          <Form>
            <Row>
              <MPlan>
                <div class="form-check form-check-inline">
                  <Radio
                    class="form-check-input"
                    type="radio"
                    name="plans"
                    value="monthly"
                    onChange={props.toggleValue}
                    checked
                  />
                  <PlanLabel class="form-check-label" for="inlineRadio1">
                    Monthly plans
                  </PlanLabel>
                </div>
              </MPlan>
              <YPlan>
                <div class="form-check form-check-inline">
                  <Radio
                    class="form-check-input"
                    type="radio"
                    name="plans"
                    value="yearly"
                    onChange={props.toggleValue}
                  />
                  <PlanLabel class="form-check-label" for="inlineRadio1">
                    Yearly plans
                  </PlanLabel>
                </div>
              </YPlan>
            </Row>
          </Form>
        </div>

        {props.state.planType === "monthly" ? (
          <>
            <Row className="dis-flex">
              <Container>
                <UpperHeading>Silver</UpperHeading>
                <InnerHeading>
                  Best for individual Anesthesiologists
                </InnerHeading>

                <div>
                  <Image src="../images/blue_checkmark.svg"></Image>
                  <Heading>20 Active Patients</Heading>
                </div>

                <MiddleHeading>
                  <MImage src="../images/blue_checkmark.svg"></MImage>
                  <MHeading>2 Users</MHeading>
                </MiddleHeading>

                <MiddleHeading>
                  <MImage src="../images/blue_checkmark.svg"></MImage>
                  <MHeading>Single Anesthesiologists</MHeading>
                </MiddleHeading>
                <Price>$39 / month</Price>
                <Button
                  type="button"
                  onClick={() => history.push("/make-payment")}
                >
                  Downgrade Plan
                </Button>
              </Container>
              <MiddleContainer>
                <UpperHeading>Gold</UpperHeading>
                <InnerHeading>Best for Anesthesiologists Groups</InnerHeading>
                <div>
                  <Image src="../images/blue_checkmark.svg"></Image>
                  <Heading>100 Active Patients</Heading>
                </div>
                <MiddleHeading>
                  <MImage src="../images/blue_checkmark.svg"></MImage>
                  <MHeading>5 Users</MHeading>
                </MiddleHeading>
                <MiddleHeading>
                  <MImage src="../images/blue_checkmark.svg"></MImage>
                  <MHeading>5 Anesthesiologists</MHeading>
                </MiddleHeading>
                <Price>$79 / month</Price>

                <Button
                  type="button"
                  onClick={() => history.push("/surgeon/make-payment")}
                >
                  Current Plan
                </Button>
              </MiddleContainer>
              <RightContainer>
                <UpperHeading>Platinum</UpperHeading>
                <InnerHeading>Best for hospital</InnerHeading>

                <div>
                  <Image src="../images/blue_checkmark.svg"></Image>
                  <Heading>Unlimited Patients</Heading>
                </div>

                <MiddleHeading>
                  <MImage src="../images/blue_checkmark.svg"></MImage>
                  <MHeading>Unlimited Users</MHeading>
                </MiddleHeading>

                <MiddleHeading>
                  <MImage src="../images/blue_checkmark.svg"></MImage>
                  <MHeading>Unlimited Anesthesiologists</MHeading>
                </MiddleHeading>

                <Price>$829 / month</Price>

                <Button
                  type="button"
                  onClick={() => history.push("/make-payment")}
                >
                  Upgrade Plan
                </Button>
              </RightContainer>{" "}
            </Row>
          </>
        ) : (
          <>
            <Row className="dis-flex">
              <Container>
                <UpperHeading>Silver</UpperHeading>
                <InnerHeading>
                  Best for individual Anesthesiologists
                </InnerHeading>

                <div>
                  <Image src="../images/blue_checkmark.svg"></Image>
                  <Heading>20 Active Patients</Heading>
                </div>

                <MiddleHeading>
                  <MImage src="../images/blue_checkmark.svg"></MImage>
                  <MHeading>2 Users</MHeading>
                </MiddleHeading>

                <MiddleHeading>
                  <MImage src="../images/blue_checkmark.svg"></MImage>
                  <MHeading>Single Anesthesiologists</MHeading>
                </MiddleHeading>

                <Price>$499 / year</Price>
                <Button
                  type="button"
                  onClick={() => history.push("/make-payment")}
                >
                Upgrade Plan
                </Button>
              </Container>
              <MiddleContainer>
                <UpperHeading>Gold</UpperHeading>
                <InnerHeading>Best for Anesthesiologists Groups</InnerHeading>

                <div>
                  <Image src="/images/blue_checkmark.svg"></Image>
                  <Heading>100 Active Patients</Heading>
                </div>

                <MiddleHeading>
                  <MImage src="/images/blue_checkmark.svg"></MImage>
                  <MHeading>5 Users</MHeading>
                </MiddleHeading>

                <MiddleHeading>
                  <MImage src="/images/blue_checkmark.svg"></MImage>
                  <MHeading>5 Anesthesiologists</MHeading>
                </MiddleHeading>

                <Price>$999 / year</Price>

                <Button
                  type="button"
                  onClick={() => history.push("/make-payment")}
                >
                  Select
                </Button>
              </MiddleContainer>
              <RightContainer>
                <UpperHeading>Platinum</UpperHeading>
                <InnerHeading>Best for hospital</InnerHeading>

                <div>
                  <Image src="/images/blue_checkmark.svg"></Image>
                  <Heading>Unlimited Patients</Heading>
                </div>

                <MiddleHeading>
                  <MImage src="/images/blue_checkmark.svg"></MImage>
                  <MHeading>Unlimited Users</MHeading>
                </MiddleHeading>

                <MiddleHeading>
                  <MImage src="/images/blue_checkmark.svg"></MImage>
                  <MHeading>Unlimited Anesthesiologists</MHeading>
                </MiddleHeading>
                <Price>$9999 / year</Price>
                <Button
                  type="button"
                  onClick={() => history.push("/make-payment")}
                >
                  Select
                </Button>
              </RightContainer>{" "}
            </Row>
          </>
        )}
      </div>
    </div>
  );
}
