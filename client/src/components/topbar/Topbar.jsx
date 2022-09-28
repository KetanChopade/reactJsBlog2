import React from "react";
import "./topbar.css";
import { NavLink, Link } from "react-router-dom";
import settingdp from '../../Images/settingdp.jpeg';

function Topbar() {
  const user = true;
  return (
    <div className="topbar-main bg-light">
      {/* ---- */}

      <div className="container">
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <i className="navbar-brands fa-brands fa-facebook-square fa-lg" />
            <i className="navbar-brands fa-brands fa-twitter-square fa-lg" />
            <i className="navbar-brands fa-brands fa-pinterest-square fa-lg" />
            <i className="navbar-brands fa-brands fa-instagram-square fa-lg" />

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 text-uppercase mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    to="/"
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" className="nav-link" href="#">
                    about
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact" className="nav-link" href="#">
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/write" className="nav-link" href="#">
                    write
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/logout" className="nav-link" href="#">
                  { user && "Logout" }
                  </NavLink>
                </li>
              </ul>
              <Link className="link" to="/settings">
               {
                user ? (
                  <img
                  className="top-img-prof"
                  src={settingdp}
                  alt="Profile icon"
                />
                ) : 
                <div className="navLR">
                <div>
                <NavLink to="/login" className="nav-link navloign">
                    Login
                  </NavLink>
                </div>
                <div>
                <NavLink to="/register" className="nav-link navRegister">
                  Register
                  </NavLink>
                </div>
                  </div>
               }
              </Link>
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        </nav>
      </div>

      {/* ---- */}
    </div>
  );
}

export default Topbar;
