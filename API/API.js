const express = require('express');
const router = express.Router();
const request = require('request');
const articleHelper = require('../util/articleHelper');

router.get('/articles', function(req, res, next) {
  articleHelper.getArticles(function(err, articles) {
    if (err) {
      throw err;
      res.status(500).end();
    }
    res.status(200).send(articles).end();
  })
});

router.get('/NYTarticles', function(req, res, next) {
  let {q, begin_date, end_date} = req.query;
  request.get({
    url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
    qs: {
      'api-key': process.env.NYT_API_KEY,
      'q': q,
      'begin_date': begin_date,
      'end_date': end_date,
      'sort': "newest",
      'fl': "web_url, snippet, headline, pub_date"
    },
  }, function(err, response, body) {
    if (err) {
      throw err;
      return res.status(500).end();
    }
    body = JSON.parse(body);
    res.send(body);
  })
});

router.post('/article', function(req, res, next) {
  articleHelper.saveArticle(req.body, function(err, savedArticle) {
    if (err) {
      throw err;
      return res.status(500).end();
    }
    else if (!savedArticle) return res.status(202).end();
    res.status(200).end();
  });
});

router.delete('/article', function(req, res, next) {
  articleHelper.deleteArticle(req.query.articleId, function(err) {
    if (err) {
      throw err;
      return res.status(500).end();
    }
    res.status(200).end();
  });
});

module.exports = router;
