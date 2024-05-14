import React from "react";
import "../CadastroColaborador/cadastroColaborador.css"
import NavbarAdm from "../NavbarAdm/navbarAdm";

const cadastroColaborador = () => {
    return (
        <div>
            <NavbarAdm />

            <div className={"caixaCadastro"}>
                <h1 className={"tituloCadastro"}>Cadastro de colaborador</h1>
                <hr />
                <div className={"form"}>
                    <div className={"formCadastro"}>
                        <h3>Nome Completo</h3>
                        <input type="text" id={"inputNome"} />
                        <h3>E-mail</h3>
                        <input type="text" id={"inputEmail"} />
                        <h3>Senha de acesso</h3>
                        <input type="password" id={"inputSenha"} />
                        <h3>Repita a senha</h3>
                        <input type="password" id={"inputSenha"} />
                    </div>
                    <div className={"formCadastro2"}>
                        <h3>Perfil de Acesso</h3>
                        <input type="text" id={"inputAcesso"} list="acesso" />
                        <datalist id="acesso">
                            <option value="Profissional"></option>
                            <option value="Profissional"></option>
                        </datalist>
                        <h3>Departamento</h3>
                        <input type="text" id={"inputDepartamento"} list="departamento" />
                        <datalist id="departamento">
                            <option value="Financeiro"></option>
                            <option value="Design"></option>
                        </datalist>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default cadastroColaborador
