import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import RickAndMorty from './components/RickAndMorty';
import Pokemon from './components/Pokemon';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/rick-and-morty" element={<RickAndMorty />} />
        <Route path="/pokemon" element={<Pokemon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
