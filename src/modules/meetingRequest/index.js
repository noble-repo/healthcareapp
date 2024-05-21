import React, { Component } from "react";
import MeetingComponent from "./MeetingComponent";
import Header from "../shared/header";
import moment from "moment";
import Utils, { dispatchAction } from "../../utility";
import BaseComponent from "../baseComponent";
import AlertDialog from "./dialogComponent";
import { CalendarService } from "../../services";
import { connect } from "react-redux";

export class MeetingRequest extends BaseComponent {
  constructor(props) {
    super(props);

    this.state = {
      aptDay: "",
      time: "",
      aptMonth: "",
      aptYear: "",
      open: false,
      userId: "",
      first: true,
      counter: 0,
      month: "",
      monthHeader: "",
      year: "",
      daysAndDates: [],
      // regions: regions,
      // rows: rows,
      bottomSheet: false,
      errorCode: "",
      status: "",
      errorCodeArray: [201, 401, 404],
      statusArray: ["Approve", "Resolved", "Unresolved"],
      isMenuOpen: false,
      requestTableList: [],
      errorWithDate: [],
      regionDomain: [],
      streamName: [],
      errorMessage: {},
      response: {},
      rowCounter: 1,
      tueCounter: 1,
      getCount: [],
      tueCount: [],
      wedCounter: 1,
      wedCount: [],
      thursCounter: 1,
      thursCount: [],
      friCounter: 1,
      friCount: [],
      satCount: [],
      satCounter: 1,
      sunCounter: 1,
      sunCount: [],
      show: false,
      rows: [
        {
          name: "Patrice Page",
          surgery: "Wrist surgery",
          timeAndDate: "10:00 AM , 18 Jan 2021",
        },
        {
          name: "John Doe",
          surgery: "arm surgery",
          timeAndDate: "11:00 AM , 19 Jan 2021",
        },
      ],
    };
  }
  removeCard = (rows) => {
    this.state.rows.shift();
    // for(let i=0;i<this.state.rows.length;i++)
    // {
    //   console.log(`length`,this.state.rows.length)
    // }
    console.log(`removed element`)
  }
  handleAccept = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  handleDialog = () => {
    console.log("In handle dialog", ".........")

    this.setState({
      open: !this.state.open,
    });
    console.log("In handle dialog")
  };

  handleSidebar = () => {
    console.log(`hi`);
  };
  iconClick = () => {
    this.setState({
      rowCounter: this.state.rowCounter + 1,
      getCount: this.getRepeat(),
    });
    console.log(`hello`);
  };
  tueRowAdd = () => {
    this.setState({
      tueCounter: this.state.tueCounter + 1,
      tueCount: this.tueRepeat(),
    });
  };
  wedRowAdd = () => {
    this.setState({
      wedCounter: this.state.wedCounter + 1,
      wedCount: this.wedRepeat(),
    });
  };
  thursRowAdd = () => {
    this.setState({
      thursCounter: this.state.thursCounter + 1,
      thursCount: this.thursRepeat(),
    });
  };
  friRowAdd = () => {
    this.setState({
      friCounter: this.state.friCounter + 1,
      friCount: this.friRepeat(),
    });
  };
  satRowAdd = () => {
    this.setState({
      satCounter: this.state.satCounter + 1,
      satCount: this.satRepeat(),
    });
  };
  sunRowAdd = () => {
    this.setState({
      sunCounter: this.state.sunCounter + 1,
      sunCount: this.sunRepeat(),
    });
  };
  getRepeat = (rowCounter) => {
    let getCount = [];

    for (let index = 0; index < this.state.rowCounter; index++) {
      getCount.push(this.state.rowCounter);
    }
    return getCount;
  };

  tueRepeat = () => {
    let tueCount = [];
    for (let index = 0; index < this.state.tueCounter; index++) {
      tueCount.push(this.state.tueCounter);
    }
    return tueCount;
  };
  wedRepeat = () => {
    let wedCount = [];
    for (let index = 0; index < this.state.wedCounter; index++) {
      wedCount.push(this.state.wedCounter);
    }
    return wedCount;
  };
  thursRepeat = () => {
    let thursCount = [];
    for (let index = 0; index < this.state.thursCounter; index++) {
      thursCount.push(this.state.thursCounter);
    }
    return thursCount;
  };
  friRepeat = () => {
    let friCount = [];
    for (let index = 0; index < this.state.friCounter; index++) {
      friCount.push(this.state.friCounter);
    }
    return friCount;
  };
  satRepeat = () => {
    let satCount = [];
    for (let index = 0; index < this.state.satCounter; index++) {
      satCount.push(this.state.satCounter);
    }
    return satCount;
  };
  sunRepeat = () => {
    let sunCount = [];
    for (let index = 0; index < this.state.sunCounter; index++) {
      sunCount.push(this.state.wedCounter);
    }
    return sunCount;
  };

  removeRow = (rowCounter) => {
    if (this.state.rowCounter >= 0) {
      this.setState({
        rowCounter: this.state.rowCounter - 1,
        getCount: this.getDec(),
      });
    }
    console.log(`hi`);
  };
  getDec = () => {
    this.state.getCount.pop();
    return this.state.getCount;
  };

  removeTueRow = (rowCounter) => {
    if (this.state.tueCounter >= 0) {
      this.setState({
        tueCounter: this.state.tueCounter - 1,
        tueCount: this.getDecRow2(),
      });
    }
  };
  getDecRow2 = () => {
    this.state.tueCount.pop();
    return this.state.tueCount;
  };
  removeWedRow = (rowCounter) => {
    if (this.state.wedCounter >= 0) {
      this.setState({
        wedCounter: this.state.wedCounter - 1,
        wedCount: this.getDecRow3(),
      });
    }
    console.log(`hi`);
  };
  getDecRow3 = () => {
    this.state.wedCount.pop();
    return this.state.wedCount;
  };
  removeThursRow = (rowCounter) => {
    if (this.state.thursCounter >= 0) {
      this.setState({
        thursCounter: this.state.thursCounter - 1,
        thursCount: this.getDecRow4(),
      });
    }
    console.log(`hi`);
  };
  getDecRow4 = () => {
    this.state.thursCount.pop();
    return this.state.thursCount;
  };
  removeFriRow = (rowCounter) => {
    if (this.state.friCounter >= 0) {
      this.setState({
        friCounter: this.state.friCounter - 1,
        friCount: this.getDecRow5(),
      });
    }
    console.log(`hi`);
  };
  getDecRow5 = () => {
    this.state.friCount.pop();
    return this.state.friCount;
  };
  removeSatRow = (rowCounter) => {
    if (this.state.satCounter >= 0) {
      this.setState({
        satCounter: this.state.satCounter - 1,
        satCount: this.getDecRow6(),
      });
    }
    console.log(`hi`);
  };
  getDecRow6 = () => {
    this.state.satCount.pop();
    return this.state.satCount;
  };
  removeSunRow = (rowCounter) => {
    if (this.state.sunCounter >= 0) {
      this.setState({
        sunCounter: this.state.sunCounter - 1,
        sunCount: this.getDecRow7(),
      });
    }
    console.log(`hi`);
  };
  getDecRow7 = () => {
    this.state.sunCount.pop();
    return this.state.sunCount;
  };

  componentDidMount = async () => {
    // await this.getDateAndDay("previous")
    this.getEventsList()

    this.getDateAndDay("previous");
    await this.getDaysAndDateArray();
    this.setState({
      errorCode: this.state.errorCodeArray[0],
      status: this.state.statusArray[0],
    });
  };

  getEventsList = async () => {
    let requestData = {
      startTime: "",
      endTime: "",
      userId: this.props.userId
    }
    let [error, getEventsListRes] = await Utils.parseResponse(CalendarService.getEventsList(requestData));
    if (error) {
      return error

    } else {
      this.setState({ events: getEventsListRes.events, userId: this.props.userId })
    }
  }

  getServiceObj = (daysAndDateArray) => {
    return {
      endTime: Date.parse(
        `${daysAndDateArray[0].date} ${daysAndDateArray[0].month} ${daysAndDateArray[0].year}`
      ),
      startTime: Date.parse(
        `${daysAndDateArray[daysAndDateArray.length - 1].date} ${daysAndDateArray[daysAndDateArray.length - 1].month
        } ${daysAndDateArray[daysAndDateArray.length - 1].year}`
      ),
    };
  };

  getDateAndDay = async (value) => {
    let daysAndDates = [];
    let counter = this.state.counter;
    if (value === "previous") {
      counter = this.state.first ? counter + 0 : counter - 7;
      daysAndDates = this.getDaysAndDateArray(counter);
    }
    if (value === "next") {
      counter = counter + 7;
      daysAndDates = this.getDaysAndDateArray(counter);
    }

    await this.setState({
      first: false,
      month: daysAndDates[daysAndDates.length - 1].month,
      monthHeader: daysAndDates[daysAndDates.length - 1].monthHeader,
      daysAndDates: daysAndDates,
      year: daysAndDates[daysAndDates.length - 1].year,
      counter: counter,
    });
  };

  getDaysAndDateArray = (counter) => {
    let daysAndDates = [];

    for (let index = 6; index >= 0; index--) {
      daysAndDates.push({
        timeStamp: moment(
          moment()
            .startOf("day")
            .add(-index + counter, "day")
        ).valueOf(),
        day: moment(
          moment()
            .startOf("day")
            .add(-index + counter, "day")
        ).format("ddd"),
        // date = this.state.month.clone().startOf("month").add("w" -1).day(1),
        date: moment(
          moment()
            .startOf("day")
            .add(-index + counter, "day")
        )
          .format("l")
          .split("/")[1],
        // date : moment().day('Monday'),
        month: moment(
          moment()
            .startOf("day")
            .add(-index + counter, "day")
        )
          .format("ll")
          .split(" ")[0],
        monthHeader: moment(
          moment()
            .startOf("day")
            .add(-index + counter, "day")
        )
          .format("LL")
          .split(" ")[0],
        year: moment(
          moment()
            .startOf("day")
            .add(-index + counter, "day")
        )
          .format("LL")
          .split(" ")[2],
      });
    }
    console.log(daysAndDates, "++++++++++++++++++++++")

    return daysAndDates;
  };

  onToggleChange = (name, value) => {
    this.setState({ [name]: value });
  };
  onIntervalChange = async (number, string) => {
    let interval = {
      time: string,
      num: number,
    };

    this.setState({ interval: interval });
    await this.fetchId(this.state.response);
  };

  getTimeInterval = async (number, string, display) => {
    let interval = {
      time: string,
      num: number,
      display: display,
    };
    await this.setState({ interval: interval });
    // console.log("interval",this.state.interval)
    await this.fetchId(this.state.response);
  };
  handleApt = (date) => {
    let aptDate = date.toString().split(" ");
    this.setState({
      aptDay: aptDate[3],
      aptMonth: aptDate[4],
      aptYear: aptDate[5],
      time: aptDate[0] + aptDate[1],
    });
    console.log(`something`, this.state.aptDay);
    console.log(`time`, this.state.time);
    // this.removeCard()
  };
  handleAppointment = () => {
    console.log("appointmentDate");
  };
  render() {
    return (
      <>
        <div>
          <MeetingComponent
            handleAppointment={this.handleAppointment}
            handleDialog={this.handleDialog}
            handleApt={this.handleApt}
            state={this.state}
            month={this.state.month}
            monthHeader={this.state.monthHeader}
            getErrorMessage={this.getErrorMessage}
            onToggleChange={this.onToggleChange}
            onIntervalChange={this.onIntervalChange}
            getTimeInterval={this.getTimeInterval}
            year={this.state.year}
            getDateAndDay={this.getDateAndDay}
            colHeadings={this.state.colHeadings}
            value={this.state.query}
            rows={this.state.rows}
            regions={this.state.regions}
            onChange={(e) => this.setState({ query: e.target.value })}
            //  state={this.state}
            personName={this.state.personName}
            appointments={this.state.rows}
            handleSidebar={this.handleSidebar}
            icon={this.iconClick}
            tueAdd={this.tueRowAdd}
            wedAdd={this.wedRowAdd}
            thursAdd={this.thursRowAdd}
            friAdd={this.friRowAdd}
            satAdd={this.satRowAdd}
            sunAdd={this.sunRowAdd}
            rem={this.removeRow}
            remRow2={this.removeTueRow}
            remRow3={this.removeWedRow}
            remRow4={this.removeThursRow}
            remRow5={this.removeFriRow}
            remRow6={this.removeSatRow}
            remRow7={this.removeSunRow}
            handleAccept={this.handleAccept}
            time={this.state.time}
            removeCard={this.removeCard}
          />
          {this.state.open ? (
            <AlertDialog handleDialog={this.handleDialog} state={this.state}
              removeCard={this.removeCard}
            />
          ) : (
            ""
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user, userDetails: state.user.userDetails, userId: state.user.userDetails.userId }
};

export default connect(mapStateToProps, { dispatchAction })(MeetingRequest);