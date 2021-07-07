var express = require('express');
var router = express.Router();
const userController = require('../controller/user.controller')

/* GET users listing. */
router.get('/', userController.getUsers);

router.get('/:id', userController.getUserByID);

module.exports = router;
