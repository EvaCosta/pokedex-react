import React, { useState, useEffect } from 'react';
import PokemonService from '../services/PokemonService'; // Importe o serviço
import { Link } from 'react-router-dom';
import './PokemonList.css';

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    async function fetchPokemonList() {
      try {
        const pokemons = await PokemonService.listPokemons();
        setPokemonList(pokemons);
      } catch (error) {
        console.error('Error fetching Pokémon list:', error);
      }
    }
    fetchPokemonList();
  }, []);

  return (
    <div className="pokemon-list">
      <h2>Pokémon List</h2>
      <ul>
        {pokemonList.map((pokemon) => (
          <li key={pokemon.name}>
            <Link to={`/pokemon/${pokemon.name}`}>
              <div className="pokemon-item">
                <span className="pokemon-name">{pokemon.name}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonList;
