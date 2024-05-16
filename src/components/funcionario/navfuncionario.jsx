import Membrosdep from "./membrosdep";
import Situacoe from "./situacoes";
import '../funcionario/navfuncionario.css'

const Navfuncionario = () =>{
    return(
        <div className="nav-fun">
            <nav className="nav-funcionario">
                <div>
                    <h3 className="dpfinanceiro">
                        Departamento Financeiro
                    </h3>
                    <hr/>
                    <Situacoe/>
                    <hr/>
                    <h3 className="mb-departamento">Membros do Departamento</h3>
                    <Membrosdep/>
                    <hr/>
                </div>

            </nav>
        </div>
    )
}
export default Navfuncionario;