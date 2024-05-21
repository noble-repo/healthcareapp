import React, { useState } from "react";
import { Row } from "simple-flexbox";
import { makeStyles } from "@material-ui/core/styles";
import { history } from "../../../managers/history";
import Button from "@material-ui/core/Button";


function Card(props) {
    const useStyles = makeStyles({
        card__main: {
            height: "270px",
            width: "300px",
            marginRight: "20px",
            marginLeft: "20px",
            marginBottom: "30px",
            display: "flex",
            flexDirection: "column",
            boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.3)",
            borderRadius: "5px",
            flexFlow: "row wrap",
            "@media screen and (max-width:441px)": {
                width: "302px !important",
            },
            "@media screen and (max-width:769px) and (min-width:442px)": {
                width: "200px",

            }
        },
        card__data: {
            width: "auto",
            height: "42px",

            fontFamily: "Roboto",
            fontSize: "18px",
            fontWeight: "500",
            fontStretch: "normal",
            fontStyle: "normal",
            lineHeight: "normal",
            letterSpacing: "normal",
            color: "#181c1b",
            "&:button": {
                floatRight: "6px",

            },
            "@media screen and (max-width:769px) and (min-width:442px)": {
                width: "180px",

            }


        },
        btn: {
            variant: "outlined !important",
            marginTop: "-10px !important",

            size: "small",
            width: "100px",
            height: "42px",
            padding: "12px 32px 11px 33px",
            borderRadius: "2px",
            backgroundColor: "#ffffff",
            float: "right",
            border: "solid 1px #d4d4d4",
            "@media screen and (max-width:441px)": {
                marginRight: "110px",
                width: "90px",
                padding: "10px 30px 10px 30px",
                height: "42px",
            },
            "@media screen and (max-width:769px) and (min-width:601px)": {
                marginRight: '-50px',
            
                width:'80px'

            },
        },
        btn_general: {
            variant: "outlined !important",
            marginTop: "-5px !important",

            size: "small",
            width: "100px",
            height: "42px",
            padding: "12px 32px 11px 33px",
            borderRadius: "2px",
            backgroundColor: "#ffffff",
            float: "right",
            border: "solid 1px #d4d4d4",
            "@media screen and (max-width:441px)": {
                marginRight: "110px",
                width: "90px",
                padding: "10px 30px 10px 30px",
                height: "42px",
            },
            "@media screen and (max-width:769px) and (min-width:601px)": {
                marginRight: '-50px',
            
                width:'80px'

            },
        },

        div__style: {
            display: "flex !important",
            position: "left",
            flexFlow: "row wrap !important",
            justifyContent: "center !important",
            "@media screen and (max-width:1200px)": {
                justifyContent: "center !important",
            },
            "@media screen and (max-width:1024px) and (min-width:601px)": {
                justifyContent: "left !important"
            },
           


        },

        card__img: {
            width: "300px",
            height: "234px",
            borderadius: "5px 5px 0px 0px",
            "@media screen and (max-width:769px) and (min-width:442px)": {
                width: "200px",

            },
            "@media screen and (max-width:1024px) and (min-width:770px)": {
                height:'163px'

            }
        },
        survey__heading: {
            height: "21px",
            fontFamily: "Roboto !important",
            fontSize: "18px",
            fontWeight: "500 !important",
            fontStretch: "normal",
            fontStyle: "normal",
            lineHeight: "normal",
            letterSpacing: "normal",
            color: "#26292c !important",
            paddingLeft: "20px",
            marginTop: "50px",
            "@media screen and (max-width:1200px)": {
                marginLeft: "139px",
            },
            "@media screen and (max-width:1024px) and (min-width:770px)": {
                marginLeft: "-17px !important",

            },
            "@media screen and (max-width:769px) and (min-width:601px)": {
                marginLeft: "-20px !important",

            },
            "@media screen and (max-width:480px) and (min-width:351px)": {
                marginLeft: "-15px !important",
            },
            "@media screen and (max-width:350px)": {
                marginLeft: "-42px !important",
            },
            "@media screen and (max-width:600px) and (min-width:481px)": {
                marginLeft: "-36px !important",
            },
            "@media screen and (max-width:1326px)": {
                marginLeft: "200px",
            },
        },

    });
    const classes = useStyles();
    const isCompleted = props.state.partStatus["PART_A"].completedSection > 0 ? props.state.partStatus["PART_A"].completedSection === props.state.partStatus["PART_A"].totalSection ? 'Complete' : 'Resume' : 'Start'
    const changehighlight = isCompleted === 'Complete' ? true : false

    const { isOpen, setIsOpen } = useState(changehighlight)
    return (
        <div>
            {/* <h3> */}
            {" "}
            <div className={classes.survey__heading}>Patient Survey
            </div>
            {/* </h3> */}
            <hr />
            <center></center>
            <Row className={classes.div__style}>
                {props.state.rows.slice(0, 1).map((row) => (
                    <div>
                        <div className={ `card__main ${changehighlight ? '':'card__main__highlight'}`}
                             onClick={() => history.push({pathname: '/patient/survey-history/' + props.state.surveyId + '/' + row.part, state:{part_status: props.state.partStatus}})}>
                            <div className="card__img">{row.img}</div>
                            <div
                                className={`card__data_genaral_p_s display-flex justify-content-between ${changehighlight ? 'card__data_genaral_p_s_no_highlight display-flex justify-content-between':''}`}>{row.name}
                                <Button className={classes.btn_general}>
                                    {props.state.partStatus[row.part].completedSection > 0 ? props.state.partStatus[row.part].completedSection === props.state.partStatus[row.part].totalSection ? 'Complete' : 'Resume' : 'Start'}
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
                {props.state.rows.slice(1, 9).map((row) => (
                    <div>
                        <div className='card__main'
                            onClick={() => history.push({pathname: '/patient/survey-history/' + props.state.surveyId + '/' + row.part, state:{part_status: props.state.partStatus}})}>
                            <div className="card__img">{row.img}</div>
                            <div
                                className="card__data display-flex justify-content-between ">{row.name}
                                <Button className={classes.btn}>
                                    {props.state.partStatus[row.part].completedSection > 0 ? props.state.partStatus[row.part].completedSection === props.state.partStatus[row.part].totalSection ? 'Complete' : 'Resume' : 'Start'}
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}

            </Row>
        </div>
    );
}

export default Card;
