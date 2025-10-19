import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyNavbar from './components/navbar';
import { Container } from 'react-bootstrap';
import { theme } from './pallet';
import Home from './components/pages/home';
import { SelectedRifasProvider } from './customHooks/SelectedRifasContext';

function App() {
  return (
    <BrowserRouter basename="/home">
      <SelectedRifasProvider>

        <MyNavbar />

        <div className="container">
          <main role="main" className="pb-3">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/reservas" element={<>reservas</>} />
            </Routes>
          </main>
        </div>

        <footer className="footer text-light theme-navbar site-footer mt-auto py-3" style={{ backgroundColor: theme.primaryDark, boxShadow: '0 -20px 20px rgba(215, 41, 201, 0.67)' }}>
          <Container style={{ textAlign: "center" }}>
            &copy; 2025 — Rifa solidária para Saviane — desenvolvido por Andrey Costa de Queiroz — queirozandrey5@gmail.com
          </Container>
        </footer>

      </SelectedRifasProvider>

    </BrowserRouter>
  );
}

export default App;
