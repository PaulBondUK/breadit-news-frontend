import React from "react";
import { Link } from "@reach/router";
import VoteChanger from "../Tools/VoteChanger";
import { dateFormatter } from "../Tools/Utils";
import { FaCommentAlt } from "react-icons/fa";

export default function ArticleCard({
  article: {
    article_id,
    title,
    body,
    votes,
    topic,
    author,
    created_at,
    comment_count
  },
  loggedInUser
}) {
  return (
    <li className="article-card">
      <h4 className="article-card-title">
        <Link to={`/articles/${article_id}`}>{title}</Link>
      </h4>

      <p className="article-card-author">
        By{" "}
        <Link to={`/users/${author}`}>
          {author === loggedInUser ? "You" : author}
        </Link>{" "}
        in <Link to={`/topics/${topic}`}>{topic}</Link> (
        {dateFormatter(created_at)})
      </p>
      <p className="article-card-body">{body.substring(0, 180)}(...)</p>
      <p className="article-card-footer">
        <FaCommentAlt />
        &nbsp;
        {comment_count}&nbsp;&nbsp;&nbsp;
        <VoteChanger
          loggedInUser={loggedInUser}
          article_id={article_id}
          author={author}
          votes={votes}
        />
      </p>
    </li>
  );
}
