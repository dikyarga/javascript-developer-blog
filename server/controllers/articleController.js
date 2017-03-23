let Article = require('../models/article')

module.exports = {
    index: function(req, res, next) {
        Article.find({}, function(err, articles) {
            if (err) {
                res.send(err)
            } else {
                res.json(articles)
            }
        })
    },
    create: function(req, res, next) {
        let article = new Article({
            title: req.body.title,
            content: req.body.content,
            author: req.body.author
        })

        article.save(function(err) {
            if (err) {
                res.json({
                    success: false,
                    msg: err
                })
            } else {
                res.json({
                    success: true,
                    msg: 'Article saved'
                })
            }
        })
    },
    show: function(req, res, next) {
        Article.findById(req.params.id, function(err, article) {
            if (err) {
                res.json({
                    success: false,
                    msg: err
                })
            } else {
                res.json({
                    success: true,
                    data: article,
                    msg: 'Article saved'
                })
            }
        })
    },
    update: function(req, res, next) {
        Article.findById(req.params.id, function(err, article) {
            if (err){
              res.json({
                  success: false,
                  msg: err
              })
            }
            article.title = req.body.title
            article.content = req.body.content

            article.save(function(err) {
                if (err) {
                  res.json({
                      success: false,
                      msg: err
                  })
                }
                res.json({
                  success: true,
                  msg: 'article updated'
                })
            })
        })
    },
}
