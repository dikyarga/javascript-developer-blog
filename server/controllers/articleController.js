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
            slug: req.body.slug,
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
            if (err) {
                res.json({
                    success: false,
                    msg: err
                })
            }
            article.title = req.body.title
            article.content = req.body.content
            article.slug = req.body.slug

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
    destroy: function(req, res, next) {
        // Using find and remove
        Article.findByIdAndRemove(req.params.id, function(err) {
          if (err) {
              res.json({
                  success: false,
                  msg: err
              })
          }
          res.json({
              success: true,
              msg: 'article deleted'
          })
        })
    },
    slug: function(req, res, next){
      Article.findOne({
        'slug': req.params.slug
      }).populate('author').then((article) => {
          res.json({
            success: true,
            data: article,
            msg: 'success retrive single data'
          })
      })
    }
}
