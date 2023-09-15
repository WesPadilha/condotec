import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import './../contatos/contatos.css'

function Contato(props){
    const {
        email1 = "vendas@condoTec.com.br",
        email2 = "condominios@condoTec.com.br",
        telefone1 = '(42) 3622-0000',
        telefone2 = "(42) 3622-0001",
      } = props;
  return (
    <>
    <Header/>
    <div className="margem">
        <div className="caixa_contato">
          <h2>Nossos contatos</h2>
          <h3>E-mail</h3>
          <p>{email1}</p>
          <p>{email2}</p>
          <hr />
          <h3>Telefones</h3>
          <p>{telefone1}</p>
          <p>{telefone2}</p>
          <hr />
          <h3>Localização</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            excepturi sed quo eligendi fugit assumenda, odit hic eveniet
            repudiandae dolore numquam ipsam reiciendis iure quidem quaerat, at
            soluta error aspernatur?
          </p>
          <hr />
          <iframe
            className="maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.2610246823183!2d-51.46827558506222!3d-25.39607178380411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ef362e58d083eb%3A0x1f524a097f777250!2sUnimed%20Guarapuava!5e0!3m2!1spt-BR!2sbr!4v1681265939389!5m2!1spt-BR!2sbr"
          />
        </div>
      </div>
      <br />
      <Footer/>
    </>
  );
}

export default Contato;