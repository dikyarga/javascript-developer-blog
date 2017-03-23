var express = require('express');
var router = express.Router();

var passport = require('passport');

var jwt = require('jsonwebtoken');
let homeController = require('../../controllers/homeController')

router.get('/', homeController.index)

module.exports = router;
