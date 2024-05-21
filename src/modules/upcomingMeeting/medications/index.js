import React from "react";
import BaseComponent from "../../baseComponent";
import MedicationsComponent from "./medicationComponent";

class ListOfMedications extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      listOfMedications: [
        {
          MedicinePhoto: (
            <img src="/images/advil.png" height="60px" width="60px" />
          ),
          NameOfMedication: "Advil",
          Dosage: "200mg",
          Frequency: "Two times daily, As needed",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <MedicationsComponent
          listOfMedications={this.state.listOfMedications}
          state={this.state}
        />
      </div>
    );
  }
}
export default ListOfMedications;
