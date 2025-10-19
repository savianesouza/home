import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyNavbar from './components/navbar';
import { Container } from 'react-bootstrap';
import { theme } from './pallet';

function App() {
  return (
    <BrowserRouter basename="/home">
      <MyNavbar />

      <div className="container">
        <main role="main" className="pb-3">
          <Routes>
            <Route path="/" element={<>rifas</>} />
            <Route path="/reservas" element={<>reservas</>} />
          </Routes>
        </main>
      </div>

      <footer className="footer text-light theme-navbar site-footer mt-auto py-3" style={{backgroundColor: theme.primaryDark}}>
        <Container>
          &copy; 2025 — Rifa solidária para Saviane — desenvolvido por Andrey Costa de Queiroz — queirozandrey5@gmail.com
        </Container>
      </footer>
    </BrowserRouter>
  );
}

export default App;
