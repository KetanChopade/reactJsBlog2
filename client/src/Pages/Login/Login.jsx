import React from "react";
import "./login.css";
import {Link} from 'react-router-dom'

function Login() {
  return (
    <div className="login-main">
      {/* <button className="writeSubmit text-white m-3 float-end" type="submit"> 
        Register
    </button> */}
      <div className="login d-flex align-items-center justify-content-center flex-direction-column">
        <form className="loginForm">
          <h1 className="text-center loginTitle">Login</h1>
          <label>Email</label>
          <input
            className="loginInput"
            type="text"
            placeholder="Enter your email..."
          />
          <label>Password</label>
          <input
            className="loginInput"
            type="password"
            placeholder="Enter your password..."
          />
          <button className="loginButton">Login</button>
        </form>

        <button className="loginRegisterButton m-2">
          {" "}
          <Link className="link" to="/register">
            Register
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Login;
