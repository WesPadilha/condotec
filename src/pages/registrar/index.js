import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './../registrar/registrar.css'

export default function Registrar() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [contato, setContato] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const handleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  const handleRegistrar = (e) => {
    e.preventDefault();
    if (nome !== '' && email !== '' && senha !== '' && contato !== '') {
      // Realizar a ação de registro aqui
      console.log('Nome:', nome);
      console.log('Email:', email);
      console.log('Senha:', senha);
      console.log('Contato:', contato);
    }
  };

  return (
    <div>
      <Header/>
        <div className="margem-cadastro">
            <div className="formulario">
            <h1>Cadastro</h1>
                <form onSubmit={handleRegistrar}>
                <div div className="cadastro_caixa">
                    <input
                        className="cadastro_texto"
                        type="text"
                        placeholder="Nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>
                <br/>
                <div div className="cadastro_caixa">
                    <input
                        className="cadastro_texto"
                        type="text"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <br/>
                <div div className="cadastro_caixa">
                    <input
                        className="cadastro_texto"
                        type={mostrarSenha ? "text" : "password"} // Alterna entre text e password
                        placeholder="Senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                    <button
                        type="button"
                        className={`mostrar_senha ${mostrarSenha ? 'visible' : ''}`}
                        onClick={handleMostrarSenha}>
                        <span className="aberto"></span>
                        <span className="fechado"></span>
                    </button>
                </div>
                <br/>
                <div div className="cadastro_caixa">
                    <input
                        className="cadastro_texto"
                        type="text"
                        placeholder="Contato"
                        value={contato} 
                        onChange={(e) => setContato(e.target.value)}
                    />
                </div>
                <br/>
                <button type="submit" className="bnt_cadastro">
                    Cadastrar
                </button>
                <br/><br/>
                <Link to="/entrar" className='escolha '>Já possui uma conta? Faça login</Link>
            </form>
            </div>
        </div>
      <Footer/>
    </div>
  );
}
