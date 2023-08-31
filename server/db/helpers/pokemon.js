const client = require("../client")

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

module.exports = { createPokemon } 