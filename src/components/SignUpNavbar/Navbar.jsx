import React from 'react';
import "./navbar.css";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/")
  }

  return (
    <div>
      <nav className={"menu-content"}> 
        <div className={"menu"}>
          <h2 id={"su-logo"} onClick={handleLogoClick}>WayClient</h2>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;