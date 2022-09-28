import React from "react";
import "./register.css";
import {Link} from 'react-router-dom'

function Register() {
  return (
    <div>
      <div className="register  d-flex align-items-center justify-content-center flex-direction-column">
        <span className="registerTitle">Register</span>
        <form className="registerForm">
          <label>Username</label>
          <input
            className="registerInput"
            type="text"
            placeholder="Enter your username..."
          />
          <label>Email</label>
          <input
            className="registerInput"
            type="text"
            placeholder="Enter your email..."
          />
          <label>Password</label>
          <input
            className="registerInput"
            type="password"
            placeholder="Enter your password..."
          />
          <button className="registerButton">Register</button>
        </form>
        <button className="registerLoginButton  m-2">
        <Link className="link " to="/login">
        Login
            </Link></button>
      </div>
    </div>
  );
}

export default Register;
