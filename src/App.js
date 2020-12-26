import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { About } from "./pages/About";
import { Cat } from "./pages/Cat";
import { Top } from "./pages/Top";
import { Portfolio } from "./pages/Portfolio";
import { Signin } from "./pages/Signin";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Top} />
        <Route exact path="/about" component={About} />
        <Route exact path="/cat" component={Cat} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/signin" component={Signin} />
      </Switch>
    </Router>
  );
};

export default App;
