import React from "react";
import styled from "styled-components";
import Dialog from "@material-ui/core/Dialog";
import {makeStyles} from "@material-ui/core/styles";
import {Column} from "simple-flexbox";
import DatePicker from "../../common/components/DatePicker";
import moment from "moment";

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
  text-align: left;
`;
const CloseButton = styled.img`
  float: right;
`;
const Type = styled.div`
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #181c1b;
  text-align: left;
  margin-top: 23px;
  padding-bottom: 2px;
`;
const Conditions = styled.div`
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #181c1b;
  text-align: left;
  padding-top: 23px;
  padding-bottom: 2px;
`;
const Input = styled.input`
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #181c1b;
  width: 100%;
  height: 44px;
  border: 1px solid lightgrey;
  outline: none;
  border-radius: 4px;
  transition: all 0.3s;
`;
const Select = styled.select`
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #181c1b;
  width: 100%;
  height: 44px;
  border: 1px solid lightgrey;
  outline: none;
  border-radius: 5px;
  transition: all 0.3s;
`;
const Button = styled.button`
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
  width: 100%;
  height: 44px;
  background-color: #00a0f0;
  font-size: 13px;
  border-radius: 4px;
  border: #00a0f0;
  vertical-align: center;
  font-family: Roboto;
  margin-bottom: 10px;

  &:focus {
    outline: none;
    border-radius: 5px;
    transition: all 0.3s;
    border: none;
  }
`;

const SelectSurgeryComplications = styled.select`
  width: 100%;
  height: 44px;
  border: solid 1px #bdbdbd;
  background-color: #ffffff;
  font-family: Roboto;
  font-size: 16px;
  color: #000000;

  &:focus {
    outline: none;
    border-radius: 0px;
    transition: all 0.3s;
    border-color: #bdbdbd;
  }
`;
const SelectAnesthesiaComplications = styled.select`
  width: 100%;
  height: 44px;
  border: solid 1px #bdbdbd;
  background-color: #ffffff;
  margin-bottom: 20px;
  font-family: Roboto;
  font-size: 16px;
  color: #000000;

  &:focus {
    outline: none;
    border-radius: 0;
    transition: all 0.3s;
    border-color: #bdbdbd;
  }
`;
const useStyles = makeStyles({
    box: {
        // marginBottom: "140px",
    },
});


const Options = styled.option`
  margin-left: 20px;
  color: #000000;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  align-content: center;
  margin: auto;
`;
const DatePickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  form {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }

  form > div {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }
`;
export default function EditDialog(props) {
    const classes = useStyles();
    const {
        handleSelectChange,
        handleDatePicker,
        nameChange,
        shoulderReconstruction,
        surgeryDate,
        sedationType,
        surgicalComplication,
        anesthesiaComplication,
        saveAnswer,
        isValuesDisabled = false
    } = props

    return (
        <Card>
            <Dialog open={props.state.edit} onClose={props.editDialog} className={classes.box}>
                <Container>
                    <Wrapper>
                        <div className="display-flex flex-direction-row justify-content-between">
                            <Title>{props.state.editedObjIndex > -1 ? 'Edit Surgery' : 'Add Surgery'}</Title>
                            <CloseButton src="/images/cross.svg" width={'20px'} onClick={props.editDialog}/>
                        </div>
                        <Type>Surgery Type</Type>
                        <Input onChange={(event) => nameChange(event)} value={shoulderReconstruction}
                               name={'shoulderReconstruction'}/>
                        {!isValuesDisabled && props.state.shoulderReconstructionError &&
                        <div className="fc-red fs-14 py-1">{props.state.shoulderReconstructionError}</div>} <Conditions>Surgery
                        Date</Conditions>
                        <DatePickerContainer>
                            <DatePicker
                                className="w-100"
                                onChange={(event) => handleDatePicker(event)}
                                value={surgeryDate && moment(surgeryDate).format('YYYY-MM-DD') || ""}
                            />
                        </DatePickerContainer>

                        {!isValuesDisabled && props.state.surgeryDateError &&
                        <div className="fc-red fs-14 py-1">{props.state.surgeryDateError}</div>}
                        <Conditions>Anesthesia Type</Conditions>

                        <Select onChange={(event) => handleSelectChange(event, 'sedationType')}
                                value={sedationType || ''} disabled={isValuesDisabled}>
                            <Options>Select</Options>
                            {props.state.SEDATION_TYPE_OPTION.length > 0 && props.state.SEDATION_TYPE_OPTION.map((optionObj) => (
                                <Options value={optionObj.id}>{optionObj.value || ''}</Options>
                            ))}
                        </Select>

                        {!isValuesDisabled && props.state.sedationTypeError &&
                        <div className="fc-red fs-14 py-1">{props.state.sedationTypeError}</div>}
                        <Conditions>Surgical Complications</Conditions>
                        <SelectSurgeryComplications
                            onChange={(event) => handleSelectChange(event, 'surgicalComplication')}
                            value={surgicalComplication || ''} disabled={isValuesDisabled}>
                            <Options>Select</Options>
                            {props.state.SURGICAL_COMPLICATION_OPTION.length > 0 && props.state.SURGICAL_COMPLICATION_OPTION.map((optionObj) => (
                                <Options value={optionObj.id}>{optionObj.value || ''}</Options>
                            ))}
                        </SelectSurgeryComplications>
                        {!isValuesDisabled && props.state.surgicalComplicationError &&
                        <div className="fc-red fs-14 py-1">{props.state.surgicalComplicationError}</div>}

                        <Conditions>Anesthetic Complications</Conditions>
                        <SelectAnesthesiaComplications
                            onChange={(event) => handleSelectChange(event, 'anesthesiaComplication')}
                            value={anesthesiaComplication || ''} disabled={isValuesDisabled}>
                            <Options>Select</Options>
                            {props.state.SURGICAL_COMPLICATION_OPTION.length > 0 && props.state.SURGICAL_COMPLICATION_OPTION.map((optionObj) => (
                                <Options value={optionObj.id}>{optionObj.value || ''}</Options>
                            ))}
                        </SelectAnesthesiaComplications>
                        {!isValuesDisabled && props.state.anesthesiaComplicationError &&
                        <div className="fc-red fs-14 py-1">{props.state.anesthesiaComplicationError}</div>}

                        <Button type="button"
                                onClick={() => saveAnswer()}>{props.state.editedObjIndex > -1 ? 'Update Surgery' : 'Add Surgery'}</Button>
                    </Wrapper>
                </Container>
            </Dialog>
        </Card>
    );
}
