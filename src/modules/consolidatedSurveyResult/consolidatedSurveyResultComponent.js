import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import {genericConstants} from "../../constants";
import moment from "moment";

const Accordion = withStyles({
    root: {
        // border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        marginBottom: '10px',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        backgroundColor: 'aliceblue',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: '30px',
        margin: '5px 0',
        '&$expanded': {
            minHeight: '30px',
        },
    },
    content: {
        margin: '5px 0',
        '&$expanded': {
            margin: '5px 0',
        },
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiAccordionDetails);

const ConsolidatedSurveyResultComponent = (props) => {
    const [expanded, setExpanded] = React.useState('');
    const handleChange = (panel, part) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
        newExpanded && props.getSectionListByPartWise(props.state.surveyId, part)
    };

    return (<>
        {props.state.partValues && Object.keys(props.state.partValues).map((part, index) =>
            <Accordion square expanded={expanded === `panel${index + 1}`}
                       onChange={handleChange(`panel${index + 1}`, part)} key={index}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" className="mt-1 mb-1">
                    <div> {props.state.partValues[part].name || ''}</div>
                </AccordionSummary>
                <AccordionDetails className="display-flex flex-direction-column">
                    {props.state.sectionList && props.state.sectionList.map((section, sectionIndex) =>
                        <>
                            <div key={sectionIndex}
                                 className="display-flex flex-direction-column justify-content-center align-content-center p-2 font-weight-normal">{section?.name || ''}</div>
                            {props.state?.questionList[section.sectionId]?.length > 0 && props.state.questionList[section.sectionId].map((questionObj) =>
                                <>
                                    {RenderingOfQuestion(questionObj)}
                                </>
                            )}
                        </>
                    )}
                </AccordionDetails>
            </Accordion>
        )}
    </>)

    function RenderingOfQuestion(questionObject) {
        if (!questionObject || Object.keys(questionObject).length < 1)
            return
        return (<>
            <div
                className="display-flex flex-direction-column font-weight-normal">{questionObject?.question || ''}</div>
            {RenderingOfQuestionAnswer(questionObject)}
        </>)
    }

    function RenderingOfQuestionAnswer(questionObject) {
        if (!questionObject || !questionObject.type)
            return

        switch (questionObject.type) {
            case genericConstants.QUESTION_TYPE.DROPDOWN:
            case genericConstants.QUESTION_TYPE.DESCRIPTION :
                return (<div
                    className="display-flex flex-direction-column pl-1 bg-light-gray font-weight-normal">{questionObject?.answer?.value || '- '}</div>)
            case genericConstants.QUESTION_TYPE.DATE_PICKER:
                return (<div
                    className="display-flex flex-direction-column pl-1 bg-light-gray font-weight-normal">{questionObject?.answer?.value && moment(questionObject?.answer?.value).format('DD MMM YYYY hh:mm A') || '- '}</div>)
            case genericConstants.QUESTION_TYPE.UPLOAD :
                return (<div
                    className="display-flex flex-direction-column pl-1 bg-light-gray font-weight-normal">{questionObject?.answer?.value &&
                <img src={questionObject?.answer?.value} alt={'image'}/> || '- '}</div>)
            case genericConstants.QUESTION_TYPE.GROUP_OF_QUESTION :
                return (questionObject?.answer?.value && questionObject?.answer?.value.length > 0 && questionObject?.answer?.value.map((obj) =>
                    <div
                        className="display-flex flex-direction-column pl-1 bg-light-gray font-weight-normal mb-2">{getObjectKeyValues(obj)}</div>))
        }
    }

    function getObjectKeyValues(obj) {
        if (!obj || Object.keys(obj).length < 1)
            return '- '
        return Object.keys(obj).map((key) =>
            <div
                className="display-flex flex-direction-row pl-1 bg-light-gray font-weight-normal"><span
                className="font-weight-bold">{`${key }: `}</span><span>{` ${ obj[key]} `}</span></div>
        )
    }


}

export default ConsolidatedSurveyResultComponent