import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import "~/assets/output.css";
import LazyLoading from "~/components/commons/LazyLoading";
import Navbar from "~/components/commons/Navbar";
import Wrapper from "~/components/commons/Wrapper";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="h-screen">
          <Navbar />
          <Wrapper>
            <Switch>
              <Route
                path="/streaming"
                exact
                component={LazyLoading(() =>
                  import("~/pages/VisualizationList")
                )}
              />
              <Route
                path="/past"
                exact
                component={LazyLoading(() => import("~/pages/PastStreaming"))}
              ></Route>
              <Route
                path="/past/:id"
                exact
                component={LazyLoading(() =>
                  import("~/pages/VisualizationList")
                )}
              />
              <Route
                path="/"
                exact
                component={LazyLoading(() => import("~/pages/NewStreaming"))}
              />
              <Redirect from="*" to="/" />
            </Switch>
          </Wrapper>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
