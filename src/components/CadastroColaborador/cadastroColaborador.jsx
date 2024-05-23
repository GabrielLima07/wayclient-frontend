import React, { useState } from "react";
import "../CadastroColaborador/cadastroColaborador.css"
import NavbarAdm from "../NavbarAdm/navbarAdm";

const cadastroColaborador = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [departamento, setDepartament] = useState('');

    const handleNomeChange = (event) => {
        setNome(event.target.value);
      };
    
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };
    
      const handleSenhaChange = (event) => {
        setSenha(event.target.value);
      };

      const handleDepartamentoChange = (event) => {
        setDepartament(event.target.value);
      }

      const handleCadastroColaboradorClick = () => {
        
      }

    return (
        <div>
            <NavbarAdm />

            <section className="section-cadastro">
                <h1 className="text">Cadastro de Colaborador</h1>

                <div className="form-cadastro">
                    <div className="form">
                        <label className="text">Nome Completo</label>
                        <input type="text" id="input-nome" value={nome} onChange={handleNomeChange}/>
                        <label className="text">E-mail</label>
                        <input type="text" id="input-email" value={email} onChange={handleEmailChange} />
                        <label className="text">Senha de Acesso</label>
                        <input type="password" id="input-senha" value={senha} onChange={handleSenhaChange} />
                        <label className="text">Repita a senha</label>
                        <input type="password" id="input-senha" />
                    </div>

                    <div className="form2">
                        <label className="text">Departamento</label>
                        <input type="text" id={"input-departamento"} list="departamento" value={departamento} onChange={handleDepartamentoChange} />
                        <datalist id="departamento">
                            <option value="Financeiro"></option>
                            <option value="Design"></option>
                        </datalist>
                    </div>
                </div>
                
            </section>
            <button className="btn-cadastro-colaborador" 
            onClick={handleCadastroColaboradorClick}>Cadastrar colaborador</button>

            <footer className="footerAdm">
                <div className="text-footer"><h3>@WayClient2024</h3></div>
            </footer>
        </div>
    )
}

export default cadastroColaborador
