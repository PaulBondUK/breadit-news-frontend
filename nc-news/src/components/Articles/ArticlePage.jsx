import React, { Component } from "react";
import * as api from "../../Api";
import ArticleCard from "./ArticleCard";

export default class ArticlePage extends Component {
  state = { articleData: null, page: 1, isLoading: true, err: null };

  render() {
    const { articleData, isLoading, err } = this.state;
    const { loggedInUser } = this.props;
    if (err) {
      return <p>error</p>;
    } else if (isLoading) {
      return <p>Loading...</p>;
    } else {
      return (
        <div>
          <h1>Articles</h1>
          <section>
            <ul>
              {articleData.map((article, index) => {
                return (
                  <ArticleCard
                    key={article.article_id}
                    article={article}
                    loggedInUser={loggedInUser}
                    addVoteToArticle={this.addVoteToArticle}
                    index={index}
                  />
                );
              })}
            </ul>
            <button onClick={this.moreArticles}>Load more articles</button>
          </section>
        </div>
      );
    }
  }

  componentDidMount() {
    api
      .getArticles()
      .then(articleData => {
        this.setState({ articleData, isLoading: false });
      })
      .catch(err => {
        this.setState({ err: err, isLoading: false });
      });
  }

  moreArticles = () => {
    this.setState(currentState => {
      return {
        page: currentState.page + 1
      };
    });
  };

  addVoteToArticle = (article_id, voteChange, index) => {
    api.patchArticleById(article_id, voteChange).then(article => {
      this.setState(currentState => {
        const updatedArticleData = [...currentState.articleData];
        updatedArticleData[index].votes = article.votes;
        return { articleData: updatedArticleData };
      });
    });
  };

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
}
