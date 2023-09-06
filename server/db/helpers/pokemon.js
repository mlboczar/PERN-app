const client = require("../client")
const util = require('../util');

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


async function updatePokemon(pokemonId, fields) {
    try {
        const toUpdate = {}
        for (let column in fields) {
            if (fields[column] !== undefined) toUpdate[column] = fields[column];
        }
        let pokemon;

        if (util.dbFields(toUpdate).insert.length > 0) {
            const { rows } = await client.query(`
            UPDATE pokemon
            SET ${util.dbFields(toUpdate).insert}
            WHERE "pokemonId"=${pokemonId}
            RETURNING *;
          `, Object.values(toUpdate));
            pokemon = rows[0];
        }

        return pokemon;
    } catch (error) {
        throw error
    }
}

async function deletePokemon(pokemonId) {
    try {
        const { rows } = await client.query('DELETE FROM pokemon WHERE "pokemonId"=$1 RETURNING *', [pokemonId]);
        return rows[0];
    } catch (err) {
        throw err
    }
}

module.exports = { getAllPokemon, getPokemonById, createPokemon, updatePokemon, deletePokemon } 