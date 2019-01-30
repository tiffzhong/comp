import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Match from "./components/Match";
export default (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/users" component={Profile} />
    <Route path="/match/:id" component={Match} />
  </Switch>
);
