var express = require('express');
const userCtrl= require('../controllers/users');
var router = express.Router();

/* GET users listing. */
router.post('/SignIn', userCtrl.SignIn);
router.post('/LogIn', userCtrl.LogIn);
router.get('/auth', userCtrl.verifyJWT);
router.get('/get', userCtrl.getAll);
module.exports = router;
