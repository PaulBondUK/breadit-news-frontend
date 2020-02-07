import React, { Component } from "react";
import * as api from "../../Api";
import ErrorPage from "../Errors/ErrorPage";
import ArticleList from "../Articles/ArticleList";

export default class SingleUserPage extends Component {
  state = {
    userData: null,
    isLoading: true,
    err: null
  };
  render() {
    const { userData, isLoading, err } = this.state;
    if (err) {
      return <ErrorPage err={err} />;
    } else if (isLoading) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h1>{userData.username}</h1>
          <p>Name: {userData.name}</p>
          <img
            src={userData.avatar_url}
            alt={`avatar of user ${userData.username}`}
          />
          <ArticleList author={userData.username} />
        </div>
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
        console.log(err);
        this.setState({ err });
      });
  }

  componentDidUpdate(prevProps) {
    console.log(this.props);
    const { username } = this.props;
    if (prevProps.username !== username) {
      api
        .getUser(username)
        .then(userData => {
          this.setState({ userData, isLoading: false });
        })
        .catch(err => {
          console.log(err);
          this.setState({ err });
        });
    }
  }
}
