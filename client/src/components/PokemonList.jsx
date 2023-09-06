import Pokemon from "./Pokemon";

export default function PokemonList({ allPokemon }) {

    return(
        <>
            { allPokemon.map((pokemon) => {
                return <Pokemon key={pokemon.pokemonId} pokemon={pokemon} />
            }) }
        </>
    );
}

// PropsType to further investigate the props validation
