import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Row } from 'react-bootstrap';
import { InputBase } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import io from 'socket.io-client';
import { useParams } from 'react-router';

const uStyles = makeStyles((theme) => ({
    root: {
        position: "absolute !important",
        width: "1281px",
        height: "1047px",
        //marginTop: "17px",
        paddingTop: "1px",
        paddingRight: "2px",
        //paddingBottom: "63px",
        top: "103px",
        ["@media (max-width:768px)"]: {
            width: "729px",
            height: "563%",
        },
    },
    button: {
        cursor: "pointer",
    },
    cameraAlign: {
        position: "absolute !important",
        width: "54px",
        height: "54px",
        marginRight: '15px',
        /*paddingTop: "15px",
        paddingRight: "14px",
        paddingBottom: "15px",
        paddingLeft: "15px",*/
        borderRadius: "50%",
        top: "930px",
        left: "565px",
        backgroundColor: "#ffffff",
    },
    callCut: {
        position: "absolute !important",
        width: "54px",
        height: "54px",
        marginRight: "32px",
        marginLeft: "27px",
        /*paddingTop: "11px",
        paddingRight: "8px",
        paddingBottom: "5px",
        paddingLeft: "8px",*/
        borderRadius: "50%",
        top: "930px",
        left: "646px",
        backgroundColor: "#e02020",
    },
    mic: {
        position: "absolute !important",
        width: "54px",
        height: "54px",
        marginLeft: "32px",
        /*paddingTop: "15px",
        paddingRight: "17px",
        paddingBottom: "16px",
        paddingLeft: "17px",*/
        borderRadius: "50%",
        top: "930px",
        left: "732px",
        backgroundColor: "#ffffff",
    },
    userVideo: {
        position: "absolute !important",
        width: "140px",
        height: "140px",
        marginTop: "22px",
        marginRight: "14px",
        marginBottom: "765px",
        marginleft: "299px",
        top: "8px",
        left: "1125px",
        backgroundColor: "#d8d8d8",
        ["@media (max-width:768px)"]: {
            marginLeft:"-550px",
            marginTop:"20px",
            right: "20px",          
        },
    },
    partnerVideo:{
        position: "absolute !important",
        width: "1281px",
        height: "1047px",
        backgroundColor: "#6d6d6d",
        ["@media (max-width:768px)"]: {
            width: "729px",
            height: "563%",
        },
    },
    chatName: {
        position: "absolute !important",
        width: "42px",
        height: "19px",
        marginTop: "14px",
        marginRight: "4px",
        marginBottom: "807px",
        //marginLeft: "26px",
        fontFamily: "Roboto",
        fontSize: "16px",
        fontWeight: "500",
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: "normal",
        letterSpacing: "normal",
        left: "1307px",
        top: "8px",
        color: "#222222",
    },
    chatDiv: {
        position: "absolute !important",
        width: "639px",
        height: "91px",
        marginTop: "27px",
        paddingBottom: "16px",
        left: "1281px",
        bottom: "0px",
        backgroundColor: "#f5f8ff",
    },
    chatBox: {
        width: "607px",
        height: "54px",
        marginTop: "20px",
        marginRight: "16px",
        marginLeft: "16px",
        paddingTop: "16px",
        paddingRight: "24px",
        paddingBottom: "17px",
        paddingLeft: "21px",
        borderRadius: "2px",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "#dddddd",
        backgroundColor: "#ffffff",
    },
    textbox: {
        display: "flex",
        fontSize: "12px",
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "#d4d4d4",
        width: "100%",
        height: "50px",
        padding: "10px",
        cursor: "text",
        ["@media (max-width:768px)"]: {
          display:"none",
        },
    },
    sendButton: {
        width: "21px",
        height: "21px",
        marginLeft: "368px",
        color: "#d4d4d4",
        cursor: "pointer",
    }
}));

export default function PatientMeeting(props) {

    const userVideo = React.useRef();
    const partnerVideo = React.useRef();
    const peerRef = React.useRef();
    const socketRef = React.useRef();
    const otherUser = React.useRef();
    const userStream = React.useRef();
    

    React.useEffect(() => {
        navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then(stream => {
            userVideo.current.srcObject = stream;
            userStream.current = stream;

            socketRef.current = io.connect("/");
            const id = window.location.pathname.split("/")
            socketRef.current.emit("join room", id[2] /*props.match.params.roomID*/);

            socketRef.current.on('other user', userID => {
                callUser(userID);
                otherUser.current = userID;
            });

            socketRef.current.on("user joined", userID => {
                otherUser.current = userID;
            });

            socketRef.current.on("offer", handleRecieveCall);

            socketRef.current.on("answer", handleAnswer);

            socketRef.current.on("ice-candidate", handleNewICECandidateMsg);
        });
    });

    function callUser(userID) {
        peerRef.current = createPeer(userID);
        
        userStream.current.getTracks().forEach(track => peerRef.current.addTrack(track, userStream.current));
    }

    function createPeer(userID) {
        const peer = new RTCPeerConnection({
        iceServers: [
            {
            urls: "stun:stun.stunprotocol.org"
            },
            {
            urls: 'turn:numb.viagenie.ca',
            credential: 'muazkh',
            username: 'webrtc@live.com'
            },
        ]
    });

        peer.onicecandidate = handleICECandidateEvent;
        peer.ontrack = handleTrackEvent;
        peer.onnegotiationneeded = () => handleNegotiationNeededEvent(userID);

        return peer;
    }

    function handleNegotiationNeededEvent(userID) {
        peerRef.current.createOffer().then(offer => {
            return peerRef.current.setLocalDescription(offer);
        }).then(() => {
            const payload = {
            target: userID,
            caller: socketRef.current.id,
            sdp: peerRef.current.localDescription
            };
            socketRef.current.emit("offer", payload);
        }).catch(e => console.log(e));
    }

    function handleRecieveCall(incoming) {
        peerRef.current = createPeer();
        const desc = new RTCSessionDescription(incoming.sdp);
        peerRef.current.setRemoteDescription(desc).then(() => {
            userStream.current.getTracks().forEach(track => peerRef.current.addTrack(track, userStream.current));
        }).then(() => {
            return peerRef.current.createAnswer();
        }).then(answer => {
            return peerRef.current.setLocalDescription(answer);
        }).then(() => {
            const payload = {
            target: incoming.caller,
            caller: socketRef.current.id,
            sdp: peerRef.current.localDescription
            }
            socketRef.current.emit("answer", payload);
        })
    }

    function handleAnswer(message) {
        const desc = new RTCSessionDescription(message.sdp);
        peerRef.current.setRemoteDescription(desc).catch(e => console.log(e));
        }

        function handleICECandidateEvent(e) {
        if (e.candidate) {
            const payload = {
            target: otherUser.current,
            candidate: e.candidate,
            }
            socketRef.current.emit("ice-candidate", payload);
        }
    }

    function handleNewICECandidateMsg(incoming) {
        const candidate = new RTCIceCandidate(incoming);
        peerRef.current.addIceCandidate(candidate)
            .catch(e => console.log(e));
    }

    function handleTrackEvent(e) {
    partnerVideo.current.srcObject = e.streams[0];
    }
    
    const classes = uStyles();
    return (
        <div className={classes.root}>
            <video autoPlay ref={partnerVideo} className={classes.partnerVideo} />
            <video autoPlay ref={userVideo} className={classes.userVideo} />
            <div className={classes.button}>
                <Row>
                    <img src="images/Group 38 (1).svg" class="Group-38" className={classes.cameraAlign}/>
                    <img src="images/endCall.svg" className={classes.callCut}/>
                    <img src="images/Group 37 (1).svg" class="Group-37" className={classes.mic}/>
                </Row>
            </div>
            <div className={classes.chatName}>
                CHAT
            </div>
            <div className={classes.chatDiv}>
                <InputBase
                    className={classes.chatBox}
                    placeholder="Type your message here"
                    endAdornment={<SendIcon opacity="0.8" className={classes.sendButton} />}
                />
            </div>
        </div>
    )
}
