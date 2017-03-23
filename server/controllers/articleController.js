let Article = require('../models/article')

module.exports = {
  index: function(req, res, next){
    Article.find({}, function(err, articles){
      if (err) {
        res.send(err)
      } else {
        res.json(articles)
      }
    })
  },
}
