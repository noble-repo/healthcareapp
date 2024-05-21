import React from "react";
import moment from "moment";
import {makeStyles} from "@material-ui/core/styles";
import {genericConstants} from "../../constants";

const useStyles = makeStyles({
    table: {
        minWidth: 350,
        marginLeft: "-25px",
        width: "350px",
        textAlign: "left",
    },
    lastTable: {
        // Width: "98% !important",
        marginTop: "30px",
        marginLeft: "-52px",
        height: "50px",
        "@media  (max-width:1024px) and (min-width: 768px)": {
            display: "none",
        },
    },
    togglelastTable: {
        display: "none",

        "@media  (max-width:1024px) and (min-width: 768px)": {
            display: "block",
            Width: "100%",
            marginTop: "30px",
            marginLeft: "-25px",
            height: "50px",
        },
    },

    design: {
        fontFamily: "Roboto",
        fontSize: "12px",
        fontWeight: 500,
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: 1.75,
        letterSpacing: "normal",
        color: "#414141",
        marginTop: "10px",
        backgroundColor: "#e8f5fe",
        marginLeft: "10px",
    },
    designn: {
        backgroundColor: "#f7f7f7",
        fontSize: "12px",
        color: "#181c1b",
    },
    data: {
        paddingLeft: "60px",
        fontSize: "15px",
        fontFamily: "roboto !important",

    },
    surgicaldata: {
        paddingLeft: "100px",
        fontSize: "16px",
        fontFamily: "roboto !important",
        // fontSize:"16px",

    },
    Anesthesiadata: {
        paddingLeft: "100px",
        fontSize: "16px",
        fontFamily: "roboto !important",
        // fontSize:"16px",
        //
    },
    toggledata: {
        paddingLeft: "100px",
        fontSize: "16px",
        fontFamily: "roboto !important",
        // fontSize:"16px",
        paddingRight: "104px",
        // paddingLeft:"105px",


    },
    headings: {
        paddingLeft: "60px",
        marginLeft: "8px",
        fontFamily: "Roboto !important",
        fontSize: "15px"
    },
    complicationheadings: {
        paddingLeft: "100px",
        marginLeft: "8px",
        fontFamily: "Roboto !important",
        fontSize: "16px",
        paddingRight: "187px",
    },
    Anesthesiaheadings: {
        paddingLeft: "100px",
        marginLeft: "8px",
        fontFamily: "Roboto !important",
        fontSize: "16px",
        paddingRight: "117px",
    },
    surgicalheadings: {
        paddingLeft: "100px",
        marginLeft: "8px",
        fontFamily: "Roboto !important",
        fontSize: "16px",
        paddingRight: "48px",
    },
    toggleheadings: {
        paddingLeft: "100px",
        marginLeft: "8px",
        fontFamily: "Roboto !important",
        fontSize: "16px",
        paddingRight: "120px",
        // paddingLeft:"120px",
    },

    title: {
        padding: "5px 0px 5px 5px",
        fontFamily: "Roboto !important",
        fontSize: "15px",

    },
    toggletitle: {
        padding: "5px",
        fontFamily: "Roboto !important",
        fontSize: "16px",
        paddingRight: "56px",
        paddingLeft: "100px",
    },
    firsttitle: {
        fontFamily: "Roboto",
        fontSize: "13px",
        fontWeight: 500,
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: 1.75,
        letterSpacing: "normal",
        color: "#4c4c4c",
    },
});


const PatientGeneralInformationComponent = (props) => {
    const classes = useStyles();
    return (<div>
        {props.state.questionList.length > 0 && props.state.questionList.map((questionObj) => (
            <>
                <table className={classes.table}>
                    <tr className={classes.design}>
                        <td className={classes.title}>{questionObj?.question || ''}</td>
                    </tr>
                    <tr className={classes.designn}>
                        {RenderAnswerValue(questionObj, classes.title)}
                    </tr>
                </table>
                <br/>
            </>
        ))}
    </div>)
}

function RenderAnswerValue(questionObj, title) {
    if (!questionObj || Object.keys(questionObj).length < 1)
        return

    switch (questionObj.type) {
        case genericConstants.QUESTION_TYPE.DROPDOWN:
        case genericConstants.QUESTION_TYPE.DESCRIPTION :
            return (
                <td className={title}>{questionObj?.answer?.value && !Array.isArray(questionObj?.answer?.value) ? questionObj?.answer?.value : '- '}</td>
            )
        case genericConstants.QUESTION_TYPE.DATE_PICKER:
            return (
                <td className={title}>{questionObj?.answer?.value && !Array.isArray(questionObj?.answer?.value) ? moment(questionObj?.answer?.value).format('DD MMM YYYY') : '- '}</td>
            )
    }
}

export default PatientGeneralInformationComponent