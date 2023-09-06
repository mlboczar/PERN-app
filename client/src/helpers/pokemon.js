// pokemon fetch requests

const baseUrl = 'http://localhost:8080';

export async function fetchAllPokemon() {
    try {
        const response = await fetch(`${baseUrl}/api/pokemon`);
        const returnVal = await response.json();
        return returnVal;
    } catch(err) {
        console.log(err);
        return err;
    }
}
