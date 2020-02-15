import React from "react";
import TopicList from "./TopicList";

export default function TopicPage(props) {
  const { loggedInUser } = props;
  return (
    <main>
      <h2>Topics.</h2>
      <TopicList loggedInUser={loggedInUser} />
    </main>
  );
}
