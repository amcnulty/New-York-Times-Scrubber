const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  url: String,
  title: String,
  date: String,
  snippet: String
});

const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;