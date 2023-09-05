import { useEffect, useState } from 'react'
import { fetchAllPokemon } from './helpers/pokemon'
import PokemonList from './components/PokemonList'
import './App.css'

function App() {
  const [allPokemon, setAllPokemon] = useState([])

  useEffect(() => {
    async function getPokemon() {
      const pokemon = await fetchAllPokemon();
      setAllPokemon(pokemon);
    }
    getPokemon();
  },[]);
  return (
    <>
      <PokemonList allPokemon={allPokemon} />
    </>
  )
}

export default App
