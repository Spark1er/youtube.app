import React, { Component } from "react";
import Index from "../index/index";
import App from "../App";
import { Switch, Route, Redirect } from "react-router-dom";

export default class routes extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/index" component={Index} />
          <Route exact path="/list" component={App} />
          <Route path="/watch/:id" component={App} />
          <Redirect from="/" to="/index" />
        </Switch>
      </main>
    );
  }
}
