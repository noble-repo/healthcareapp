import React from "react";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";
const Card = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

const Container = styled.div`
  width: 330px;
  height: 400px;
  position: center;
  margin-left: 300px;
  border-radius: 4px;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.05);
  border: solid 1px #e5e5e5;
  background-color: white;
  margin-top: 75px;
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

export default function InvoiceDetails(props) {
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
        <Invoice>Invoice</Invoice>

        <Container>Bill</Container>
      </Card>
    </div>
  );
}
