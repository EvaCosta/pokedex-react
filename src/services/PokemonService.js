import axios from 'axios';

const POKEAPI_BASE_URL = 'http://localhost:8000';

const PokemonService = {
  listPokemons: async () => {
    try {
      const response = await axios.get(`${POKEAPI_BASE_URL}/pokemons/`);
      return response.data.results;
    } catch (error) {
      console.error('Error fetching Pokémon list:', error);
      throw error;
    }
  },

  getPokemonDetails: async (pokemonName) => {
    try {
      const response = await axios.get(`${POKEAPI_BASE_URL}/pokemon/${pokemonName}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching details for Pokémon '${pokemonName}':`, error);
      throw error;
    }
  }
};

export default PokemonService;
