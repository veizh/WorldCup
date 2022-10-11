var express = require('express');
const matchCtrl = require('../controllers/match');
var router = express.Router();

/* GET equipe listing. */
router.post('/create', matchCtrl.createMatch);
router.get('/get', matchCtrl.getMatch);

module.exports = router;