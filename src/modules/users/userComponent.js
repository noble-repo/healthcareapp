import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const Searchicon = styled.img`
  position: absolute;
  top: 30px;
  left: 35px;
  width: 18px;
  height:17px;
  margin-left: 374px;
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
  height: 40px;
  padding: 0px 23px 2px 30px;
  padding-left: 7px;
  outline: 0;
  margin-left: 120px;
  margin-top: 20px;
  width: 320px;
  font-size:15px;
  font-family: Roboto !important;
  color: #b5b5b5;
  @media (max-width: 1000px) {
    margin-left: 50px;
    width: 80%;
    height: 28px;
  }
`;

const Btn = styled.button`
  background-color: #00a0f0;
  width: 116px;
  height: 40px;
  border: none;
  color: #ffffff;
  font-size: 16px;
  font-weight:500;
  font-family:roboto !important;
  margin-top: 20px;
  margin-left: 515px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 2px;
  @media (max-width: 1158px) {
    margin-left: 400px;
  }
  &:focus {
    outline: none;
    border-radius: 5px;
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
    const classes = useStyles();
    return (
        <Main>
            <Wrapper>
                <div>
                    <Searchicon
                        color="#c0c0a5"
                        src="/images/searchicon.svg"
                    />
                    <Searchinput placeholder="Search User" type="text"/>
                </div>

                <Btn onClick={props.handleDialog}>Add User</Btn>
            </Wrapper>
            <div>
                <Table>
                    <tr>
                        {props.rows.map((row, index) => (
                            <td>
                                <Card className={classes.root} onClick={props.handleEditDialog}>
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.cover}
                                            image={row.imageUrl}
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <Typography className={classes.name}>
                                                {row.name}
                                            </Typography>
                                            <Typography
                                                className={classes.atype}
                                                variant="body2"
                                                color="textSecondary"
                                                component="p"
                                            >
                                                {row.designation}
                                            </Typography>

                                            <BDefault>{row.role}</BDefault>
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
