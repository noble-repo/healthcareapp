import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import TableContainer from "@material-ui/core/TableContainer";
import Card from "@material-ui/core/Card";
import Switch from "react-switch";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import RadioButtonUncheckedOutlinedIcon from "@material-ui/icons/RadioButtonUncheckedOutlined";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import {Column, Row} from "simple-flexbox";
import styled from "styled-components";
import {documentActionTypeConstants} from "../../constants";
import FileViewer from "react-file-viewer";


const ContainerDiv = styled.div`
  width: 580px;
  @media (max-width: 1024px) and (min-width: 768px) {
    display: none;
  }
`;
const ToggleContainerDiv = styled.div`
  display: none;
  @media (max-width: 1024px) and (min-width: 768px) {
    display: block;
    width: 730px;


  }
`;
const Togglecontainer = styled.div`
  // display:none;
  // @media  (max-width:1024px) and (min-width: 768px) {
  //   display:block;
`
const PopUp = styled.div`
  background-color: red;
  width: 200px;
  height: 55px;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: white;
  font-size: 13px;
`;
const useStyles = makeStyles({
    tabPanel: {
        fontSize: "12px",
        fontWeight: "bold",
        backgroundColor: "#e8f5fe",
        padding: "5px",
        // width: "450px",
        "@media  (max-width:1024px) and (min-width: 768px)": {
            width: "620px",
        }

    },
    panel: {
        marginTop: "45px",
        fontSize: "12px",
        fontWeight: "bold",
        backgroundColor: "#e8f5fe",
        padding: "5px",
        // width: "450px",
        "@media  (max-width:1024px) and (min-width: 768px)": {
            width: "620px",


        }
    },
    input: {
        // width: "450px",
        fontSize: "12px",
        paddingLeft: "10px",
        fontFamily: "Roboto",
        paddingBottom: "90px",
        color: "grey",
        height: "110px",
        position: "center",
        borderRadius: "4px",
        border: "solid 1px #e5e5e5",
        backgroundColor: "white",
        marginTop: "8px",
        "&:focus": {
            outline: "none",
        },
        "@media  (max-width:1024px) and (min-width: 768px)": {
            width: "620px",


        }
    },
    button: {
        height: "40px",
        color: "white",
        backgroundColor: "#00a0f0",
        paddingTop: "5px",
        fontSize: "13px",
        fontWeight: 500,
        borderRadius: "4px",
        border: " #00a0f0",
        verticalAlign: "center",
        fontFamily: "Roboto",
        marginTop: "30px",
        outline: "none",
        "&:focus": {
            outline: "none",
        },
        // width: "450px",
        "@media  (max-width:1024px) and (min-width: 768px)": {
            width: "620px",


        }
    },
    anesthesia: {
        fontSize: "12px",
        fontWeight: "bold",
        backgroundColor: "#e8f5fe",
        marginLeft: "15px",
        width: "85%",
        "@media  (max-width:1024px) and (min-width: 768px)": {
            marginLeft: "0px"


        }
    },
    checklist: {
        fontWeight: 500,
        fontSize: "16px",
        fontFamily: "Roboto !important",
        padding: "5px",
        paddingLeft: "15px",
        color: "#414141",
        backgroundColor: '#e8f5fe',
        borderBottom: '1px solid #80808036'
    },
    checklistHeading: {
        fontWeight: 500,
        fontSize: "16px",
        fontFamily: "Roboto !important",
        padding: "5px",
        paddingLeft: "15px",
        color: "#414141",
        backgroundColor: '#e8f5fe',
        borderBottom: '1px solid #80808036'
    },
    docChecklistDiv: {
        display: "flex",
        flexWrap: "wrap",
        width: "560px",
        marginLeft: "10px",
        overflow: "hidden",
    },
    CardContent: {
        padding: "0px",
        paddingBottom: "0px",
        boxShadow: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: '84%'
    },
    labClearanceDiv: {
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "#ededed",
        backgroundColor: "#fff",
        height: "40px",
        color: "black",
        fontSize: "12px",
        fontWeight: "bold",
        marginTop: "10px",
    },
    labClearance: {
        // paddingLeft: "20px",
        textAlign: "center",
        borderColor: "#ededed",
        color: "#181c1b",
        fontFamily: "Roboto !important",
        fontSize: "11px",
    },
    checkBox: {
        color: "#29E224",
        padding: "2px !important",
        opacity: 0.7
    },
    checklistDoc: {
        position: "relative",
        minWidth: "10%",
        height: "190px",
        width: "25%",
        margin: "15px",
        borderRadius: 0,
        backgroundColor: "#F8F8F8",
        boxShadow: "none !important",

        "@media  (max-width:1024px) and (min-width: 768px)": {
            margin: "15px 20px"


        }
    },
    box: {
        width: "110px",
        fontSize: "12px",
        fontFamily: "Roboto",
        paddingBottom: "90px",
        paddingTop: "40px",
        paddingLeft: "20px",
        color: "grey",
        marginLeft: "15px",
        height: "120px",
        position: "center",
        borderRadius: "4px",
        border: "solid 1px #e5e5e5",
        backgroundColor: "white",
        marginTop: "8px",
    },
    alertt: {
        marginLeft: "-430px",
        paddingLeft: "-20px",
        marginTop: "70px",
        fontSize: "10px",
    },
    conatiner: {
        overflowX: "hidden",
        width: "584px",
    },
    label: {
        marginLeft: "550px",
        marginTop: "10px",
    },
    MuiTableRow: {
        "&:last-child td": {
            borderBottom: 0,
        },
        arrowicon: {
            marginTop: "10px",
        },
    },
    switch: {
        marginTop: "10px",
    }
});
export default function AnesthesiaTab(props) {
    const classes = useStyles();
    return (
        <div>
            <Row>
                <Column>
                    <ContainerDiv>
                        <TableContainer className={classes.container}>
                            <div className={classes.container}>
                                <Row className={classes.checklistHeading} style={{width: '85%'}}>Document
                                    Checklist</Row>

                                <div className={classes.docChecklistDiv}>
                                    {props.state.row && props.state.row.length
                                        ? props.state.row.map((cell, index) => (
                                            <Card className={classes.checklistDoc}>
                                                <CardContent className={classes.CardContent} key={index}>
                                                    {cell.documentActionType === documentActionTypeConstants.FILE_UPLOAD ?
                                                        <FileUploadTypeDocumentView document={cell}
                                                                                    onFileChange={props.onFileChange}/> :
                                                        <ProvideInformationTypeDocumentView document={cell}/>}
                                                </CardContent>
                                                <Typography style={{position: "absolute", bottom: 0, width: '100%'}}>
                                                    <div className={classes.labClearanceDiv}>
                                                        <form className={classes.labClearance}>
                                                            {cell.documentType}
                                                            <container className={classes.checkBox}>
                                                                <Checkbox
                                                                    size="small"
                                                                    onChange={(event) => props.checkedDocument(event, cell.documentType, index)}
                                                                    disableRipple
                                                                    checked={cell.isChecked === true}
                                                                    icon={<RadioButtonUncheckedOutlinedIcon/>}
                                                                    checkedIcon={
                                                                        <CheckCircleIcon
                                                                            className={classes.checkBox}
                                                                        />
                                                                    }
                                                                />
                                                            </container>
                                                        </form>
                                                    </div>
                                                </Typography>
                                            </Card>
                                        ))
                                        : ""}
                                </div>
                            </div>
                        </TableContainer>
                    </ContainerDiv>
                </Column>
                <Column>
                    <Row className={classes.checklistHeading}> Surgery Clearance</Row>
                    <label className={classes.switch} onClick={() => props.switchChange()}>
                        <Switch
                            aria-describedby={'mypopover'}
                            id="mypopover"
                            checked={props.state.surgeryClearance}
                            onColor="#29E224"
                            handleDiameter={25}
                            uncheckedIcon={false}
                            checkedIcon={false}
                            boxShadow="0px 1px 3px "
                            height={30}
                            width={65}
                        />
                    </label>
                    <Row className={classes.checklistHeading}> Anesthesiologist Recommendations</Row>
                    <input type="text" placeholder="Add Your Anesthesia Recommendation"
                           name="anesthesiologistRecommendation" value={props.state.anesthesiologistRecommendation}
                           className={classes.input} onChange={(event) => props.onHandleChange(event)}/>
                    <button className={classes.button} type="button" onClick={() => props.updateSurgeryClearanceData()}>
                        Update Surgery Clearance
                    </button>
                    <Togglecontainer>
                        <ToggleContainerDiv>
                            <TableContainer className={classes.container}>
                                <div className={classes.container}>
                                    <Row className={classes.checklistHeading} style={{marginTop: '10px'}}>Document
                                        Checklist</Row>

                                    <div className={classes.docChecklistDiv}>
                                        {props.state.row && props.state.row.length
                                            ? props.state.row.map((cell, index) => (
                                                <Card className={classes.checklistDoc} key={index}>
                                                    <CardContent className={classes.CardContent}>
                                                        {cell.documentActionType === documentActionTypeConstants.FILE_UPLOAD ?
                                                            <FileUploadTypeDocumentView document={cell}
                                                                                        onFileChange={props.onFileChange}/> :
                                                            <ProvideInformationTypeDocumentView document={cell}/>}
                                                    </CardContent>
                                                    <Typography
                                                        style={{position: "absolute", bottom: 0, width: '100%'}}>
                                                        <div className={classes.labClearanceDiv}>
                                                            <form className={classes.labClearance}>
                                                                {cell.documentType}
                                                                <container className={classes.checkBox}>
                                                                    <Checkbox
                                                                        size="small"
                                                                        onChange={(event) => props.checkedDocument(event, cell.documentType, index)}
                                                                        disableRipple
                                                                        checked={cell.isChecked === true}
                                                                        icon={<RadioButtonUncheckedOutlinedIcon/>}
                                                                        checkedIcon={
                                                                            <CheckCircleIcon
                                                                                className={classes.checkBox}
                                                                            />
                                                                        }
                                                                    />
                                                                </container>
                                                            </form>
                                                        </div>
                                                    </Typography>
                                                </Card>
                                            ))
                                            : ""}
                                    </div>
                                </div>
                            </TableContainer>
                        </ToggleContainerDiv>
                    </Togglecontainer>
                </Column>
            </Row>
        </div>
    );
}

const DoctorName = styled.div`
  display: flex;
  flex-direction: row;
  font-family: Roboto;
  font-size: 17px;
  font-weight: normal;
  line-height: 1.65;
  letter-spacing: normal;
  color: #141414;
  justify-content: center;
  align-content: center;
`
const ClinicName = styled.div`
  display: flex;
  flex-direction: row;
  font-family: Roboto;
  font-size: 15px;
  font-weight: normal;
  line-height: 1.87;
  letter-spacing: normal;
  color: #414141;
  justify-content: center;
  align-content: center;
`
const ProvideInformationTypeDocumentView = (props) => {
    return (<>
        <img src={'/images/document-provider_pic.svg'} alt={'images'} style={{width: '32px', margin: "0 auto 0 auto"}}/>
        <DoctorName>{props.document?.providerInformation?.userName || ''}</DoctorName>
        <ClinicName>{props.document?.providerInformation?.name || ''}</ClinicName>
        <ClinicName>{props.document?.providerInformation?.email || ''}</ClinicName>
        <ClinicName>{props.document?.providerInformation?.phone || ''}</ClinicName>
    </>)
}

const ImageViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 84%;
  margin: 0 auto 0 auto;
  position: relative;
`
const PdfViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto 0 auto;
  position: relative;

`
const DocViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto 0 auto;
  position: relative;
`

const CloseButton = styled.img`
  float: right;
  position: absolute;
  cursor: pointer;
  right: -15px;
  top: -20px;
`;

const FileUploadTypeDocumentView = (props) => {
    return (<>
        {props.document.url ? <UploadedDocumentRenderView document={props.document}/> :
            <div style={{display: 'flex', alignItems: 'center'}}>{'Document Preview'}</div>}
    </>)
}
const UploadedDocumentRenderView = (props) => {
    let string = props.document?.fileName?.split(".")[1];
    console.log("string===", string)
    switch (string) {
        case 'png':
        case 'svg':
        case 'jpg':
        case 'jpeg':
            return (<>
                <ImageViewContainer>
                    {/*<CloseButton src="/images/cross.svg" width={'20px'}*/}
                    {/*             onClick={() => props.onClickCloseIconOfUploadedClearanceDocument(props.document)}/>*/}
                    <img src={props.document.url} style={{height: '95%', cursor: 'pointer'}}
                         onClick={() => window.open(props.document?.url)}/>
                </ImageViewContainer>
            </>)
        case 'pdf':
            return (<>
                <PdfViewContainer>
                    {/*<CloseButton src="/images/cross.svg" width={'20px'}*/}
                    {/*             onClick={() => props.onClickCloseIconOfUploadedClearanceDocument(props.document)}/>*/}
                    <embed src={props.document.url} type="application/pdf"
                           style={{height: '95%', cursor: 'pointer'}} onClick={() => window.open(props.document?.url)}
                    />
                </PdfViewContainer></>)
        case  'docx':
        case  'doc':
            return (<>
                <DocViewContainer>
                    {/*<CloseButton src="/images/cross.svg" width={'20px'}*/}
                    {/*             onClick={() => props.onClickCloseIconOfUploadedClearanceDocument(props.document)}/>*/}
                    <FileViewer
                        fileType="docx"
                        filePath={props.document.url}
                        style={{height: '95%', cursor: 'pointer'}}
                        onClick={() => window.open(props.document?.url)}
                    />
                </DocViewContainer></>)
        case "":
        default:
            return (<>Hello</>)


    }

}