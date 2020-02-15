import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../../Api";
import ErrorPage from "../Errors/ErrorPage";

export default class PostComment extends Component {
  state = {
    commentInput: "",
    err: null
  };
  render() {
    const { loggedInUser, loginHandler } = this.props;
    const { commentInput, err } = this.state;
    if (err) {
      return <ErrorPage err={err} />;
    } else if (loggedInUser) {
      return (
        <section className="post-comment-container">
          <p>
            Logged in as{" "}
            <Link to={`/users/${loggedInUser}`}>{loggedInUser}</Link>
          </p>
          <form onSubmit={this.handleSubmit}>
            <input
              required
              placeholder="What are your thoughts?"
              onChange={this.handleChange}
              value={commentInput}
              className="post-comment-input"
            />
            <p>
              <button className="post-comment-button" type="submit">
                Post
              </button>
            </p>
          </form>
        </section>
      );
    } else {
      return (
        <section className="post-comment-container">
          <button className="post-comment-login-button" onClick={loginHandler}>
            Login
          </button>{" "}
          to post a comment
        </section>
      );
    }
  }

  handleChange = event => {
    this.setState({ commentInput: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { loggedInUser, article_id, addPostedComment } = this.props;
    const { commentInput } = this.state;
    api
      .postCommentByArticleId(article_id, loggedInUser, commentInput)
      .then(newComment => {
        addPostedComment(newComment);
        this.setState({ commentInput: "" });
      })
      .catch(err => {
        this.setState({ err });
      });
  };
}
