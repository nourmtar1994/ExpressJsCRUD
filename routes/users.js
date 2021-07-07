var express = require('express');
var router = express.Router();
const userController = require('../controller/user.controller');

/* GET users listing. */
router.get('/', userController.getUsers);
router.get('/:id', userController.getUserByID);
router.post('/insert', userController.insert);
router.get('/delete/:id', userController.delete);

module.exports = router;
