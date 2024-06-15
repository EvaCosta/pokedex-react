import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Pokédex</h1>
        </header>
        <main>
          <Routes>
            <Route exact path="/" element={<PokemonList />} />
            <Route path="/pokemon/:pokemonName" element={<PokemonDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
