import React, { Component } from "react";
import * as api from "../../Api";
import SingleArticleCard from "./SingleArticleCard";
import CommentList from "../Comments/CommentList";
import ErrorPage from "../Errors/ErrorPage";
import Loader from "../Tools/Loader";

export default class SingleArticlePage extends Component {
  state = { articleData: null, isLoading: true, err: null };

  render() {
    const { articleData, isLoading, err } = this.state;
    const { article_id, loggedInUser, loginHandler } = this.props;
    if (err) {
      return <ErrorPage err={err} />;
    } else if (isLoading) {
      return <Loader />;
    } else {
      return (
        <main>
          <SingleArticleCard
            article={articleData}
            addVoteToSingleArticle={this.addVoteToSingleArticle}
            loggedInUser={loggedInUser}
          />
          {articleData && (
            <CommentList
              article_id={article_id}
              loggedInUser={loggedInUser}
              loginHandler={loginHandler}
            />
          )}
        </main>
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
}
