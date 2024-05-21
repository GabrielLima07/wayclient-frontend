import Menufuncionario from "../components/funcionario/menufuncionario";
import Navfuncionario from "../components/funcionario/navfuncionario";
import Mainfuncionario from "../components/funcionario/mainfuncionario";
import "./funcionarioHomePage.css"
import Footerfuncionario from "../components/funcionario/footerfuncionario";

const FuncionarioHomePage = ()=>{
    return(
        <div className="container">
            <div className="menufuncionario"><Menufuncionario/></div>
            <div className="ajustes"> 
                <div className="navfuncionario"><Navfuncionario/></div>
                <div className="mainfuncionario"> <Mainfuncionario/></div>
                <div className="footerfuncionario"><Footerfuncionario/></div>
            </div>

        </div>
    )
}
export default FuncionarioHomePage;