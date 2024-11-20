import React from "react";
import "../styles/register.css";

const Register = () => {
  return (
    <div className="container">
      <div className="nav">
        <div className="header">REGISTER</div>
      </div>
      <div className="form">
        <div className="name">
          <input type="text" />
          <input type="text" />
        </div>
        <input type="email" />
        <input type="phone" />
        <input type="password" />
      </div>
    </div>
  );
};

export default Register;
