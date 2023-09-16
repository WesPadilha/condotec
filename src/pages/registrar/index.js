import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/Auth'; 

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './../registrar/registrar.css'

export default function Registrar() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [contato, setContato] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const { Registrar, loadingAuth } = useContext(AuthContext)

  const handleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  async function handleRegistrar(e){
    e.preventDefault();
    if(nome !== '' && email !== '' && senha !== '' && contato !== ''){
      await Registrar(nome, email, senha, contato);
    }
}

  return (
    <div>
      <Header/>
      <div className="margem-cadastro">
        <div className="formulario">
          <h1>Cadastro</h1>
          <form onSubmit={handleRegistrar}>
            <div className="cadastro_caixa">
              <input
                className="cadastro_texto"
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <br/>
            <div className="cadastro_caixa">
              <input
                className="cadastro_texto"
                type="text"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br/>
            <div className="cadastro_caixa">
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
            <div className="cadastro_caixa">
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
              {loadingAuth ? "Carregando..." : "Cadastrar"}
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
