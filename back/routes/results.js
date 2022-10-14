var express = require('express');
const resultsCtrl = require('../controllers/results');
var router = express.Router();

router.post('/create',resultsCtrl.createResult );
module.exports = router;