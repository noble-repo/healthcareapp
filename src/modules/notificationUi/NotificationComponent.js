import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { Row, Column } from "simple-flexbox";
import { Right } from "react-bootstrap/lib/Media";
const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(1),
    borderBottom: "1px solid #e8e8e8",
  },
  link1: {
    color: "#181c1b",
    width: "51px",
    height: "19px",
    margin: "26px 0 16px",
    fontFamily: "Roboto",
    fontSize: "16px",
    paddingRight: "15px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
  },
  link2: {
    width: "19px",
    height: "19px",
    margin: "26px 154px 16px 30px;",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#00a0f0",
    padding: "23px 7px 100px 17px",
  },
  link3: {
    width: "92px",
    height: "15px",
    margin: "25px 9px 21px 253px",
    fontFamily: "Roboto",
    fontSize: "13px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    textAlign: "right",
    color: "#8f8f8f",
    paddingLeft: "10px",
  },
  link4: {
    width: "1920px",
    height: "1064px",
    margin: "86px 0 0",
    backgroundColor: "rgba(24, 28, 27, 0.1)",
  },

  link5: {
    width: "60px",
    height: "16px",
    margin: "0 33px 5px 12px",
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#8f8f8f",
  },
  link6: {
    width: "71px",
    height: "16px",
    margin: "67px 132px 67px 0",
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#8f8f8f",
  },

  link7: {
    width: "71px",
    height: "16px",
    margin: "52px 132px 0 0",
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#8f8f8f",
  },

  link8: {
    width: "71px",
    height: "16px",
    margin: "4px 22px 12px 11px",
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#8f8f8f",
  },
  Rectangle: {
    width: "506px",
    height: "428px",
    margin: "70px 45px 652px 1369px",
    padding: "23px 7px 100px 17px",
    borderRadius: "2px",
    boxShadow: "2px 2px 4px 0 rgba(0, 0, 0, 0.13)",
    border: "solid 1px #e8e8e8",
    backgroundColor: "#ffffff",
  },
  paddingatfixedpostion: {
    paddingLeft: "10px",
  },
  paddingPosition: {
    paddingLeft: "300px",
    width: "60px",
    height: "16px",
    margin: "0 33px 5px 12px",
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#8f8f8f",
  },
  popover: {},
}));

export default function SimplePopover() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <NotificationsIcon onClick={handleClick} />

      <Popover
        className={classes.popover}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
          padding: "23px 7px 100px 17px",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
          padding: "23px 7px 100px 17px",
        }}
      >
        <Typography className={classes.typography}>
          <b>Notifications </b>
          <button type="button" class="close" data-dismiss="Notifications">
            &times;{" "}
          </button>
          <pre></pre>
          <div>
            <a href="#" className={classes.link1}>
              Unread
            </a>
            <a href="#" className={classes.link2}>
              All
            </a>

            <span className={classes.paddingPosition}>Mark all as read</span>
            <script></script>
          </div>
        </Typography>
        <pre></pre>
        <style></style>
        <Row>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <span className={classes.paddingatfixedpostion}>
            Dr Christina Hardaway has provided surgical{" "}
            <a href="#" className={classes.link3}>
              Mark as read
            </a>{" "}
            <br />
            Clearance for Sara Smith <br />{" "}
            <a href="#" className={classes.link5}>
              10:20 AM
            </a>
          </span>
        </Row>
        <pre></pre>
        <Row>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <span className={classes.paddingatfixedpostion}>
            Sara Smith has completed the patient survey <br />{" "}
            <a href="#" className={classes.link5}>
              5 Aug 2020
            </a>
          </span>
        </Row>
        <pre></pre>
        <Row>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <span className={classes.paddingatfixedpostion}>
            Sara Smith has uploaded the documents for<br></br>Anethesia
            clearance <br />{" "}
            <a href="#" className={classes.link8}>
              5 Aug 2020
            </a>
          </span>
        </Row>
        <pre></pre>
        <Row>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <span className={classes.paddingatfixedpostion}>
            Sara Smith has accepted the request <br />{" "}
            <a href="#" className={classes.link8}>
              5 Aug 2020
            </a>
          </span>
        </Row>
      </Popover>
    </div>
  );
}
