import React from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  const user = useSelector((state) => state.auth.user);

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
            {user && (
              <Fragment>
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
                {user && (
                  <div className="d-lg-flex ">
                    <li className="nav-link">{user.name}</li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="selected"
                        className="nav-link"
                        to="/logout"
                      >
                        <span
                          data-bs-toggle="collapse"
                          data-bs-target=".navbar-collapse.show"
                        >
                          LogOut
                        </span>
                      </NavLink>
                    </li>
                  </div>
                )}
              </Fragment>
            )}

            {!user && (
              <Fragment>
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
              </Fragment>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
