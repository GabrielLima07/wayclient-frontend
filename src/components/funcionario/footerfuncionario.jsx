import './footerfuncionario.css'
const Footerfuncionario = ()=>{
    return(
        <div>
             <section className={"dicas-content-funcionario"}>
                <div className={"dicas-funcionario"}>
                <div className={"caixas-content-funcionario"}>
                <h1>Por que o WayClient?</h1>
                <div id="caixas-funcionario">
                    <div id={"icon-1"}></div>
                    
                <h4>Melhorar seu atendimento</h4>
                <br />
                <p>Maximize a eficiência operacional, melhore a satisfação do seu cliente e 
                impulsione o crescimento empresarial.</p>
                </div>
                <div id="caixas-funcionario">
                <div id={"icon-2"}></div>
                    <h4>Personalização</h4>
                    <br />
                <p> Ofereça uma experiência personalizada  ao cliente, aumentando sua satisfação e <br /> fidelidade.</p>
                </div>
                <div id="caixas-funcionario">
                <div id={"icon-3"}></div>
                    <h4>Eficiência</h4>
                    <br />
                    <p>Automatiza processos, reduzindo <br /> tempo e esforço na gestão de <br /> tickets e solicitações.</p>
                </div>
                </div>

                </div>
          
         </section>    
        </div>
    )
}
export default Footerfuncionario;