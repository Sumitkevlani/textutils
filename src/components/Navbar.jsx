import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  function removeAlert() {
    props.setAlert(null);
  }

  function handleChange() {
    if (props.mode === "dark") {
      props.setMode("light");
      props.setAlert({
        type: "success",
        msg: "Light Mode enabled",
      });
      setTimeout(removeAlert, 2000);
    } else {
      props.setMode("dark");
      props.setAlert({
        type: "success",
        msg: "Dark Mode enabled",
      });
      setTimeout(removeAlert, 2000);
    }
  }
  return (
    <nav
      className={`navbar navbar-expand-lg bg-body-tertiary`}
      data-bs-theme={props.mode}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.about}
              </Link>
            </li>
          </ul>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onChange={handleChange}
          />
          <label
            className="form-check-label"
            htmlFor="flexSwitchCheckDefault"
            style={{ color: props.mode === "dark" ? "white" : "black" }}
          >
            {props.mode === "dark" ? "Disable Darkmode" : "Enable Darkmode"}
          </label>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Title here",
  about: "About here",
};
