import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import styled from "styled-components";
import {history} from "../../managers/history";
import "semantic-ui-css/semantic.min.css";
import {Select} from "semantic-ui-react";

const Card = styled.div`
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 449px;
  margin-bottom: 256px;
  padding: 23px 30px 45px 29px;
  border-radius: 4px;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.05);
  border: solid 1px #e5e5e5;
  background-color: white;
  margin-top: 70px;
  @media all and (max-width: 1000px) {
    text-align: center;
    position: center;
    width: 280px;
    height: 450px;
  }
`;
const Header = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: 500 !important;
  font-family: Roboto !important;
  color: #26292c;
  @media (max-width: 1000px) {
    text-align: center;
    position: center;
    font-size: 11px;
  }
`;
const HeaderLogo = styled.div`
  text-align: center;
  color: #414141;
  font-size: 16px;
  font-family: Roboto !important;
  @media (max-width: 1000px) {
    text-align: center;
    position: center;
    font-size: 11px;
  }
`;
const Button = styled.div`
  border: 1px solid #bdbdbd;
  font-size: 15px;
  margin-top: 5px;
`;
const Input = styled.input`


  width: 390px;
  height: 50px;
  border: 1px solid #bdbdbd;
  padding-left: 15px;
  outline: none;
  border-radius: 4px;
  font-size: 16px;
  font-family:roboto !important;
  transition: all 0.3s;
  font-size: 15px;
  margin: 15px 10px 0 0;
  color: #181c1b;
  &:focus {
    outline: none;
    border-radius: 4px;
    transition: all 0.3s;
    border-color: #bdbdbd;
  }

  @media (max-width: 1000px) {
    text-align: center;
    position: center;
    width: 240px;
    height: 32px;
  }
`;
const LastInput = styled.input`
  width: 390px;
  height: 50px;
  border: 1px solid #bdbdbd;
  padding-left: 15px;
  outline: none;
  color: #181c1b;
  border-radius: 4px;
  transition: all 0.3s;
  font-size: 16px;
  margin: 25px 10px 0 0;
  font-family: Roboto !important;
  &:focus {
    outline: none;
    border-radius: 4px;
    transition: all 0.3s;
    border-color: #bdbdbd;
  }
  @media (max-width: 1000px) {
    text-align: center;
    position: center;
    width: 240px;
    height: 32px;
  }
`;

// const Select = styled.select`
//   width: 390px;
//   height: 50px;
//   border-radius: 4px;
//   border: 1px solid #bdbdbd;
//   margin: 25px 10px 0 0;
//   background-color: white;
//   font-size: 16px;
//   color: #181c1b;
//   text-align: center;
//   padding-left: "10px";

//   &:focus {
//     border-color: #bdbdbd;
//     outline: none;
//     border-radius: 4px;
//     transition: all 0.3s;
//   }
//   @media (max-width: 1000px) {
//     text-align: left;
//     position: center;
//     width: 240px;
//     height: 32px;
//   }
// `;
const MainButton = styled.button`
  width: 390px;
  height: 50px;
  color: white;
  background-color: #00a0f0;
  margin-top: 21px;
  font-size: 16px;
  margin-bottom: 41px;
  border-radius: 4px;
  border: none;
  vertical-align: center;
  font-family: roboto !important;
  margin-top: 15px;
  &:focus {
    outline: none;
    border-radius: 4px;
    transition: all 0.3s;
    border: none;
  }

  @media (max-width: 1000px) {
    text-align: center;
    margin-right: 50px;
    position: center;
    width: 240px;
    height: 32px;
  }
`;
const InsideLeftButton = styled.button`
  font-size: 13px;
  border: 0px white;
  background-color: white;
  color: #00a0f0;
  padding-top: 18px;
  margin-left: 100px;
  &:focus {
    outline: none;
    border-radius: 4px;
    transition: all 0.3s;
    border: none;
  }
  @media (max-width: 1000px) {
    text-align: center;
    position: center;
    margin-right: -10px;
    margin-left: 40px;
  }
`;
const Options = styled.option`
  margin-left: 20px;
  color: #181c1b;
`;

const InsideButton = styled.button`
  font-size: 10px;
  border: 0px white;
  background-color: white;
  color: #00a0f0;
  margin-left: 4px;
`;
const styles = {
    dropdown: {
        marginTop: "10px",

        width: "390px",
        height: "50px",
        borderRadius: "4px",
        border: "1px solid #bdbdbd",
        margin: "25px 10px 0 0",
        backgroundColor: "white",
        fontSize: "16px",
        color: "#181c1b",
        textAlign: "left",
        paddingLeft: "10px",

        "&:focus": {
            borderColor: "#bdbdbd",
            outline: "none",
            borderRadius: "4px",
            transition: "all 0.3s",
        }

    },
};


export default function SignUpComponent(props) {
    const {handleChange, handleSelectChange, register} = props
    return (
        <div>
            <Card>
                <Container>
                    <Header>Register</Header>
                    <form action="#">
                        <Input type="text" placeholder="First Name" name="firstName"
                               onChange={(event) => handleChange(event)} className="pb-2"/>
                        {props?.state?.firstNameError &&
                        <div className="fc-red fs-14 py-1">{props.state.firstNameError}</div>}
                        <Input type="text" placeholder="Last Name" name="lastName"
                               onChange={(event) => handleChange(event)} className="pb-2"/>
                        {props?.state?.lastNameError &&
                        <div className="fc-red fs-14 py-1">{props.state.lastNameError}</div>}
                        <Input type="text" placeholder="Company Name" name="name"
                               onChange={(event) => handleChange(event)} className="pb-2"/>
                        {props?.state?.nameError && <div className="fc-red fs-14 py-1">{props.state.nameError}</div>}
                        <Input type="text" placeholder="Phone Number" name="phone"
                               onChange={(event) => handleChange(event)} className="pb-2"/>
                        {props?.state?.phoneError && <div className="fc-red fs-14 py-1">{props.state.phoneError}</div>}

                        <Input type="text" placeholder="Email" name="email" onChange={(event) => handleChange(event)}
                               className="pb-2"/>
                        {props?.state?.emailError && <div className="fc-red fs-14 py-1">{props.state.emailError}</div>}

                        <Select style={styles.dropdown} defaultValue="" name="clinicType"
                                options={props.state.profileOptions} onChange={handleSelectChange}/>
                        {props?.state?.clinicTypeError &&
                        <div className="fc-red fs-14 py-1">{props.state.clinicTypeError}</div>}

                        <MainButton type="button" onClick={() => register()}>
                            Register
                        </MainButton>
                    </form>
                </Container>
            </Card>
        </div>
    );
}
