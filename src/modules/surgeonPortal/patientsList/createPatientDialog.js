import React from "react";
import Dialog from "@material-ui/core/Dialog";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 360px;
  height: 325px;
  position: center;
  border-radius: 4px;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.05);
  border: solid 1px #e5e5e5;
  background-color: white;
`;
const Title = styled.div`
  font-size: 18px;
  margin-top: 17px;
  padding-left: 15px;
  text-align: left;
  font-family: Roboto;
  color: #26292c;
`;
const CloseButton = styled.img`
  margin-top: -60px;
  margin-left: 185px;
  padding-left: 140px;
  height:20px;
`;

const Input = styled.input`
  height: 35px;
  width: 330px;
  border: 1px solid #bdbdbd;
  padding-left: 10px;
  outline: none;
  border-radius: 4px;
  font-family:"roboto !important";
  transition: all 0.3s;
  font-size: 15px;
  /* padding-bottom:10px; */
  margin-left: 14px;
  color: #181c1b;
`;
const InputField = styled.input`
  height: 35px;
  width: 330px;
  border: 1px solid #bdbdbd;
  font-family:"roboto !important";

  padding-left: 10px;
  outline: none;
  border-radius: 4px;
  transition: all 0.3s;
  font-size: 16px;
  margin-top: 10px;
  margin-left: 14px;
  color:#181c1b;
`;

const Button = styled.button`
  width: 330px;
  height: 38px;
  color: #ffffff;;
  background-color: #00a0f0;
  font-size: 16px;
  border-radius: 4px;
  border: #00a0f0;
  vertical-align: center;
  font-family: Roboto;
  margin-top: 13px;
  margin-left: 14px;
`;
const Note = styled.div`
  font-size: 10px;
  /* color:lightgrey; */
  color: #8f8f8f;
  margin-left: 50px;
  margin-top: 10px;
`;

export default function CreatePatientDialog(props) {
    const {handleChange, createPatient} = props
    return (
        <Card>
            <Dialog
                open={props.state.open}
                onClose={props.handleDialog}
                style={{marginTop: "-20px"}}
            >
                <Container>
                    <Title>
                        <b>Add New Patient</b>
                    </Title>
                    <CloseButton
                        src="/images/cross.svg"
                        class="Group-9"
                        onClick={props.handleDialog}
                    />
                    <Input type="text" placeholder="Full Name" name={"name"}
                           onChange={(event) => handleChange(event)} className="pb-2"/>
                    {props?.state?.nameError &&
                    <div className="fc-red fs-14 py-1 pl-3">{props.state.nameError}</div>}
                    <br/>
                    <InputField type="text" placeholder="Email" name={"email"}
                                onChange={(event) => handleChange(event)}
                                className="pb-2"/>
                    {props?.state?.emailError && <div className="fc-red fs-14 py-1 pl-3">{props.state.emailError}</div>}

                    <br/>
                    <InputField type="text" placeholder="Phone Number" name={"phone"}
                                onChange={(event) => handleChange(event)}
                                className="pb-2"/>
                    {props?.state?.phoneError && <div className="fc-red fs-14 py-1 pl-3">{props.state.phoneError}</div>}

                    <br/>
                    <InputField type="text" placeholder="Surgery Type" name={"surgeryType"}
                                onChange={(event) => handleChange(event)}/>
                    {props?.state?.surgeryTypeError &&
                    <div className="fc-red fs-14 py-1 pl-3">{props.state.surgeryTypeError}</div>}


                    <Button type="button" onClick={() => createPatient()}>Invite Patient</Button>
                    <Note>Patient will get an email to set up account on H3A Health</Note>
                </Container>
            </Dialog>
        </Card>
    );
}
