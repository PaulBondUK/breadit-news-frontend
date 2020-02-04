import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../../Api";

export default class PostComment extends Component {
  state = {
    commentInput: ""
  };
  render() {
    const { loggedInUser, loginHandler } = this.props;
    const { commentInput } = this.state;

    if (loggedInUser) {
      return (
        <div>
          <label>
            Post comment as{" "}
            <Link to={`/users/${loggedInUser}`}>{loggedInUser}</Link>
            <form onSubmit={this.handleSubmit}>
              <input
                required
                type="text"
                placeholder="What are your thoughts?"
                onChange={this.handleChange}
                value={commentInput}
              />
              <button type="submit">Post</button>
            </form>
          </label>
        </div>
      );
    } else {
      return (
        <div>
          {" "}
          <button onClick={loginHandler}>{!loggedInUser && "Login"}</button> to
          post a comment
        </div>
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
      });
  };
}
