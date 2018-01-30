import React, {Component} from 'react';
import Header from '../../components/Header';
import Article from '../../components/Article';
import ArticlePanelHeading from '../../components/ArticlePanelHeading';
import ArticlePanelBody from '../../components/ArticlePanelBody';
import RemoveButton from '../../components/RemoveButton';
import {titleUtil, ajaxUtil} from '../../utils';

class Saved extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    articles: []
  }
  
  componentWillMount = () => {
    titleUtil.set('Saved Articles');
    this.getArticles();
  }
  
  getArticles = () => {
    ajaxUtil.getDBArticles((err, articles) => {
      if (err) throw err;
      this.setState({
        ['articles']: articles
      });
    });
  }

  removeArticle = (e, articleId) => {
    e.preventDefault();
    ajaxUtil.deleteArticle(articleId, err => {
      if (err) throw err;
      this.getArticles();
    });
  }

  render() {
    return (
      <div className="App container-fluid">
        <Header
          heading="Saved Articles"
          caption="Manage your saved articles here."
        />
        <div className="container">
          {this.state.articles.map(article => {
            return (
              <Article>
                <ArticlePanelHeading 
                  title={article.title} 
                  url={article.url}
                >
                  <RemoveButton 
                    articleId={article._id}
                    onClick={this.removeArticle}
                  >
                    Remove
                  </RemoveButton>
                </ArticlePanelHeading>
                <ArticlePanelBody 
                  snippet={article.snippet} 
                  date={article.date}
                />
              </Article>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Saved;