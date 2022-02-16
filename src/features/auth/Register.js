import React, { useState, useEffect } from "react";
import { useRegisterMutation } from "../../service/authService";
import { useDispatch } from "react-redux";
import { userRegister } from "./userSlice";
import { useHistory } from "react-router-dom";
import FieldError from "../../components/FieldError";

const Register = () => {
  const dispatch = useDispatch();
  const [register, { error, /* isLoading, */ data }] = useRegisterMutation();
  const [trigger, setTrigger] = useState(true);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let p1 = e.target.password.value;
    let p2 = e.target.confirmpassword.value;
    let name = e.target.name.value;
    let email = e.target.email.value;
    if (p1 !== p2) {
      return alert("password non uguale");
    }
    register({ name, email, password: p1, password_confirmation: p2 });
    setTrigger(!trigger);
    console.log("data in submit", data, error);
  };

  useEffect(() => {
    if (data && data.access_token) {
      console.log("data", data);
      dispatch(userRegister(data));
      history.replace("/");
    }
    console.log("data", data);
    return () => {};
  }, [dispatch, history, data, trigger]);

  const emailError = error ? error.data.errors.email : [];
  const nameError = error ? error.data.errors.name : [];
  const passwordError = error ? error.data.errors.password : [];

  console.log("register error", emailError, nameError, passwordError);

  return (
    <div>
      <div className="col-md-6 m-auto">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
            <FieldError errors={emailError} />

            <input
              type="text"
              name="name"
              required="required"
              className="form-control"
              id="name"
              aria-describedby="nameHelp"
              placeholder="Enter name"
            />
            <small id="nameHelp" className="form-text text-muted">
              insert your name
            </small>
            <FieldError errors={nameError} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              required="required"
              className="form-control"
              id="password"
              placeholder="Password"
            />
            <FieldError errors={passwordError} />
          </div>
          <div className="form-group">
            <label htmlFor="confirmpassword">Password</label>
            <input
              type="password"
              name="password2"
              className="form-control"
              id="confirmpassword"
              placeholder="Password Again"
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
              I accept terms and conditions
            </label>
          </div>
          <button type="submit" className="btn btn-primary float-right">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
