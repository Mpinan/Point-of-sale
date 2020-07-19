import React, { Component, useState } from "react";
import Signup from "./User/signup";
import Login from "./User/login";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalLogin: false,
      modalSignUp: false,
    };
    this.handleRedirect = this.handleRedirect.bind(this);
    this.handleLogOutClick = this.handleLogOutClick.bind(this);
  }

  handleLogInModal = () => {
    this.setState({
      modalLogin: !this.state.modalLogin,
    });
  };

  handleSignUpModal = () => {
    this.setState({
      modalSignUp: !this.state.modalSignUp,
    });
  };

  handleRedirect(data) {
    this.props.handleLogin(data);
    this.props.history.push("/dashboard");
  }

  handleLogOutClick() {
    this.props.handleLogout();
  }

  render() {
    const { modalSignUp, modalLogin } = this.state;
    return (
      <div>
        <h1>Home</h1>
        <h1>Status: {this.props.userStatus}</h1>
        <Button color="info" onClick={this.handleSignUpModal}>
          Sign Up
        </Button>
        <Modal isOpen={modalSignUp} toggle={this.handleSignUpModal}>
          <ModalHeader toggle={this.handleSignUpModal}>Modal title</ModalHeader>
          <ModalBody>
            <Signup handleRedirect={this.handleRedirect} />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleSignUpModal}>
              Submit
            </Button>{" "}
            <Button color="secondary" onClick={this.handleSignUpModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        {this.props.userStatus === "LOGGED_IN" ? (
          <Button color="danger" onClick={() => this.handleLogOutClick()}>
            Log out
          </Button>
        ) : (
          <Button color="info" onClick={this.handleLogInModal}>
            Log in
          </Button>
        )}
        {/* <Button color="danger" onClick={this.handleLogInModal}>
          Log in
        </Button> */}
        <Modal isOpen={modalLogin} toggle={this.handleLogInModal}>
          <ModalHeader toggle={this.handleLogInModal}>Modal title</ModalHeader>
          <ModalBody>
            <Login handleRedirect={this.handleRedirect} />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleLogInModal}>
              Submit
            </Button>{" "}
            <Button color="secondary" onClick={this.handleLogInModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Home;
