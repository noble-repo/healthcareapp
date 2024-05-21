import React from "react";
import HeaderComponent from "../profile/header";
import styled from "styled-components";
import { history } from "../../managers/history";

const Card = styled.div`
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 449px;
  height: 536px;
  position: center;
  border-radius: 4px;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.05);
  border: solid 1px #e5e5e5;
  background-color: white;
  margin-top: 99px;
  margin-bottom: 429px;
`;
const MainButton = styled.button`
  width: 390px;
  height: 50px;
  color: white;
  background-color: #00a0f0;
  padding-top: 5px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 4px;
  border: 0px #00a0f0;
  vertical-align: center;
  font-family: roboto;
  margin-left: 29px;
  margin-top: 24px;
  &:focus {
    outline: none;
    border-radius: 5px;
    transition: all 0.3s;
    border: none;
  }
`;
const Header = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  margin-top: 45px;
  font-family: Roboto;
  color: #26292c;
`;
const Input = styled.input`
  width: 390px;
  height: 50px;
  border: 1px solid lightgrey;
  padding-left: 10px;
  outline: none;
  border-radius: 5px;
  font-size: 16px;
  transition: all 0.3s;
  font-size: 15px;
  margin-left: 29px;
  margin-top: 35px;
  color: #8f8f8f;
`;
const Image = styled.img`
  margin-left: 179px;
  width: 90px;
  height: 69px;
  margin-top: 30px;
`;
const BottomImage = styled.img`
  width: 20px;
  height: 18px;
  margin-top: 39px;
  margin-left: 30px;
  margin-right: 30px;
`;
const InputDate = styled.input`
  width: 243px;
  height: 50px;
  border: 1px solid lightgrey;
  padding-left: 10px;
  outline: none;
  border-radius: 5px;
  font-size: 16px;
  transition: all 0.3s;
  font-size: 13px;
  margin-left: 29px;
  margin-top: 18px;
  color: #8f8f8f;
`;
const InputCVV = styled.input`
  width: 132px;
  height: 50px;
  border: 1px solid lightgrey;
  padding-left: 10px;
  outline: none;
  border-radius: 5px;
  font-size: 16px;
  transition: all 0.3s;
  font-size: 13px;
  margin-left: 15px;
  margin-top: -10px;
  color: #8f8f8f;
`;
const Note = styled.div`
  font-size: 15px;
  font-family: Roboto;
  color: #262626;
  margin-left: 65px;
  margin-top: -18px;
  margin-bottom: 44px;
`;
export default function MakePayment(props) {
  return (
    <div>
      <div>
        <HeaderComponent />
      </div>
      <Card>
        <Container>
          <Image src="/images/Payment_Card.svg"></Image>
          <Header>
            <b>Make Payment to complete account setup</b>
          </Header>
          <form action="#">
            <Input
              type="text"
              placeholder="16 digits credit card number"
              value={props.state.cardNumber}
              onChange={props.handleCard}
            ></Input>
            <br />
            <InputDate type="text" placeholder="Expiry date(mm/yy)"></InputDate>
            <InputCVV
              type="text"
              placeholder="CVV/CVC"
              value={props.state.cvv}
              onChange={props.handleCvv}
            ></InputCVV>
            <MainButton type="button" onClick={() => history.push("/schedule")}>
              Make Payment
            </MainButton>
            <BottomImage src="/images/lock_icon.svg"></BottomImage>
            <Note>This is a secure 128-SSL encrypted connection.</Note>
          </form>
        </Container>
      </Card>
    </div>
  );
}
