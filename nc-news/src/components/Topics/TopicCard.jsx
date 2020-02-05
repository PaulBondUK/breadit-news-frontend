import React from "react";
import { Link } from "@reach/router";

export default function TopicCard(props) {
  const { topic } = props;
  return (
    <li>
      <Link to={topic.slug}>
        <h2>{topic.slug}</h2>
      </Link>
      <p>{topic.description}</p>
    </li>
  );
}
