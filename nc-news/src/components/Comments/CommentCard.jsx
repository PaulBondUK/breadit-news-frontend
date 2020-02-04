import React from "react";
import { Link } from "@reach/router";

export default function CommentCard(props) {
  const {
    comment: { comment_id, author, votes, created_at, body },
    addVoteToComment,
    index,
    loggedInUser,
    deleteComment
  } = props;
  return (
    <div>
      <p>
        By <Link to={`/users/${author}`}>{author}</Link> on {created_at}
        {loggedInUser === author && (
          <button
            onClick={() => {
              deleteComment(comment_id, index);
            }}
          >
            Delete Comment
          </button>
        )}
      </p>
      <p>{body}</p>
      <p>
        {" "}
        <button
          onClick={() => addVoteToComment(comment_id, -1, index)}
          disabled={!loggedInUser ? true : loggedInUser === author}
        >
          -
        </button>{" "}
        {votes} Votes{" "}
        <button
          onClick={() => addVoteToComment(comment_id, 1, index)}
          disabled={!loggedInUser ? true : loggedInUser === author}
        >
          +
        </button>
      </p>
    </div>
  );
}
