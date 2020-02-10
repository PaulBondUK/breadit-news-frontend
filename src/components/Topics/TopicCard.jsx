import React from "react";
import { Link } from "@reach/router";

export default function TopicCard(props) {
  const { topic } = props;
  return (
    <li>
      <h4>
        <Link to={topic.slug}>/{topic.slug}</Link>
      </h4>
      <p>{topic.description}</p>
    </li>
  );
}
