import { useState } from "react";
import { fetchPokemon, makePokemon } from '../fetching';

export default function CreatePokemonForm({ allPokemon, setAllPokemon, token }) {
    const [name, setName] = useState('');
    const [species, setSpecies] = useState('');
    const [trainer, setTrainer] = useState('');
    const [isFainted, setIsFainted] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        async function createPokemon() {
            const newPokemon = {
                name,
                species,
                trainer,
                isFainted
            }
            const result = await makePokemon(newPokemon, token);
            const updatePosts = await fetchPokemon();
            setAllPokemon(updatePosts.pokemon);
            return result;
        }
        createPokemon();

        setName('');
        setSpecies('');
        setTrainer('');
        setIsFainted(false);
    }

    return(
        <>
            <form onSubmit={submitHandler}>
                <input placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
                <input placeholder="species" value={species} onChange={(e) => setSpecies(e.target.value)} />
                <input placeholder="trainer" value={trainer} onChange={(e) => setTrainer(e.target.value)} />
                <input type="checkbox" placeholder="isFainted" value={isFainted} onChange={(e) => setIsFainted(e.target.checked)} />
                <button type="submit">Create Pokemon</button>
            </form>
        </>
    );
}