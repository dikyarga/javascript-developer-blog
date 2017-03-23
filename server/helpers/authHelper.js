var jwt = require('jsonwebtoken');
let Article = require('../models/article')

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
            // console.log('decoded : ', decoded) // bar
            next()
          } else {
            res.json({
              success: false,
              msg: 'wrong token'
            })
          }
        });
    },
    isAuthor: function(req, res, next){
      if (!req.headers.authorization) {
          res.json({
            success: false,
            error: 'No credentials sent!'
          });
      }

      var token = req.headers.authorization.split(' ')[1];
      jwt.verify(token, 'dikyarga', function(err, decoded) {
        if (typeof decoded == 'object') {
          Article.findById(req.params.id, function(err, article) {
            // console.log('decoded : ', decoded) // bar
            // console.log('article : ', article) // bar
              if (err) {
                  res.json({
                      success: false,
                      msg: err
                  })
              } else {
                  if (article.author[0] == decoded.user._id) {
                    console.log('sama cuy!');
                    next()
                  } else {
                    res.json({
                        success: false,
                        msg: 'Kamu tidak boleh macam-macam dengan artikel ini!'
                    })
                  }
              }
          })
        } else {
          res.json({
            success: false,
            msg: 'wrong token'
          })
        }
      });
    }
}
