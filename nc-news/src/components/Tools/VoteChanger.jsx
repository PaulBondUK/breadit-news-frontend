import React, { Component } from "react";
import * as api from "../../Api";

export default class VoteChanger extends Component {
  state = {
    voteChange: 0,
    err: null
  };

  render() {
    const { article_id, loggedInUser, author, votes } = this.props;
    const { voteChange } = this.state;
    return (
      <div>
        {votes + voteChange}{" "}
        {votes + voteChange === 1 || votes + voteChange === -1
          ? "Vote"
          : "Votes"}
        <button
          onClick={() => this.addVoteToArticle(article_id, -1)}
          disabled={
            !loggedInUser
              ? true
              : loggedInUser === author
              ? true
              : voteChange !== 0
          }
        >
          -
        </button>
        <button
          onClick={() => this.addVoteToArticle(article_id, 1)}
          disabled={
            !loggedInUser
              ? true
              : loggedInUser === author
              ? true
              : voteChange !== 0
          }
        >
          +
        </button>
      </div>
    );
  }

  addVoteToArticle = (article_id, voteChange) => {
    this.setState(currentState => {
      return { voteChange: currentState.voteChange + voteChange };
    });
    api.patchArticleById(article_id, voteChange).catch(({ err }) => {
      this.setState({ err: err.response, voteChange: 0 });
    });
  };
}
