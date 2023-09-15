import { BrowserRouter } from 'react-router-dom'
import RoutesApp from './routes';
import Home from './pages/home';
import Header from './components/Header';
import { ChatProvider } from './context/Context'

import AuthProvider from './context/Auth'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function RouterComponent() {
  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
      <AuthProvider>
        <ChatProvider>
          <ToastContainer autoClose={3000} />
          <RoutesApp/>
        </ChatProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

function App() {
  return <RouterComponent />;
}

export default App;