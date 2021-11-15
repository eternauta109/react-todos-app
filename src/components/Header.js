import React from "react";
import { Link,NavLink } from "react-router-dom";

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
              <NavLink activeClassName='selected' className="nav-link active" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName='selected' className="nav-link" to="/lists">
                List
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName='selected' className="nav-link" to="/todos">
                Todos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName='selected' className="nav-link" to="/login">Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName='selected' className="nav-link" to="/register">Register</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};


export default Header;