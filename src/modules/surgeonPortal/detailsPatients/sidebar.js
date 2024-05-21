import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import moment from "moment";
import {statusConstants} from "../../../constants";

const drawerWidth = 270;

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        position: 'static',
        backgroundColor: "#e6f2ff",
        marginTop: 0,
        height: '1000px',
        "@media (max-width:1024px) ": {
            display:"none ! important",
            }
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: "#e6f2ff",
        border: 0,
        marginTop: 65
    },

    grow: {
        flexGrow: 1
    },
    drawerContainer: {
        overflow: 'auto',
    },
    divStyle: {
        paddingLeft: 13,
        fontSize: 18,
        fontWeight: 500,
        color: "#414141",
        paddingTop: "18px",
        fontFamily: 'Roboto !important',
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
    searchIcon: {
        color: '#d6d6c2',
        position: 'absolute',
        alignItems: 'right',
        justifyContent: 'left',
        marginLeft: 212,
        marginTop: 2,
        height: 19
    },

    inputRoot: {
        color: 'inherit',
    },
    searchInput: {
        // paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        // transition: theme.transitions.create('width'),
        width: '233px',
        fontSize: 12,
        paddingLeft: "10px",
        fontFamily: 'Roboto !important',
        // marginLeft:-33,
        marginTop: 0

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
    contents: {
        marginTop: "0px",
        fontFamily: 'Roboto',
        padding: "8px",
        fontSize: 12
    },
    details: {
        height: 8
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
        cursor:'pointer',
        boxShadow: 'none'
    },
    selectedCardFix: {
        marginTop: 10,
        marginLeft: 12,
        marginRight: 12,
        display: 'flex',
        borderRadius: 0,
        boxShadow: 'none',
        cursor:'pointer',
        border: '2px solid red'
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
            <div className={classes.drawer} position="static" variant="permanent"
                 classes={{paper: classes.drawerPaper}}>
                <div className={classes.divStyle}>Patients</div>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon/>
                    </div>
                    <InputBase placeholder="Search Patient" 
                               classes={{
                                   root: classes.inputRoot,
                                   input: classes.searchInput,
                               }} inputProps={{'aria-label': 'search'}} id="searchText" onChange={props.onSearch}/>
                </div>
                {props.state.patientList.length > 0 && props.state.patientList.map((data) => (
                    <Card
                        className={data.surgeryId === props.state.selectedSurgery.surgeryId ? classes.selectedCardFix : classes.cardfix}
                        onClick={() => props.onChangeSelectedSurgery(data)}>
                        <CardMedia
                            className={classes.imgStyle}
                            image={data?.picture || '/download.jpg'}
                        />
                        <div className={classes.details}>
                            <CardContent className={classes.contents}>
                                <span className={classes.cpp}>{data?.patient?.name || ''}</span>
                                <br/>
                                <span
                                    className={classes.cp}>{data?.addedOn && moment(data?.addedOn).format('DD MMM YYYY')}</span>

                            </CardContent>
                        </div>
                        <FiberManualRecordIcon
                            style={{
                                marginTop: 20, color: data.status === statusConstants.COMPLETED ? 'green' : 'red',
                                height: 15, marginLeft: 75
                            }}
                        />
                    </Card>
                ))}

            </div>
        </div>

    )
}


