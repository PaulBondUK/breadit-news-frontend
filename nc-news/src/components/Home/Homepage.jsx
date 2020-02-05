import React from "react";
import ArticlePreview from "../Articles/ArticlePreview";

export default function Homepage() {
  return (
    <div>
      <h1>Welcome to Breaddit</h1>
      <h2>Fresh out the Oven</h2>
      <p>The latest articles for you to munch on.</p>
      <ArticlePreview sort_by="created_at" />
      <h2>Hot and Toasty</h2>
      <p>The most popular articles.</p>
      <ArticlePreview sort_by="votes" />
    </div>
  );
}
