import axios from 'axios';

const getArticles = cb => {
  axios.get('./api/articles')
  .then(function(response) {
    cb(null, response.data.response.docs);
  })
  .catch(function(error) {
    if (error) {
      cb(error);
    }
  });
}

const saveArticle = (article, cb) => {
  axios.post('./api/article', article)
  .then(function(response) {
    cb(null);
  })
  .catch(function(error) {
    if (error) {
      cb(error);
    }
  })
}

export default {getArticles, saveArticle};