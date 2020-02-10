import React from "react";
import { Link } from "@reach/router";
import VoteChanger from "../Tools/VoteChanger";
import { dateFormatter } from "../Tools/Utils";

export default function SingleArticleCard({
  article: { article_id, title, body, votes, topic, author, created_at },
  loggedInUser
}) {
  return (
    <section>
      <h2>{title}</h2>
      <p className="article-card-title">
        By{" "}
        <Link to={`/users/${author}`}>
          {author === loggedInUser ? "You" : author}
        </Link>{" "}
        in <Link to={`/topics/${topic}`}>{topic}</Link> (
        {dateFormatter(created_at)})
      </p>
      <p className="single-article-body">{body}</p>
      <p className="article-card-footer">
        <VoteChanger
          loggedInUser={loggedInUser}
          article_id={article_id}
          author={author}
          votes={votes}
        />
      </p>
    </section>
  );
}
