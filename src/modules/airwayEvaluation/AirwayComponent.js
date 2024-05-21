import React from "react";
import styled from "styled-components";
import clsx from "clsx";
import {makeStyles} from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import Teeth from "./Teeth";

const MainContainer = styled.div`
  display: flex;
  margin-top: 30px;
  margin-left: 100px;
  @media (max-width: 1024px) and (min-width: 768px) {
    margin-left: 0;
    margin-top: 0;
  }
`;
const LeftContainer = styled.div`
  margin-left: 60px;
`;
const MiddleContainer = styled.div`
  margin-left: 100px;
  @media (max-width: 1024px) and (min-width: 768px) {
    margin-left: 0;
  }
`;
const Heading = styled.td`
  background-color: #e8f5fe;
  height: 25px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.75;
  letter-spacing: normal;
  color: #414141;
  padding-left: 10px;
`;
const Details = styled.td`
  background-color: #f7f7f7;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.75;
  letter-spacing: normal;
  color: #181c1b;
  width: 190px;
  height: 20px;
  padding-left: 10px;
  @media (max-width: 1024px) and (min-width: 768px) {
    font-size: 14px;
  }
`;
const DistanceTable = styled.table`
  margin-top: 20px;
`;
const GappingTable = styled.table`
  margin-top: 25px;
`;
const MouthOpening = styled.table`
  margin-top: 20px;
`;
const LocationOfTeeth = styled.table`
  margin-top: 25px;
`;
const Indicators = styled.div`
  margin-top: 30px;
  display: flex;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #414141;
`;
const IndicatorLabel = styled.span`
  margin-left: 5px;
`;
const MissingIndicator = styled.div`
  width: 13px;
  height: 13px;
  background-color: rgba(255, 0, 186, 0.5);
  margin-left: 10px;
  margin-top: 4px;
`;
const LooseIndicator = styled.div`
  width: 13px;
  height: 13px;
  background-color: rgba(255, 70, 44, 0.5);
  margin-left: 20px;
  margin-top: 4px;
`;
const ChippedIndicator = styled.div`
  width: 13px;
  height: 13px;
  background-color: rgba(19, 106, 252, 0.5);
  margin-left: 20px;
  margin-top: 4px;
`;
const useStyles = makeStyles({
    checked: {},
    icon: {
        borderRadius: 1,
        width: "14px",
        height: "14px",
        boxShadow:
            "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
        backgroundColor: "white",
    },
    table: {
        width: "13vw",
    },
    checkedIcon: {
        backgroundColor: "white",
        backgroundImage:
            "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
        "&:before": {
            display: "block",

            width: "12px",
            height: "12px",
            backgroundImage: 'url("/images/green_check.svg")',
            backgroundSize: "cover",
            content: '""',
        },
        parafixing: {
            fontSize: "11px",
            fontWeight: "600",
            fontFamily: "Roboto !important",
            marginBottom: "4px",
            cursor: 'pointer',
            // paddingBottom:"10px",
            color: "#181c1b",
        },
    },
});

function StyledRadio(props) {
    const classes = useStyles();

    return (
        <Radio
            className={classes.root}
            color="default"
            checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)}/>}
            icon={<span className={classes.icon}/>}
            {...props}
        />
    );
}

function AirwayComponent(props) {
    const classes = useStyles();

    return (
        <MainContainer>
            <div style={{position: "relative"}}>
                <Teeth onToothClick={props.handleToggleDialog}/>
                {props.state.isOpen && (
                    <dialog
                        className="dialog"
                        style={{position: 'absolute', left: 0, top: '25%'}}
                        open
                        onClick={() => props.handleToggleDialog()}
                    >
                        <Typography style={{cursor:'pointer'}}>
                            <p className={classes.parafixing}
                               onClick={() => props.onToothSelect("missing")}>{'Missing'}</p>
                            <p className={classes.parafixing} onClick={() => props.onToothSelect("loose")}>{'Loose'}</p>
                            <p className={classes.parafixing}
                               onClick={() => props.onToothSelect("chipped")}>{'Chipped'}</p>
                        </Typography>
                    </dialog>
                )}
                <Indicators>
                    <MissingIndicator/>
                    <IndicatorLabel>Missing</IndicatorLabel>
                    <LooseIndicator/>
                    <IndicatorLabel>Loose</IndicatorLabel>
                    <ChippedIndicator/>
                    <IndicatorLabel>Chipped</IndicatorLabel>
                </Indicators>
            </div>
            <MiddleContainer>
                <table className={classes.table}>
                    <tr>
                        <Heading>Mallampati Score</Heading>
                    </tr>
                    <RadioGroup
                        name="mallampatiScore"
                        value={props.state.mallampatiScore}
                        onChange={(event) => props.handleChange(event)}>
                        <tr>
                            <Details className={props.state.mallampatiScore === 'I' ? "bgColor" : " "}>
                                <FormControlLabel value="I" control={<StyledRadio value="I"/>}
                                                  checked={props.state.mallampatiScore === 'I'} label={' '}/>I
                            </Details>
                        </tr>

                        <tr>
                            <Details className={props.state.mallampatiScore === 'II' ? "bgColor" : " "}>
                                <FormControlLabel value="II" control={<StyledRadio/>}
                                                  checked={props.state.mallampatiScore === 'II'} label={' '}/>
                                II
                            </Details>
                        </tr>
                        <tr>
                            <Details className={props.state.mallampatiScore === 'III' ? "bgColor" : " "}>
                                <FormControlLabel value="III" control={<StyledRadio/>}
                                                  checked={props.state.mallampatiScore === 'III'} label={' '}/>
                                III
                            </Details>
                        </tr>
                        <tr>
                            <Details className={props.state.mallampatiScore === 'IV' ? "bgColor" : " "}>
                                <FormControlLabel value="IV" control={<StyledRadio/>}
                                                  checked={props.state.mallampatiScore === 'IV'} label={' '}/>
                                IV
                            </Details>
                        </tr>
                    </RadioGroup>
                </table>
                <DistanceTable className={classes.table}>
                    <tr>
                        <Heading>Thyromental Distance</Heading>
                    </tr>
                    <RadioGroup name="thyromentalDistance"
                                value={props.state.thyromentalDistance}
                                onChange={(event) => props.handleChange(event)}>
                        <tr>
                            <Details className={props.state.thyromentalDistance === '>6.5' ? "bgColor" : " "}>
                                <FormControlLabel value=">6.5" control={<StyledRadio/>}
                                                  checked={props.state.thyromentalDistance === '>6.5'} label={' '}/>
                                {'> 6.5 cm'}
                            </Details>
                        </tr>
                        <tr>
                            <Details
                                className={"6.0-6.5" === props.state.thyromentalDistance ? "bgColor" : " "}>
                                <FormControlLabel value="6.0-6.5" control={<StyledRadio/>}
                                                  checked={props.state.thyromentalDistance === '6.0-6.5'} label={' '}/>
                                {'6.0 - 6.5 cm'}
                            </Details>
                        </tr>
                        <tr>
                            <Details
                                className={"<6.5" === props.state.thyromentalDistance ? "bgColor" : " "}
                            >
                                <FormControlLabel value="<6.5" control={<StyledRadio/>}
                                                  checked={props.state.thyromentalDistance === '<6.5'} label={' '}/>
                                {'< 6.5 cm'}
                            </Details>
                        </tr>
                    </RadioGroup>
                </DistanceTable>
                <GappingTable className={classes.table}>
                    <tr>
                        <Heading>Intercisor Gap</Heading>
                    </tr>
                    <RadioGroup
                        name="intercisorGap"
                        value={props.state.intercisorGap}
                        onChange={(event) => props.handleChange(event)}>
                        <tr>
                            <Details className={">4" === props.state.intercisorGap ? "bgColor" : " "}>
                                <FormControlLabel value=">4" control={<StyledRadio/>}
                                                  checked={props.state.intercisorGap === '>4'} label={' '}/>
                                {'> 4 cm'}
                            </Details>
                        </tr>

                        <tr>
                            <Details className={"<4" === props.state.intercisorGap ? "bgColor" : " "}>
                                <FormControlLabel value="<4" control={<StyledRadio/>}
                                                  checked={props.state.intercisorGap === '<4'} label={' '}/>
                                {'< 4 cm'}
                            </Details>
                        </tr>
                    </RadioGroup>
                </GappingTable>
            </MiddleContainer>
            <LeftContainer>
                <table className={classes.table}>
                    <tr>
                        <Heading>Neck Rom </Heading>
                    </tr>
                    <RadioGroup
                        name="neckRom"
                        value={props.state.neckRom}
                        onChange={(event) => props.handleChange(event)}>
                        <tr>
                            {" "}
                            <Details className={"full" === props.state.neckRom ? "bgColor" : " "}>
                                <FormControlLabel value="full" control={<StyledRadio/>}
                                                  checked={props.state.neckRom === 'full'} label={' '}/>
                                Full
                            </Details>
                        </tr>
                        <tr>
                            <Details className={"limited" === props.state.neckRom ? "bgColor" : " "}>
                                <FormControlLabel value="limited" control={<StyledRadio/>}
                                                  checked={props.state.neckRom === 'limited'} label={' '}/>
                                Limited
                            </Details>
                        </tr>
                        {" "}
                    </RadioGroup>
                </table>
                <MouthOpening className={classes.table}>
                    <tr>
                        <Heading>Mouth Opening</Heading>
                    </tr>
                    <RadioGroup
                        name="mouthOpening"
                        value={props.state.mouthOpening}
                        onChange={(event) => props.handleChange(event)}>
                        <tr>
                            <Details className={">3FB" === props.state.mouthOpening ? "bgColor" : " "}>
                                <FormControlLabel value=">3FB" control={<StyledRadio/>}
                                                  checked={props.state.mouthOpening === '>3FB'} label={' '}/>
                                {'> 3FB'}
                            </Details>
                        </tr>
                        <tr>
                            <Details className={"<3FB" === props.state.mouthOpening ? "bgColor" : " "}>
                                <FormControlLabel value="<3FB" control={<StyledRadio/>}
                                                  checked={props.state.mouthOpening === '<3FB'} label={' '}/>
                                {'< 3FB'}
                            </Details>
                        </tr>
                        {" "}
                    </RadioGroup>
                </MouthOpening>
                <LocationOfTeeth className={classes.table}>
                    <tr>
                        <Heading>Location of Teeth</Heading>
                    </tr>
                    <RadioGroup
                        name="locationOfTeeth"
                        value={props.state.locationOfTeeth}
                        onChange={(event) => props.handleChange(event)}>
                        <tr>
                            <Details
                                className={"Overgap" === props.state.locationOfTeeth ? "bgColor" : " "}
                            >
                                <FormControlLabel value="Overgap" control={<StyledRadio/>}
                                                  checked={props.state.locationOfTeeth === 'Overgap'} label={' '}/>
                                {'Overgap'}
                            </Details>
                        </tr>
                        <tr>
                            <Details
                                className={"Undergap" === props.state.locationOfTeeth ? "bgColor" : " "}
                            >
                                <FormControlLabel value="Undergap" control={<StyledRadio/>}
                                                  checked={props.state.locationOfTeeth === 'Undergap'} label={' '}/>
                                {'Undergap'}
                            </Details>
                        </tr>
                        {" "}
                    </RadioGroup>
                </LocationOfTeeth>
            </LeftContainer>
        </MainContainer>
    );
}

export default AirwayComponent;
