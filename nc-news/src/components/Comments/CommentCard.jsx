import React from "react";
import { Link } from "@reach/router";
import VoteChanger from "../Tools/VoteChanger";
import { dateFormatter } from "../Tools/Utils";

export default function CommentCard(props) {
  const {
    comment: { comment_id, author, votes, created_at, body },
    index,
    loggedInUser,
    deleteComment
  } = props;
  return (
    <li>
      <p>
        <Link to={`/users/${author}`}>{author}</Link> on{" "}
        {dateFormatter(created_at)}
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
        <VoteChanger
          loggedInUser={loggedInUser}
          comment_id={comment_id}
          author={author}
          votes={votes}
        />
      </p>
    </li>
  );
}
