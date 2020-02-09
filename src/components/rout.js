import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MyAppBar } from "./header";
import { About } from "./about";
import { Contacts } from "./contacts";
import { Home } from "./home";
import { Services } from "./services";

export default function BasicExample() {
  return (
    <Router>
      <MyAppBar />
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
