import React, { Component } from "react";

import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/home";
import Dashboard from "./Components/User/dashboard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userStatus: "NOT_LOGGED_IN",
      user: {},
    };
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
                <Home {...props} userStatus={this.state.userStatus} />
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
