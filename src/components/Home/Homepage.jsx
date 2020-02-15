import React from "react";
import ArticlePreview from "../Articles/ArticlePreview";

export default function Homepage() {
  return (
    <main>
      <h2 className="homepage-title">Welcome to Breadit</h2>
      <div className="homepage-container">
        <section className="homepage-left-column">
          <h3 className="homepage-subtitle">Fresh out the Oven</h3>
          <p className="homepage-description">
            The latest articles for you to munch on.
          </p>
          <ArticlePreview sort_by="created_at" />
        </section>
        <section className="homepage-right-column">
          <h3 className="homepage-subtitle">Hot and Toasty</h3>
          <p className="homepage-description">
            The most popular articles today.
          </p>
          <ArticlePreview sort_by="votes" />
        </section>
      </div>
    </main>
  );
}
