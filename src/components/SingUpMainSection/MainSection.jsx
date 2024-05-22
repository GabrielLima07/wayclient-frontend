import React from 'react';
import "./mainSection.css";

const MainSection = () => {
  return (
    <div id='su-main-div'>
      <section id="su-col-one">
        <div>
          <h1 id="su-col-one-main-title">
            WayClient
          </h1>
        </div>
        <div>
          <h2 id="su-col-one-sec-title">
            Com a gente o seu caminho fica mais seguro.
          </h2>
        </div>
      </section>
      <section id="su-col-two">
        <div id="su-col-two-main-title">
          <h1>
            Cadastre-se
          </h1>
        </div>
        <div className='su-input'>
          <label className='ls-text'>
            Nome completo
          </label>
          <input 
            className='su-form-field'
            type='text' 

          />
        </div>
        <div className='su-input'>
          <label className='ls-text'>
            Telefone
          </label>
          <input 
            className='su-form-field'
            type='tel' 

          />
        </div>
        <div className='su-input'>
          <label className='ls-text'>
            Email
          </label>
          <input 
            className='su-form-field' 
            type='email' 

          />
        </div>
        <div className='su-input'>
          <label className='ls-text'>
            Senha
          </label>
          <input 
            className='su-form-field' 
            type='password'

          />
        </div>
        <div className='su-input'>
          <label className='ls-text'>
            Confirme sua senha
          </label>
          <input 
            className='su-form-field' 
            type='password' 

          />
        </div>
        <div id='ls-access-btn'>
          <button>
            Cadastrar
          </button>
        </div>
      </section>
    </div>
  )
}

export default MainSection;