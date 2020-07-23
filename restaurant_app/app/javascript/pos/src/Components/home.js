import React, { Component } from "react";
import axios from "axios";
import Signup from "./User/signup";
import Login from "./User/login";
import ModalPopUp from "./modals";

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleRedirect = this.handleRedirect.bind(this);
    this.handleLogOutClick = this.handleLogOutClick.bind(this);
  }

  handleRedirect(data) {
    this.props.handleLogin(data);
    this.props.history.push("/dashboard");
  }

  handleLogOutClick() {
    axios
      .delete("http://localhost:3000/logout", { withCredentials: true })
      .then((response) => {
        this.props.handleLogout();
      })
      .catch((error) => {
        console.log("logout error", error);
      });
  }

  render() {
    // const { modalSignUp, modalLogin } = this.state;
    return (
      <div>
        <h1>Home</h1>
        <h1>
          Status: {this.props.userStatus}
          {console.log(this.props)}
        </h1>
        <ModalPopUp />
      </div>
    );
  }
}

export default Home;
