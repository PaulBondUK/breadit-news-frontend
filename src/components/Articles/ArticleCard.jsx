import React from "react";
import { Link } from "@reach/router";
import VoteChanger from "../Tools/VoteChanger";
import { dateFormatter } from "../Tools/Utils";

export default function ArticleCard(props) {
  const {
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
  } = props;

  return (
    <li className="article-card">
      <h3 className="article-card-title">
        <Link to={`/articles/${article_id}`}>{title}</Link>
      </h3>

      <p className="article-card-author">
        By{" "}
        <Link to={`/users/${author}`}>
          {author === loggedInUser ? "you" : author}
        </Link>{" "}
        in <Link to={`/topics/${topic}`}>{topic}</Link>
      </p>
      <p className="article-card-body">{body.substring(0, 180)}(...)</p>
      <p className="article-card-votes">
        <VoteChanger
          loggedInUser={loggedInUser}
          article_id={article_id}
          author={author}
          votes={votes}
        />
      </p>
      <p className="article-card-comments">{comment_count} Comments</p>
      <p className="article-card-date">Posted {dateFormatter(created_at)}</p>
    </li>
  );
}
