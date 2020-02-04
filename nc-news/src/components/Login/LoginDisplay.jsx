import React, { Component } from "react";
import { Link } from "@reach/router";

export default class LoginDisplay extends Component {
  render() {
    const { loggedInUser, loginHandler } = this.props;
    return (
      <div>
        {loggedInUser ? (
          <span>
            Logged in as{" "}
            <Link to={`/users/${loggedInUser}`}>{loggedInUser}</Link>
          </span>
        ) : (
          "Not Logged in"
        )}
        <button onClick={loginHandler}>
          {loggedInUser ? "Logout" : "Login"}
        </button>
      </div>
    );
  }
}
