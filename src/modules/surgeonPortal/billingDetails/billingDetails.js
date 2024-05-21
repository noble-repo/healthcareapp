import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Row, Column } from "simple-flexbox";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Divider } from "material-ui";
// import Header from "../header";
import { history } from "../../../managers/history";

const useStyles = makeStyles({
  root: {
    minWidth: 250,
    backgroundColor: "#e8f5fe",
    boxShadow: "none",
    borderRadius: "none",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  rowContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "70px",
  },
  bluebtn: {
    width: "114px",
    height: "34px",
    marginLeft: "7px",
    padding: "4px 0px 4px 0px",
    borderRadius: "2px",
    border: "solid 1px #00a0f0",
    backgroundColor: "#00a0f0",
    color: "white",
    fontSize: "15px",
    borderStyle: "none",
    marginBottom: "18px",
    "&:focus":{
      outline:"none",
  borderRadius: "5px",
  transition: "all 0.3s",
      border:"none",
      }


    
  },
  updatebtn: {
    width: "114px",
    height: "34px",
    marginLeft: "2px",
    padding: "4px 0px 4px 0px",
    borderRadius: "2px",
    border: "solid 1px #00a0f0",
    backgroundColor: "#00a0f0",
    color: "white",
    fontSize: "15px",
    borderStyle: "none",
    marginBottom: "18px",
    "&:focus":{
      outline:"none",
  borderRadius: "5px",
  transition: "all 0.3s",
      border:"none",
      }
  },
  redbtn: {
    width: "161px",
    height: "34px",
    margin: "0px 0px 18px 10px",
    padding: "4px 0px 4px 0px",
    borderRadius: "2px",
    border: "solid 1px #00a0f0",
    backgroundColor: "#ff462c",
    color: "white",
    fontSize: "15px",
    borderStyle: "none",
    "&:focus":{
      outline:"none",
  borderRadius: "5px",
  transition: "all 0.3s",
      border:"none",
      }
  },

  greenbtn: {
    backgroundColor: "#43c43f",
    width: "52px",
    height: "18px",
    margin: "10px 0px 5px 30px",
    padding: "0px 5px 4px 0px",
    borderRadius: "2px",
    border: "solid 1px #00a0f0",
    borderStyle: "none",
    color: "white",
    fontSize: "11px",
  },

  spanfixing: {
    fontWeight: "bold",
    fontSize: "17px",
    color: "#262626",
  },

  col: {
    marginLeft: "20px",
  },

  Divider: {
    width: "100vw",
    height: "20px",
    marginTop: "10px !important",
  },
  price: {
    paddingLeft: "60px",
    paddingTop: "10px",
    fontSize: "14px",
  },

  download: {
    color: "#00a0f0",
    paddingTop: "10px",
    paddingLeft: "600px",
    fontSize: "13px",
  },
  divfixing: {
    margin: "0 auto",
    maxWidth: "957px",
    marginTop: "40px",
  },
  cardcontent: {
    width: "480px",
  },

  secondcardcontent: {
    padding: "28px",
    paddingRight: "0px",
    paddingLeft: "9px",
    width: "471px",
    paddingTop: "27px",
  },

  date: {
    paddingTop: "10px",
    fontSize: "14px",
    fontWeight: "500",
    paddingRight: "24px",
    color: "#181c1b",
  },

  para: {
    fontSize: "16px",
    fontWeight: "400",
    fontFamily: "roboto",
    color: "#414141",
  },

  image: {
    marginLeft: "0px",
    marginRight: "4px",
    marginBottom: "2px",
  },
});

export default function BillingDetails(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <div>
      {/* <Header /> */}

      <Row className={classes.rowContent}>
        <Column>
          <Card className={classes.root}>
            <CardContent className={classes.cardcontent}>
              <Typography className={classes.title} gutterBottom>
                <span className={classes.spanfixing}> Plan</span>
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className={classes.para}
              >
                You are on {props.state.plan} plan at
                <span className={classes.spanfixing}>
                  {props.state.price}
                </span>{" "}
                per {props.state.duration} . You can add
                <span className={classes.spanfixing}>
                  {props.state.patients} patients{" "}
                </span>{" "}
                and{" "}
                <span className={classes.spanfixing}>
                  {props.state.Anesthesiologists} Anesthesiologists
                </span>
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              <Row>
                <button
                  className={classes.bluebtn}
                  onClick={() => history.push("/surgeon/payment")}
                >
                  Change Plan
                </button>
                <button className={classes.redbtn}>Cancel Subscription</button>
              </Row>
            </CardActions>
          </Card>
        </Column>
        <Column className={classes.col}>
          <Card className={classes.root}>
            <CardContent className={classes.secondcardcontent}>
              <Typography className={classes.title} gutterBottom>
                <span className={classes.spanfixing}>Payment Details</span>
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className={classes.para}
              >
                Your next payment is due on {props.state.date}
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              <Row>
                <button
                  className={classes.updatebtn}
                  onClick={props.updateCard}
                >
                  Update Card
                </button>
              </Row>
            </CardActions>
          </Card>
        </Column>
      </Row>
      <div className={classes.divfixing}>
        <Row>
          <div>
            <span className={classes.spanfixing}>Invoices</span>
          </div>
        </Row>

        <Row>
          <Divider className={classes.Divider} />
        </Row>

        {props.state.rows.map((row) => (
          <Row>
            <Column className={classes.date}>{row.date}</Column>
            <Column className={classes.price}>{row.price}</Column>
            <Column>
              <button className={classes.greenbtn}>
                <img
                  src="/images/white_check_icon.svg"
                  className={classes.image}
                />
                {row.paid}
              </button>
            </Column>
            <Column className={classes.download}>{row.download}</Column>
          </Row>
        ))}
      </div>
    </div>
  );
}
