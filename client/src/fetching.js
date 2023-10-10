const BASE_URL = `https://pern-app-test.onrender.com/api`;

export const registerTrainer = async (username, password) => {
    try {
        const response = await fetch(
            `${BASE_URL}/trainers/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        });
        const result = await response.json();
        console.log(result)
        return result
    } catch (err) {
        console.error(err);
    }
}

export const login = async (username, password) => {

    try {
        const response = await fetch(`${BASE_URL}/trainers/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        });
        const result = await response.json();
        console.log(result);
        return result
    } catch (err) {
        console.error(err);
    }
}

export const fetchPokemon = async () => {
    try {
        const response = await fetch(`${BASE_URL}/pokemon`)
        const result = await response.json();
        console.log(result);
        return result
    } catch (err) {
        console.error(err);
    }
}

export const makePokemon = async (pokemon, token) => {
    try {
        const response = await fetch(`${BASE_URL}/pokemon`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                name: pokemon.title,
                species: pokemon.description,
                trainer: pokemon.price,
                isFainted: pokemon.location
            })
        });
        const result = await response.json();
        console.log(result);
        return result
    } catch (err) {
        console.error(err);
    }
}
