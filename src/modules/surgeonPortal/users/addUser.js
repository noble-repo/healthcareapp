import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import {Row, Column, bold} from "simple-flexbox";
import styled from "styled-components";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import clsx from "clsx";
import {Auth0RoleNameConstants} from "../../../constants";

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
        backgroundColor: "#00a0f0",
        // width: "338px",
        // height: "38px",
        width: "466px",
        height: "50px",
        margin: "38px 2px 4px 10px",
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
export default function AddUser(props) {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
    return (
        <div>
            <Dialog
                open={props.state.open}
                onClose={props.handleDialog}
                className={classes.margin}
            >
                <Row className={classes.rowStyle}>
                    <DialogTitle className={classes.dialogTitle}>
                        <p className={classes.para}>Add New User</p>
                    </DialogTitle>
                    <DialogActions>
                        <div className={classes.divfixing}>
                            <img src="/images/cross.svg" className={classes.img} onClick={props.handleDialog}/>
                        </div>
                    </DialogActions>
                </Row>
                <Row>
                    <input className={classes.input} type="text" variant="outlined" value={props.state.name}
                           placeholder="Enter your name" name={"name"}
                           onChange={(event) => props.handleFieldChange(event)}/>
                </Row>
                <div className="fc-red fs-14 py-1 pl-3">{props.state.nameError}</div>
                <Row>
                    <input className={classes.input} type="email" variant="outlined" value={props.state.email}
                           placeholder="Enter your email" name={"email"}
                           onChange={(event) => props.handleFieldChange(event)}/>
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
                    <p className={classes.parafixing}>Access level</p>
                </Row>
                <Row>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormGroup>
                            <CheckBoxComponent name={'addPatient'} value={props.state.addPatient}
                                            checked={checked}  color="primary" onChange={handleChange}
                                            labelText={'Add Patients'} handleFieldChange={props.handleFieldChange}/>
                            <CheckBoxComponent name={'inviteUser'} value={props.state.inviteUser} defaultChecked
                                               labelText={'Invite Users'} handleFieldChange={props.handleFieldChange}/>
                        </FormGroup>
                    </FormControl>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormGroup>
                            <CheckBoxComponent name={'scheduleSurgery'} value={props.state.scheduleSurgery}
                                               labelText={'Schedule Surgeries'}
                                               handleFieldChange={props.handleFieldChange}/>
                            <CheckBoxComponent name={'billing'} value={props.state.billing}
                                               labelText={'Billing Info'} handleFieldChange={props.handleFieldChange}/>
                        </FormGroup>
                    </FormControl>
                </Row>

                <Row>
                    <button className={classes.btn} onClick={()=>props.inviteUser()}>Invite User</button>
                </Row>
                <p className={classes.lastPara}>
                    User will get an email to setup account on H3A health
                </p>
            </Dialog>
        </div>
    );
}

export function CheckBoxComponent(props) {
    const classes = useStyles();
    const {name, value, labelText} = props

    return (<div className={classes.stylediv}>
            <FormControlLabel
                className={classes.formControlLabel}
                value={value}
                control={
                    <Checkbox
                        checked={value}
                        onChange={() => props.handleFieldChange({
                            target: {
                                name: `${name}`,
                                value: !value
                            }
                        })} name={name}
                        className={classes.checkbox}
                        icon={<span className={classes.icon}/>}
                    />
                }
            />
            {labelText}
        </div>

    )

}