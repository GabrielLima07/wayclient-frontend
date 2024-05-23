import "./membrosdep.css";
const Membrosdep = () =>{
    const funData ={
        name: "Filipe Granja",
        imagem: "../../assets/funcionario/perfil.png"
    }
    return(
        <div className="fun-departamento">
            <div className="departamento-fun">
            </div>
            <p className="nome-fun">{funData.name}</p>
        </div>
    )
}
export default Membrosdep;