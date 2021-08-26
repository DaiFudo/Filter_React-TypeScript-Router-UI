import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { App as MainRouter } from "./router";
const App = () => {
  return (
    <Router>
      <MainRouter></MainRouter>
    </Router>
  );
};

export default App;
