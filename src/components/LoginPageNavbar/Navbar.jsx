import React from 'react';
import "./navbar.css";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate("/signup")
  }

  const handleLoginClick = () => {
    navigate("/login")
  }

  const handleLogoClick = () => {
    navigate("/")
  }

  return (
    <div>
      <nav className={"menu-content"}> 
        <div className={"menu"}>
            <h2 id={"ls-logo"} onClick={handleLogoClick}>WayClient</h2>

            <div className={"textos"}>
              <h3>Central de Ajuda</h3>
              <h3>FAQ</h3>
              <h3>Contato</h3>
              <h3 onClick={handleLoginClick}>Login</h3>

              <h3 id={"cadastre"} onClick={handleSignupClick}>Cadastre-se</h3>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Navbar;