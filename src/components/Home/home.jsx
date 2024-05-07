import React from "react";
import "../Home/home.css"

const Home = () =>{ return (
    <div>
       
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
       
       <section className={"pc-content"}>

         <div className={"imgPc"}>
         </div>
         <div className={"frases"}>
            <h1>WayClient <p><span>-</span> espera e <span>+</span> vendas, totalmente <br></br> automático.</p></h1>
         </div>
              
              
       </section>

      <section className={"dicas-content"}>
         <div className={"dicas"}>
         <h2>Por que o WayClient?</h2>


        <div className={"caixas-content"}>
         <div id="caixas">
            <div id={"icon-1"}></div>
            
           <h4>Melhorar seu atendimento</h4>
           <br />
           <p>Maximize a eficiência operacional, melhore a satisfação do seu cliente e 
           impulsione o crescimento empresarial.</p>
         </div>
         <div id="caixas">
         <div id={"icon-2"}></div>
            <h4>Personalização</h4>
            <br />
           <p> Ofereça uma experiência personalizada  ao cliente, aumentando sua satisfação e <br /> fidelidade.</p>
         </div>
         <div id="caixas">
         <div id={"icon-3"}></div>
            <h4>Eficiência</h4>
            <br />
            <p>Automatiza processos, reduzindo <br /> tempo e esforço na gestão de <br /> tickets e solicitações.</p>
         </div>
         </div>

         </div>
          
         </section>       
    </div>
)}

export default Home
