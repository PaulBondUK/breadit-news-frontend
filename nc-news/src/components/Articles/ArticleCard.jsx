import React, { Component } from "react";
import { Link } from "@reach/router";

export default class ArticleCard extends Component {
  render() {
    const {
      article: {
        article_id,
        title,
        body,
        votes,
        topic,
        author,
        created_at,
        comment_count
      },
      addVoteToArticle,
      index,
      loggedInUser
    } = this.props;

    return (
      <li>
        <Link to={`${article_id}`}>
          <h2>{title}</h2>
        </Link>
        <p>
          By <Link to={`/users/${author}`}>{author}</Link> in{" "}
          <Link to={`/topics/${topic}`}>{topic}</Link>
        </p>
        <p>{body.substring(0, 180)}(...)</p>
        <p>
          <button
            onClick={() => addVoteToArticle(article_id, -1, index)}
            disabled={!loggedInUser ? true : loggedInUser === author}
          >
            -
          </button>{" "}
          {votes} Votes{" "}
          <button
            onClick={() => addVoteToArticle(article_id, 1, index)}
            disabled={!loggedInUser ? true : loggedInUser === author}
          >
            +
          </button>
          | {comment_count} Comments | Posted {created_at}
        </p>
      </li>
    );
  }
}

// article_id: 33;
// title: "Seafood substitutions are increasing";
// body: "'SEAFOOD fraud is a serious global problem', begins a recent report from Oceana, an NGO. Reviewing over 200 studies in 55 countries, the report finds that one in five fish sold has been mislabelled. Although fish fraud is common early in the supply chain, most of it comes at the retail level. In 65% of cases, the motivation is economic—slippery restaurateurs frequently serve up cheaper fish than they advertise to cut costs. In America, Oceana has reported instances of tilapia being sold as the more expensive red snapper. Especially brazen fish criminals have invented new types of fish entirely. In Brazil, researchers were puzzled to find markets selling 'douradinha', ' non-existent species. Close inspection found that 60% of such fish were actually 'vulture' catfish, a relatively undesirable dish. Reports in America of catfish being substituted for more expensive fish date back to at least 2002; Oceana’s study suggests that the phenomenon is spreading.";
// votes: 0;
// topic: "cooking";
// author: "weegembump";
// created_at: "2018-05-30T15:59:13.341Z";
// comment_count: 6;
