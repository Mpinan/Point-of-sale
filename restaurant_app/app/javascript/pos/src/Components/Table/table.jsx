import React, { Component } from "react";
import "./stylesheets/tables";

class DinningTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTable: false,
    };
  }

  handleBookings = () => {
    if (this.props.items.length >= 1) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    let selectTable = this.props.onClickSelectTable;
    const isBusy = this.handleBookings;

    return (
      <div>
        <button
          style={{
            width: 100,
            height: 100,
          }}
          className={isBusy() ? "btn-lg btn-danger" : "btn-lg btn-primary"}
          id="book-table"
          onClick={selectTable}
        >
          {this.props.number}
        </button>
      </div>
    );
  }
}

export default DinningTable;
