import './App.css';
import {useState, useEffect} from 'react';
import { fetchAllPokemon } from './helpers/pokemon';
import PokemonList from './components/PokemonList';

function App() {
  // useState
  const [allPokemon, setAllPokemon] = useState([]);

  // useEffect
  useEffect(() => {
    async function fetchData() {
      const pokemon = await fetchAllPokemon();
      setAllPokemon(pokemon);
      console.log(pokemon);
      return pokemon;
    }
    fetchData();
  },[]);

  return (
    <>
      <PokemonList allPokemon={allPokemon} />
    </>
  )
}

export default App;
