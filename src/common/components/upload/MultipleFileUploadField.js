import React from "react";
import Dropzone from "react-dropzone";
import styled from "styled-components";
import '../../../modules/patientGeneral/surveyHistory/question.css'

const Input = styled.input`
  width: 400px;
  border: none;
  text-align:center;
  outline: none;
  border-radius: 0px;
  font-size: 16px;
  font-family:roboto !important;
  color: #181c1b;
  &:focus {
    outline: none;
    border-radius: 0px;
    border:none;
  }

 
`;

function UploadDocumentComponent(props) {
    let acceptanceStringForDocument = ".pdf, .doc, .docx, .png, .svg, .jpg, .jpeg, .xls";
    const [width, setWidth] = React.useState(window.innerWidth);
    React.useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        // subscribe to window resize event "onComponentDidMount"
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            // unsubscribe "onComponentDestroy"
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);

    return (
        <>
            <div className='uploadview'>
                <div
                    className="display-flex flex-direction-column align-items-center w-530  dis-flex m-auto"
                    style={{borderStyle: "dashed", borderRadius: 5}}
                >
                    <div
                        className="display-flex flex-direction-row justify-content-center dis-flex align-items-center box-css ">
                        <Dropzone
                            multiple={false}
                            accept={acceptanceStringForDocument}
                            onDrop={(files) => {
                                props.onFileChange(files);
                            }}
                            noClick={true}
                            disableClick
                            onFileDialogCancel={props.onFileCancel}
                        >
                            {({getRootProps, getInputProps, open}) => (
                                <div {...getRootProps()} className="outline-none">
                                    <input {...getInputProps()} />
                                    <div className=" text-center" onClick={() => open()}>
                                        <div className="display-flex flex-direction-column align-items-center m-auto">
                                            <div>
                                                <img
                                                    src="/images/UploadIcon.svg"
                                                    width="75px"
                                                    height="75px"
                                                />
                                            </div>
                                            <div className="outline-none fs-15 cursor-pointer fc-grey">
                        <span className="col-181c1b">
                          {"Drop files here or"}
                        </span>
                                                &nbsp;
                                                <span
                                                    className=" flex-direction-row justify-content-center pdf-png-h fs-15 "
                                                    style={{color: "#00a0f0"}}
                                                >
                          {"browse"}
                        </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Dropzone>
                    </div>
                    <div
                        className="outline-none  p-t-10px fs-14 fc-color-hash181c1b"
                        style={{
                            fontWeight: "500",
                            color: "black",
                            marginRight: "55px",
                        }}
                    >
                        {/* {"JPEG, PNG, PDF, Excel file. Not exceeding 2MB in size"} */}
                    </div>
                    <div
                        className="display-flex flex-direction-row justify-content-center align-items-center pt-2"
                        style={{marginTop: "5px", marginBottom: "5px"}}
                    >
                        <Input
                            //   style={{ width: "400px", border: "none" }}
                            type={"text"}
                            readonly={true}
                            value={props.selectedFileName}
                            //   placeholder={"Document Name"}
                            className="fs-16 fc-color-hash101820 background-white"
                        />
                        {/* <div className="display-flex flex-direction-column">
              <img
                src="/images/cross.svg"
                onClick={() => props.onCloseModal()}
                className="cole-icon-upload-file cursor-pointer"
                alt=""
              />
            </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default UploadDocumentComponent;
