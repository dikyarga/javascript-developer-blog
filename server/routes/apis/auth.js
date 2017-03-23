var express = require('express');
var router = express.Router();

var passport = require('passport');

router.get('/ping', function(req, res, next) {
    res.json({
        status: 'up'
    })
});

router.post('/register', function(req, res) {
    passport.authenticate('local-signup', function(err, user, info) {
        let token
        if (err) {
            res.json({
                msg: err
            })
        }

        if (user) {
            token = ' user.generateJwt()';
            res.status(200);
            res.json({
                "token": token
            });
        } else {
            res.status(401).json(info);
        }
    })(req, res)
})

router.post('/login', function(req, res) {
    passport.authenticate('local-login', function(err, user, info) {
        let token
        if (err) {
            res.json({
                msg: err
            })
        }

        if (user) {
            token = ' user.generateJwt()';
            res.status(200);
            res.json({
                "token": token
            });
        } else {
            res.status(401).json(info);
        }
    })(req, res)
})



router.get('/logout', function(req, res) {

    req.logout();
    res.json({
        success: true,
        msg: 'logout success'
    })

});

module.exports = router;
