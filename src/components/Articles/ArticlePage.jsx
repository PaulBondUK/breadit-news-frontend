import React from "react";
import ArticleList from "./ArticleList";

export default function ArticlePage({ loggedInUser }) {
  return (
    <main className="main-display">
      <h2 className="page-title">Articles</h2>
      <ArticleList loggedInUser={loggedInUser} />
    </main>
  );
}
