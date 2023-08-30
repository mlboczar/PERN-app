const client = require("../client")

const createSpecies = async ({ name, primaryTypeId, secondaryTypeId }) => {
    try {
        console.log("createSpecies func")
        console.log(name)
        const {
            rows: [species],
        } = await client.query (
            `
                INSERT INTO species(name, "primaryTypeId", "secondaryTypeId" )
                VALUES($1, $2, $3)
                RETURNING *;
            `,
            [name, primaryTypeId, secondaryTypeId ? secondaryTypeId : 20]
        )
        console.log(species)
        return species
    } catch (error) {
        throw error
    }
}

module.exports = { createSpecies }