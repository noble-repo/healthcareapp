import React from "react";
import styled from "styled-components";
import {Row, Column} from "simple-flexbox";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {history} from "../../../managers/history";
import SurgerySectionView from "./surgerySectionView";
import QuestionCell from "./question";
import {sectionIdsConstants} from "../../../constants";
import Part_A_Section_3 from "./part_A_section_3";
import Part_B_Section_2 from "./part_B_section_2";
import Part_A_Section_2 from './part_A_section_2';

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    previousBtn: {
        borderRadius: "4px",
        border: "solid 1px #00a0f0",
        backgroundColor: "#ffffff",
        fontFamily: "Roboto",
        fontSize: "18px",
        fontWeight: 500,
        color: "#0085c6",
        padding: "8px 25px 8px 25px",
        cursor: 'pointer',
        
    },
    nextBtn: {
        padding: "8px 25px 8px 25px",
        borderRadius: "4px",
        border: "solid 1px #00a0f0",
        color: "#ffffff",
        fontFamily: "Roboto",
        fontSize: "18px",
        fontWeight: 500,
        backgroundColor: "#00a0f0",
        cursor: 'pointer',
    },
    footerStyle: {
        marginTop: 20,
        bottom: 0,
        position: "fixed",
        borderTop: "solid 1px #e8e8e8",
        width: "70%",
        backgroundColor: "#ffffff",
        color: "white",
        // textAlign: "center",
        ["@media (max-width:1024px)"]: {
            width: "100%",
        },
    },
    divFixing: {
        backgroundSize: "32vw 100%",
        height: "100vh",
        marginTop: "30px",
        // backgroundImage: `url(/images/Bitmap.jpg)`,
        backgroundRepeat: "no-repeat",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
        overflowY: "auto",

        ["@media (max-width:1024px)"]: {
            width: "100vw",
            height: "30vh",
            backgroundSize: "cover",
        },
        
    },

    spanFixing: {
        'position': 'absolute',
        top: '110px',
        maxWidth: '400px',
        minWidth: '300px',
        height: '80vh',
        fontFamily: "Roboto !important",
        fontSize: "27px",
        fontWeight: 500,
        textAlign: "center",
        color: "#ffffff",
        display: "flex",
        flexDirection: "row",
        verticalAlign: "middle",
        alignItems: "center",
        justifyContent: "center",
        marginLeft:'2%',
        "@media screen and (max-width:769px) and (min-width:481px)":{
            margin:"-10em 0em 0em 8em"
            

        }
        
    },
    iconFixing: {
        width: "42px",
        height: "42px",
        // marginTop: "-800px",
    },
    rowFix: {
        justifyContent: "center",
        ["@media (max-width:1024px)"]: {
            // eslint-disable-line no-useless-computed-key
            marginLeft: "0%",
        },
    },
    mainRowStyle: {
        ["@media (max-width:1024px)"]: {
            // eslint-disable-line no-useless-computed-key
            flexFlow: "column wrap !important",
        },
    },
}));

const Heading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-family: Roboto-Medium;
  font-size: 34px;
  font-weight: 500;
  color: #181c1b;
  /* margin-top: -30px; */
  height: 80px;
`;
export default function InsuranceSurveyComponent(props) {
    const classes = useStyles();
    
    return (
        <>
            <Row className={classes.mainRowStyle} flex={10}>
                <Column flex={3}>
                    <div className={classes.divFixing}>
                        {props.state.partValues[props.state.part]?.img || ""}

                        <div className="display-flex flex-direction-row position-absolute">
                            <img
                                className={classes.iconFixing}
                                src="/images/back.svg"
                                onClick={() => history.push("/patient/dashboard")}
                            /></div>
                        <div className={classes.spanFixing}>
                            {props.state.partValues[props.state.part]?.name || ""}
                        </div>
                    </div>
                </Column>
                <Column className="display-flex w-100" flex={7}>
                    <Row className={classes.rowFix}>
                        <SurgerySectionView
                            selectedSectionIndex={props.state.selectedSectionIndex}
                            sectionList={props.state.sectionList}
                            onClickSectionTab={props.onClickSectionTab}
                        />
                    </Row>

                    <Heading>{props.state?.selectedSection?.name || ""}</Heading>
                    <RenderingOfQuestions state={props.state}/>
                    <br/>
                    <div className={classes.footerStyle}>
                        <Row style={{justifyContent: "space-between", margin: "5px", alignItems: 'center'}}>
                            <btn onClick={() => props.onClickPreviousBtn()}
                                 className={classes.previousBtn}>
                                {props.state.selectedSectionIndex < props.state.sectionList.length - 1 ? 'Previous' : 'Save and Go to Home'}
                            </btn>

                            <btn
                                onClick={() => props.onClickNextBtn()} className={classes.nextBtn}>
                                {props.state.selectedSectionIndex < props.state.sectionList.length - 1 ? 'Next' : 'Submit and Go to next Survey'}
                            </btn>
                        </Row>
                    </div>
                </Column>
            </Row>
        </>
    );
}

function RenderingOfQuestions(props) {
    switch (props.state.selectedSection?.sectionId) {
        case sectionIdsConstants.PART_A_SECTION_3:
            return (
                <>
                    <Part_A_Section_3
                        questionsList={props.state.questionList}
                        questionObject={props.state.questionList[0]}
                        selectedSection={props.state.selectedSection}
                    />
                </>
            );

        case sectionIdsConstants.PART_B_SECTION_2:
            return (
                <>
                    <Part_B_Section_2
                        questionsList={props.state.questionList}
                        questionObject={props.state.questionList[0]}
                        selectedSection={props.state.selectedSection}
                    />
                </>
            );
        case sectionIdsConstants.PART_A_SECTION_2:
            return (<>{props.state.questionList.length > 0 &&<Part_A_Section_2
                questionsList={props.state.questionList || []}
                questionObject={props.state.questionList[0]}
                selectedSection={props.state.selectedSection}/>}</>)


        default:
            return (
                <>
                    {props.state.questionList.length > 0 &&
                    props.state.questionList.map((questionObject, index) => {
                        if (questionObject && questionObject.isSubQuestion) return;
                        return (
                            <QuestionCell
                                key={index}
                                questionObject={questionObject}
                                questionsList={props.state.questionList}
                                selectedSection={props.state.selectedSection}
                            />
                        );
                    })}
                </>
            );
    }
}
