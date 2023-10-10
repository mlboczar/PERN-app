// Require Client from pg
const { Client } = require('pg')

//Establishing connect to database (like how we do with http://)
const pokedex = 'keirankozlowski'
const client = new Client(`postgres://keirankozlowski_user:HsYrrINKUu7NsOsyBLYnJVDksH2btfBq@dpg-ckipnbolk5ic73d4hhr0-a/${pokedex}`)

//Export for use in other files
module.exports = client;
