import React, { useState } from "react";
import "./header.css"; // Import css
const Navbar = () => {
  return (
    <div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <img src="https://cdn2.iconfinder.com/data/icons/interface-solid-2/32/menu-style1-45.png"></img>
      </button>
    </div>
  );
};
export default Navbar;
