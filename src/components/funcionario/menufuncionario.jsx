
import './menufuncionario.css'

const Menufuncionario = ()=>{
      const userData = {
        name:"Filipe Granja",
        imagem:"../../assets/funcionario/perfil.png" ,
    }
    return(
        <div>
            <nav className={"menu-content-funcionario"}> 
             <div className={"menu-funcionario"}>
                <h2 id={"logo"}>WayClient</h2>
               
               <div className={"textos"}>
                <h3 >Tickets</h3>
                <h3 >Mensagens</h3>
                <h3>Histórico</h3>
                <input type="text" placeholder="pesquisar"></input>
                </div>
                <div className='funcio'>
                    <div className="imgPerfil"></div>
                    <p className='nameFun'>{userData.name}</p>
                </div>
                    
             </div>
          </nav>
        </div>
    )
}
export default Menufuncionario;