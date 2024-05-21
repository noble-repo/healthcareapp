import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";
import { InputBase } from "@material-ui/core";
import Modal from "react-modal";
import { Column,Row } from "simple-flexbox";
import { SwipeableDrawer } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import VirtualChatHistory from '../virtualChatHistory'
import io from 'socket.io-client';
import { v1 as uuid } from "uuid";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "690px",
    height: "500%",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    ["@media (max-width:768px)"]: {
      width: "729px",
      height: "563%",
    },
  },

  vcallDiv: {
    width: "100%",
    height: "90%",
    backgroundColor: "#fff",
    // ["@media (max-width:768px)"]: {
    //   marginTop:"200px",
    // },
  },
  input: {
    width: "100%",
  },
  vcallScreen: {
    width: "100%",
    height: "75%",
    backgroundColor: "#6d6d6d",
    ["@media (max-width:768px)"]: {
      marginLeft:"-700px",
      marginTop:"100px",
      height: "52%",
    },
  },
  partnerVideoScreen: {
    position: "absolute !important",
    width: "45%",
    height: "75%",
    /*marginTop: "17px",
    marginBottom: "34.7px",
    paddingTop: "20px",
    paddingRight: "15px",
    paddingBottom: "64px",
    paddingLeft: "24px",*/
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  localVideoScreen: {
    position: "absolute !important",
    borderRadius: "2px",
    backgroundColor: "#d8d8d8",
    top: "100px",
    right: "150px",
    marginBottom: "178px",
    marginLeft: "215px",
    width: "80px",
    height: "80px",
    ["@media (max-width:768px)"]: {
      marginLeft:"-700px",
      marginTop:"100px",
      right: "20px",
    },
  },
  image:{
    position: "absolute !important",
    paddingRight:"20px",
    ["@media (max-width:768px)"]: {
      marginLeft:"-778px"
    },
  },
  cameraAlign:{
    position: "absolute !important",
    marginLeft:"-70px",
    paddingRight:"20px",
    ["@media (max-width:768px)"]: {
      marginLeft:"-848px"
    },
  },
  mic: {
    position: "absolute !important",
    marginLeft:"70px",
    ["@media (max-width:768px)"]: {
      marginLeft: "-708px"
    },
  },
  chatAlign:{
    display:"none",
    paddingLeft:"20px",
    ["@media (max-width:768px)"]: {
      display:"flex"
    },
  },
  data:{
    position:"absolute !important",
    bottom:"80px !important",
    marginLeft:"20px"
    
  },
 
  modalDiv: {
    height: "60px",
    width: "50px",
    marginLeft: "50%",
   
  },
  cross:{
   width:"20px",
   height:"20px",
   marginTop:"20px",
   position:"absolute !important",
   right:"10px !important"
  },
  modal: {
    marginLeft: "440px",
    marginTop: "90px",
    backgroundColor: "#fff",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    height: "311px",
    width: "502px",
    "&:focus": {
      outline: "none",
      borderRadius: "5px",
      transition: "all 0.3s",
      border: "none",
    },
    ["@media (max-width:768px)"]: {
    marginLeft: "140px",
    // marginTop: "50px",
      
    },
  },
  buttonDiv: {
    marginTop: "-100px",
    cursor: "pointer",
  },
  rightArrow: {
    height: "10px",
    width: "8px",
  },
  skip: {
    marginTop: "50px",
    fontSize: "15px",
    color: "#414141",
    cursor: "pointer",

  fontFamily:"Roboto !important",
  textAlign: "center",
  },
  content: {
    marginTop: "10px",
    fontFamily: "roboto !important",
    fontSize: "22px",
    fontWeight: "500",
    color: " #26292c",
  },
  Surgerycontent: {
    fontFamily: "roboto !important",
    fontSize: "22px",
    fontWeight: "500",
    color: " #26292c",
  },
  date:{
    width:"94px",
  height: "15.9px",
  flexGrow:"0",
  // margin: 609.5px 125px 11.1px 20px;
  marginBottom:"50px",
  fontFamily:"Roboto",
  fontSize:"13px",
  fontWeight:"normal",
  fontStretch:"normal",
  fontStyle:"normal",
  lineHeight:"normal",
  letterSpacing:"normal",
  textAlign:"left",
  color:"#979696",
  },
  patrice:{
  width:"80px",
  height:"29.6px",
  flexGrow: "0",
  margin: "0 6px 16.9px 10.2px",
  fontFamily:"Roboto",
  fontSize:"14px",
  fontWeight: "500",
  fontStretch:"normal",
  fontStyle:"normal",
  lineHeight:"2",
  letterSpacing:"normal",
  textAlign:"left",
  color:"#414141",

  },
  message:{
    width:"425px",
    height:"20.1px",
    flexGrow: "0",
    fontFamily:"Roboto",
    fontSize:"16px",
    fontWeight: "normal",
    fontStretch:"normal",
    fontStyle:"normal",
    lineHeight:"normal",
    letterSpacing:"normal",
    textAlign:"left",
    color: "#181c1b",
    marginTop:"-20px",
    paddingLeft:"12px",
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
    ["@media (max-width:768px)"]: {
      display:"none",
    },
  },
  inputBox:{
    display: "flex",
    fontSize: "12px",
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "#d4d4d4",
    width: "94%",
    height: "50px",
    marginLeft:"20px",
    padding: "10px",
    position:"absolute !important",
    bottom:"20px !important"
    
  },
  imageStyle:{
    width:"97px",
    height:"97px",
    marginTop:"40px"
    
  },
  paper: {
    display:"none",
    opacity:0,
    ["@media (max-width:768px)"]:{
      height: "100vh",
      width:"630px",
      display:"flex",
      opacity:1,
    },
},
// drawer: {
//   background:"none",
//   ["@media (max-width:768px)"]:{
//     background:"rgba(0,0,0,0.5)",
//   },
// },
}));

export default function VideoScreen(props) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const userVideo = React.useRef();
  const partnerVideo = React.useRef();
  const peerRef = React.useRef();
  const socketRef = React.useRef();
  const otherUser = React.useRef();
  const userStream = React.useRef();

  // React.useEffect(() => {
  //   navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then(stream => {
  //       userVideo.current.srcObject = stream;
  //       userStream.current = stream;

  //       socketRef.current = io.connect("/");
  //       const roomId = window.location.pathname.split("/")
  //       socketRef.current.emit("join room", roomId[2] /*props.match.params.roomID*/);

  //       socketRef.current.on('other user', userID => {
  //           callUser(userID);
  //           otherUser.current = userID;
  //       });

  //       socketRef.current.on("user joined", userID => {
  //           otherUser.current = userID;
  //       });

  //       socketRef.current.on("offer", handleRecieveCall);

  //       socketRef.current.on("answer", handleAnswer);

  //       socketRef.current.on("ice-candidate", handleNewICECandidateMsg);
  //   });
  // });

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

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.vcallDiv}>
        <div className={classes.vcallScreen}>
          {/* <video autoPlay ref={partnerVideo} className={classes.partnerVideoScreen} />
          <video autoPlay ref={userVideo} className={classes.localVideoScreen} /> */}
          <iframe src={props.url} width="100%" height="100%" allow="camera; microphone;" />
        </div>
        <div className={classes.modalDiv}>
          <div className={classes.buttonDiv}>
            {/* <Row>
              <img src="images/Group 38 (1).svg" class="Group-38" className={classes.cameraAlign}/>
              <img src="endCall.svg" onClick={() => setModalIsOpen(true)} className={classes.image}/>
              <img src="images/Group 37 (1).svg" class="Group-37" className={classes.mic}/>
              <img src="images/Group 60.svg" class="Group-60" className={classes.chatAlign} onClick={toggleDrawer("right", true)}/>
            </Row> */}
            <Modal
              style={{
                overlay: {
                  backgroundColor: "rgba(24, 28, 27, 0.1)",
                  borderColor: "#fff",
                },
              }}
              isOpen={modalIsOpen}
              className={classes.modal}
            >
              <div className={classes.content}>
                Does this patient has clearance for
              </div>
              <div className={classes.Surgerycontent}>surgery?</div>
              <div>
                <img className={classes.imageStyle} src="no.svg" />
                <img className={classes.imageStyle} src="yes.svg" />
              </div>
              <div
                className={classes.skip}
                onClick={() => setModalIsOpen(false)}
              >
                skip for now{" "}
                <img className={classes.rightArrow} src="rightArrow.svg" />
              </div>
            </Modal>
          </div>
        </div>
      </div>

      <div>
        <InputBase
          className={classes.textbox}
          placeholder="Type your message here"
          endAdornment={<SendIcon opacity="0.8" />}
        />
      </div>
      
      <SwipeableDrawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
        onOpen={toggleDrawer("right", true)}
        classes={{ paper: classes.paper }}
      >
         <img src="images/cross.svg" className={classes.cross} />
         {/* <Column className={classes.data}>
         <span className={classes.date}>15th&nbsp;March,&nbsp;2021</span>
         <Row>
         <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
         
           <Column>
           <span className={classes.patrice}>
            Patrice page
           </span>
           <span className={classes.message}>
             I have been  having bad headaches for last 3 days
           </span>
           </Column>
         </Row> 
        
         </Column>
         <InputBase 
          className={classes.inputBox}
          placeholder="Type your message here"
          endAdornment={<SendIcon opacity="0.8" />}
        /> */}
        <VirtualChatHistory style={{position:"absolute",bottom:"10px"}}/>
      </SwipeableDrawer>
    </div>
  );
}
