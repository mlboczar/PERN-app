const express = require('express');
const router = express.Router();

const { getAllPokemon, getPokemonById, createPokemon, updatePokemon, deletePokemon } = require('../db/helpers');

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
        const pokemon = await createPokemon(req.body);
        res.send(pokemon);
    } catch (err) {
        next(err);
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        const pokemon = await updatePokemon(req.params.id, req.body);
        res.send(pokemon);
    } catch (err) {
        next(err);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const pokemon = await deletePokemon(req.params.id);
        res.send(pokemon);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
