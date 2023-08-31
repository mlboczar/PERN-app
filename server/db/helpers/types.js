const client = require('../client')

async function createType({ type }) {
    try {
        const {
            rows: [typeName]
        } = await client.query(`
            INSERT INTO types(type)
            VALUES($1)
            RETURNING *;
        `, [type]
        )
        return typeName
    } catch (error) {
        throw error
    }
}

module.exports = { createType }