import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Row, Column, bold } from "simple-flexbox";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import { Auth0RoleNameConstants } from "../../../constants";
import { CheckBoxComponent } from "./addUser";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Utility from "../../../utility";
import clsx from "clsx";
import Avatar from "@material-ui/core/Avatar";

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

const Cross = styled.div`
  position: absolute;
  right: 0;
  margin-right: 18px;
  margin-bottom: 0px;
`;

const Image = styled.img`
  height: 20px;
`;


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
        width: "460px !important",
        height: "50px !important",
        marginLeft: "15px",
        marginRight: "15px",
        marginBottom: "5px",
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
        justifyContent: "center",
        backgroundColor: "#00a0f0",
        // width: "338px",
        // height: "38px",
        width: "466px",
        height: "50px",
        margin: "38px 2px 4px 10px",
        padding: "6px 0px 7px 0px",
        borderRadius: "2px",
        color: "white",
        fontSize: "14px",
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
        fontSize: "14px",
        color: "#414141",
        fontFamily: "Roboto !important",
        fontWeight: "500",
        paddingLeft: "18px",
        marginBottom: "0px",
        marginTop: "15px !important",
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: "normal",
        letterSpacing: "normal",
    },
    lastPara: {
        fontSize: "14px",
        fontFamily: "Roboto",
        fontWeight: "normal",
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: "normal",
        letterSpacing: "normal",
        color: "#8f8f8f",
        paddingLeft: "51px",
        marginTop: "21px",
        marginBottom: "23px !important",
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
        fontSize: "16px !important",
        fontFamily: "Roboto",
        color: "#414141",
    },
    formControlLabel: {
        marginRight: "0px",
        marginTop: "0px",
        marginBottom: "0px",
    },
}));


export default function EditUser(props) {
    const classes = useStyles();

    return (
        <div>
            <Dialog
                open={props.state.openEdit}
                onClose={props.handleEditDialog}
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
                                onClick={() => props.handleEditDialog({})}
                            />
                        </Cross>
                    </DialogActions>
                </Row>
                <Row className="justify-content-center pb-3 pt-2">
                    <Avatar style={{ width: '100px', height: "100px" }}
                        src={props.state.picture || "/images/profile.jpg"} />
                </Row>
                <Row>
                    <input className={classes.input} type="text" variant="outlined" value={props.state.name}
                        placeholder="Enter your name" name={"name"}
                        onChange={(event) => props.handleFieldChange(event)} />
                </Row>
                <div className="fc-red fs-14 py-1 pl-3">{props.state.nameError}</div>
                <Row>
                    <input className={classes.input} type="email" variant="outlined" value={props.state.email}
                        placeholder="Enter your email" name={"email"} disabled={true}
                        onChange={(event) => props.handleFieldChange(event)} />
                </Row>
                <div className="fc-red fs-14 py-1 pl-3">{props.state.emailError}</div>

                <Row>
                    <select onChange={(event) => props.handleSelectChange(event, 'role')}
                        className={classes.input} value={props.state.role || ''}>
                        <option value={''}>Select Role</option>
                        <option value={Auth0RoleNameConstants.SURGEON}>{'Clinic Admin'}</option>
                        <option value={Auth0RoleNameConstants.SUB_SURGEON}>{'Assistant'}</option>

                    </select>
                </Row>
                <div className="fc-red fs-14 py-1 pl-3">{props.state.roleError}</div>
                <Row>
                    <select onChange={(event) => props.handleSelectChange(event, 'isActive')}
                        className={classes.input} value={props.state.isActive || false}>
                        <option value={true}>{'Active'}</option>
                        <option value={false}>{'InActive'}</option>

                    </select>
                </Row>
                <Row>
                    <p className={classes.parafixing}>Access level</p>
                </Row>
                <Row>

                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormGroup >
                            <CheckBoxComponent name={'addPatient'} value={props.state.addPatient}

                                labelText={'Add Patients'} handleFieldChange={props.handleFieldChange} />
                            <CheckBoxComponent name={'inviteUser'} value={props.state.inviteUser}
                                labelText={'Invite Users'} handleFieldChange={props.handleFieldChange} />
                        </FormGroup>
                    </FormControl>

                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormGroup>
                            <CheckBoxComponent name={'scheduleSurgery'} value={props.state.scheduleSurgery}
                                labelText={'Schedule Surgeries'}
                                handleFieldChange={props.handleFieldChange} />
                            <CheckBoxComponent name={'billing'} value={props.state.billing}
                                labelText={'Billing Info'} handleFieldChange={props.handleFieldChange} />
                        </FormGroup>
                    </FormControl>
                </Row>
                <Row className={classes.btn}>
                    <Button onClick={() => props.updateUser()}>Update User Account</Button>
                </Row>
                <Row className="justify-content-center pb-3 pt-2" onClick={() => Utility.showUnderDevelopment()}>
                    <Para>Reset Password</Para>
                </Row>
            </Dialog>
        </div>
    );
}
