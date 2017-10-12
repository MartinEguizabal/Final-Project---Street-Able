var express = require('express');
var router = new express.Router();

router.use('/api/obstructions', require('./main_page.js'));
// when you get this specific route go to main page controller

module.exports = router;