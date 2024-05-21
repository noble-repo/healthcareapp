import React from "react";
import styled from "styled-components";
import Dialog from "@material-ui/core/Dialog";
import {makeStyles} from "@material-ui/core/styles";
import {Column, Row} from "simple-flexbox";
import Dropzone from "../../common/components/Dropzone";

const Card = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 502px;
  height: 614px;
  position: center;
  border-radius: 4px;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.05);
  border: solid 1px #e5e5e5;
  background-color: white;
`;
const Title = styled.div`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #26292c;
  margin-top: 15px;
  padding-left: 18px;
  text-align: left;
`;
const CloseButton = styled.img`
  margin-top: -20px;
  margin-right: 18px;
  float: right;
  padding-left: 140px;
`;

const useStyles = makeStyles({
    box: {
        // marginBottom: "140px",
    },
});

const MainBox = styled.div`
  background-color: rgba(249, 249, 249, 0.92);
  margin-top: 15px;
  /* margin: 35px 78px 61px 0; */
  padding: 16px 26px 42px 28px;
`;
const TypeInput = styled.input`
  width: 100%;
  height: 42px;
  border: solid 1px #bdbdbd;
  background-color: #ffffff;
  font-family: Roboto;
  font-size: 16px;
  color: #000000;
  margin-top: 5px;

  &:focus {
    outline: none;
    border-radius: 0;
    transition: all 0.3s;
    border-color: #bdbdbd;
  }
`;
const Select7 = styled.select`
  width: 100%;
  height: 42px;
  padding: 10px;
  border: solid 1px #bdbdbd;
  background-color: #ffffff;

  &:focus {
    outline: none;
    transition: all 0.3s;
    border-color: #bdbdbd;
  }
`;

const Select8 = styled.select`
  width: 100%;
  height: 42px;
  padding: 10px;
  border: solid 1px #bdbdbd;
  background-color: #ffffff;

  &:focus {
    outline: none;
    transition: all 0.3s;
    border-color: #bdbdbd;
  }
`;
const Options = styled.option`
  margin-left: 20px;
  color: #000000;
`;
const SubHeading = styled.span`
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #181c1b;
`;
const Picture = styled.div`
  border: solid 1px #bdbdbd;
  background-color: #ffffff;
  width: 100%;
  height: 120px;
`;
const MainButton = styled.button`
  width: 162px;
  height: 48px;
  background-color: #00a0f0;
  margin-top: 18px;
  margin-bottom: 18px;
  border: 0 #00a0f0;
  vertical-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  padding-left: 10px;
  color: #ffffff;

  &:focus {
    outline: none;
    transition: all 0.3s;
    border: none;
  }
`;


export default function AddMedication(props) {
    const {handleSelectChange, name, url, dosage, frequency, isValuesDisabled = false, open, handleDialog} = props

    const classes = useStyles();
    return (
        <Card>
            <Dialog open={open} onClose={handleDialog} className={classes.box}>
                <Container>
                    <Title>Add Medication</Title>
                    <CloseButton src="/images/cross.svg" class="Group-9" onClick={handleDialog}/>
                    <MainBox>
                        <Row>
                            <SubHeading>Name of Medications</SubHeading>
                        </Row>
                        <Row className="pt-2">
                            <TypeInput onChange={(e) => props.nameChange(e)} value={name} name={"name"}
                                       disabled={isValuesDisabled}/>
                        </Row>

                        {!isValuesDisabled && props.state.nameError &&
                        <div className="fc-red fs-14 py-1">{props.state.nameError}</div>}
                        <Row className="pt-2">
                            <SubHeading>Dosage </SubHeading>
                        </Row>
                        <Row className="pt-2">
                            <Select7 onChange={(event) => handleSelectChange(event, 'dosage')}
                                     value={dosage || ''} disabled={isValuesDisabled}>
                                <Options>Select</Options>
                                {props?.state.DOSAGE_OPTION.length > 0 && props?.state.DOSAGE_OPTION.map((optionObj, index) =>
                                    <Options value={optionObj.id}>{optionObj.value || ''}</Options>
                                )}
                            </Select7>
                        </Row>
                        {!isValuesDisabled && props.state.dosageError &&
                        <div className="fc-red fs-14 py-1">{props.state.dosageError}</div>}
                        <Row className="pt-2">
                            <SubHeading>Frequency </SubHeading>
                        </Row>
                        <Row className="pt-2">
                            <Select8 onChange={(event) => handleSelectChange(event, 'frequency')}
                                     value={frequency || ''} disabled={isValuesDisabled}>
                                <Options>Select</Options>
                                {props?.state.FREQUENCY_OPTION.length > 0 && props?.state.FREQUENCY_OPTION.map((optionObj, index) =>
                                    <Options value={optionObj.id}>{optionObj.value || ''}</Options>
                                )}
                            </Select8>
                        </Row>
                        {!isValuesDisabled && props.state.frequencyError &&
                        <div className="fc-red fs-14 py-1">{props.state.frequencyError}</div>}
                        <Row className="pt-2">
                            <Picture>
                                <Dropzone onFileChange={props.onFileChange}
                                          url={url}
                                          imageCSS={"max-height-120 w-100"}
                                          disabled={isValuesDisabled}
                                />
                            </Picture>
                        </Row>
                        {!isValuesDisabled && props.state.urlError &&
                        <div className="fc-red fs-14 py-1">{props.state.urlError}</div>}
                        <div className="display-flex flex-direction-row justify-content-end pt-3">
                            <MainButton variant="contained" onClick={() => props.saveAnswer()}>
                                Add Medication
                            </MainButton>
                        </div>
                    </MainBox>


                </Container>
            </Dialog>
        </Card>
    );
}
