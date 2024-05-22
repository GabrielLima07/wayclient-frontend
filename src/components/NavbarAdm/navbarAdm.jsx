import React from "react";
import "../NavbarAdm/navbarAdm.css"
import fotoPerfil from "../../assets/Login/perfil.png"

const navbarAdm = () => {
    return (
        <div>
            <nav className={"menuAdm-content"}>
                <div className={"menuAdm"}>
                    <h2 id={"logo"}>WayClient</h2>

                    <div className={"textosAdm"}>
                        <h3>Tickets</h3>
                        <h3>Cadastro</h3>
                        <h3>Histórico</h3>
                    </div>
                    <div className={"busca"}>
                        <input type="text" id="busca" placeholder={"Buscar"} />
                    </div>

                </div>
                <div className={"perfil"}>
                    <img className="foto-perfil" />
                    <h3>Alice Castro</h3>
                </div>

            </nav>
            <div className={"menuAdm2"}>
                <h4>Monitoramento</h4>
                <h4>Horário de Atendimento</h4>
                <h4>Central de Ajuda</h4>
                <h4>Página de Contato</h4>
            </div>
        </div>
    )
}

export default navbarAdm