import React, { Component } from "react";
import CommentCard from "./CommentCard";
import * as api from "../../Api";
import PostComment from "./PostComment";
import ErrorPage from "../Errors/ErrorPage";
import Loader from "../Tools/Loader";

export default class CommentList extends Component {
  state = {
    commentsData: null,
    isLoading: true,
    err: null
  };

  render() {
    const { commentsData, err, isLoading } = this.state;
    const { loggedInUser, article_id, loginHandler } = this.props;
    if (err) {
      return <ErrorPage err={err} />;
    } else if (isLoading) {
      return <Loader />;
    } else {
      return (
        <section>
          <PostComment
            loggedInUser={loggedInUser}
            article_id={article_id}
            loginHandler={loginHandler}
            addPostedComment={this.addPostedComment}
          />
          <h3 className="total-comments">{commentsData.length} Comments</h3>
          <ul>
            {commentsData.map((comment, index) => {
              return (
                <CommentCard
                  key={comment.comment_id}
                  comment={comment}
                  index={index}
                  loggedInUser={loggedInUser}
                  deleteComment={this.deleteComment}
                />
              );
            })}
          </ul>
        </section>
      );
    }
  }

  componentDidMount() {
    const { article_id } = this.props;
    api
      .getCommentsByArticleId(article_id)
      .then(commentsData => {
        this.setState({ commentsData, isLoading: false });
      })
      .catch(err => {
        this.setState({ err, isLoading: false });
      });
  }

  addPostedComment = newComment => {
    this.setState(currentState => {
      return { commentsData: [newComment, ...currentState.commentsData] };
    });
  };

  deleteComment = (comment_id, index) => {
    api
      .deleteCommentByCommentId(comment_id)
      .then(() => {
        this.setState(currentState => {
          const newCommentsData = currentState.commentsData.filter(comment => {
            return comment.comment_id !== comment_id;
          });
          return { commentsData: newCommentsData };
        });
      })
      .catch(err => {
        this.setState({ err });
      });
  };
}
