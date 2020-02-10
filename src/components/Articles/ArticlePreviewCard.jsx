import React from "react";
import { Link } from "@reach/router";

export default function ArticlePreviewCard(props) {
  const {
    article: { article_id, title, topic, author }
  } = props;
  return (
    <li className="article-preview-card">
      <h4>
        <Link to={`/articles/${article_id}`}>{title}</Link>
      </h4>
      <p>
        By <Link to={`/users/${author}`}>{author}</Link> in{" "}
        <Link to={`/topics/${topic}`}>{topic}</Link>
      </p>
    </li>
  );
}
