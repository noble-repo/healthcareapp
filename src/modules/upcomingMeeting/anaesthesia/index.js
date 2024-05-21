import React from "react";
import BaseComponent from "../../baseComponent";
import AnaesthesiaComponent from "./anaesthesiaComponent";

class AnaesthesiaClearance extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      anesthesiaClearanceRecommandation: [
        {
          anesthesiologistRecommendation:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
      ],
      row: [
        {
          imageUrl: "document",
        },
        {
          imageUrl: "",
        },
        {
          imageUrl: "",
        },
        {
          imageUrl: "",
        },
        {
          imageUrl: "",
        },
        {
          imageUrl: "",
        },
      ],
      isAnyDocumentChecked: false,
      checked: false,
    };
  }
  switchChange = (checked) => {
    this.setState({ checked: checked });
  };
  checkedDocument = (event) => {
    this.setState({ isAnyDocumentChecked: event.target.checked });
  };

  render() {
    return (
      <div>
        <AnaesthesiaComponent
          anesthesiaClearanceRecommandation={
            this.state.anesthesiaClearanceRecommandation
          }
          checkedDocument={this.checkedDocument}
          switchChange={this.switchChange}
          state={this.state}
        />
      </div>
    );
  }
}
export default AnaesthesiaClearance;
