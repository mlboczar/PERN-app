//Make some arrays of objects based on the schema design I created

//trainers
const trainers = [
    { username: 'ashrox', password: 'i<3profoak' },
    { username: 'waterwaterwater', password: 'lovestarmi' },
    { username: 'bestTrainerEvah', password: 'snorlaxLyfe' }
]

//types
const types = [
    "Normal",
    "Grass",
    "Water",
    "Fire",
    "Electric",
    "Ground",
    "Rock",
    "Steel",
    "Fighting",
    "Flying",
    "Dragon",
    "Dark",
    "Bug",
    "Psychic",
    "Ghost",
    "Fairy",
    "Ice",
    "Poison",
    "???",
    "n/a"
]

//species
const species = [
    { name: 'Bulbasaur', primaryTypeId: 2, secondaryTypeId: 18 },
    { name: 'Charmander', primaryTypeId: 4 },
    { name: 'Squirtle', primaryTypeId: 3 }
]

//pokemon
const pokemon = [
    { speciesId: 1, name: 'Bulba Fett', trainerId: 3, isFainted: false },
    { speciesId: 2, name: 'Sally', isFainted: false },
    { speciesId: 2, name: 'CharChar Binks', trainerId: 3, isFainted: true },
]

module.exports = { trainers, types, species, pokemon }