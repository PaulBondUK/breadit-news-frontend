import React from "react";
import { Link } from "@reach/router";

export default function TopicCard(props) {
  const { topic } = props;
  return (
    <li>
      <h3>
        <Link to={topic.slug}>/{topic.slug}</Link>
      </h3>
      <p>{topic.description}</p>
    </li>
  );
}
