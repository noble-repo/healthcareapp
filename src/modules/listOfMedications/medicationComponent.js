import React from "react";
import styled from "styled-components";
import {makeStyles} from "@material-ui/core/styles";

const MainButton = styled.button`
  width: 162px;
  height: 48px;
  background-color: #00a0f0;
  margin-top: 18px;
  margin-bottom: 18px;
  border: 0px #00a0f0;
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

  @media (max-width: 1024px) and (min-width: 768px) {
    display: none;


  }
`;
const MedicationButton = styled.button`
  display: none;
  @media (max-width: 1024px) and (min-width: 768px) {
    display: block;

    width: 162px;
    height: 48px;
    background-color: #00a0f0;
    margin-top: 18px;
    margin-bottom: 18px;
    border: 0px #00a0f0;
    display: block;
    vertical-align: center;
    // margin-left: 855px;
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
  }

`;

const useStyles = makeStyles((theme) => ({
    root: {
        ".&MuiBox-root-85": {
            padding: "24px 0px !important",
        },
        ".&MuiBox-root-77": {
            padding: "24px 0px !important",
        },
    },

    tabPanel: {
        width: "100%",
    },
    heading: {
        fontFamily: "Roboto",
        fontSize: "16px",

        fontWeight: 500,
        backgroundColor: "#e8f5fe",
        padding: "5px",
        color: "#414141",
    },
    fontweight: {
        fontWeight: "bold",
        fontSize: "12px",
        paddingLeft: "100px",
    },
    fontSize: {
        fontSize: "12px",
    },

    medicine: {
        fontWeight: "bold",
        fontSize: "12px",
        padding: "5px",
        paddingLeft: "15px",
        backgroundColor: "#f7f7f7",
    },
    content: {
        fontFamily: "Roboto",
        fontSize: "16px",
        fontWeight: "normal",
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: 1.75,
        letterSpacing: "normal",
        color: "#181c1b",
        paddingRight: "120px",

        padding: "5px",
        backgroundColor: "#f7f7f7",
    },
    contentFrequency: {
        fontFamily: "Roboto",
        fontSize: "16px",
        fontWeight: "normal",
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: 1.75,
        letterSpacing: "normal",
        color: "#181c1b",
        paddingRight: "190px",

        padding: "5px",
        backgroundColor: "#f7f7f7",
        "@media  (max-width:1024px) and (min-width: 768px)": {
            paddingRight: "145px",


        }
    },
    add: {
        width: "16px",
        height: "33px",
        marginRight: "12px",
    },
}));

export default function MedicationComponent(props) {
    const classes = useStyles();

    return (
        <div>
            <div className="display-flex flex-direction-row justify-content-end">
                {props?.afterMeeting == true ? "" :<MainButton variant="contained" onClick={()=>props.handleDialog()}>
                    <img className={classes.add} src="/images/addIcon.svg"/>
                    Add Medication
                </MainButton>}
            </div>

            <table className={classes.tabPanel}>
                <tr>
                    <td className={classes.heading}>Medicine Photo</td>
                    <td className={classes.heading}>Name of Medication</td>
                    <td className={classes.heading}>Dosage</td>
                    <td className={classes.heading}>Frequency</td>
                </tr>
                {props.state?.questionData?.answer?.value?.length > 0 && props.state?.questionData?.answer?.value.map((row, index) => (
                    <tr key={index}>
                        <td className={classes.medicine}><img src={row.url || "/images/advil.png"} width="80px"/></td>
                        <td className={classes.content}>{row.name || ''}</td>
                        <td className={classes.content}>{row.dosage || ''}</td>
                        <td className={classes.contentFrequency}>{row.frequency || ''}</td>
                    </tr>
                ))}
            </table>
            <MedicationButton variant="contained" onClick={()=>props.handleDialog()}>
                + Add Medication
            </MedicationButton>
        </div>
    );
}
