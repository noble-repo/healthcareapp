import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import styled from "styled-components";

const Choice = styled.span`
  margin-left: auto;
  font-weight: 500;
`;
const Details = styled.span`
  margin-left: auto;
`;
const MainHeading = styled.td`
  font-weight: 500;
`;
const Table = styled.table`
  width: 100%;
`;
const Information = styled.td`
  float: right;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "75vw",
    marginLeft: 0,
    marginTop: 40,
    boxShadow: "none",
    borderColor: "rgba(0,0,0,0)",
  },

  heading: {
    fontSize: "16px",
    fontWeight: 500,
    fontFamily:"Roboto",
    backgroundColor: "#e8f5fe",
    padding: "5px",
    paddingLeft: "-10px",
    color: "#414141",
  },
  accordionSummary: {
    backgroundColor: "#e8f5fe",
    // height: "30px",
    height: "40px",
    minHeight: "15px",
    marginTop: "15px",
    boxShadow: "none",
    borderColor: "rgba(0,0,0,0)",
  },
  addIcon: {
    width: "14px",
    color: "#00a0f0",
    height: "14px",
    marginLeft: "-15px",
  },
  minusIcon: {
    width: "14px",
    color: "#00a0f0",
    height: "14px",
    marginLeft: "-15px",
  },
  accordianHeading: {
    fontFamily:"Roboto",
  fontSize:"16px",
  fontWeight: 500,
  fontStretch:"normal",
  fontStyle:"normal",
  lineHeight: 1.75,
  letterSpacing: "normal",
  color: "#181c1b",
    // fontSize: "12px",
    // fontWeight: "500",
    backgroundColor: "#f7f7f7",
    padding: "5px",
    marginTop: "3px",
    paddingLeft: "20px",
    display: "flex",
    boxShadow: "none",
    borderColor: "rgba(0,0,0,0)",
  },
}));
function SurveyComponent(props) {
  const classes = useStyles();
  console.log(`props`, props);
  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          className={classes.accordionSummary}
          onClick={props.generalAccordian}
        >
          <Typography className={classes.heading}>
            {props.state.open ? (
              <span>
                <RemoveIcon className={classes.minusIcon} /> General
              </span>
            ) : (
              <span>
                <AddIcon className={classes.addIcon} /> General
              </span>
            )}
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordianHeading}>
          <Table>
            <tr>
              <td className={classes.td}>Patient Height : </td>
              <Information>
                <Details>{props.state.height}</Details>
              </Information>
            </tr>
            <tr>
              <td className={classes.td}>Patient Weight(lbs): </td>
              <Information>
                <Details>{props.state.weight}</Details>
              </Information>
            </tr>
            <tr>
              <td className={classes.td}>Patient BMI: </td>
              <Information>
                <Details>{props.state.bmi}</Details>
              </Information>
            </tr>
            <tr>
              <td className={classes.td}>Gender: </td>
              <Information>
                <Details>{props.state.gender}</Details>
              </Information>
            </tr>
            <tr>
              <td className={classes.td}>Date of Birth: </td>
              <Information>
                <Details>{props.state.dob}</Details>
              </Information>
            </tr>
            <tr>
              <td className={classes.td}>Celculated Age: </td>
              <Information>
                <Details>{props.state.age}</Details>
              </Information>
            </tr>
            <tr>
              <td className={classes.td}> Education Level: </td>
              <Information>
                <Details>{props.state.education}</Details>
              </Information>
            </tr>
            <tr>
              <td className={classes.td}>First Time Surgery: </td>
              <Information>
                <Details>{props.state.fts}</Details>
              </Information>
            </tr>
            <tr>
              <td className={classes.td}>Any Allergy to Medicines: </td>
              <Information>
                <Details>{props.state.allergy}</Details>
              </Information>
            </tr>
          </Table>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          className={classes.accordionSummary}
          onClick={props.surgicalAccordian}
        >
          <Typography className={classes.heading}>
            {props.state.surgical ? (
              <span>
                <RemoveIcon className={classes.minusIcon} /> Surgical History
              </span>
            ) : (
              <span>
                <AddIcon className={classes.addIcon} /> Surgical History
              </span>
            )}
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordianHeading}>
          <Table>
            <tr>
              <MainHeading>First Time Surgery</MainHeading>
              <Information>
                <Details>Yes</Details>
              </Information>
            </tr>
            <tr>
              <MainHeading>Previous Surgery Details</MainHeading>
            </tr>
            <tr>
              <td> Surgery Type</td>
              <Information>
                <Details>{props.state.surgeryType}</Details>
              </Information>
            </tr>
            <tr>
              <td> Surgery Date</td>
              <Information>
                <Details>{props.state.surgeryDate}</Details>
              </Information>
            </tr>
            <tr>
              <td> Sedation Type</td>
              <Information>
                <Details>{props.state.sedationType}</Details>
              </Information>
            </tr>
            <tr>
              <td> Surgical Complications</td>
              <Information>
                <Details>{props.state.sComplications}</Details>
              </Information>
            </tr>
            <tr>
              <td>
                {" "}
                Anesthesia Complications(Nausea, Vomiting, difficult intubation)
              </td>
              <Information>
                <Details>{props.state.anesthesiaComplication}</Details>
              </Information>
            </tr>
            <tr>
              <MainHeading>Family Surgical History</MainHeading>
            </tr>
            <tr>
              <td>Is there any favourite history of surgical Complications?</td>
              <Information>
                <Details>{props.state.familyHistory}</Details>
              </Information>
            </tr>
            <tr>
              <td>If yes, provide more details</td>
              <Details>{props.state.comment}</Details>
            </tr>
          </Table>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          className={classes.accordionSummary}
          onClick={props.cardiacAccordian}
        >
          <Typography className={classes.heading}>
            {props.state.cardiac ? (
              <span>
                <RemoveIcon className={classes.minusIcon} /> Cardiac Survey
              </span>
            ) : (
              <span>
                <AddIcon className={classes.addIcon} /> Cardiac Survey
              </span>
            )}
          </Typography>
        </AccordionSummary>
        {props.state.cardiacSurvey.map((row, index) => (
          <div className={classes.accordianHeading}>
            <Table>
              <tr>
                <td>{row.ques}</td>
                <Information>
                  <Choice>{row.option}</Choice>
                </Information>
              </tr>
              {row.info
                ? row.info.map((data) => (
                    <div>
                      <tr>
                        <td style={{color:"#8f8f8f"}}>{data.condition}</td>
                      </tr>
                      <tr>
                        <td>
                          {data.query}
                          {": " + data.surgeryName}
                        </td>
                        <td> </td>
                      </tr>
                      <tr>
                        <td>
                          {data.query2}
                          {": " + data.year}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {data.query3}
                          {": " + data.stent}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {data.query4}
                          {": " + data.count}
                        </td>
                      </tr>
                    </div>
                  ))
                : ""}
            </Table>
          </div>
        ))}
      </Accordion>
      <Accordion>
        <AccordionSummary
          className={classes.accordionSummary}
          onClick={props.pulmonaryAccordian}
        >
          <Typography className={classes.heading}>
            {props.state.pulmonary ? (
              <span>
                <RemoveIcon className={classes.minusIcon} /> Pulmonary Survey
              </span>
            ) : (
              <span>
                <AddIcon className={classes.addIcon} /> Pulmonary Survey
              </span>
            )}
          </Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion>
        <AccordionSummary
          className={classes.accordionSummary}
          onClick={props.renalAccordian}
        >
          <Typography className={classes.heading}>
            {props.state.renal ? (
              <span>
                <RemoveIcon className={classes.minusIcon} /> Renal Survey
              </span>
            ) : (
              <span>
                <AddIcon className={classes.addIcon} /> Renal Survey
              </span>
            )}
          </Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion>
        <AccordionSummary
          className={classes.accordionSummary}
          onClick={props.endocrineAccordian}
        >
          <Typography className={classes.heading}>
            {props.state.endocrine ? (
              <span>
                <RemoveIcon className={classes.minusIcon} /> Endocrine and Hene
                Survey
              </span>
            ) : (
              <span>
                <AddIcon className={classes.addIcon} /> Endocrine and Hene
                Survey
              </span>
            )}
          </Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}

export default SurveyComponent;
