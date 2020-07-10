import React, { Component } from "react";

import { Button } from "reactstrap";

class Menu extends Component {
  state = {
    modal: false,
  };

  handleModal = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleBookings = () => {
    this.setState({ amount: !this.state.isBusy });
  };

  render() {
    const { name } = this.props;

    return (
      <div style={{ margin: "10px", padding: "15px" }}>
        <div>
          <Button
            style={{
              width: 150,
              height: "auto",
            }}
            className="btn-primary btn-lg"
            color={this.state.isBusy ? "danger" : "primary"}
            id="add-Item"
            onClick={this.handleModal}
          >
            {name}
          </Button>
        </div>
      </div>
    );
  }
}

export default Menu;
