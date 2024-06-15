import React, { useState, useEffect } from 'react';
import PokemonService from '../services/PokemonService';
import { useParams } from 'react-router-dom';
import './PokemonDetails.css';

function PokemonDetails() {
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const { pokemonName } = useParams();

  useEffect(() => {
    async function fetchPokemonDetails() {
      try {
        const response = await PokemonService.getPokemonDetails(pokemonName);
        setPokemonDetails(response);
      } catch (error) {
        console.error(`Error fetching details for ${pokemonName}:`, error);
      }
    }
    fetchPokemonDetails();
  }, [pokemonName]);

  if (!pokemonDetails) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="pokemon-details">
      <h2>{pokemonDetails.name}</h2>
      <div className="pokemon-info">
        <div className="pokemon-image">
          <img src={pokemonDetails.image_url} alt={pokemonDetails.name} />
        </div>
        <div className="pokemon-stats">
          <p><strong>Height:</strong> {pokemonDetails.height} dm</p>
          <p><strong>Weight:</strong> {pokemonDetails.weight} hg</p>
          <p><strong>Abilities:</strong> {pokemonDetails.abilities.join(', ')}</p>
          <p><strong>Types:</strong> {pokemonDetails.types.join(', ')}</p>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetails;
