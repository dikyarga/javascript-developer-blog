var express = require('express');
var router = express.Router();

var passport = require('passport');

var jwt = require('jsonwebtoken');
let articleController = require('../../controllers/articleController')

let authHelper = require('../../helpers/authHelper')


router.get('/', articleController.index)

router.get('/:id', articleController.show)

router.get('/slug/:slug', articleController.slug)

router.post('/', authHelper.verify, articleController.create)

router.put('/:id', authHelper.verify, authHelper.isAuthor, articleController.update)

router.delete('/:id', authHelper.verify, authHelper.isAuthor, articleController.destroy)

module.exports = router;
