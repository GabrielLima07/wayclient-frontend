import React from "react";
import "../Home/home.css"

const Home = () =>{ return (
    <section>
       
          <nav className={"menu-content"}> 
             <div className={"menu"}>
                <h2 id={"logo"}>WayClient</h2>
               
               <div className={"textos"}>
                <h3 >Central de Ajuda</h3>
                <h3 >FAQ</h3>
                <h3>Contato</h3>
                <h3 >Login</h3>
                
                <h3 id={"cadastre"}>Cadastre-se</h3>
                </div>
             </div>
          </nav>
       
    </section>
)}

export default Home
