var express = require('express');
const commentCtrl = require('../controllers/comment');
var router = express.Router();

/* GET equipe listing. */
router.post('/create', commentCtrl.create);
router.post('/getComments',commentCtrl.getComments)
module.exports = router;