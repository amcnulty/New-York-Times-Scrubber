var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/articles', function(req, res, next) {
  request.get({
    url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
    qs: {
      'api-key': "b9f91d369ff59547cd47b931d8cbc56b:0:74623931",
      'q': "elon musk spacex tesla",
      'begin_date': "20170101",
      'end_date': "20180101",
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
  console.log(req.body);
  res.status(200).end();
});

router.delete('/article', function(req, res, next) {
  res.send('Deleting Articles');
});

module.exports = router;
