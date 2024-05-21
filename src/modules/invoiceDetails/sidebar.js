import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

const drawerWidth = 239;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    position: "static",
    backgroundColor: "#e6f2ff",
    marginTop: "33px",
    height: "800px",
  },

  drawerContainer: {
    overflow: "auto",
  },
  para: {
    paddingLeft: 13,
    fontSize: 18,
    fontFamily: "Arial, Helvetica, sans-serif",
    color: "#26292c",
    marginTop: "10px",
  },
  search: {
    position: "relative",
    borderRadius: 0,
    backgroundColor: "white",
    marginLeft: 13,
    marginRight: 12,
    marginTop: 10,
    height: 28,
  },
  searchIcon: {
    color: "#d6d6c2",
    position: "absolute",
    alignItems: "right",
    justifyContent: "left",
    marginLeft: 185,
    marginTop: 2,
  },
  fixingsearchicon: {
    height: 19,
  },
  inputRoot: {
    color: "inherit",
  },
  fixingInput: {
    paddingLeft: "10px",
    transition: theme.transitions.create("width"),
    width: "100%",
    fontSize: 11,
    fontFamily: "Arial, Helvetica, sans-serif",
    marginTop: 2,
  },
  fixcard: {
    marginTop: 10,
    marginLeft: 12,
    marginRight: 12,
    display: "flex",
    backgroundColor: "#3399ff",
    color: "white",
    borderRadius: 0,
    boxShadow: "none",
  },
  cover: {
    margin: 8,
    marginRight: 0,
    width: 40,
    height: 40,
    borderRadius: "50%",
  },
  contents: {
    fontFamily: "Roboto",
    fontSize: 12,
  },
  details: {
    height: 8,
  },
  namefixing: {
    fontSize: 16,
    color: "#ffffff",
    fontFamily: "roboto",
    marginBottom: "0px",
    marginTop: "5px",
  },
  parafixing: {
    fontSize: 14,
    fontWeight: 0,
    fontFamily: "roboto",
    color: "#ffffff",
  },
  stylecard: {
    marginTop: 10,
    marginLeft: 12,
    marginRight: 12,
    display: "flex",
    borderRadius: 0,
    boxShadow: "none",
  },
}));

export default function Sidebar(props) {
  const classes = useStyles();
  return (
    <div className={classes.drawer} variant="permanent">
      <div className={classes.para}>
        <b>Patients</b>
      </div>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon className={classes.fixingsearchicon} />
        </div>
        <InputBase
          placeholder="Search Patient"
          classes={{
            root: classes.inputRoot,
            input: classes.fixinginput,
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>

      <Card className={classes.fixcard}>
        <CardMedia className={classes.cover} image="download.jpg" />
        <div className={classes.details}>
          <p className={classes.namefixing}>Patrice Page</p>

          <p>Paid</p>
        </div>
      </Card>
      {props.state.rows.map((row, index) => (
        <Card className={classes.stylecard}>
          <CardMedia className={classes.cover} image={row.img} />
          <div className={classes.details}>
            <CardContent className={classes.contents}>
              <p className={classes.namefixing}>{row.name}</p>
              <br />
              <p className={classes.parafixing}>{row.status}</p>
            </CardContent>
          </div>
        </Card>
      ))}
    </div>
    // </div>
  );
}
