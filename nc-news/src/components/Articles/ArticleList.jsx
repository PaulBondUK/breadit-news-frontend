import React, { Component } from "react";
import * as api from "../../Api";
import ArticleCard from "./ArticleCard";
import ErrorPage from "../Errors/ErrorPage";
import SortArticles from "./SortArticles";
import Loader from "../Tools/Loader";

// React Fragment

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
        <div className="article-list">
          {author && <h2>Articles by {author}</h2>}
          <SortArticles
            selectedOption={selectedOption}
            sortArticlesBy={this.sortArticlesBy}
          />
          <ol className="article-list">
            {articleData.map(article => {
              return (
                <ArticleCard
                  key={article.article_id}
                  article={article}
                  loggedInUser={loggedInUser}
                />
              );
            })}
          </ol>
          <button
            className="more-articles-button"
            disabled={noMoreArticles}
            onClick={this.loadMoreArticles}
          >
            {noMoreArticles ? "No more articles" : "Load more articles"}
          </button>
        </div>
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
    if (articleData.length === total_count && noMoreArticles === false) {
      this.setState({ noMoreArticles: true });
    }
  }

  loadMoreArticles = () => {
    const { topic_slug, author } = this.props;
    const { page, sort_by, order } = this.state;
    const newPage = page + 1;
    api
      .getArticles({ page: newPage, sort_by, order, topic_slug, author })
      .then(({ articles }) => {
        this.setState(currentState => {
          return {
            articleData: [...currentState.articleData, ...articles],
            page: newPage
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

// componentDidUpdate(prevProps, prevState) {
//   const { sort_by, order, limit, articleData } = this.state;
//   const { topic_slug, author } = this.props;
//   if (prevState.sort_by !== sort_by || prevState.order !== order) {
//     this.setState({
//       isLoading: true,
//       limit: 10,
//       noMoreArticles: false
//     });
//     api
//       .getArticles(10, sort_by, order, topic_slug, author)
//       .then(newArticleData => {
//         this.setState({
//           articleData: newArticleData,
//           isLoading: false,
//           noMoreArticles: articleData.length < 10
//         });
//       })
//       .catch(err => {
//         this.setState({ err: err, isLoading: false });
//       });
//   } else if (prevState.limit !== limit && limit !== 10) {
//     api
//       .getArticles(limit, sort_by, order, topic_slug, author)
//       .then(newArticleData => {
//         if (newArticleData.length === articleData.length) {
//           this.setState({ noMoreArticles: true });
//         } else if (newArticleData.length - articleData.length < 10) {
//           this.setState({
//             articleData: newArticleData,
//             noMoreArticles: true
//           });
//         } else {
//           this.setState({ articleData: newArticleData });
//         }
//       })
//       .catch(err => {
//         this.setState({ err: err, isLoading: false });
//       });
//   }
// }
