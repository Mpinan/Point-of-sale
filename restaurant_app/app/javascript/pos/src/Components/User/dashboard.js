import React, { Component } from "react";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleSignUp(data) {
    this.props.history.push("/dashboard");
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <h1>Status: {this.props.userStatus}</h1>
      </div>
    );
  }
}

export default Dashboard;
