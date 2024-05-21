import React, { Component } from "react";
import Switch from "react-switch";

class Switchicon extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
      <label style={{ marginTop: "10px" }}>
        <span>
          <Switch
            checked={this.state.checked}
            onChange={this.handleChange}
            onColor="#29E224"
            handleDiameter={25}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 3px "
            height={30}
            width={65}
          />
        </span>
      </label>
    );
  }
}

export default Switchicon;
