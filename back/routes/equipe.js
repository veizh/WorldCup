var express = require('express');
const equipeCtrl = require('../controllers/equipe');
var router = express.Router();


router.post('/create', equipeCtrl.createEquipe);
router.post('/getTeamGroup',equipeCtrl.getTeamGroup)
module.exports = router;
