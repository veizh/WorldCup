var express = require('express');
const commentCtrl = require('../controllers/comment');
var router = express.Router();

/* GET equipe listing. */
router.post('/create', commentCtrl.createComment);
router.get('/getComments',commentCtrl.getComments)
module.exports = router;
