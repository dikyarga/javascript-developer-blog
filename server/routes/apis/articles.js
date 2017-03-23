var express = require('express');
var router = express.Router();

var passport = require('passport');

var jwt = require('jsonwebtoken');
let articleController = require('../../controllers/articleController')

router.get('/', articleController.index)

module.exports = router;
