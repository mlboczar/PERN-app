const express = require('express');
const router = express.Router();

const { getAllPokemon, getPokemonById, createPokemon } = require('../db/helpers');

// GET - /api/pokemon - get all pokemon
router.get('/', async (req, res, next) => {
    try{
        const pokemon = await getAllPokemon();
        res.send(pokemon);
    } catch (error) {
        next(error);
    }
});

router.get('/:id', async (req, res, next) => {
    try{
        const pokemon = await getPokemonById(req.params.id);
        res.send(pokemon);
    } catch (error) {
        next(error);
    }
});


router.post('/', async (req, res, next) => {
    try {
        // include date, amount, description in req.body
        console.log(req.body);
        const pokemon = await createPokemon(req.body);
        res.send(pokemon);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
