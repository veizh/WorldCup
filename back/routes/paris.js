var express = require('express');
const parisCtrl = require('../controllers/paris');
const auth = require('../middleware/auth');
var router = express.Router();

/* GET equipe listing. */
router.get('/get', auth,parisCtrl.checkParis);
router.put('/post', auth,parisCtrl.postParis);

module.exports = router;