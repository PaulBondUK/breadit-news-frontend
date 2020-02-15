import React from "react";
import { Link } from "@reach/router";
import VoteChanger from "../Tools/VoteChanger";
import { dateFormatter } from "../Tools/Utils";
import { GiCookingPot } from "react-icons/gi";
import { FaCode } from "react-icons/fa";
import { IoIosFootball } from "react-icons/io";

export default function SingleArticleCard({
  article: { article_id, title, body, votes, topic, author, created_at },
  loggedInUser
}) {
  const topicIcons = {
    cooking: <GiCookingPot />,
    coding: <FaCode />,
    football: <IoIosFootball />
  };
  return (
    <section>
      <p className="single-article-card-topic-icon">{topicIcons[topic]}</p>
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
