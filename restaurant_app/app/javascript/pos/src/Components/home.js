import React, { Component, useState } from "react";
import Signup from "./User/signup";
import Login from "./User/login";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
    this.handleRedirect = this.handleRedirect.bind(this);
  }

  handleModal = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  handleRedirect(data) {
    this.props.handleLogin(data);
    this.props.history.push("/dashboard");
  }

  render() {
    const { modal } = this.state;
    return (
      <div>
        <h1>Home</h1>
        <h1>Status: {this.props.userStatus}</h1>
        <Button color="danger" onClick={this.handleModal}>
          Log in
        </Button>
        <Modal isOpen={modal} toggle={this.handleModal}>
          <ModalHeader toggle={this.handleModal}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleModal}>
              Submit
            </Button>{" "}
            <Button color="secondary" onClick={this.handleModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>

        <Signup handleRedirect={this.handleRedirect} />
        <Login handleRedirect={this.handleRedirect} />
      </div>
    );
  }
}

export default Home;
