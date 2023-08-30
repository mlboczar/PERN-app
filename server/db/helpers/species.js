const client = require("../client")

const createSpecies = async ({ name, primaryTypeId, secondaryTypeId }) => {
    try {
        const {
            rows: [species],
            //need quotes in the primaryTypeId & secondaryTypeId because psql is picky with camelCase
        } = await client.query (
            `
                INSERT INTO species(name, "primaryTypeId", "secondaryTypeId" )
                VALUES($1, $2, $3)
                RETURNING *;
            `,
            //Adding a ternary to secondary in case it's null, we then fill it in with "n/a"
            [name, primaryTypeId, secondaryTypeId ? secondaryTypeId : 20]
        )
        return species
    } catch (error) {
        throw error
    }
}

const getSpeciesById = async (speciesId) => {
    try {
        const {
            rows: [species]
        } = await client.query(
            `
                SELECT *
                FROM species
                WHERE species_id =${speciesId};
            `
        )
        console.log(species)
        return species
    } catch (error) {
        throw error
    }
}

module.exports = { createSpecies, getSpeciesById }