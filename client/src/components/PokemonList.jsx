import Pokemon from "./Pokemon";
import CreatePokemonForm from "./CreatePokemonForm";

export default function PokemonList({ allPokemon, setAllPokemon }) {
    return(
        <>
            <CreatePokemonForm allPokemon={allPokemon} setAllPokemon={setAllPokemon} />
            { allPokemon.map((pokemon) => {
                return <Pokemon key={pokemon.pokemonId} pokemon={pokemon} />
            }) }
        </>
    );
}

// PropsType to further investigate the props validation
