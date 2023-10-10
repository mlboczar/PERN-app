import './App.css';
import {useState, useEffect} from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import { fetchAllPokemon } from './helpers/pokemon';
import PokemonList from './components/PokemonList';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  // useState
  const [token, setToken] = useState(null);
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
  console.log(token);

  return (
    <>
    <Routes>
      <Route path="/" element={
        <div>
          <h1>Home</h1>
          <nav>
            <Link to="/register"></Link>
            <Link to="/login"></Link>
            <Link to="/pokemon"></Link>
          </nav>
        </div>
      } />
      <Route path="/register" element={<Register setToken={setToken} />} />
      <Route path="/login" element={<Login setToken={setToken} />} />
      <Route path="/pokemon" element={<PokemonList allPokemon={allPokemon} setAllPokemon={setAllPokemon} />} />
    </Routes>
      
    </>
  )
}

export default App;
