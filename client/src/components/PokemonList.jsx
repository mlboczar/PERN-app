export default function PokemonList({ allPokemon }) {
    return(
        <>
            {allPokemon.map((pokemon) => {
                return <p key={pokemon.pokemonId}>{pokemon.name}</p>
            })}
        </>
    );
}
