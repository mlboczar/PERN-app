const baseUrl = `http://localhost:8080/api`;

export async function fetchAllPokemon() {
  try {
    const response = await fetch(`${baseUrl}/pokemon`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
