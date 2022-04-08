import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <div className="nav">
      <div className="logo">
        <img src="/images/logo.png" alt="" />
      </div>
      <ul className={showLinks ? "links" : "links none"}>
        <li>vacations</li>
        <li>loans</li>
        <li>services</li>
        <li>about us</li>
        <ul className="sign">
          <li className="login">Login</li>
          <li className="started">get started</li>
        </ul>
      </ul>
      <div className="show-menu" onClick={() => setShowLinks(!showLinks)}>
        {showLinks ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
};

export default Navbar;
