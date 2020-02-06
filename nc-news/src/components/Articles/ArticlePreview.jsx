import React, { Component } from "react";
import * as api from "../../Api";
import ErrorPage from "../Errors/ErrorPage";
import ArticlePreviewCard from "./ArticlePreviewCard";
import Loader from "../Tools/Loader";

export default class ArticlePreview extends Component {
  state = {
    articleData: null,
    isLoading: true,
    err: null
  };
  render() {
    const { articleData, isLoading, err } = this.state;
    if (err) {
      return <ErrorPage err={err} />;
    } else if (isLoading) {
      return <Loader />;
    } else {
      return (
        <ol>
          {articleData.map(article => {
            return (
              <ArticlePreviewCard article={article} key={article.article_id} />
            );
          })}
        </ol>
      );
    }
  }

  componentDidMount() {
    const { sort_by } = this.props;
    api
      .getArticles(5, sort_by)
      .then(({ articles }) => {
        this.setState({ articleData: articles, isLoading: false });
      })
      .catch(err => {
        this.setState({ err, isLoading: false });
      });
  }
}
