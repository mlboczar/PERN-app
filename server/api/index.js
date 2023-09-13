const express = require('express');
const router = express.Router();

router.get('/health', (req, res, next) => {
    res.send('OK');
});

router.use('/pokemon', require('./pokemon'));
router.use('/trainers', require('./trainers'));

module.exports = router;
