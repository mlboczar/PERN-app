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

//Just an example of how you pull in the id to a query - this is not used in the database portion of this project
const getSpeciesById = async (speciesId) => {
    try {
        const {
            rows: [species]
        } = await client.query(
            `
                SELECT *
                FROM species
                WHERE "speciesId" =${speciesId};
            `
        )
        return species
    } catch (error) {
        throw error
    }
}

module.exports = { createSpecies, getSpeciesById }