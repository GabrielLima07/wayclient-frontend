import React from 'react';
import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className={"menu-content"}> 
        <div className={"menu"}>
          <h2 id={"logo"}>WayClient</h2>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;