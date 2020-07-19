import React, { Component } from "react";

import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/home";
import Dashboard from "./Components/User/dashboard";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userStatus: "NOT_LOGGED_IN",
      user: {},
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleUserStatus() {
    axios
      .get("http://localhost:3000/logged_in", { withCredentials: true })
      .then((response) => {
        if (
          response.data.logged_in &&
          this.state.userStatus === "NOT_LOGGED_IN"
        ) {
          this.setState({ userStatus: "LOGGED_IN", user: response.data.user });
        } else if (
          !response.data.logged_in &&
          this.state.userStatus === "LOGGED_IN"
        ) {
          this.setState({ userStatus: "NOT_LOGGED_IN", user: {} });
        }
      })
      .catch((error) => {});
  }

  handleLogin(data) {
    this.setState({ userStatus: "LOGGED_IN", user: data.user });
  }

  componentDidMount() {
    this.handleUserStatus();
  }

  handleLogout() {
    this.setState({
      userStatus: "NOT_LOGGED_IN",
      user: {},
    });
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path={"/"}
              render={(props) => (
                <Home
                  {...props}
                  handleLogin={this.handleLogin}
                  handleLogout={this.handleLogout}
                  userStatus={this.state.userStatus}
                />
              )}
            />
            <Route
              exact
              path={"/dashboard"}
              render={(props) => (
                <Dashboard {...props} userStatus={this.state.userStatus} />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
