var mongoose = require('mongoose')
var Schema = mongoose.Schema

var bcrypt = require('bcrypt-nodejs');

var articleSchema = Schema({
    title: String,
    content: String,
    author: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Article', articleSchema);
