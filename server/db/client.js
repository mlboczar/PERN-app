// Require Client from pg
const { Client } = require('pg')

//Establishing connect to database (like how we do with http://)
const pokedex = 'pokedex'
const client = new Client(`postgres://localhost:5432/${pokedex}`)

//Export for use in other files
module.exports = client