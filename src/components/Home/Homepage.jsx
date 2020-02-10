import React from "react";
import ArticlePreview from "../Articles/ArticlePreview";
import toasterImage from "../../images/toaster.png";
import freshLoafImage from "../../images/freshloaf.png";

export default function Homepage() {
  return (
    <main>
      <h2>Welcome to Breadit</h2>
      <div className="homepage-container">
        <section className="homepage-left-column">
          <img
            className="homepage-image"
            src={freshLoafImage}
            alt="fresh loaf"
          />
          <h3 className="homepage-subtitle">Fresh out the Oven</h3>
          <p className="homepage-description">
            The latest articles for you to munch on.
          </p>
          <ArticlePreview sort_by="created_at" />
        </section>
        <section className="homepage-right-column">
          <img className="homepage-image" src={toasterImage} alt="toaster" />
          <h3 className="homepage-subtitle">Hot and Toasty</h3>
          <p className="homepage-description">The most popular articles.</p>
          <ArticlePreview sort_by="votes" />
        </section>
      </div>
    </main>
  );
}
