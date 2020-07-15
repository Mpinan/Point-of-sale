import React, { Component } from "react";
import Signup from "./User/signup";

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleSignUp(data) {
    this.props.handleLogin(data);
    this.props.history.push("/dashboard");
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <h1>Status: {this.props.userStatus}</h1>
        <Signup handleSignUp={this.handleSignUp} />
      </div>
    );
  }
}

export default Home;
