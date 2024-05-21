import React from "react";
import styled from "styled-components";
import {Row, Column} from "simple-flexbox";
import Dropzone from '../../../../common/components/Dropzone'

const MainBox = styled.div`
  background-color: rgba(249, 249, 249, 0.92);
  margin-top: 15px;
  /* margin: 35px 78px 61px 0; */
  padding: 16px 26px 42px 28px;
`;
const TypeInput = styled.input`
  width: 301px;
  height: 50px;
  border: solid 1px #bdbdbd;
  background-color: #ffffff;
  font-family: Roboto;
  font-size: 16px;
  color: #000000;
  margin-top: 5px;
  &:focus {
    outline: none;
    border-radius: 0px;
    transition: all 0.3s;
    border-color: #bdbdbd;
  }
  @media (max-width: 360px) {
    width: 217px;
  }
  @media (max-width: 411px) {
    width: 217px;
  }
  @media (max-width: 414px) {
    width: 217px;
  }
`;
const Select7 = styled.select`
  width: 109px;
  height: 50px;
  margin: 6px 16px 0 0;
  padding: 16px 15px 15px 14px;
  border: solid 1px #bdbdbd;
  background-color: #ffffff;
  &:focus {
    outline: none;
    transition: all 0.3s;
    border-color: #bdbdbd;
  }
`;

const Select8 = styled.select`
  width: 176px;
  height: 50px;
  margin: 6px 37px 0 16px;
  padding: 16px 19px 15px 15px;
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
  width: 148px;
  height: 21px;
  // margin: "8px 330px -14px 28px",
  font-family: Roboto;
  font-size: 18px;
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
  width: 180px;
  height: 120px;
  margin-left: 50px;
`;

export default function MedicationComponent(props) {

    return (
        <div className="display-flex flex-direction-row justify-content-center pb-3">
            <Column>
                {props.state.answerValueList.length > 0 && props.state.answerValueList.map((answerObj, index) => (
                    <Row>
                        <TemplateView
                            handleSelectChange={props.handleSelectChange}
                            nameChange={props.nameChange}
                            onFileChange={props.onFileChange}
                            state={props.state}
                            name={answerObj.name}
                            url={answerObj.url}
                            dosage={answerObj.dosage}
                            frequency={answerObj.frequency}
                            isValuesDisabled={true}

                        />
                        <img src="/images/removeIcon.svg" className="cursor-pointer"
                             onClick={() => props.onRemoveAnswerObj(index)}/>
                    </Row>
                ))}

                <Row>
                    <TemplateView
                        handleSelectChange={props.handleSelectChange}
                        nameChange={props.nameChange}
                        onFileChange={props.onFileChange}
                        state={props.state}
                        name={props.state.name}
                        url={props.state.url}
                        dosage={props.state.dosage}
                        frequency={props.state.frequency}
                    />
                    <img src="/images/Plus.svg" className="cursor-pointer" onClick={() => props.saveAnswer()}/>
                </Row>
            </Column>
        </div>
    );
}

function TemplateView(props) {
    const {handleSelectChange, name, url, dosage, frequency, isValuesDisabled = false} = props
    console.log("url=====",url)
    return (<>
        <MainBox>
            <SubHeading>Name of Medications </SubHeading>
            <Row>
                <Column>
                    <Row>
                        <TypeInput onChange={(e) => props.nameChange(e)} value={name} name={"name"}
                                   disabled={isValuesDisabled}/>
                    </Row>

                    {!isValuesDisabled && props.state.nameError &&
                    <div className="fc-red fs-14 py-1">{props.state.nameError}</div>}
                    <Row className="pt-3">
                        <SubHeading>Dosage </SubHeading>
                        <SubHeading>Frequency </SubHeading>
                    </Row>
                    <Row>
                        <Column>
                            <Select7 onChange={(event) => handleSelectChange(event, 'dosage')}
                                     value={dosage || ''} disabled={isValuesDisabled}>
                                <Options>Select</Options>
                                {props?.state.DOSAGE_OPTION.length > 0 && props?.state.DOSAGE_OPTION.map((optionObj, index) =>
                                    <Options value={optionObj.id}>{optionObj.value || ''}</Options>
                                )}
                            </Select7>
                            {!isValuesDisabled && props.state.dosageError &&
                            <div className="fc-red fs-14 py-1">{props.state.dosageError}</div>}
                        </Column>
                        <Column>
                            <Select8 onChange={(event) => handleSelectChange(event, 'frequency')}
                                     value={frequency || ''} disabled={isValuesDisabled}>
                                <Options>Select</Options>
                                {props?.state.FREQUENCY_OPTION.length > 0 && props?.state.FREQUENCY_OPTION.map((optionObj, index) =>
                                    <Options value={optionObj.id}>{optionObj.value || ''}</Options>
                                )}
                            </Select8>
                            {!isValuesDisabled && props.state.frequencyError &&
                            <div className="fc-red fs-14 py-1">{props.state.frequencyError}</div>}
                        </Column>
                    </Row>

                </Column>
                <Column>
                    <Picture>
                        <Dropzone onFileChange={props.onFileChange}
                                  url={url}
                                  disabled={isValuesDisabled}
                        />

                        {!isValuesDisabled && props.state.urlError &&
                        <div className="fc-red fs-14 py-1">{props.state.urlError}</div>}
                    </Picture>
                </Column>


            </Row>
        </MainBox>
    </>)

}