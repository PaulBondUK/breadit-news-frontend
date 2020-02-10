import React, { Component } from "react";
import * as api from "../../Api";
import ArticleCard from "./ArticleCard";
import ErrorPage from "../Errors/ErrorPage";
import SortArticles from "./SortArticles";
import Loader from "../Tools/Loader";

export default class ArticleList extends Component {
  state = {
    articleData: null,
    total_count: null,
    page: 1,
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
      return <Loader />;
    } else {
      return (
        <section className="article-list">
          {author && <h3>Articles by {author}</h3>}
          <SortArticles
            selectedOption={selectedOption}
            sortArticlesBy={this.sortArticlesBy}
          />
          <ul className="article-list">
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
          <p className="more-articles">
            <button
              className="more-articles-button"
              disabled={noMoreArticles}
              onClick={this.loadMoreArticles}
            >
              {noMoreArticles ? "No more articles" : "Load more articles"}
            </button>
          </p>
        </section>
      );
    }
  }

  componentDidMount() {
    const { topic_slug, author } = this.props;
    api
      .getArticles({ topic_slug, author })
      .then(({ articles, total_count }) => {
        this.setState({
          articleData: articles,
          isLoading: false,
          total_count
        });
      })
      .catch(err => {
        this.setState({ err: err, isLoading: false });
      });
  }

  componentDidUpdate() {
    const { articleData, total_count, noMoreArticles } = this.state;
    if (
      articleData &&
      total_count &&
      articleData.length === total_count &&
      noMoreArticles === false
    ) {
      this.setState({ noMoreArticles: true });
    }
  }

  loadMoreArticles = () => {
    const { topic_slug, author } = this.props;
    const { page, sort_by, order } = this.state;
    api
      .getArticles({ page: page + 1, sort_by, order, topic_slug, author })
      .then(({ articles }) => {
        this.setState(currentState => {
          return {
            articleData: [...currentState.articleData, ...articles],
            page: currentState.page + 1
          };
        });
      })
      .catch(err => {
        this.setState({ err: err });
      });
  };

  sortArticlesBy = event => {
    const selectedOption = event.target.value;
    const { topic_slug, author } = this.props;
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
    const sort_by = sortingRefObject[selectedOption].sort_by;
    const order = sortingRefObject[selectedOption].order;
    api
      .getArticles({ sort_by, order, topic_slug, author })
      .then(({ articles, total_count }) => {
        this.setState({
          articleData: articles,
          total_count,
          sort_by,
          order,
          selectedOption,
          page: 1,
          noMoreArticles: false
        });
      })
      .catch(err => {
        this.setState({ err: err });
      });
  };
}
