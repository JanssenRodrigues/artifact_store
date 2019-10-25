import React from "react";
import { Router } from "@reach/router";

import { BaseStyle } from "./style";
import RegisterPage from "./components/RegisterPage";
import ListPage from "./components/ListPage";

const App = () => (
  <React.Fragment>
    <BaseStyle />
    <Router>
      <ListPage path="/" />
      <RegisterPage path="/register" />
    </Router>
  </React.Fragment>
);

export default App;
