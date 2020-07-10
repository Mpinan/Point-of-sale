import React, { Component } from "react";

import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Dashboard from "./dashboard";
import Home from "./Components/home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path={"/"} component={Home} />
            {/* <Route exact path={"/dashboard"} component={Dashboard} /> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
