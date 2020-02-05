import React from "react";
import ArticleList from "./ArticleList";

export default function ArticlePage({ loggedInUser }) {
  return (
    <div>
      <h1>Articles</h1>
      <ArticleList loggedInUser={loggedInUser} />
    </div>
  );
}
