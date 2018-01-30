import axios from 'axios';

const getNYTArticles = (query, cb) => {
  axios.get('./api/NYTarticles', {params: query})
  .then(function(response) {
    cb(null, response.data.response.docs.reverse());
  })
  .catch(function(error) {
    if (error) {
      cb(error);
    }
  });
}

const getDBArticles = cb => {
  axios.get('./api/articles')
  .then(function(response) {
    cb(null, response.data.reverse());
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

const deleteArticle = (articleId, cb) => {
  axios.delete('./api/article', {params: {articleId: articleId}})
  .then(function(response) {
    cb(null);
  })
  .catch(function(error) {
    if (error) cb(error);
  });
}

export default {
  getNYTArticles, 
  saveArticle, 
  getDBArticles,
  deleteArticle
};