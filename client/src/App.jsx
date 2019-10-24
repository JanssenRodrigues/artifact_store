import React from "react";
import { Router } from "@reach/router";

import RegisterPage from "./components/RegisterPage";
import { BaseStyle } from "./style";

const App = () => (
  <React.Fragment>
    <BaseStyle />
    <Router>
      <RegisterPage path="/" />
    </Router>
  </React.Fragment>
);

export default App;
