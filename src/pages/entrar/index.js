import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/Auth';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './../entrar/entrar.css'

export default function Entrar() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false); 
  const { Entrar, loadingAuth } = useContext(AuthContext);

  async function handleEntrar(e) {
    e.preventDefault();

    if (email !== '' && senha !== '') {
      await Entrar(email, senha);
    }
  }
  const toggleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  return (
    <div>
      <Header/>
      <div className="margem-cadastro">
        <div className="formulario">
            <form onSubmit={handleEntrar}>
            <h1>Bem-vindo!</h1>
            <div className="cadastro_caixa">
                <input
                    className="cadastro_texto"
                    type="text"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <br/><br/>
            <div className="cadastro_caixa">
                <input
                    className="cadastro_texto"
                    type={mostrarSenha ? 'text' : 'password'} 
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
                <button
                    type="button"
                    className={`mostrar_senha ${mostrarSenha ? 'visible' : ''}`}
                    onClick={toggleMostrarSenha}>
                    <span className="aberto"></span>
                    <span className="fechado"></span>
                </button>
            </div>
            <br/><br/>
            <button type="submit" className="bnt_cadastro">
                {loadingAuth ? 'Carregando...' : 'Acessar'}
            </button>
            <br/><br/>
            <Link to="/registrar" className="escolha">
                Criar uma conta
            </Link>
            </form>
        </div>
        </div>
      <Footer/>
    </div>
  );
}
