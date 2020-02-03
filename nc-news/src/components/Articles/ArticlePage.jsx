import React, { Component } from "react";
import * as api from "../../Api";
import ArticleCard from "./ArticleCard";

export default class ArticlePage extends Component {
  state = { articleData: [], page: 1 };

  render() {
    const { articleData } = this.state;
    const { loggedInUser } = this.props;
    return (
      <div>
        <h1>Articles</h1>
        <ul>
          {articleData.map(article => {
            return (
              <ArticleCard
                key={article.article_id}
                article={article}
                loggedInUser={loggedInUser}
              />
            );
          })}
        </ul>
        <button onClick={this.moreArticles}>Load more articles</button>
      </div>
    );
  }

  componentDidMount() {
    api.getArticles().then(articleData => {
      this.setState({ articleData });
    });
  }

  // componentDidUpdate(prevState) {
  //   // console.log(prevState.limit, this.state.limit);
  //   // if (prevState.limit !== this.state.limit) {
  //   //   getArticles().then(articleData => {
  //   //     this.setState({ articleData });
  //   //   });
  //   }
  //   // getArticles().then(articleData => {
  //   //   this.setState({ articleData });
  //   // });
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("updating");
  //   console.log(this.state.page, prevState.page);
  //   const { page } = this.state;

  //   if (page !== prevState.page) {
  //     api.getArticles(page).then(articleData => {
  //       console.log(articleData);
  //       this.setState(currentState => {
  //         {...currentState.articleData,
  //           articleData
  //         }
  //       });
  //     });
  //   }
  // }

  moreArticles = () => {
    this.setState(currentState => {
      return {
        page: currentState.page + 1
      };
    });
  };
}
