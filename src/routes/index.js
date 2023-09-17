import { Routes, Route } from 'react-router-dom'
import Entrar from '../pages/entrar';
import Registrar from '../pages/registrar'
import Chat from './../pages/chat';
import Private from './Private';
import Home from '../pages/home';
import Contato from '../pages/contatos';
import Demo from '../pages/demo';

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/entrar" element={<Entrar />} exact />
      <Route path="/registrar" element={<Registrar />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/demo" element={<Demo />} />
      <Route path="/dashboard" element={<Private><Chat/></Private>} />
    </Routes>
  )
}

export default RoutesApp;
