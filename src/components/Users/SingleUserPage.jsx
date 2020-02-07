import React, { Component } from "react";
import * as api from "../../Api";
import ErrorPage from "../Errors/ErrorPage";
import ArticleList from "../Articles/ArticleList";
import Loader from "../Tools/Loader";

export default class SingleUserPage extends Component {
  state = {
    userData: null,
    isLoading: true,
    err: null
  };
  render() {
    const { userData, isLoading, err } = this.state;
    const { loggedInUser } = this.props;
    if (err) {
      return <ErrorPage err={err} />;
    } else if (isLoading) {
      return <Loader />;
    } else {
      return (
        <main>
          <h2>{userData.username}</h2>
          <p>Name: {userData.name}</p>
          <img
            src={userData.avatar_url}
            alt={`avatar of user ${userData.username}`}
          />
          <ArticleList author={userData.username} loggedInUser={loggedInUser} />
        </main>
      );
    }
  }

  componentDidMount() {
    const { username } = this.props;
    api
      .getUser(username)
      .then(userData => {
        this.setState({ userData, isLoading: false });
      })
      .catch(err => {
        this.setState({ err });
      });
  }

  componentDidUpdate(prevProps) {
    const { username } = this.props;
    if (prevProps.username !== username) {
      api
        .getUser(username)
        .then(userData => {
          this.setState({ userData, isLoading: false });
        })
        .catch(err => {
          this.setState({ err });
        });
    }
  }
}
