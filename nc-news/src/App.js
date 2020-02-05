import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import Header from "./components/Header/Header";
import ArticlePage from "./components/Articles/ArticlePage";
import SingleArticlePage from "./components/Articles/SingleArticlePage";
import ErrorPage from "./components/Errors/ErrorPage";
import TopicPage from "./components/Topics/TopicPage";
import SingleTopicPage from "./components/Topics/SingleTopicPage";
import SingleUserPage from "./components/Users/SingleUserPage";
import Homepage from "./components/Home/Homepage";

export default class App extends Component {
  state = {
    loggedInUser: "jessjelly"
  };

  render() {
    const { loggedInUser } = this.state;
    return (
      <div className="App">
        <Header loggedInUser={loggedInUser} loginHandler={this.loginHandler} />
        <Router>
          <Homepage path="/" />
          <ArticlePage path="/articles" loggedInUser={loggedInUser} />
          <SingleArticlePage
            path="articles/:article_id"
            loggedInUser={loggedInUser}
            loginHandler={this.loginHandler}
          />
          <TopicPage path="/topics" loggedInUser={loggedInUser} />
          <SingleTopicPage
            path="topics/:topic_slug"
            loggedInUser={loggedInUser}
          />
          <SingleUserPage path="users/:username" />
          <ErrorPage default />
        </Router>
      </div>
    );
  }

  loginHandler = () => {
    this.setState(currentState => {
      return { loggedInUser: currentState.loggedInUser ? null : "jessjelly" };
    });
  };
}
