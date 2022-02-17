import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../service/authService";
import { useHistory } from "react-router-dom";
import { userLogin } from "./userSlice";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const history = useHistory();

  const [login, { error, /* isLoading, */ data }] = useLoginMutation();
  /*  console.log("login hooks", error, isLoading, data); */

  const verifyLogin = (e) => {
    e.preventDefault();

    //controlli sulla digitazione email e password
    login({ email, password }); //oggetto da passare a RTK
  };

  useEffect(() => {
    if (data && data.access_token) {
      /* console.log("data", data); */
      dispatch(userLogin(data));
      history.replace("/");
    }

    return () => {};
  }, [dispatch, history, data]);

  return (
    <div className="col-md-6 m-auto">
      {error && <h2 className="alert-danger">{error.data.error}</h2>}
      <form onSubmit={verifyLogin} method="POST">
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            Email that you have used while registration.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            name="checkbox"
            className="form-check-input"
            id="remember"
          />
          <label className="form-check-label" htmlFor="remember">
            Remember me
          </label>
        </div>
        <button type="submit" className="btn btn-primary float-right">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
