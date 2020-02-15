import React from "react";
import ArticleList from "../Articles/ArticleList";

export default function SingleTopicPage(props) {
  const { loggedInUser, topic_slug } = props;
  return (
    <main>
      <h2 className="topic-title">/{topic_slug}</h2>
      <ArticleList loggedInUser={loggedInUser} topic_slug={topic_slug} />
    </main>
  );
}
