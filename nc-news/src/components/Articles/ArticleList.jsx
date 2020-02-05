import React, { Component } from "react";
import * as api from "../../Api";
import ArticleCard from "./ArticleCard";
import ErrorPage from "../Errors/ErrorPage";
import SortArticles from "./SortArticles";

export default class ArticleList extends Component {
  state = {
    articleData: null,
    limit: 10,
    isLoading: true,
    err: null,
    sort_by: "created_at",
    order: "desc",
    selectedOption: "Newest",
    noMoreArticles: false
  };

  render() {
    const {
      articleData,
      isLoading,
      err,
      selectedOption,
      noMoreArticles
    } = this.state;
    const { loggedInUser, author } = this.props;
    if (err) {
      return <ErrorPage err={err} />;
    } else if (isLoading) {
      return (
        <div>
          <SortArticles
            selectedOption={selectedOption}
            sortArticlesBy={this.sortArticlesBy}
          />
          <p>Loading...</p>
        </div>
      );
    } else {
      return (
        <div>
          {author && <h2>Articles by {author}</h2>}
          <SortArticles
            selectedOption={selectedOption}
            sortArticlesBy={this.sortArticlesBy}
          />
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
          <button disabled={noMoreArticles} onClick={this.moreArticles}>
            {noMoreArticles ? "No more articles" : "Load more articles"}
          </button>
        </div>
      );
    }
  }

  componentDidMount() {
    const { topic_slug, author } = this.props;
    api
      .getArticles(null, null, null, topic_slug, author)
      .then(articleData => {
        this.setState({
          articleData,
          isLoading: false,
          noMoreArticles: articleData.length < 10
        });
      })
      .catch(err => {
        this.setState({ err: err, isLoading: false });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    const { sort_by, order, limit, articleData } = this.state;
    const { topic_slug, author } = this.props;
    if (prevState.sort_by !== sort_by || prevState.order !== order) {
      this.setState({
        isLoading: true,
        limit: 10,
        noMoreArticles: false
      });
      api
        .getArticles(10, sort_by, order, topic_slug, author)
        .then(newArticleData => {
          this.setState({
            articleData: newArticleData,
            isLoading: false,
            noMoreArticles: articleData.length < 10
          });
        })
        .catch(err => {
          this.setState({ err: err, isLoading: false });
        });
    } else if (prevState.limit !== limit && limit !== 10) {
      api
        .getArticles(limit, sort_by, order, topic_slug, author)
        .then(newArticleData => {
          if (newArticleData.length === articleData.length) {
            this.setState({ noMoreArticles: true });
          } else if (newArticleData.length - articleData.length < 10) {
            this.setState({
              articleData: newArticleData,
              noMoreArticles: true
            });
          } else {
            this.setState({ articleData: newArticleData });
          }
        })
        .catch(err => {
          this.setState({ err: err, isLoading: false });
        });
    }
  }

  moreArticles = () => {
    this.setState(currentState => {
      return {
        limit: currentState.limit + 10
      };
    });
  };

  sortArticlesBy = event => {
    const selectedOption = event.target.value;
    const sortingRefObject = {
      Newest: { sort_by: "created_at", order: "desc" },
      Oldest: { sort_by: "created_at", order: "asc" },
      "Most Votes": { sort_by: "votes", order: "desc" },
      "Fewest Votes": { sort_by: "votes", order: "asc" },
      "Most Comments": {
        sort_by: "comment_count",
        order: "desc"
      },
      "Fewest Comments": {
        sort_by: "comment_count",
        order: "asc"
      }
    };
    this.setState({
      sort_by: sortingRefObject[selectedOption].sort_by,
      order: sortingRefObject[selectedOption].order,
      selectedOption
    });
  };
}
