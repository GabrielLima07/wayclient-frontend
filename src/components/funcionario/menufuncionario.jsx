import React, { useState } from 'react';
import './menufuncionario.css';

const Menufuncionario = () => {
  const userData = {
    name: "Filipe Granja",
    imagem: "../../assets/funcionario/perfil.png",
  };

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div>
      <nav className={"menu-content-funcionario"}>
        <div className={"menu-funcionario"}>
          <h2 id={"logo"}>WayClient</h2>
          
          <div className={"textos"}>
            <h3>Tickets</h3>
            <h3>Mensagens</h3>
            <h3>Histórico</h3>
            <input type="text" placeholder="Pesquisar"></input>
          </div>
          <div className='funcio'>
            <div className="imgPerfil"></div>
            <p className='nameFun'>{userData.name}</p>
            <div className="dropdown-toggle" onClick={toggleDropdown}>
              {dropdownVisible ? '▲' : '▼'}
            </div>
            {dropdownVisible && (
              <div className="dropdown-menu">
                <p className="dropdown-item">Perfil</p>
                <hr />
                <p className="dropdown-item">Logout</p>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Menufuncionario;