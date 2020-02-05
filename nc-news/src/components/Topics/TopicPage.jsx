import React from "react";
import TopicList from "./TopicList";

export default function TopicPage(props) {
  const { loggedInUser } = props;
  return (
    <div>
      <h1>Topics</h1>
      <TopicList loggedInUser={loggedInUser} />
    </div>
  );
}
