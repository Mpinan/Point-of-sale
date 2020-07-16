import React, { Component } from "react";
import PinInput from "react-pin-input";
import "./App.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      pin: 123456789,
    };
    //   this.handleSignUp = this.handleSignUp.bind(this);
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <h1>{this.props.userStatus}</h1>
      </div>
    );
  }
}

export default Dashboard;
