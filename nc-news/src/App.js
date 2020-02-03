import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/Navigation/NavBar";
import ArticlePage from "./components/Articles/ArticlePage";
import SingleArticlePage from "./components/Articles/SingleArticlePage";

export default class App extends Component {
  state = {
    loggedInUser: "jessjelly"
  };

  render() {
    const { loggedInUser } = this.state;
    return (
      <div className="App">
        <Header loggedInUser={loggedInUser} loginHandler={this.loginHandler} />
        <NavBar />
        <Router>
          <ArticlePage path="/articles" loggedInUser={loggedInUser} />
          <SingleArticlePage path="articles/:article_id" />
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
