import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./AuthService";

const LoggedInRoute = ({ component: Component, ...rest }) => {
  const user = useContext(AuthContext);

  return (
    <Route
      // {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to={"/"} />
      }
    />
  );
};

export default LoggedInRoute;

//...rest → component以外の全てのpropsを受け取る
