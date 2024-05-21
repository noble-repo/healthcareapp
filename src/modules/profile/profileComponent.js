import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import HeaderComponent from "./header";
import styled from "styled-components";
import "semantic-ui-css/semantic.min.css";
import {Select} from "semantic-ui-react";
import {Auth0RoleNameConstants} from "../../constants";
import DatePicker from "../../common/components/DatePicker";
import moment from "moment";

const Card = styled.div`
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 449px;
  //height: 714px;
  margin-bottom: 256px;
  padding: 23px 30px 45px 29px;
  border-radius: 4px;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.05);
  border: solid 1px #e5e5e5;
  background-color: white;
  margin-top: 70px;
  
  @media  (max-width:1024px) and (min-width: 768px) {
    text-align: center;
    position: center;
    width: 280px;
    height: 590px;
  padding: 23px 30px 45px 20px;


  }
`;
const Header = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: 500 !important;
  font-family: Roboto !important;
  color: #26292c;
  @media (max-width: 1000px) {
    text-align: center;
    position: center;
    font-size: 11px;
  }
`;
const HeaderLogo = styled.div`
  text-align: center;
  color: #414141;
  font-size: 16px;
  font-family: Roboto !important;
  @media (max-width: 1000px) {
    text-align: center;
    position: center;
    font-size: 11px;
  }
`;
const Input = styled.input`


  width: 390px;
  height: 50px;
  border: 1px solid #bdbdbd;
  padding-left: 15px;
  outline: none;
  border-radius: 4px;
  font-family:roboto !important;
  transition: all 0.3s;
  font-size: 15px;
  margin: 25px 10px 0 0;
  color: #181c1b;
  &:focus {
    outline: none;
    border-radius: 4px;
    transition: all 0.3s;
    border-color: #bdbdbd;
  }

  @media (max-width: 1000px) {
    text-align: center;
    position: center;
    width: 240px;
    height: 32px;
  }
`;
const LastInput = styled.input`
  width: 390px;
  height: 50px;
  border: 1px solid #bdbdbd;
  padding-left: 15px;
  outline: none;
  color: #181c1b;
  border-radius: 4px;
  transition: all 0.3s;
  font-size: 16px;
  margin: 25px 10px 0 0;
  font-family: Roboto !important;
  &:focus {
    outline: none;
    border-radius: 4px;
    transition: all 0.3s;
    border-color: #bdbdbd;
  }
  @media (max-width: 1000px) {
    text-align: center;
    position: center;
    width: 240px;
    height: 32px;
  }
`;
const MainButton = styled.button`
  width: 390px;
  height: 50px;
  color: white;
  background-color: #00a0f0;
  font-size: 16px;
  margin-bottom: 41px;
  border-radius: 4px;
  border: none;
  vertical-align: center;
  font-family: roboto !important;
  margin-top: 15px;
  &:focus {
    outline: none;
    border-radius: 4px;
    transition: all 0.3s;
    border: none;
  }
  @media  (max-width:1024px) and (min-width: 768px) {
    text-align: center;
    margin-right: 50px;
    position: center;
    width: 240px;
    height: 32px;
    margin-top:25px;
  }
`;
const Label = styled.label`
border: 0 white;
  background-color: white;
  color: #00a0f0;
  margin-top:0px !important;
 &:focus {
    outline: none;
    border-radius: 4px;
    transition: all 0.3s;
    border: none;
  }

`
const InsideLeftButton = styled.button`
  font-size: 13px;
  border: 0 white;
  background-color: white;
  color: #00a0f0;
  padding-top: 18px;
  &:focus {
    outline: none;
    border-radius: 4px;
    transition: all 0.3s;
    border: none;
  }
  
  @media  (max-width:1024px) and (min-width: 768px) {
    text-align: center;
    position: center;
    margin-right: -10px;
    margin-left: 0px;
    
    
    
  
}
`;
const styles = {
    dropdown: {
        marginTop: "10px",

        width: "390px",
        height: "50px",
        borderRadius: "4px",
        border: "1px solid #bdbdbd",
        margin: "25px 10px 0 0",
        backgroundColor: "white",
        fontSize: "16px",
        color: "#181c1b",
        textAlign: "left",
        paddingLeft: "10px",

        "&:focus": {
            borderColor: "#bdbdbd",
            outline: "none",
            borderRadius: "4px",
            transition: "all 0.3s",
        }

    },
};
const DOBContainer = styled.div`
 width: 390px;
  height: 50px;
  border: 1px solid #bdbdbd;
  padding-top: 10px;
  form{
  margin-left: 0 !important;
  width: 100%;
  }
  form>div{
  width: 100%;
  }
`
const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        "& > *": {
            margin: theme.spacing(1),
        },
    },
    profile: {
        width: "106px",
        height: "106px",
        marginTop: 10,
        marginLeft: "141px",
        ['@media (max-width:1024px) and (min-width:768px)']: {
            marginLeft: "60px",
        }
    },
}));


export default function ProfileComponent(props) {
    const {handleChange, state, handleSelectChange, handleSelectSpecialityChange, updateProfile} = props
    const classes = useStyles();
    console.log("props.state.dob==", props.state.dob)
    return (
        <div>
            <HeaderComponent/>
            <Card>
                <Container>
                    <Header>Create your public profile</Header>
                    <HeaderLogo>Upload your photo or clinic logo</HeaderLogo>
                    <div>
                        <Avatar
                            alt="Remy Sharp"
                            src={state.picture}
                            className={classes.profile}
                        />
                    </div>
                    <div className="display-flex flex-direction-row justify-content-center pt-2">
                        <Label htmlFor="image" className="btn btn-light mb-0 " >
                            <input type="file" name="image" id="image" style={{display: 'none'}}
                                   onChange={event => props.onClickChangePicture(event)}/>
                            {"Change Photo "}
                        </Label>
                        <InsideLeftButton type="button" className="btn btn-light"
                                          onClick={() => props.onClickRemovePicture()}>{'Remove Photo'}
                        </InsideLeftButton>
                    </div>
                    <form action="#">
                        <Input type="text" placeholder="Name" name="name" value={state.name}
                               onChange={(event) => handleChange(event)}/>
                        {props?.state?.nameError &&
                        <div className="fc-red fs-14 py-1">{props.state.nameError}</div>}
                        <br/>
                        <Input type="text" placeholder="Phone Number" name="phone" value={state.phone}
                               onChange={(event) => handleChange(event)}/>
                        {props?.state?.phoneError &&
                        <div className="fc-red fs-14 py-1">{props.state.phoneError}</div>}

                        {props?.state?.clinicType === Auth0RoleNameConstants.PATIENT && <><br/>
                            <div className="display-flex flex-direction-column fs-16 pt-3"> {'Date of Birth'}</div>
                            <DOBContainer className="display-flex flex-direction-column">
                                <DatePicker
                                    className="w-100"
                                    onChange={(event) => props.handleDateChange(event)}
                                    value={props.state.dob && moment(props.state.dob).format('YYYY-MM-DD') || ''}
                                    clearIcon={null}
                                /></DOBContainer>
                            {props?.state?.dobError &&
                            <div className="fc-red fs-14 py-1">{props.state.dobError}</div>}

                            <br/>
                            <div
                                className="display-flex flex-direction-column fs-16 pt-2"> {'If Under 18 year age'}</div>
                            <Input type="text" placeholder="Legal Guardian Name" name="guardianName"
                                   value={state.guardianName}
                                   className="mt-1"
                                   onChange={(event) => handleChange(event)}/>
                            {props?.state?.guardianNameError &&
                            <div className="fc-red fs-14 py-1">{props.state.guardianNameError}</div>}
                        </>}


                        <br/>
                        <Input type="text" placeholder="Email" name="email" value={state.email} disabled={true}
                               onChange={(event) => handleChange(event)}/>
                        {props?.state?.emailError &&
                        <div className="fc-red fs-14 py-1">{props.state.emailError}</div>}
                        <br/>
                        {props?.state?.clinicType !== Auth0RoleNameConstants.PATIENT &&
                        <LastInput type="text" placeholder="Clinic Name" name="clinicName" value={state.clinicName}
                                   disabled={true} onChange={(event) => handleChange(event)}/>}
                        {props?.state?.clinicType !== Auth0RoleNameConstants.PATIENT && props?.state?.clinicNameError &&
                        <div className="fc-red fs-14 py-1">{props.state.clinicNameError}</div>}

                        {props?.state?.clinicType === Auth0RoleNameConstants.ANAESTHESIOLOGIST &&
                        <Select style={styles.dropdown}
                                defaultValue={props.state?.profileOptions[0]?.value || ''}
                                name="clinicType"
                                options={props.state.profileOptions}
                                onChange={handleSelectChange}/>}
                        {props?.state?.clinicType === Auth0RoleNameConstants.ANAESTHESIOLOGIST && props?.state?.clinicTypeError &&
                        <div className="fc-red fs-14 py-1">{props.state.clinicTypeError}</div>}

                        {props?.state?.clinicType === Auth0RoleNameConstants.SURGEON && <Select style={styles.dropdown}
                                                                                                defaultValue={props.state?.speciality || props.state?.specialityOptions[0]?.value || ''}
                                                                                                name="clinicType"
                                                                                                options={props.state.specialityOptions}
                                                                                                onChange={handleSelectSpecialityChange}/>}
                        {props?.state?.clinicType === Auth0RoleNameConstants.SURGEON && props?.state?.specialityError &&
                        <div className="fc-red fs-14 py-1">{props.state.specialityError}</div>}

                        <MainButton type="button" onClick={() => updateProfile()}>
                            Set Profile
                        </MainButton>
                    </form>
                </Container>
            </Card>
        </div>
    );
}
