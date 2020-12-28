import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { About } from "./pages/About";
import { Cat } from "./pages/Cat";
import { Top } from "./pages/Top";
import { Portfolio } from "./pages/Portfolio";
import Signin from "./pages/Signin";
import LoggedInRoute from "../src/firebase/LoggedInRoute";
import { AuthProvider } from "./firebase/AuthService";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <LoggedInRoute exact path="/" component={Top} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/about" component={About} />
          <Route exact path="/cat" component={Cat} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
