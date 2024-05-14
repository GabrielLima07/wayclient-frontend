import React from 'react';
import "./footer.css";
import twitterLogo from "../../assets/Home/twitter.png";
import instagramLogo from "../../assets/Home/instagram.png";
import facebookLogo from "../../assets/Home/facebook.png";

const Footer = () => {
  return (
    <div>
      <footer className={"rodape-login"}>
        <div className={"rodape-login-div"}>
          <ul id={"col1-login"}>
            <li><h2>Institucional</h2></li>
            <li>Sobre</li>
            <li>Contato</li>
            <li>Política de Privacidade</li>
            <li>Termos de Uso</li>
          </ul>
          <ul id={"col2-login"}>
            <li><h2>Atendimento</h2></li>
            <li>Segunda à Sexta das 8 às 18h</li>
            <li>(81) 99999-9999</li>
           </ul>
          <ul id={"col3-login"}>
            <li><h2>Nossas Redes</h2></li>
            <div>
              <li id={"icon-1-login"}>
                <img src={twitterLogo} />
              </li>
              <li id={"icon-2-login"}>
                <img src={instagramLogo} />
              </li>
              <li id={"icon-3-login"}>
                <img src={facebookLogo} />
              </li>
            </div>
          </ul>  
        </div>
      </footer>
    </div>
  )
}

export default Footer