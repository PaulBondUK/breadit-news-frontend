import React, { Component, Fragment } from "react";
import * as api from "../../Api";

export default class VoteChanger extends Component {
  state = {
    voteChange: 0,
    err: null
  };

  render() {
    const { article_id, comment_id, loggedInUser, author, votes } = this.props;
    const { voteChange } = this.state;
    const id = article_id ? article_id : comment_id;
    return (
      <Fragment>
        {votes + voteChange}{" "}
        {votes + voteChange === 1 || votes + voteChange === -1
          ? "Vote"
          : "Votes"}
        <button
          onClick={() => this.addVoteToItem(id, -1)}
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
          onClick={() => this.addVoteToItem(id, 1)}
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
      </Fragment>
    );
  }

  addVoteToItem = (id, voteChange) => {
    this.setState(currentState => {
      return { voteChange: currentState.voteChange + voteChange };
    });
    if (this.props.article_id) {
      api.patchArticleById(id, voteChange).catch(({ err }) => {
        this.setState({ err: err.response, voteChange: 0 });
      });
    } else {
      api.patchCommentById(id, voteChange).catch(({ err }) => {
        this.setState({ err: err.response, voteChange: 0 });
      });
    }
  };
}
