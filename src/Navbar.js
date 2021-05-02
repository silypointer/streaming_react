import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light  navbar-color">
        <Link to="/">
          {" "}
          <span className="navbar-brand">Play Movie</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li> */}
          </ul>
          <div className="form-inline my-2 my-lg-0">
            {/* <label
              className="btn btn-outline-danger my-2 my-sm-0 disabled"
              style={{ marginRight: "5px" }}
            >
              <Clock />
            </label> */}

            <button className="btn btn-outline-warning my-2 my-sm-0">
              Login
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default withRouter(Navbar);
