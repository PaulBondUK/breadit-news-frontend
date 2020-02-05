import React, { Component } from "react";
import * as api from "../../Api";
import ErrorPage from "../Errors/ErrorPage";
import ArticlePreviewCard from "./ArticlePreviewCard";

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
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <ul>
            {articleData.map(article => {
              return (
                <ArticlePreviewCard
                  article={article}
                  key={article.article_id}
                />
              );
            })}
          </ul>
        </div>
      );
    }
  }

  componentDidMount() {
    const { sort_by } = this.props;
    api
      .getArticles(5, sort_by)
      .then(articleData => {
        this.setState({ articleData, isLoading: false });
      })
      .catch(err => {
        this.setState({ err });
      });
  }
}
