// THIS FILE WILL RESET YOUR DATABASE - PROCEED WITH CAUTION
//pulling in connection to my local database
const client = require('./client')

const { createTrainer, getAllTrainers } = require('./helpers/trainers')
const { createType } = require('./helpers/types')
const { createSpecies, getSpeciesById } = require('./helpers/species')
const { createPokemon } = require('./helpers/pokemon')

const { trainers, types, species, pokemon } = require('./seedData')

//Drop Tables for cleanliness
const dropTables = async () => {
    try {
        console.log("Starting to drop tables")
        await client.query(`
        DROP TABLE IF EXISTS pokemon;
        DROP TABLE IF EXISTS species;
        DROP TABLE IF EXISTS types;
        DROP TABLE IF EXISTS trainers;
        `)
        console.log("Tables dropped!")
    } catch (error) {
        console.log("Error dropping tables")
        throw error
    }
}

//Create Tables because we need a place for the data to live
const createTables = async () => {
    console.log("Building tables...")
    await client.query(`
        CREATE TABLE trainers (
            "trainerId" SERIAL PRIMARY KEY,
            username varchar(255) UNIQUE NOT NULL,
            password varchar(255) NOT NULL
        );
        CREATE TABLE types (
            type_id SERIAL PRIMARY KEY,
            type varchar(255) UNIQUE NOT NULL
        );
        CREATE TABLE species (
            "speciesId" SERIAL PRIMARY KEY,
            name varchar(255) UNIQUE NOT NULL,
            "primaryTypeId" INTEGER REFERENCES types(type_id) NOT NULL,
            "secondaryTypeId" INTEGER REFERENCES types(type_id)
        );
        CREATE TABLE pokemon (
            "pokemonId" SERIAL PRIMARY KEY,
            "speciesId" INTEGER REFERENCES species("speciesId") NOT NULL,
            name varchar(255) NOT NULL,
            "trainerId" INTEGER REFERENCES trainers("trainerId"),
            is_fainted BOOLEAN NOT NULL
        );
    `)
    console.log("Tables built!")
}

//Insert mock data from seedData.js
//Create trainers
const createInitialTrainers = async () => {
    try {
        //Looping through the "trainers" array from seedData
        for (const trainer of trainers) {
            //Insert each trainer into the table
            await createTrainer(trainer)
        }
        console.log("created trainers")
    } catch (error) {
        throw error
    }
}

//Create types
const createInitialTypes = async () => {
    try {
        for (const typeName of types) {
            //Structured like this because we only have an array of strings in the seed data, and we want to put that in object format for the function
            await createType( { type: typeName } )
        }
        console.log("created types")
    } catch (error) {
        throw error
    }
}

//Create species
const createInitialSpecies = async () => {
    try {
        for (const specy of species) {
            //Single specy because we're popping one at a time in the DB
            await createSpecies(specy)
        }
        console.log("created species")
    } catch (error) {
        throw error
    }
}

//Create pokemon
const createInitialPokemon = async () => {
    try {
        for (const pokeman of pokemon) {
            //Single pokeman because we're popping one at a time in the DB
            await createPokemon(pokeman)
        }
        console.log("created pokemon")
    } catch (error) {
        throw error
    }
}

//Call all my functions and 'BUILD' my database
const rebuildDb = async () => {
    try {
        //ACTUALLY connect to my local database
        client.connect()
        //Run our functions
        await dropTables()
        await createTables()

        //Generating starting data
        console.log("starting to seed...")
        await createInitialTrainers()
        await createInitialTypes()
        await createInitialSpecies()
        await createInitialPokemon()

    } catch (error) {
        console.error(error)
    } finally {
        //close our connection
        client.end()
    }
}

rebuildDb()