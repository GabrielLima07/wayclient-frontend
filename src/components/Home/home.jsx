import React from "react";
import "../Home/home.css";
import { Link } from "react-router-dom";
import twitterLogo from "../../assets/Home/twitter.png";
import instagramLogo from "../../assets/Home/instagram.png";
import facebookLogo from "../../assets/Home/facebook.png";

const Home = () => {
    return (
        <div>
            <nav className="menu-content">
                <div className="menu">
                    <h2 id="logo">WayClient</h2>
                    <div className="textos">
                        <h3><Link className="link">Central de Ajuda</Link></h3>
                        <h3><Link className="link">FAQ</Link></h3>
                        <h3><Link className="link">Contato</Link></h3>
                        <h3><Link to="/login" className="link">Login</Link></h3>
                        <h3 id="cadastre"><Link to="/signup" className="link">Cadastre-se</Link></h3>
                    </div>
                </div>
            </nav>

            <section className="pc-content">
                <div className="imgPc"></div>
                <div className="frases">
                    <h1>WayClient <p><span>-</span> espera e <span>+</span> vendas, totalmente <br /> automático.</p></h1>
                </div>
            </section>

            <section className="dicas-content">
                <div className="dicas">
                    <div className="caixas-content">
                        <h1>Por que o WayClient?</h1>
                        <div id="caixas">
                            <div id="icon-1"></div>
                            <h4>Melhorar seu atendimento</h4>
                            <br />
                            <p>Maximize a eficiência operacional, melhore a satisfação do seu cliente e 
                            impulsione o crescimento empresarial.</p>
                        </div>
                        <div id="caixas">
                            <div id="icon-2"></div>
                            <h4>Personalização</h4>
                            <br />
                            <p> Ofereça uma experiência personalizada ao cliente, aumentando sua satisfação e <br /> fidelidade.</p>
                        </div>
                        <div id="caixas">
                            <div id="icon-3"></div>
                            <h4>Eficiência</h4>
                            <br />
                            <p>Automatiza processos, reduzindo <br /> tempo e esforço na gestão de <br /> tickets e solicitações.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="gestao-content">
                <div className="gestao">
                    <h1><span>Otimize</span> a gestão <br /> da sua equipe</h1>
                    <br />
                    <p>Aumente a produtividade da sua equipe <br /> de suporte centralizando os registros 
                    de solicitações <br /> com seu cliente em um só lugar.</p>
                </div> 
                <div id="img-1"></div>
            </section>

            <section className="satisfacao-content">
                <div id="img-2"></div>
                <div className="satisfacao">
                    <h1>Aumente o nível <br />de satisfação de <br />seus clientes</h1>
                    <p id="p2">Ofereça uma experiência personalizada,<br /> distribuindo cada chamado para seu setor específico.</p>
                </div>
            </section>

            <section className="otimize-content">
                <div id="img-3"></div>
                <div className="otimize">
                    <h2>Otimize seu fluxo de atendimento!</h2>
                    <p id="p3">Experimente nosso sistema de gestão de atendimentos e eleve a <br /> eficiência da sua equipe. <br />
                    Aumente a satisfação do seu cliente <br /> e impulsione o <br /> crescimento do seu negócio com <br /> nossa plataforma.</p>
                    <button id="bt">Comece Agora!</button>
                </div>
            </section>

            <footer className="rodape-home">
                <div className="rodape">
                    <div id="col1">
                        <h2>Institucional</h2>
                        <ul>Sobre</ul>
                        <ul>Contato</ul>
                        <ul>Política de Privacidade</ul>
                        <ul>Termos de Uso</ul>
                    </div>
                    <div id="col2">
                        <h2>Atendimento</h2>
                        <ul>Segunda à Sexta das 8 às 18h</ul>
                        <ul>(81) 99999-9999</ul>
                    </div>
                    <div id="col3">
                        <h2>Nossas Redes</h2>
                        <div className="icons">
                            <ul id="icon-4"></ul>
                            <ul id="icon-5"></ul>
                            <ul id="icon-6"></ul>
                        </div>
                    </div>
                
                </div>
            </footer>
        </div>
    );
};

export default Home;
