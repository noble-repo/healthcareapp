import React, {useEffect} from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {makeStyles} from "@material-ui/core/styles";

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 10,
        display: "flex",
        position: "relative",
        "&.PrivateTabIndicator-colorSecondary-5": {
            backgroundColor: "red",
        },
        "&.MuiTab-wrapper": {
            width: "0px !important",
            /* padding-left:10px; */
            fontSize: "32px",
            fontWeight: "550 !important",
            borderRadius: "50% !important",
            marginLeft: "37px",
        },
    },
    tabRoot: {
        minWidth: 10,
        minHeight: 10,
        "&.MuiTab-wrapper": {
            width: "0px !important",
            /* padding-left:10px; */
            fontSize: "32px",
            fontWeight: "550 !important",
            borderRadius: "50% !important",
            marginLeft: "37px",
        },
    },
    tabsAlign: {
        marginTop: "50px !important",
        backgroundColor: "white",
        // display:"flex",
        justifyContent: "center",
    },
}));
const SurgerySectionView = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(props.selectedSectionIndex);
    useEffect(() => setValue(props.selectedSectionIndex), [props.selectedSectionIndex])
    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(newValue, "In handle change");
        props.onClickSectionTab(props.sectionList[newValue], newValue)
    };


    const [index] = React.useState(0);


    return (
        <div>
            <Tabs
                className={classes.tabsAlign}
                // className="display-flex flex-direction-column justify-content-center"
                value={value}
                index={index}
                onChange={handleChange}
                aria-label="simple tabs example"
                TabIndicatorProps={{style: {background: "none"}}}
            >
                &emsp;&emsp;&emsp;&emsp;
                {props.sectionList.length > 0 && props.sectionList.map((section, index) =>
                    <Tab
                        label="  ___  "
                        {...a11yProps(index)}
                        classes={{root: classes.tabRoot}} style={
                        value === index
                            ? {
                                background: "white",
                                textTransform: "initial",
                                color: "#1aa3ff",

                                fontWeight: "550 !important",
                                // borderBottom: "none",
                                // outline: "none",

                            }
                            : {}
                    }
                    />
                )}
            </Tabs>
        </div>
    );
};

export default SurgerySectionView;
