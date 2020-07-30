import React, { Component } from "react";
import Pin from "./pinPage";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.handleRedirect = this.handleRedirect.bind(this);
  }

  handleRedirect() {
    console.log(this.props);
    this.props.history.push("/mainpage");
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <h1>Status: {this.props.userStatus}</h1>
        {console.log(this.props)}
        <Pin userPin={this.props.user.pin} redirect={this.handleRedirect} />
      </div>
    );
  }
}

export default Dashboard;
