import React from "react";
import styled from "styled-components";
import {Row, Column} from "simple-flexbox";
import DatePicker from "../../../../common/components/DatePicker";
import {makeStyles} from "@material-ui/core/styles";
import moment from "moment";

const TypeInput = styled.input`
  width: 347px;
  height: 50px;
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
  @media (max-width: 1024px) {
    width: 260px !important;
  }
  @media (max-width: 360px) {
    width: 180px !important;
  }
  @media (max-width: 411px) {
    width: 180px !important;
  }
`;
const SubHeading = styled.div`
  font-family: Roboto !important;
  font-size: 18px;
  color: #181c1b;
  margin-top: 20px;
  margin-left: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`;
const Header = styled.div`
  font-family: Roboto !important;
  font-size: 18px;
  color: #181c1b;
  margin-top: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`;
const SubHeading1 = styled.div`
  font-family: Roboto;
  font-size: 18px;
  color: #181c1b;
  margin-top: 20px;
  @media (max-width: 360px) {
    width: 180px !important;
  }
  @media (max-width: 411px) {
    width: 180px !important;
  }
`;

const AddIcon = styled.img`
  height: 28px;
  width: 28px;
  /* margin-top:35px; */
  position: relative;
  /* position: absolute; */
  margin-left: 30px;
  top: 50%;
`;
const Select = styled.select`
  width: 347px;
  height: 50px;
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
  @media (max-width: 1024px) {
    width: 260px !important;
  }
  @media (max-width: 360px) {
    width: 100px !important;
  }
  @media (max-width: 411px) {
    width: 180px !important;
  }
`;

const SelectSurgeryComplications = styled.select`
  width: 243px;
  height: 50px;
  border: solid 1px #bdbdbd;
  background-color: #ffffff;
  margin-left: 20px;
  font-family: Roboto;
  font-size: 16px;
  color: #000000;
  &:focus {
    outline: none;
    border-radius: 0px;
    transition: all 0.3s;
    border-color: #bdbdbd;
  }
  @media (max-width: 360px) {
    width: 180px !important;
  }
  @media (max-width: 411px) {
    width: 180px !important;
  }
`;
const SelectAnesthesiaComplications = styled.select`
  width: 613px;
  height: 50px;
  border: solid 1px #bdbdbd;
  background-color: #ffffff;
  margin-bottom: 20px;
  font-family: Roboto;
  font-size: 16px;
  color: #000000;
  &:focus {
    outline: none;
    border-radius: 0px;
    transition: all 0.3s;
    border-color: #bdbdbd;
  }
  @media (max-width: 360px) {
    width: 240px !important;
  }
  @media (max-width: 411px) {
    width: 310px !important;
  }
`;
const RemoveIcon = styled.img`
  margin-left: 30px;
  /* margin-top:80px; */
  position: relative;
`;


const Options = styled.option`
  margin-left: 20px;
  color: #000000;
`;


const useStyles = makeStyles((theme) => ({
    styleDatePicker: {
        width: "243px",
        height: "50px",
        backgroundColor: "#ffffff",
        // marginLeft: "23px",
        fontSize: "16px",
        fontFamily: "roboto",
        color: "#000000",
        ["@media (max-width:360px)"]: {
            // eslint-disable-line no-useless-computed-key
            width: "180px!important",
        },
        ["@media (max-width:411px)"]: {
            // eslint-disable-line no-useless-computed-key
            width: "180px!important",
        },
    },
    divFixing: {
        backgroundColor: "rgba(249, 249, 249, 0.92)",
        // width:"70%",
        display: "flex",
        marginTop: "56px",
        ["@media (max-width:411px)"]: {
            // eslint-disable-line no-useless-computed-key
            display: "flex",
        },
        ["@media (max-width:360px)"]: {
            // eslint-disable-line no-useless-computed-key
            display: "flex",
        },
    },
    rowFixing: {
        margin: "5px",
    },
}));

export default function PreviousSurgery(props) {
  console.log(props.state.answerValueList)
    return (
        <div>

            <Column>
                {props.state.answerValueList.length > 0 && props.state.answerValueList.map((answerObj, index) => (

                    <Row className="align-items-center justify-content-center">
                        <TemplateView
                            handleSelectChange={props.handleSelectChange}
                            handleDatePicker={props.handleDatePicker}
                            nameChange={props.nameChange}
                            state={props.state}
                            shoulderReconstruction={answerObj.shoulderReconstruction}
                            surgeryDate={answerObj.surgeryDate}
                            sedationType={answerObj.sedationType}
                            surgicalComplication={answerObj.surgicalComplication}
                            anesthesiaComplication={answerObj.anesthesiaComplication}
                            isValuesDisabled={true}
                        />
                        <RemoveIcon src="/images/removeIcon.svg" className="cursor-pointer"
                                    onClick={() => props.onRemoveAnswerObj(index)}/>
                    </Row>
                ))} 
                <Row className="align-items-center justify-content-center">
                    <TemplateView
                        handleSelectChange={props.handleSelectChange}
                        handleDatePicker={props.handleDatePicker}
                        nameChange={props.nameChange}
                        state={props.state}
                        shoulderReconstruction={props.state.shoulderReconstruction}
                        surgeryDate={props.state.surgeryDate}
                        sedationType={props.state.sedationType}
                        surgicalComplication={props.state.surgicalComplication}
                        anesthesiaComplication={props.state.anesthesiaComplication}
                    />
                    <Column>
                        <AddIcon
                            src="/images/circular_add_icon.svg"
                            alt="h" className="cursor-pointer " onClick={() => props.saveAnswer()}
                        />
                    </Column>
                </Row>
            </Column>
        </div>
    );
}

function TemplateView(props) {
    const classes = useStyles();
    const {handleSelectChange, handleDatePicker, nameChange, shoulderReconstruction, surgeryDate, sedationType, surgicalComplication, anesthesiaComplication, isValuesDisabled = false} = props

    return (<>
        <Column className={classes.divFixing}>
            <Row className={classes.rowFixing}>
                <Column>
                    <Header>{'Shoulder Reconstruction'}</Header>
                    <TypeInput onChange={(event) => nameChange(event)} value={shoulderReconstruction}
                               name={'shoulderReconstruction'}/>
                    {!isValuesDisabled && props.state.shoulderReconstructionError &&
                    <div className="fc-red fs-14 py-1">{props.state.shoulderReconstructionError}</div>}
                </Column>
                <Column>
                    <SubHeading>{'Surgery Date'}</SubHeading>
                    <DatePicker
                        className={classes.styleDatePicker}
                        onChange={(event) => handleDatePicker(event)}
                        value={surgeryDate && moment(surgeryDate).format('YYYY-MM-DD') || ""}
                    />
                    {!isValuesDisabled && props.state.surgeryDateError &&
                    <div className="fc-red fs-14 py-1 m-l-20">{props.state.surgeryDateError}</div>}
                </Column>
            </Row>
            <Row className={classes.rowFixing}>
                <Column>
                    <Header>{'Sedation Type'}</Header>
                    <Select onChange={(event) => handleSelectChange(event, 'sedationType')}
                            value={sedationType || ''} disabled={isValuesDisabled}>
                        <Options>Select</Options>
                        {props.state.SEDATION_TYPE_OPTION.length > 0 && props.state.SEDATION_TYPE_OPTION.map((optionObj) => (
                            <Options value={optionObj.id}>{optionObj.value || ''}</Options>
                        ))}
                    </Select>

                    {!isValuesDisabled && props.state.sedationTypeError &&
                    <div className="fc-red fs-14 py-1">{props.state.sedationTypeError}</div>}

                </Column>
                <Column>
                    <SubHeading>{'Surgical Complications'}</SubHeading>
                    <SelectSurgeryComplications
                        onChange={(event) => handleSelectChange(event, 'surgicalComplication')}
                        value={surgicalComplication || ''} disabled={isValuesDisabled}>
                        <Options>Select</Options>
                        {props.state.SURGICAL_COMPLICATION_OPTION.length > 0 && props.state.SURGICAL_COMPLICATION_OPTION.map((optionObj) => (
                            <Options value={optionObj.id}>{optionObj.value || ''}</Options>
                        ))}
                    </SelectSurgeryComplications>
                    {!isValuesDisabled && props.state.surgicalComplicationError &&
                    <div className="fc-red fs-14 py-1 m-l-20">{props.state.surgicalComplicationError}</div>}
                </Column>
            </Row> 
            <div className={classes.rowFixing}>
                <SubHeading1>{'Anesthesia Complication (Nausea, vomiting, difficult intubation)'}</SubHeading1>
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
            </div>
        </Column>
    </>)
}
