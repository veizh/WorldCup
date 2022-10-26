var express = require('express');
const resultsCtrl = require('../controllers/results');
var router = express.Router();

router.post('/create',resultsCtrl.createResult );
router.post('/createElim',resultsCtrl.createResultElim );

module.exports = router;