import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom/cjs/react-router-dom.min";

function PrivateRoute(props) {
  const user = useSelector((state) => state.auth.user);

  console.log(user);

  if (user) {
    return <Route {...props}>{props.children}</Route>;
  }

  return <Redirect to="/login"></Redirect>;
}

export default PrivateRoute;
