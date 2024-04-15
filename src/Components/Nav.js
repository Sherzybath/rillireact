import React from "react";
import logo from "./Home/logo.png";
const Nav = ({ func }) => {
  return (
    <div id="nav">
      <div id="left">
        <img className="GolGol" src={logo} />
      </div>
      <div id="right">
        <button className="btn" id="signup" onClick={() => func(1)}>
          Sign up
        </button>
        <button className="btn" id="login" onClick={() => func(2)}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Nav;
