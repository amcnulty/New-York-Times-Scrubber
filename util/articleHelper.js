const db = require('../config/dbSetup');
/**
 * Gets all articles from the database
 * @param {Function} cb - Callback function
 */
const getArticles = function(cb) {
  db.Article.find({}, function(err, articles) {
    if (err) cb(err);
    cb(null, articles);
  });
}
/**
 * Inserts article into database if it is unique.
 * @param {Object} article - The article to be saved to the database
 * @param {Function} cb - Callback function
 */
const saveArticle = function(article, cb) {
  const revisedArticle = prepareArticle(article);
  articleExists(revisedArticle, function(exists) {
    if (!exists) {
      db.Article.create(revisedArticle, function(err, savedArticle) {
        if (err) cb(err);
        cb(null, savedArticle);
      });
    }
    else {
      cb();
    }
  })
}
/**
 * Checks if a record is already in the database. Calls back function with
 * true if record exists and false if record does not exist.
 * @param {Object} record - Record to be checked
 * @param {Function} cb - Callback function
 */
const articleExists = function(record, cb) {
  db.Article.findOne({ 'title': record.title }, function(err, record) {
    if (err) console.log(err);
    else if (record) cb(true);
    else cb(false);
  });
}
/**
 * Prepares the json data for the database to match the schema.
 * @param {Object} article - The article to be revised
 * @returns {Object}
 */
const prepareArticle = function(article) {
  return {
    url: article.web_url,
    title: article.headline.main,
    date: article.pub_date,
    snippet: article.snippet
  }
}
/**
 * Deletes an article by the supplied id.
 * @param {String} articleId - The id of the article to be deleted
 * @param {*} cb - Callback function
 */
const deleteArticle = function(articleId, cb) {
  db.Article.findByIdAndRemove(articleId, function(err) {
    if (err) cb(articleId);
    cb(null);
  });
}

module.exports = {
  saveArticle: saveArticle,
  getArticles: getArticles,
  deleteArticle: deleteArticle
}