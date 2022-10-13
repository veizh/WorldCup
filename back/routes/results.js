var express = require('express');
const resultsCtrl = require('../controllers/results');
var router = express.Router();

/* GET equipe listing. */
router.post('/create',postCtrl.createResult );
module.exports = router;