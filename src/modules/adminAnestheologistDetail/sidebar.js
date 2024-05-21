import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import {history} from "../../managers/history";

const drawerWidth = 270;

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        position: 'static',
        backgroundColor: "#e6f2ff",
        marginTop: 0,
        height: '1000px'
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: "#e6f2ff",
        border: 0,
        marginTop: 65
    },

    grow: {
        flexGrow: 1,

        "@media (max-width:1024px) ": {
            display: "none",
        }
    },
    drawerContainer: {
        overflow: 'auto',
    },
    txt: {
        marginTop: "10px",
        fontWeight: "bold!important",
        fontSize: "14px",
        fontStyle: "Roboto-regular!important",
        marginLeft: "7px",
    },
    divStyle: {
        paddingLeft: 13,
        fontSize: 18,
        fontWeight: 500,
        color: "#414141",
        paddingTop: "18px",
        fontFamily: 'Roboto important',
        marginTop: "25px",
    },
    search: {
        position: 'relative',
        borderRadius: 0,
        backgroundColor: 'white',
        marginLeft: 13,
        marginRight: 12,
        marginTop: 10,
        height: 28
    },
    contents: {
        marginTop: -4,
        // fontFamily:'Arial, Helvetica, sans-serif',
        fontFamily: "Roboto",
        fontWeight: "500px",
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: "normal",
        letterSpacing: "normal",
        // color: "#ffffff",
        fontSize: 13
    },
    details: {
        height: 10
    },
    cpp: {
        marginTop: "11px",
        fontStyle: "Roboto-regular!important",

        // fontWeight:'bold'
    },
    searchIcon: {
        color: '#d6d6c2',
        position: 'absolute',
        alignItems: 'right',
        justifyContent: 'left',
        marginLeft: 185,
        marginTop: 2,
        height: 19
    },

    toggleactive: {
        marginTop: "10px",
        fontWeight: "bold!important",
        fontSize: "14px",
        fontStyle: "Roboto-regular!important",
        marginLeft: "7px",
        color: "#ffff",
        "&:hover": {
            textDecoration: "none",
            color: "#ffff",

        },
        // text-align: right;
        // color: #000000;
    },
    toggleactive1: {
        marginTop: "10px",
        fontWeight: "bold!important",
        fontSize: "14px",
        fontStyle: "Roboto-regular!important",
        marginLeft: "7px",
        color: "#262626",
        "&:hover": {
            textDecoration: "none",
            color: "#262626",

        },
        // text-align: right;
        // color: #000000;
    },

    inputRoot: {
        color: 'inherit',
    },
    searchInput: {
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        fontSize: 12,
        fontFamily: 'Roboto',
        // marginLeft:-33,
        marginTop: 2
    },
    cardStyle: {
        marginTop: 10,
        marginLeft: 12,
        marginRight: 12,
        display: 'flex',
        backgroundColor: '#3399ff',
        color: 'white',
        borderRadius: 0,
        boxShadow: 'none'
    },
    imgStyle: {
        margin: 8,
        marginRight: 0,
        width: 40,
        height: 40,
        borderRadius: '50%'
    },
    nameStyle: {
        marginTop: 0,
        fontSize: 16,
        marginBottom: "0px",
        color: "#ffffff",
        fontFamily: "roboto",

        fontWeight: 'bold'
    },
    typeStyle: {
        // marginTop:-35,
        fontSize: 14,
        fontWeight: 0,
        color: "#ffffff",
        fontFamily: "roboto",


    },
    cardfix: {
        marginTop: 10,
        marginLeft: 12,
        marginRight: 12,
        display: 'flex',
        borderRadius: 0,
        boxShadow: 'none'
    },
    recordIcon: {
        marginTop: 20,
        color: 'green',
        height: 15,
        marginLeft: 36,
    }

}))

export default function Sidebar(props) {
    const classes = useStyles();
    return (
        <div className={classes.grow}>
            <div
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.divStyle}><b>Anesthesiologist</b></div>
                {props.state.clinicList.length > 0 && props.state.clinicList.map((data, index) => (
                    <Card
                        className={data.clinicId === props.state.selectedClinic.clinicId ? classes.cardStyle : classes.cardfix}
                        key={index}
                        onClick={() => props.onChangeSelectedClinic(data)}>
                        <CardMedia
                            className={classes.imgStyle}
                            image={data?.owner?.picture || '/images/download.jpg'}
                        />
                        <div className={classes.details}>

                            <CardContent className={classes.contents}>
                                <div className={classes.txt}>
                                    <span
                                        className={classes.cpp}>{`${data.owner.firstName || ''} ${data.owner.lastName || ''}`}</span>
                                    <br/>
                                </div>
                            </CardContent>
                        </div>


                    </Card>
                ))}


            </div>
        </div>

    )
}

