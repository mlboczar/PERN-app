export default function Pokemon({ pokemon }) {

    return(
        <p key={pokemon.pokemonId}>{pokemon.name}</p>
    );
}
