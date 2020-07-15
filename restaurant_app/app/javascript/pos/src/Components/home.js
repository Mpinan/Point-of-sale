import React, { Component } from "react";
import Signup from "./User/signup";
import Login from "./User/login";

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleRedirect = this.handleRedirect.bind(this);
  }

  handleRedirect(data) {
    this.props.handleLogin(data);
    this.props.history.push("/dashboard");
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <h1>Status: {this.props.userStatus}</h1>
        <Signup handleRedirect={this.handleRedirect} />
        <Login handleRedirect={this.handleRedirect} />
      </div>
    );
  }
}

export default Home;
