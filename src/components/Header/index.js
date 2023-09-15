import { Link } from 'react-router-dom';
import './header.css'

import imgcondiminio from './../../assets/img/condominio1.png';
import lupa from './../../assets/img/lupa.png';

function Header(){
    return(
          <header id="topo">
            <div className="margem_topo">
                <img src={imgcondiminio} width="150" height="150"/>
                <h1>Condo<strong className="branco">TEC</strong> </h1>
                <form class="pesquisa_box">
                  <input type="text" class="pesquisa_text" placeholder="Pesquisar..."/>
                  <button class="pesquisa_button"><img src={lupa} width="35" height="35"/></button>
                </form>
              <div className="esquerda">
                <nav>
                    <ul id="menu">
                      <li>
                        <Link to="/">Página Inicial</Link>
                      </li>
                      <li>
                        <Link to="/contato">Contatos</Link>
                      </li>
                      <li>
                        <Link to="/demo">Condominios</Link>
                      </li>
                      <li className='RE'>
                        <Link to="/registrar">Registrar</Link>
                      </li>
                      <li className='RE'>
                        <Link to="/entrar">Entrar</Link>
                      </li>
                    </ul>
                </nav>
              </div> 
            </div>
        </header>
    );
}

export default Header;