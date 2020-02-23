import React, { Component } from "react";
import ArticlePreviewCard from "./ArticlePreviewCard";

export default function ArticlePreview({ articleData }) {
  return (
    <ul>
      {articleData.articles.map(article => {
        return (
          <ArticlePreviewCard article={article} key={article.article_id} />
        );
      })}
    </ul>
  );
}
