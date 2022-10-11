var express = require('express');
const postCtrl = require('../controllers/post');
var router = express.Router();

/* GET equipe listing. */
router.post('/create',postCtrl.createPost );
router.get('/getPosts',postCtrl.getPosts)
module.exports = router;