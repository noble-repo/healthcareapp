import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import {documentActionTypeConstants} from "../../../constants";
import AddProviderDetail from "./addProviderDetail";
import Dropzone from "react-dropzone";
import FileViewer from "react-file-viewer";


const Heading = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: normal;
  color: #26292c;
  background: #f7f7f7;
  padding: 5px 0 5px 5px;
  margin:30px 50px 20px 22px;
  @media (max-width:769px) and (min-width:481px){
    margin:30px 17px 20px -12px;

  }
  @media (max-width:350px){
    margin: 17px -36px 5px -33px;
    width: 'max-content';
    font-size:14px;


  }
  @media (min-width:351px) and (max-width:480px){
    margin:30px 50px 20px -24px;
    font-size:14px;

  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-bottom: 10px;
`
const DocumentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  @media (max-width:769px) and (min-width:481px){
    margin:0px 7px 10px 0px;

  }
`
const DocumentTypeText = styled.div`
  display: flex;
  flex-direction: row;
  font-family: Roboto;
  font-size: 18px;
  font-weight: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #181c1b;
  padding-bottom: 5px;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  max-width: 350px;
  height: 230px;
  border: solid 1px #d4d4d4;
  align-content: center;
  justify-content: center;
  padding: 5px;
`
const Provider = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 300px;
  max-width: 350px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #00a0f0;
  align-content: center;
  justify-content: center;
  cursor: pointer;
  margin-top: 5px;
`

const UploadAnesthesiaClearanceDocument = (props) => {
    const [openDialog, setOpenDialog] = useState(false)
    const [selectedDocumentIndex, setSelectedDocumentIndex] = useState(-1)

    function handleOpenDialog(index) {
        setSelectedDocumentIndex(index)
        setOpenDialog(true)
    }

    function handleCloseDialog() {
        setSelectedDocumentIndex(-1)
        setOpenDialog(false)
    }
    console.log(props.state?.surgeryClearanceDocuments);
    useEffect(() => {
        window.addEventListener('beforeunload', sendMissingDocuments)
        return () => {
          window.removeEventListener('beforeunload', sendMissingDocuments)
        }
      }, [])
      const sendMissingDocuments = e => {
         
        // e.preventDefault()
        // e.returnValue = ''
        for(var i = 0; i<= props.state?.surgeryClearanceDocuments.length; i++ ){
          if(props.state?.surgeryClearanceDocuments[i].fileName == ""){
            props.sendMissingDocumentNotification();
            break;
          }
        }
        
      }

    return (
        <>
            <div>
                <Heading>{'Upload Anesthesia Clearance Document'}</Heading>
                <Wrapper>
                    {props.state?.surgeryClearanceDocuments.map((document, index) =>
                        <DocumentWrapper key={index}>
                            <DocumentTypeText>{document.documentType}</DocumentTypeText>
                            <Container>{document.documentActionType === documentActionTypeConstants.FILE_UPLOAD ?
                                <FileUploadTypeDocumentView document={document}
                                                            onClickCloseIconOfUploadedClearanceDocument={props.onClickCloseIconOfUploadedClearanceDocument}
                                                            onFileChange={props.onFileChange}/> :
                                <ProvideInformationTypeDocumentView document={document}/>}</Container>
                            <Provider onClick={() => handleOpenDialog(index)}>{'or add Provider Details'}</Provider>
                        </DocumentWrapper>)}
                </Wrapper>
            </div>
            {openDialog && <AddProviderDetail openDialog={openDialog}
                                              handleCloseDialog={handleCloseDialog}
                                              updateSurgeryClearanceDocument={props.updateSurgeryClearanceDocument}
                                              document={props.state?.surgeryClearanceDocuments[selectedDocumentIndex]}/>}

        </>)
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
        <img src={'/images/document-provider_pic.svg'} alt={'images'} style={{width: '52px', margin: "0 auto 0 auto"}}/>
        <DoctorName>{props.document?.providerInformation?.userName || ''}</DoctorName>
        <ClinicName>{props.document?.providerInformation?.name || ''}</ClinicName>
        <ClinicName>{props.document?.providerInformation?.email || ''}</ClinicName>
        <ClinicName>{props.document?.providerInformation?.phone || ''}</ClinicName>
    </>)
}

const FileUploadTypeDocumentView = (props) => {
    return (<>
        {props.document.url ? <UploadedDocumentRenderView document={props.document}
                                                          onClickCloseIconOfUploadedClearanceDocument={props.onClickCloseIconOfUploadedClearanceDocument}/> :
            <FileUploadView onFileChange={props.onFileChange}
                            document={props.document}/>}
    </>)
}

const ImageViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
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
                    <CloseButton src="/images/cross.svg" width={'20px'}
                                 onClick={() => props.onClickCloseIconOfUploadedClearanceDocument(props.document)}/>
                    <img src={props.document.url} style={{height: '95%', cursor: 'pointer'}}
                         onClick={() => window.open(props.document?.url)}/>
                </ImageViewContainer>
            </>)
        case 'pdf':
            return (<>
                <PdfViewContainer>
                    <CloseButton src="/images/cross.svg" width={'20px'}
                                 onClick={() => props.onClickCloseIconOfUploadedClearanceDocument(props.document)}/>
                    <embed src={props.document.url} type="application/pdf"
                           style={{height: '95%', cursor: 'pointer'}} onClick={() => window.open(props.document?.url)}
                    />
                </PdfViewContainer></>)
        case  'docx':
        case  'doc':
            return (<>
                <DocViewContainer>
                    <CloseButton src="/images/cross.svg" width={'20px'}
                                 onClick={() => props.onClickCloseIconOfUploadedClearanceDocument(props.document)}/>
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

const DocumentUploadText = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Roboto;
  font-size: 15px;
  font-weight: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #8f8f8f;
`

const FileUploadView = (props) => {
    let acceptanceStringForDocument = ".pdf, .doc, .docx, .png, .svg, .jpg, .jpeg, .xls";

    return (<>
        <Dropzone
            multiple={false}
            accept={acceptanceStringForDocument}
            onDrop={(files) => {
                props.onFileChange(files, props.document);
            }}
            noClick={true}
            disableClick
        >
            {({getRootProps, getInputProps, open}) => (
                <div {...getRootProps()} className="outline-none">
                    <input {...getInputProps()} />
                    <div className=" text-center" onClick={() => open()}>
                        <div className="display-flex flex-direction-column align-items-center m-auto">
                            <img
                                src="/images/UploadIcon.svg"
                                width="47px"
                                height="47px"
                            />
                        </div>
                        <DocumentUploadText>{'Upload Document'}</DocumentUploadText>
                    </div>
                </div>
            )}
        </Dropzone>
    </>)

}

export default UploadAnesthesiaClearanceDocument