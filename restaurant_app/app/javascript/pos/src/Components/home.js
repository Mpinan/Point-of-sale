import React, { Component } from "react";
import Signup from "./User/signup";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Home</h1>
        <h1>Status: {this.props.userStatus}</h1>
        <Signup />
      </div>
    );
  }
}

export default Home;
