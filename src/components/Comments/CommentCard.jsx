import React from "react";
import { Link } from "@reach/router";
import VoteChanger from "../Tools/VoteChanger";
import { dateFormatter } from "../Tools/Utils";

export default function CommentCard({
  comment: { comment_id, author, votes, created_at, body },
  loggedInUser,
  deleteComment
}) {
  return (
    <li>
      <p className="comment-card-title">
        <Link to={`/users/${author}`}>
          {author === loggedInUser ? "You" : author}
        </Link>{" "}
        on {dateFormatter(created_at)}
      </p>
      <p className="comment-card-body">{body}</p>
      <p className="comment-card-footer">
        <VoteChanger
          loggedInUser={loggedInUser}
          comment_id={comment_id}
          author={author}
          votes={votes}
        />{" "}
        {loggedInUser === author && (
          <button
            className="delete-comment-button"
            onClick={() => {
              deleteComment(comment_id);
            }}
          >
            Delete
          </button>
        )}
      </p>
    </li>
  );
}
