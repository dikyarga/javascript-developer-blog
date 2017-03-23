var jwt = require('jsonwebtoken');

module.exports = {
    verify: function(req, res, next) {
        if (!req.headers.authorization) {
            res.json({
              success: false,
              error: 'No credentials sent!'
            });
        }

        var token = req.headers.authorization.split(' ')[1];
        jwt.verify(token, 'dikyarga', function(err, decoded) {
          if (typeof decoded == 'object') {
            console.log('decoded : ', decoded) // bar
            next()
          } else {
            res.json({
              success: false,
              msg: 'wrong token'
            })
          }
        });
    }
}
