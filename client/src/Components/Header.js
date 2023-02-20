import React from "react";
import logo from "./Assets/logo.png";

function Header() {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container">
        <a className="navbar-brand">
          <div className="d-flex">
            <img src={logo} alt="logo" className="logo" />
                <div>ProjectMgmt</div>
          </div>
        </a>
      </div>
    </nav>
  );
}

export default Header;
