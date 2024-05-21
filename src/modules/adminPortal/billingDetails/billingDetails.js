import React from "react";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";
const Card = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

const Container = styled.div`
width: 709px;
height: 878px;
margin: 10.5px 400px 53px 198px;
padding: 421px 299px;
border: solid 1px #707070;
background-color: #ffffff;
justify-content: center;
  text-align: center;
  display: flex;
  
`;
const Text = styled.div`
font-family: Roboto!important;
  font-size: 14px;
  font-weight: bold;
  
`;
const OpenImage = styled.img`
  width: 40px;
  height: 40px;
  margin-left: -18px;
  margin-top: 35px;
`;
const CloseImage = styled.img`
  width: 40px;
  height: 40px;
  margin-left: -18px;
  margin-left: 2px;
  margin-top: 35px;
`;
const Invoice = styled.div`
  margin-left: 30px;
  margin-top: 0px;
  font-size: 18px;
  font-weight: 550;
  color: #26292c;
  font-family: roboto;
`;

export default function BillingDetails(props) {
  return (
    <div>
      <Column>
        {props.state.isOpen ? (
          <OpenImage
            src="/images/toggle_icon.svg"
            onClick={() => {
              props.toggleImage();
            }}
          />
        ) : (
          <CloseImage
            src="/images/toggle_icon.svg"
            onClick={() => {
              props.toggleImage();
            }}
          />
        )}
      </Column>
      <Card>
      

        <Container>
          <Text>Payment Invoice </Text></Container>
      </Card>
    </div>
  );
}
