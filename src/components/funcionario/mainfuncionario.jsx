import "./mainfuncionario.css"
const Mainfuncionario = ()=>{
    return(
        <div>
        <div className="titulo">
            <p>Bem vindo ao </p><h1> WayClient</h1>
        </div>
            <div className="butoes">
                <button className="btn"> <p>Cadastrar Cliente</p><div className="fa-cadastrar"></div></button>
                <button className="btn"><p>Tickets</p><div className="fa-ticket"></div></button>
                <button className="btn"><p>Atualizar Dados</p><div className="fa-atualizar"></div></button>
                <button className="btn"><p>Historico</p><div className="fa-historico"></div> </button>
                </div>
        </div>
    )
}

export default Mainfuncionario;