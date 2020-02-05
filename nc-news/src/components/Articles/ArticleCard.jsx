import React from "react";
import { Link } from "@reach/router";
import VoteChanger from "../Tools/VoteChanger";

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
    <li>
      <Link to={`/articles/${article_id}`}>
        <h2>{title}</h2>
      </Link>
      <p>
        By <Link to={`/users/${author}`}>{author}</Link> in{" "}
        <Link to={`/topics/${topic}`}>{topic}</Link>
      </p>
      <p>{body.substring(0, 180)}(...)</p>
      <VoteChanger
        loggedInUser={loggedInUser}
        article_id={article_id}
        author={author}
        votes={votes}
      />{" "}
      <p>
        {comment_count} Comments | Posted {created_at}
      </p>
    </li>
  );
}
