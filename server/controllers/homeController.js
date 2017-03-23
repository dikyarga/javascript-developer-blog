let Article = require('../models/article')

module.exports = {
    index: function(req, res, next) {
      Article.find({}).populate('author').then((articles) => {
          res.json({
            success: true,
            data: articles,
            msg: 'Success retrive data'
          })
      })
    }
}
