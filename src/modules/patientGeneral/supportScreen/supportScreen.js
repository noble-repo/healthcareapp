import React from "react";
import styled from "styled-components";
import { Column, Row } from "simple-flexbox";

const Card = styled.div`
  display: flex;
  justify-content: center;
`;
const Image = styled.img`
  width: 90px;
  height: 90px;
  margin-top: 100px;
  margin-left: 180px;
`;
const CallSpan = styled.span`
  width: 464px;
  height: 34px;
  margin-top: 36px;
  font-family: Roboto;
  font-size: 24px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  text-align: center;
  color: #414141;
  @media (max-width: 315px) {
    font-size:24px;
  }
`;
// const Divider = styled.div`
// margin-top:40px;
// `
// const Drawline = styled.hr`
// width: 20px;
// `
const OrButton = styled.button`
  width: 38px;
  height: 38px;
  border: solid 1px #bdbdbd;
  border-radius: 50px;
  background-color: #ffffff;
  position: relative;
  margin-top: -25px;
  margin-left: 220px;
  color: #bdbdbd;
  /* margin-top:30px; */
  &:focus {
    border-color: solid 1px #bdbdbd;
    outline: none;
    border-radius: 50px;
    /* transition: all 0.3s; */
  }
`;
const Issue = styled.span`
  /* margin: 39px 810px 24px 811px; */
  font-family: Roboto;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: normal;
  text-align: center;
  color: #414141;
  margin-top: 39px;
  /* margin-left:0px; */
  @media (max-width: 315px) {
    font-size:15px;
  }
`;
const Revert = styled.span`
  /* width: 299px;
  height: 44px; */
  /* margin: 39px 810px 24px 811px; */
  font-family: Roboto;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: normal;
  text-align: center;
  color: #414141;
  /* margin-top:39px; */
  /* margin-left:60px; */
  @media (max-width: 315px) {
    font-size:15px;
  }
`;
const Select = styled.select`
  width: 466px;
  height: 50px;
  border-radius: 4px;
  border: 1px solid #bdbdbd;
  margin: 25px 10px 0 0;
  background-color: white;
  font-size: 16px;
  color: #181c1b;
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  margin-left: 20px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  padding-left: 14px;
  &:focus {
    border-color: #bdbdbd;
    outline: none;
    border-radius: 4px;
    transition: all 0.3s;
  }

  @media (max-width: 480px) {
    width: 300px;
    height: 50px;
    margin-left: 80px;
  }
  @media (max-width: 315px) {
    width: 250px;
    height: 45px;
    margin-left: 100px;
  }
`;
const Input = styled.input`
  width: 466px;
  height: 176px;
  border-radius: 4px;
  border: 1px solid #bdbdbd;
  /* margin: 25px 10px 0 0; */
  margin-top: 19px;
  background-color: white;
  font-size: 16px;
  color: #bdbdbd;
  text-align: left;
  padding-left: "14px";
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  padding-left: 14px;
  padding-bottom: 135px;
  margin-left: 20px;
  &:focus {
    border-color: #bdbdbd;
    outline: none;
    border-radius: 4px;
    transition: all 0.3s;
  }

  @media (max-width: 480px) {
    width: 300px;
    height: 146px;
    margin-left: 80px;
  }
  @media (max-width: 315px) {
    width: 250px;
    height: 145px;
    margin-left: 100px;
  }
`;
const Option = styled.option`
  min-width: 60px;
  width: auto;
`;
const MainButton = styled.button`
  width: 466px;
  height: 50px;
  background-color: #00a0f0;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  margin-top: 31px;
  font-size: 16px;
  margin-bottom: 41px;
  margin-left: 20px;
  border-radius: 4px;
  color: #ffffff;
  border: none;
  vertical-align: center;
  font-family: roboto !important;
  &:focus {
    outline: none;
    border-radius: 4px;
    transition: all 0.3s;
    border: none;
  }
  @media (max-width: 480px) {
    width: 300px;
    height: 50px;
    margin-left: 80px;
  }
  @media (max-width: 315px) {
    width: 250px;
    height: 40px;
    margin-left: 100px;
  }
`;
const HrLine = styled.hr`
  width: 36%;
  margin-left: 20px;
  margin-top: 30px;
  @media (max-width: 360px) {
    width: 25%;
    margin-left: 85px;

    /* margin-left:90px; */
  }
`;
const HrLineRight = styled.hr`
  width: 40%;
  margin-left: 276px;
  margin-top: -23px;
  @media (max-width: 360px) {
    width: 25%;
    margin-left: 270px;
    /* margin-left:50px; */
  }
`;
const Number = styled.span`
  font-family: Roboto;
  font-size: 24px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  text-align: center;
  color: #00a0f0;
  @media (max-width: 315px) {
    font-size:20px;
  }
`;
export default function SupportScreen(props) {
  console.log(props, "test");
  const { state } = props;

  return (
    <Card>
      <Column>
        <Image src="/images/support.svg" class="Group-27"></Image>

        <Row>
          <CallSpan>
            Call Us <Number>{props.state.contactNumber}</Number>
          </CallSpan>
        </Row>
        {/* <Row> */}
        <HrLine />
        <OrButton>or</OrButton>
        <HrLineRight />
        {/* </Row> */}
        <Issue>Let us know the issue you are facing.</Issue>
        <Revert>We will revert back to you.</Revert>
        <Select>
          <Option>Select Issue Type</Option>
        </Select>
        <Input placeholder="Description"></Input>
        <MainButton type="button">Submit</MainButton>
      </Column>
    </Card>
  );
}
