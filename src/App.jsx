import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/navbar';
import Home from './pages/home';
import Sobre from './pages/sobre';
import Contato from './pages/contato';
import NotFound from './pages/not-found';
import './App.css';

const PAGES = {
  HOME: 'Home',
  SOBRE: 'Sobre',
  CONTATO: 'Contato',
};

function App() {
  const location = useLocation();
  const currentPage = location.pathname.split('/')[1];
  const selectedItem = currentPage === '' ? PAGES.HOME : currentPage;

  return (
    <div className="root-container">
      <Navbar items={Object.values(PAGES)} selectedItem={selectedItem} />
      <div className="content-root">
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="sobre" element={<Sobre />} />
            <Route path="contato" element={<Contato />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
