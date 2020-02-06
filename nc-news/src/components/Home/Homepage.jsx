import React from "react";
import ArticlePreview from "../Articles/ArticlePreview";

export default function Homepage() {
  return (
    <main>
      <h2>Welcome to Breadit</h2>
      <section>
        <h3>Fresh out the Oven</h3>
        <p>The latest articles for you to munch on.</p>
        <ArticlePreview sort_by="created_at" />
      </section>
      <section>
        <h3>Hot and Toasty</h3>
        <p>The most popular articles.</p>
        <ArticlePreview sort_by="votes" />
      </section>
    </main>
  );
}
