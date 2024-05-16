import "./funcionario.css"
const Funcionario = () =>{
    const userData = {
        name:"Filipe Granja",
        imagem:"../../assets/funcionario/perfil.png" ,
    }
    return(
        <div className="funcionario-menu">
           <div className="imgPerfil"></div>
                <p>{userData.name}</p>
        </div>
    )
}
export default Funcionario;