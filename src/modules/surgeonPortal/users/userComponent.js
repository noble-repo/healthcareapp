import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import {Auth0RoleNameConstants} from "../../../constants";

const Searchicon = styled.img`
  position: absolute;
  top: 28px;
  left: 20px;
  width: 14px;
  margin-left: 290px;
  color: #c0c0a5;
  @media (max-width: 1000px) {
    margin-left: 225px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  min-width: 100px;
  margin-left: 100px;
  margin-top: 40px;
  width: 85%;
`;

const Main = styled.div`
  background-color: white;
`;

const Searchinput = styled.input`
  border: 1px solid #ccccb3;
  height: 28px;
  padding: 0px 23px 2px 30px;
  padding-left: 7px;
  outline: 0;
  margin-left: 120px;
  margin-top: 20px;
  width: 70%;
  @media (max-width: 1000px) {
    margin-left: 50px;
    width: 80%;
    height: 28px;
  }
`;

const Btn = styled.button`
  background-color: DodgerBlue;
  width: 116px;
  height: 40px;
  border: none;
  color: #ffffff;
  font-size: 16px;
  margin-top: 10px;
  margin-left: 570px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 2px;
  @media (max-width: 1158px) {
    margin-left: 400px;
  }
  &:focus {
    outline: none;
    /* border-radius: 2px ; */
    transition: all 0.3s;
    border: none;
  }
`;

const BDefault = styled.button`
  border-color: #e7e7e7;
  border: 1px solid grey;
  background-color: white;
  color: grey;
  font-size: 10px;
  cursor: pointer;
  margin-left: 40px;
`;
const ADefault = styled.button`
  border-color: red;
  border: 1px solid red;
  background-color: white;
  color: red;
  font-size: 10px;
  cursor: pointer;
  margin-left: 36px;
`;
const Table = styled.table`
  margin-left: 220px;
`;

const useStyles = makeStyles({
    root: {
        marginTop: 50,
        marginRight: "20px",
        width: 155,
        borderRadius: 0,
        border: "1px solid #eaeae1",
        boxShadow: "none",
    },
    cover: {
        margin: 8,
        width: 100,
        height: 100,
        borderRadius: "50%",
        marginLeft: 25,
        marginTop: 17,
    },
    name: {
        textAlign: "center",
        fontSize: "13px",
        fontWeight: "bold",
    },
    atype: {
        textAlign: "center",
        fontSize: "11px",
        color: "#8f8f8f",
    },
    small: {
        width: 50,
    },
});

export default function UserComponent(props) {
  console.log("UserData.role",props.state.userList)
  const classes = useStyles();
    
    return (
    <Main>
            <Wrapper>
                <div>
                    <Searchicon
                        color="#c0c0a5"
                        src="/images/searchicon.svg"
                    />
                    <Searchinput placeholder="Search User" type="text" onChange={props.onSearch}/>
                </div>

                <Btn onClick={props.handleDialog}>Add User</Btn>
            </Wrapper>
            <div>
              {/* <div>hello</div> */}
                <Table>
                    <tr>
                        {props.state.userList.length > 0 && props.state.userList.map((userData, index) => (
                            <td>
                                <Card className={classes.root} onClick={()=>props.handleEditDialog(userData)}>
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.cover}
                                            image={userData.picture || '/images/download.jpg'}
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <Typography className={classes.name}>
                                                {userData.name}
                                            </Typography>
                                            <Typography
                                                className={classes.atype}
                                                variant="body2"
                                                color="textSecondary"
                                                component="p"
                                            >
                                                {userData.role === Auth0RoleNameConstants.SURGEON ? 'Clinic Admin' : 'Assistant'}
                                            </Typography>

                                            {/*<BDefault>{userData.role === Auth0RoleNameConstants.SURGEON ? 'Clinic Admin' : 'Assistant'}</BDefault>*/}
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </td>
                        ))}
                    </tr>
                </Table>
            </div>

        </Main>
    );
}
