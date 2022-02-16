import React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { userLogout } from "./userSlice";
import { useDispatch } from "react-redux";
const Logout = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userLogout(null));
    history.replace("/");
    return () => {};
  }, [history]);

  return <div>Loging out...</div>;
};

export default Logout;
