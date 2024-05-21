import React from 'react'
import styled from "styled-components";
import {Column} from "simple-flexbox"
import {Row} from "simple-flexbox";
import Box from '@material-ui/core/Box';
import {makeStyles} from "@material-ui/core/styles";

const AcceptButton = styled.button`
width: 123px;
height: 40px;
// margin: 45.5px 23px 333.5px 84px;
margin: 45.5px 23px 333.5px 348px;
padding: 11px 36px 10px 37px;
border-radius: 2px;
background-color: #00a0f0;
border: none;
font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  
  "@media (max-width:1024px) ": {
    margin-left: 169px
    }
`

const RejectButton = styled.button`
width: 123px;
height: 40px;
margin: 45.5px 1038px 333.5px 23px;
padding: 11px 39px 10px;
border-radius: 2px;
border: solid 1px #00a0f0;
background-color: #ffffff;
font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: normal;
  text-align: left;
  color: #00a0f0;
`

const MainHeading = styled.span`
width: 75px;
height: 22px;
margin: 21.5px 150px 34.5px 41px;
font-family: Roboto;
font-size: 18px;
font-weight: 500;
font-stretch: normal;
font-style: normal;
line-height: 1.22;
letter-spacing: normal;
text-align: left;
color: #26292c;
`
const OpenImage = styled.img`
  width: 40px;
  height: 40px;
  margin-left: -71px;
  margin-top: 13px;

`;
const CloseImage = styled.img`
  width: 40px;
  height: 40px;
  margin-left: -18px;
  margin-left: 2px;
  margin-top: 12px;
`;

const useStyles = makeStyles((theme) => ({

    acceptButton: {
        "@media (max-width:1024px)": {
            marginLeft: '169px',
        },

        "@media (max-width:768px)": {
            marginLeft: '0px',
        },

    },
    textHeadings: {
        width: '79px',
        height: '19px',
        // margin: '49.5px 118px 52px 69px',
        margin: '6.5px 118px 52px 69px',
        fontFamily: 'Roboto',
        fontSize: '16px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.75',
        letterSpacing: 'normal',
        textAlign: 'left',
        color: '#414141',

        "@media (max-width:1024px)": {
            margin: '6.5px 118px 52px 17px',
        },
    },

    root: {
        display: 'flex'
    },

    inputbox: {
        width: '390px',
        height: '50px',
        // margin: '34.5px 920px 36px 81px',
        // margin: '-8.5px 920px 36px 81px',
        padding: '15px 15px 16px 12px',
        borderRadius: '2px',
        border: 'solid 1px #d4d4d4',

        "@media (max-width:1024px)": {
            margin: '-8.5px 920px 36px -44px',
        },

        "@media (max-width:768px)": {
            margin: '45.5px 920px 36px -237px',
        },
    },

    // Classes After SideBar is Closed starts from here

    root_Closed: {
        display: 'flex'
    },

    textHeadings_Closed: {
        width: '79px',
        height: '19px',
        // margin: '49.5px 118px 52px 69px',
        margin: '6.5px 118px 52px 69px',
        fontFamily: 'Roboto',
        fontSize: '16px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.75',
        letterSpacing: 'normal',
        textAlign: 'left',
        color: '#414141',

        "@media (max-width:1024px)": {
            margin: '6.5px 118px 52px 98px',
        },
    },

    inputbox_Closed: {
        width: '550px',
        height: '50px',
        // margin: '34.5px 920px 36px 81px',
        // margin: '-8.5px 920px 36px 81px',
        padding: '15px 15px 16px 12px',
        borderRadius: '2px',
        border: 'solid 1px #d4d4d4',

        "@media (max-width:1024px)": {
            margin: '-8.5px 920px 36px -44px',
        },

        "@media (max-width:768px)": {
            margin: '45.5px 920px 36px -237px',
        },

    },

    acceptButton_Closed: {
        "@media (max-width:1024px)": {
            marginLeft: '169px',
        },

        "@media (max-width:768px)": {
            marginLeft: '0px',
        },

    },


}))

export default function RequestTableContent(props) {
    const classes = useStyles()
    console.log("props?.state?.selectedRequest?.owner?.firstName===", props?.state?.selectedRequest?.owner?.firstName)
    return (
        <div>
            {props.state.isOpen ? (
                <div className={classes.root}>
                    <Column>
                        <Row>
                            {props.state.isOpen ? (
                                <OpenImage
                                    src="/images/toggle_icon.svg"
                                    class="Group-6"
                                    onClick={() => {
                                        props.toggleImage();
                                    }}
                                ></OpenImage>
                            ) : (
                                <CloseImage
                                    className="closeimg"
                                    src="/images/toggle_icon.svg"
                                    onClick={() => {
                                        props.toggleImage();
                                    }}
                                />
                            )}
                            <MainHeading>Requests</MainHeading>

                        </Row>
                        <Box>
                            <Column>


                                <Row>
                                    <span className={classes.textHeadings}>First&nbsp;Name:</span>
                                    <input className={classes.inputbox}
                                           value={props?.state?.selectedRequest?.owner?.firstName || ''}
                                           disabled={true}/>
                                </Row>
                                <Row>
                                    <span className={classes.textHeadings}>Last&nbsp;Name:</span>
                                    <input className={classes.inputbox}
                                           value={props?.state?.selectedRequest?.owner?.lastName || ''}
                                           disabled={true}/>
                                </Row>
                                <Row>
                                    <span className={classes.textHeadings}>Email:</span>
                                    <input className={classes.inputbox}
                                           value={props?.state?.selectedRequest?.owner?.email || ''}
                                           disabled={true}/>
                                </Row>
                                <Row>
                                    <span className={classes.textHeadings}>Phone:</span>
                                    <input className={classes.inputbox}
                                           value={props?.state?.selectedRequest?.owner?.phone || ''}
                                           disabled={true}/>
                                </Row>
                                <Row>
                                    <span className={classes.textHeadings}>Company&nbsp;Name:</span>
                                    <input className={classes.inputbox}
                                           value={props?.state?.selectedRequest?.name || ''}
                                           disabled={true}/>
                                </Row>
                                <Row>
                                    <span className={classes.textHeadings}>Service:</span>
                                    <input className={classes.inputbox}
                                           value={props?.state?.selectedRequest?.clinicType || ''}
                                           disabled={true}/>
                                </Row>
                                <Row>
                                    <AcceptButton className={classes.acceptButton}
                                                  onClick={() => props.updateSelectedRequest('ACCEPT')}>
                                        Accept
                                    </AcceptButton>
                                    <RejectButton onClick={() => props.updateSelectedRequest('REJECTED')}>
                                        Reject
                                    </RejectButton>
                                </Row>
                            </Column>
                        </Box>
                    </Column>

                </div>
            ) : (
                <div className={classes.root_Closed}>
                    <Column>
                        <Row>
                            {props.state.isOpen ? (
                                <OpenImage
                                    src="/images/toggle_icon.svg"
                                    class="Group-6"
                                    onClick={() => {
                                        props.toggleImage();
                                    }}
                                />
                            ) : (
                                <CloseImage
                                    className="closeimg"
                                    src="/images/toggle_icon.svg"
                                    onClick={() => {
                                        props.toggleImage();
                                    }}
                                />
                            )}
                            <MainHeading>Requests</MainHeading>

                        </Row>
                        <Box>
                            <Column>


                                <Row>
                                    <span className={classes.textHeadings_Closed}>First&nbsp;Name:</span>
                                    <input className={classes.inputbox_Closed}
                                           value={props?.state?.selectedRequest?.owner?.firstName || ''}
                                           disabled={true}/>
                                </Row>
                                <Row>
                                    <span className={classes.textHeadings_Closed}>Last&nbsp;Name:</span>
                                    <input className={classes.inputbox_Closed}
                                           value={props?.state?.selectedRequest?.owner?.lastName || ''}
                                           disabled={true}/>
                                </Row>
                                <Row>
                                    <span className={classes.textHeadings_Closed}>Email:</span>
                                    <input className={classes.inputbox_Closed}
                                           value={props?.state?.selectedRequest?.owner?.email || ''} disabled={true}/>
                                </Row>
                                <Row>
                                    <span className={classes.textHeadings_Closed}>Phone:</span>
                                    <input className={classes.inputbox_Closed}
                                           value={props?.state?.selectedRequest?.owner?.phone || ''} disabled={true}/>
                                </Row>
                                <Row>
                                    <span className={classes.textHeadings_Closed}>Company&nbsp;Name:</span>
                                    <input className={classes.inputbox_Closed}
                                           value={props?.state?.selectedRequest?.name || ''} disabled={true}/>
                                </Row>
                                <Row>
                                    <span className={classes.textHeadings_Closed}>Service:</span>
                                    <input className={classes.inputbox_Closed}
                                           value={props?.state?.selectedRequest?.clinicType || ''} disabled={true}/>
                                </Row>
                                <Row>
                                    <AcceptButton className={classes.acceptButton_Closed}
                                                  onClick={() => props.updateSelectedRequest('ACCEPT')}>
                                        Accept
                                    </AcceptButton>
                                    <RejectButton onClick={() => props.updateSelectedRequest('REJECTED')}>
                                        Reject
                                    </RejectButton>
                                </Row>
                            </Column>
                        </Box>
                    </Column>
                </div>
            )}
        </div>

    )
}