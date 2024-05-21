import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import styled from "styled-components";
import moment from "moment";

const Image = styled.img`
  margin-left: -52px;
`;
const EditPen = styled.img`
  margin-left: -94px;
  padding-left: 10px;
  padding-right: 25px;
`;
const Button = styled.button`
  width: 155px;
  height: 48px;
  background-color: #00a0f0;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 2px;
  border: #00a0f0;
  vertical-align: center;
  margin-top: 38px;
  margin-left: -20px;

  &:focus {
    outline: none;
    transition: all 0.3s;
    border: none;
  }
`;
const Add = styled.img`
  margin-right: 10px;
  margin-left: -10px;
  width: 16px;
  height: 33px;
  margin-top: -2px;
`;

const useStyles = makeStyles({
    table: {
        minWidth: 350,
        // marginLeft: "-25px",
        width: "350px",
        textAlign: "left",
    },
    lastTable: {
        // Width: "98% !important",
        marginTop: "10px",
        // marginLeft: "-52px",
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
        fontSize: "16px",
        fontWeight: 500,
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: 1.75,
        letterSpacing: "normal",
        color: "#4c4c4c",
    },
});
export default function PriorSurgeryComponent(props) {
    const classes = useStyles();
    return (
        <div>
            {props.state.questionList && Object.keys(props.state.questionList).length > 0 && Object.keys(props.state.questionList).map((key, index) => {
                console.log("props.state.questionList[key]===", props.state.questionList[key])
                if (index < Object.keys(props.state.questionList).length - 1)
                    return props.state.questionList[key].length > 0 && props.state.questionList[key].map((questionObj) => (
                        <>
                            <table className={classes.table}>
                                <tr className={classes.design}>
                                    <td className={classes.title}>{questionObj?.question || ''}</td>
                                </tr>
                                <tr className={classes.designn}>
                                    <td className={classes.title}>{questionObj?.answer?.value && !Array.isArray(questionObj?.answer?.value) ? questionObj?.answer?.value : ''}</td>
                                </tr>
                            </table>
                            <br/>
                        </>
                    ))
                else {
                    return (<div>
                        <div className={classes.firsttitle}>{'Previous Surgeries'}</div>
                        <table className={classes.lastTable}>
                            <tr className={classes.design}>
                                <td className={classes.title}>{'Surgery Type'}</td>
                                <td className={classes.headings}>{'Date'}</td>
                                <td className={classes.headings}>{'sedation Type'}</td>
                                <td className={classes.headings}>{'Surgical Complication'}</td>
                                <td className={classes.headings}>
                                    {'Anesthetic Complications (nausea, vomiting, difficult intubation)'}
                                </td>
                                <td className={classes.headings}/>

                                <td></td>
                            </tr>
                            {props.state.questionList[key].length > 0 && props.state.questionList[key][0]?.answer?.value && Array.isArray(props.state.questionList[key][0]?.answer?.value) && props.state.questionList[key][0].answer.value.map((obj, index) => (
                                <tr className={classes.designn} key={index}>
                                    <td className={classes.title}>{obj.shoulderReconstruction || ''}</td>
                                    <td className={classes.data}>{obj.surgeryDate && moment(obj.surgeryDate).format('MMM YYYY') || ''}</td>
                                    <td className={classes.data}>{obj.sedationType || ''}</td>
                                    <td className={classes.data}>{obj.surgicalComplication || ''}</td>
                                    <td className={classes.data}>{obj.anesthesiaComplication || ''}</td>
                                    <td>
                                        <Image src="/images/delete_transparent_icon.svg"
                                               className="cursor-pointer"  onClick={()=>props.deleteSurgeryRecord(props.state.questionList[key][0], obj, index)}/>
                                    </td>
                                    <td>
                                        <EditPen
                                            src="/images/noun_edit_22190.svg"
                                            className="cursor-pointer"
                                            onClick={()=>props.editDialog(props.state.questionList[key][0], obj, index)}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </table>

                        <Button type="button" onClick={()=>props.editDialog(props.state.questionList[key][0])}>
                            {/*<Add src="/images/addIcon.svg" class="layer"></Add>*/}
                            <span className={classes.spanStyle}>Add Surgery</span>
                        </Button>
                    </div>)
                }
            })}
        </div>
    );
}
