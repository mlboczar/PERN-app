const client = require("../client")

const getAllPokemon = async () => {
    try {
        const { rows }
         = await client.query(`
            SELECT *
            FROM pokemon;
        `)
        return rows
    } catch (error) {
        throw error
    }
}

const getPokemonById = async (pokemonId) => {
    try {
        const {
            rows: [pokemon]
        } = await client.query(
            `
                SELECT *
                FROM pokemon
                WHERE "pokemonId" =${pokemonId};
            `
        )
        return pokemon;
    } catch (error) {
        throw error
    }
}

const createPokemon = async ({ speciesId, name, trainerId, isFainted }) => {
    try {
        const {
            rows: [pokemon],
        } = await client.query (
            `
                INSERT INTO pokemon("speciesId", name, "trainerId", is_fainted )
                VALUES($1, $2, $3, $4)
                RETURNING *;
            `,
            [speciesId, name, trainerId, isFainted]
        )
        return pokemon
    } catch (error) {
        throw error
    }
}

module.exports = { getAllPokemon, getPokemonById, createPokemon } 