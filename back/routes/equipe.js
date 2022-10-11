var express = require('express');
const equipeCtrl = require('../controllers/equipe');
var router = express.Router();

/* GET equipe listing. */
router.post('/create', equipeCtrl.createEquipe);
router.post('/getTeamGroup',equipeCtrl.getTeamGroup)
module.exports = router;
