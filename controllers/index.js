var express = require('express');
var router = new express.Router();

router.use('/api/obstructions', require('./main_page.js'));

module.exports = router;