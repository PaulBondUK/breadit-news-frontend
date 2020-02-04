import React, { Component } from "react";
import * as api from "../../Api";
import SingleArticleCard from "./SingleArticleCard";
import CommentsList from "../Comments/CommentsList";
import ErrorPage from "../Errors/ErrorPage";

export default class SingleArticlePage extends Component {
  state = { articleData: null, isLoading: true, err: null };

  render() {
    const { articleData, isLoading, err } = this.state;
    const { article_id, loggedInUser, loginHandler } = this.props;
    if (err) {
      return <ErrorPage err={err} />;
    } else if (isLoading) {
      return <p>Loading...</p>;
    } else {
      return (
        <div>
          <SingleArticleCard
            article={articleData}
            addVoteToSingleArticle={this.addVoteToSingleArticle}
            loggedInUser={loggedInUser}
          />
          {articleData && (
            <CommentsList
              article_id={article_id}
              loggedInUser={loggedInUser}
              loginHandler={loginHandler}
            />
          )}
        </div>
      );
    }
  }

  componentDidMount() {
    const { article_id } = this.props;
    api
      .getArticleById(article_id)
      .then(articleData => {
        this.setState({ articleData, isLoading: false });
      })
      .catch(err => {
        this.setState({ err: err, isLoading: false });
      });
  }

  addVoteToSingleArticle = (article_id, voteChange) => {
    api.patchArticleById(article_id, voteChange).then(article => {
      this.setState(currentState => {
        const updatedArticleData = { ...currentState.articleData };
        updatedArticleData.votes = article.votes;
        return { articleData: updatedArticleData };
      });
    });
  };
}
