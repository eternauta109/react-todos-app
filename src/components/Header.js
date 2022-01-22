import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Mytodo
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                activeClassName="selected"
                className="nav-link active"
                to="/"
              >
                <span
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse.show"
                >
                  Home
                </span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="selected"
                className="nav-link"
                to="/lists"
              >
                <span
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse.show"
                >
                  List
                </span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="selected"
                className="nav-link"
                to="/todos"
              >
                <span
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse.show"
                >
                  Todos
                </span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="selected"
                className="nav-link"
                to="/login"
              >
                <span
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse.show"
                >
                  Login
                </span>{" "}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="selected"
                className="nav-link"
                to="/register"
              >
                <span
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse.show"
                >
                  Register
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
