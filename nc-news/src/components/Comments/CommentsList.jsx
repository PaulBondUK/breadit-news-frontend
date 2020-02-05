import React, { Component } from "react";
import CommentCard from "./CommentCard";
import * as api from "../../Api";
import PostComment from "./PostComment";

export default class CommentsList extends Component {
  state = {
    postCommentToggle: false,
    commentsData: null
  };

  render() {
    const { commentsData } = this.state;
    const { loggedInUser, article_id, loginHandler } = this.props;
    return (
      <div>
        {commentsData && (
          <section>
            <PostComment
              loggedInUser={loggedInUser}
              article_id={article_id}
              loginHandler={loginHandler}
              addPostedComment={this.addPostedComment}
            />
            <h3>{commentsData.length} Comments</h3>

            {commentsData.map((comment, index) => {
              return (
                <CommentCard
                  key={comment.comment_id}
                  comment={comment}
                  index={index}
                  loggedInUser={loggedInUser}
                  addVoteToComment={this.addVoteToComment}
                  deleteComment={this.deleteComment}
                />
              );
            })}
          </section>
        )}
      </div>
    );
  }

  componentDidMount() {
    const { article_id } = this.props;
    api.getCommentsByArticleId(article_id).then(commentsData => {
      this.setState({ commentsData });
    });
  }

  addVoteToComment = (comment_id, voteChange, index) => {
    api.patchCommentById(comment_id, voteChange);
    this.setState(currentState => {
      const updatedCommentsData = [...currentState.commentsData];
      updatedCommentsData[index].votes =
        updatedCommentsData[index].votes + voteChange;
      return { commentsData: updatedCommentsData };
    });
  };

  addPostedComment = newComment => {
    this.setState(currentState => {
      return { commentsData: [newComment, ...currentState.commentsData] };
    });
  };

  deleteComment = (comment_id, index) => {
    api.deleteCommentByCommentId(comment_id).then(() => {
      this.setState(currentState => {
        const newCommentsData = [...currentState.commentsData];
        newCommentsData.splice(index, 1);
        return { commentsData: newCommentsData };
      });
    });
  };
}
