import React, {Component} from 'react';
import Header from '../../components/Header';
import SearchPanel from '../../components/SearchPanel';
import { titleUtil, ajaxUtil } from '../../utils';
import ArticleResult from '../../components/ArticleResult';

import testData from './testData';

class Home extends Component {
  constructor(props) {
    super(props);

    this.componentWillMount = this.componentWillMount.bind(this);
  }

  state = {
    articles: []
  }

  componentWillMount = () => {
    titleUtil.set('Home');
    // this.setState({
    //   articles: testData
    // });
    ajaxUtil.getNYTArticles((err, articles) => {
      if (err) throw err;
      this.setState({
        articles: articles
      });
    });
  }
  
  updateArticleState = articles => {
    this.setState({
      articles: articles
    });
  }

  saveArticle = (e, data) => {
    e.preventDefault();
    ajaxUtil.saveArticle(data, err => {
      if (err) throw err;
      console.log("ARTICLE SAVED");
    });
  }

  render() {
    return (
      <div className="App container-fluid">
        <Header
          heading="New York Times Article Scrubber"
          caption="Search for and save articles of interest!"
        />
        <div className="container">
          <div className="row">
            <SearchPanel/>
          </div>
          {this.state.articles.map(article => {
            return <ArticleResult data={article} onClick={this.saveArticle}/>;
          })}
        </div>
      </div>
    )
  }
}

export default Home;