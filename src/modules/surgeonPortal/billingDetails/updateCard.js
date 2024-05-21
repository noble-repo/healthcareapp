import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Row, Column } from "simple-flexbox";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  indicator: {
    backgroundColor: "white",
  },
  divfixing: {
    position: "absolute",
    right: "0",
    marginRight: "18px",
  },
  dialogTitle: {
    fontSize: "18px",
    fontWeight: "bolder",
    fontFamily: "roboto",
    marginTop: "10px",
    paddingLeft: "12px !important",
    color: "#26292c",
  },
  input: {
    width: "325px",
    height: "35px",
    marginLeft: "10px",
    marginRight: "10px",
    border: "1px solid #b5b5b5",
    borderRadius: "2px",
  },
  inputdate: {
    width: "155px",
    height: "35px",
    marginLeft: "10px",
    marginRight: "5px",
    marginTop: "15px",
    border: "1px solid #b5b5b5",
    borderRadius: "2px",
  },
  inputcvv: {
    width: "155px",
    height: "35px",
    marginLeft: "10px",
    marginRight: "10px",
    marginTop: "15px",
    border: "1px solid #b5b5b5",
    borderRadius: "2px",
  },
  btn: {
    width: "325px",
    marginLeft: "10px",
    marginRight: "10px",
    marginTop: "20px",
    height: "35px",
    backgroundColor: "#00a0f0",
    color: "#ffffff",
    borderStyle: "none",
    border: "solid 1px #00a0f0",
    borderRadius: "2px",
    fontSize: "16px",
    "&:focus":{
      outline:"none",
  borderRadius: "5px",
  transition: "all 0.3s",
      border:"none",
      }
  },
  parafixing: {
    fontSize: "10px",
    color: "#8f8f8f",
  },
  img: {
    height: "11px",
    marginRight: "6px",
  },
  rowfixing: {
    justifyContent: "center",
    marginTop: "8px",
  },
  dialog: {
    paddingLeft: "0px !important",
    paddingBottom: "2px",
  },
  image: {
    height: "20px",
  },
  scrollPaper: {
    alignItems: "baseline",
  },
}));

export default function UpdateCard(props) {
  const classes = useStyles();

  return (
    <div>
      <Dialog
        open={props.state.update}
        onClose={props.updateCard}
        className="p-100"
        classes={{ scrollPaper: classes.scrollPaper }}
      >
        <Row>
          <DialogTitle className={classes.dialog}>
            <p className={classes.dialogTitle}>Update Card Details</p>
          </DialogTitle>
          <DialogActions>
            <div className={classes.divfixing}>
              <img
                src="../images/cross.svg"
                className={classes.image}
                onClick={props.updateCard}
              />
            </div>
          </DialogActions>
        </Row>
        <Row>
          <input
            className={classes.input}
            type="Email"
            variant="outlined"
            placeholder="16 digits credit card number"
            name={"email"}
          />
        </Row>
        <Row>
          <Column>
            <input
              className={classes.inputdate}
              type="Email"
              variant="outlined"
              placeholder="Expiry date (mm/yy)"
              name={"email"}
            />
          </Column>
          <Column>
            <input
              className={classes.inputcvv}
              type="Email"
              variant="outlined"
              placeholder="CVV/CVC"
              name={"email"}
            />
          </Column>
        </Row>
        <Row>
          <button className={classes.btn}>Update Details</button>
        </Row>
        <Row className={classes.rowfixing}>
          <img src="/images/lock icon.svg" className={classes.img} />
          <p className={classes.parafixing}>
            {" "}
            This is a secure 128-SSL encrypted connection
          </p>
        </Row>
      </Dialog>
    </div>
  );
}
