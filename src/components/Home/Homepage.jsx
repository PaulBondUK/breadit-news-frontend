import React, { Component } from "react";
import ArticlePreview from "../Articles/ArticlePreview";
import Loader from "../Tools/Loader";
import * as api from "../../Api";
import ErrorPage from "../Errors/ErrorPage";

export default class Homepage extends Component {
  state = {
    articleDataNew: null,
    articleDataPopular: null,
    isLoading: true,
    err: null
  };
  render() {
    const { err, isLoading, articleDataNew, articleDataPopular } = this.state;
    console.log([articleDataNew, articleDataPopular]);
    if (err) {
      return <ErrorPage err={err} />;
    } else if (isLoading) {
      return <Loader />;
    } else {
      return (
        <main>
          <h2 className="homepage-title">Welcome to Breadit</h2>
          <div className="homepage-container">
            <section className="homepage-left-column">
              <h3 className="homepage-subtitle">Fresh out the Oven</h3>
              <ArticlePreview articleData={articleDataNew} />
            </section>
            <section className="homepage-right-column">
              <h3 className="homepage-subtitle">Hot and Toasty</h3>
              <ArticlePreview
                sort_by="votes"
                articleData={articleDataPopular}
              />
            </section>
          </div>
        </main>
      );
    }
  }
  componentDidMount() {
    const articleDataNew = api.getArticles({ limit: 5, sort_by: "created_at" });

    const articleDataPopular = api.getArticles({ limit: 5, sort_by: "votes" });

    Promise.all([articleDataNew, articleDataPopular])
      .then(([articleDataNew, articleDataPopular]) => {
        console.log([articleDataNew, articleDataPopular]);
        this.setState({ articleDataNew, articleDataPopular, isLoading: false });
      })
      .catch(err => {
        this.setState({ err, isLoading: false });
      });
  }
}
