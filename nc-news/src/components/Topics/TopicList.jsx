import React, { Component } from "react";
import * as api from "../../Api";
import TopicCard from "./TopicCard";
import ErrorPage from "../Errors/ErrorPage";
import Loader from "../Tools/Loader";

export default class TopicList extends Component {
  state = {
    topicData: null,
    isLoading: true,
    err: null
  };
  render() {
    const { topicData, isLoading, err } = this.state;
    if (err) {
      return <ErrorPage err={err} />;
    } else if (isLoading) {
      return <Loader />;
    } else {
      return (
        <ol>
          {topicData.map(topic => {
            return <TopicCard key={topic.slug} topic={topic} />;
          })}
        </ol>
      );
    }
  }

  componentDidMount() {
    api
      .getTopics()
      .then(topicData => {
        this.setState({ topicData, isLoading: false });
      })
      .catch(err => {
        this.setState({ err, isLoading: false });
      });
  }
}
