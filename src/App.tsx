import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyNavbar from './components/navbar';

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
    </BrowserRouter>
  );
}

export default App;
