import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
export default (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/users" component={Profile} />
  </Switch>
);
