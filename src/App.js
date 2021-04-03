import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import "~/assets/output.css";
import LazyLoading from "~/components/commons/LazyLoading";
import Navbar from "~/components/commons/Navbar";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route
            path="/streaming"
            exact
            component={LazyLoading(() => import("~/pages/NewStreaming"))}
          />
          <Route
            path="/past"
            exact
            component={LazyLoading(() => import("~/pages/NewStreaming"))}
          ></Route>
          <Route
            path="/past/:id"
            exact
            component={LazyLoading(() => import("~/pages/NewStreaming"))}
          />
          <Route
            path="/"
            exact
            component={LazyLoading(() => import("~/pages/NewStreaming"))}
          />
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
