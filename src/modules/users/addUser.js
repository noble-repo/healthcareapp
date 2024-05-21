import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Row, Column, bold } from "simple-flexbox";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  formControl: {
    margin: "0px 10px 0px 20px",
  },
  indicator: {
    backgroundColor: "white",
  },
  input: {
    width: "345px",
    height: "37px",
    marginLeft: "15px",
    marginRight: "15px",
    marginBottom: "10px",
    borderColor: "#bdbdbd",
    padding: "10px 10px 10px 10px",
    fontSize: "13px",
    border: "1px solid #b5b5b5",
    borderRadius: "2px",
  },

  divfixing: {
    position: "absolute",
    right: "0",
    marginRight: "18px",
    marginBottom: "0px",
  },
  para: {
    fontSize: "18px",
    fontWeight: "bolder",
    fontFamily: "roboto",
    marginTop: "6px",
    color: "#26292c",
  },
  dialogTitle: {
    paddingLeft: "18px",
  },
  btn: {
    backgroundColor: "#00a0f0",
    width: "338px",
    height: "38px",
    margin: "0px 2px 4px 20px",
    padding: "6px 0px 7px 0px",
    borderRadius: "2px",
    color: "white",
    fontSize: "12px",
    borderColor: "white",
    borderStyle: "none",
    " &:focus": {
      outline: "none",
      borderRadius: "5px",
      transition: "all 0.3s",
      border: "none",
    },
  },
  parafixing: {
    fontSize: "11px",
    color: "#414141",
    fontFamily: "Roboto !important",
    fontWeight: "500",
    paddingLeft: "18px",
    marginBottom: "0px",
    marginTop: "3px",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
  },
  lastPara: {
    fontSize: "11px",
    paddingLeft: "51px",
    color: "#8f8f8f",
  },
  img: {
    height: "26px",
    width: "26px",
  },
  scrollPaper: {
    alignItems: "baseline",
    marginTop: "0px",
  },
  margin: {
    marginTop: "0px",
    marginBottom: "180px",
  },
  icon: {
    borderRadius: 1,
    width: 15,
    height: 15,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "white",
  },

  checkedIcon: {
    backgroundColor: "white",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 15,
      height: 15,
      backgroundImage: 'url("images/Group 23.svg")',
      backgroundSize: "cover",
      content: '""',
    },
  },
  checkbox: {
    "&.MuiCheckbox-colorSecondary.Mui-checked": {
      color: "#00a0f0 !important",
    },
    transform: "scale(0.8)",
    marginRight: "0px",
  },
  rowStyle: {
    height: "60px",
  },
  stylediv: {
    fontSize: "12px !important",
  },
  formControlLabel: {
    marginRight: "0px",
    marginTop: "0px",
    marginBottom: "0px",
  },
}));
export default function AddUser(props) {
  const classes = useStyles();
  const Array = props.state.rows;
  const [state, setState] = React.useState({
    invite: false,
    add: false,
    schedule: false,
    billing: false,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const { invite, add, schedule, billing } = state;

  return (
    <div>
      <Dialog
        open={props.state.open}
        onClose={props.handleDialog}
        className="p-100"
        className={classes.margin}
      >
        <Row className={classes.rowStyle}>
          <DialogTitle className={classes.dialogTitle}>
            <p className={classes.para}>Add New User</p>
          </DialogTitle>
          <DialogActions>
            <div className={classes.divfixing}>
              <img
                src="/images/cross.svg"
                className={classes.img}
                onClick={props.handleDialog}
              />
            </div>
          </DialogActions>
        </Row>
        <Row>
          <input
            className={classes.input}
            type="text"
            variant="outlined"
            placeholder="Enter your name"
            name={"text"}
          />
        </Row>
        <Row>
          <input
            className={classes.input}
            type="email"
            variant="outlined"
            placeholder="Enter your email"
            name={"email"}
          />
        </Row>
        <Row>
          <input
            className={classes.input}
            type="text"
            variant="outlined"
            placeholder="Enter your role"
            name={"text"}
          />
        </Row>
        <Row>
          <p className={classes.parafixing}>Access level</p>
        </Row>

        <Row>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormGroup>
              <div className={classes.stylediv}>
                <FormControlLabel
                  className={classes.formControlLabel}
                  // style={{marginRight:"0px"}}
                  control={
                    <Checkbox
                      checked={add}
                      onChange={handleChange}
                      name="add"
                      className={classes.checkbox}
                      checkedIcon={
                        <span
                          className={clsx(classes.icon, classes.checkedIcon)}
                        />
                      }
                      icon={<span className={classes.icon} />}
                    />
                  }
                ></FormControlLabel>
                Add Patients
              </div>
              <div className={classes.stylediv}>
                <FormControlLabel
                  className={classes.formControlLabel}
                  control={
                    <Checkbox
                      checked={invite}
                      onChange={handleChange}
                      name="invite"
                      fontSize="small"
                      className={classes.checkbox}
                      checkedIcon={
                        <span
                          className={clsx(classes.icon, classes.checkedIcon)}
                        />
                      }
                      icon={<span className={classes.icon} />}
                    />
                  }
                ></FormControlLabel>
                Invite Users
              </div>
            </FormGroup>
          </FormControl>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormGroup>
              <div className={classes.stylediv}>
                <FormControlLabel
                  className={classes.formControlLabel}
                  control={
                    <Checkbox
                      checked={schedule}
                      onChange={handleChange}
                      name="schedule"
                      className={classes.checkbox}
                      checkedIcon={
                        <span
                          className={clsx(classes.icon, classes.checkedIcon)}
                        />
                      }
                      icon={<span className={classes.icon} />}
                    />
                  }
                ></FormControlLabel>
                Schedule Surgeries
              </div>
              <div className={classes.stylediv}>
                <FormControlLabel
                  className={classes.formControlLabel}
                  control={
                    <Checkbox
                      checked={billing}
                      onChange={handleChange}
                      name="billing"
                      className={classes.checkbox}
                      checkedIcon={
                        <span
                          className={clsx(classes.icon, classes.checkedIcon)}
                        />
                      }
                      icon={<span className={classes.icon} />}
                    />
                  }
                ></FormControlLabel>
                Billing Info
              </div>
            </FormGroup>
          </FormControl>
        </Row>

        <Row>
          <button className={classes.btn}>Invite User</button>
        </Row>
        <p className={classes.lastPara}>
          User will get an email to setup account on H3A health
        </p>
      </Dialog>
    </div>
  );
}
