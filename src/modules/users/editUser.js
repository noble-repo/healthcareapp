import React from "react";
// import Button from "@material-ui/core/Button";
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

const Input = styled.input`
  width: 345px;
  height: 37px;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 10px;
  bordercolor: #bdbdbd;
  padding: 10px 10px 10px 10px;
  font-size: 13px;
  border: 1px solid #b5b5b5;
  border-radius: 2px;
  background-color: #fafafa;
  &:focus{
    outline:none;
border-radius: 5px;
transition: all 0.3s;
border-color:#b5b5b5;

    // border:none;
    }
`;
const AdminInput = styled.input`
  width: 345px;
  height: 37px;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 10px;
  padding: 10px 10px 10px 10px;
  font-size: 13px;
  border: 1px solid #b5b5b5;
  border-radius: 2px;
  &:focus{
    outline:none;
border-radius: 5px;
transition: all 0.3s;
    // border:none;
    border-color:#b5b5b5;
    }
`;

const Para = styled.p`
  font-size: 11px;
  color: #00a0f0;
  font-weight: bold;
`;
const Button = styled.button`
  background-color: #00a0f0;
  width: 338px;
  height: 38px;
  margin: 5px 2px 5px 20px;
  padding: 6px 0px 7px 0px;
  border-radius: 2px;
  color: white;
  font-size: 12px;
  border-color: white;
  border-style: none;
  &:focus {
    outline: none;
    border-radius: 5px;
    transition: all 0.3s;
    border: none;
  }
`;

const Title = styled.p`
  font-size: 13px;
  font-weight: bolder;
  font-family: roboto;
  margin-top: 10px;
`;

const Level = styled.p`
  font-size: 10px;
  color: #414141;
  font-family: Roboto !important;
  font-weight: 500 !important;
  padding-left: 18px;
  margin-bottom: 0px;
  margin-top: 3px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  lette-spacing: normal;
`;

const Cross = styled.div`
  position: absolute;
  right: 0;
  margin-right: 18px;
  margin-bottom: 0px;
`;

const Image = styled.img`
  height: 20px;
`;

const Option = styled.div`
  font-size: 12px !important;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  indicator: {
    backgroundColor: "white",
  },
  formControl: {
    margin: "0px 10px 0px 20px",
  },

  checkBox: {
    backgroundColor: "white",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 10,
      height: 10,
      backgroundImage: 'url("images/blue-check.svg")',
      backgroundSize: "cover",
      content: '""',
    },
  },

  dialogTitle: {
    paddingLeft: "18px",
    paddingBottom: "0px",
  },

  scrollPaper: {
    alignItems: "baseline",
  },
  image: {
    height: "75px",
    borderRadius: "50%",
    marginBottom: "20px",
  },
  rowfixing: {
    justifyContent: "center",
  },
  selectFixing: {
    border: "2px solid #b5b5b5",
    width: "345px",
    height: "37px",
    marginLeft: "15px",
    marginRight: "15px",
    marginBottom: "10px",
    padding:"3px 0px 3px 7px",
    fontSize: "13px",
   "&:focus":{
      borderColor:"#b5b5b5",
      outline:"none",
  borderRadius:"5px",
  transition:"all 0.3s"
      }
  },
  formGroup: {
    marginBottom: "0px",
  },
  margin: {
    marginTop: "0px",
    marginBottom: "30px",
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
      backgroundImage: 'url("images/checkbox.svg")',
      backgroundSize: "cover",
      content: '""',
    },
  },
  checkbox: {
    "&.MuiCheckbox-colorSecondary.Mui-checked": {
      color: "#00a0f0 !important",
    },
    transform: "scale(0.8)",
  },

  formControlLabel: {
    marginRight: "0px",
    marginTop: "0px",
    marginBottom: "0px",
  },
}));
export default function EditUser(props) {
  const classes = useStyles();

  const [state, setState] = React.useState({
    invite: false,
    add: true,
    schedule: false,
    billing: true,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const { invite, add, schedule, billing } = state;

  return (
    <div>
      <Dialog
        open={props.state.openEdit}
        onClose={props.handleEditDialog}
        className="p-100"
        className={classes.margin}
      >
        <Row className={classes.styleRow}>
          <DialogTitle className={classes.dialogTitle}>
            <Title> Edit User Information</Title>
          </DialogTitle>
          <DialogActions>
            <Cross>
              <Image
                src="/images/cross.svg"
                onClick={props.handleEditDialog}
              ></Image>
            </Cross>
          </DialogActions>
        </Row>
        <Row className={classes.rowfixing}>
          <img src="/images/profile.jpg" className={classes.image} />
        </Row>

        <Input
          type="text"
          variant="outlined"
          value={props.state.name}
          name={"email"}
        ></Input>

        <Input
          type="text"
          variant="outlined"
          value={props.state.email}
          name={"email"}
        ></Input>

        <AdminInput
          type="text"
          variant="outlined"
          value={props.state.admin}
          name={"email"}
        ></AdminInput>

        <select class="ui dropdown" className={classes.selectFixing}>
          <option value="">Active</option>
        </select>

        <Level>Access level</Level>

        <Row>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormGroup>
              <Option>
                <FormControlLabel
                  className={classes.formControlLabel}
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
              </Option>

              <Option>
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
              </Option>
            </FormGroup>
          </FormControl>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormGroup>
              <Option>
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
              </Option>
              <Option>
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
              </Option>
            </FormGroup>
          </FormControl>
        </Row>

        <Button>Update User Account</Button>
        <Row className={classes.rowfixing}>
          <Para>Reset Password</Para>
        </Row>
      </Dialog>
    </div>
  );
}
