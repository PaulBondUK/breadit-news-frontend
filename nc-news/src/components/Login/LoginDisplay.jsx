import React, { Component } from "react";

export default class LoginDisplay extends Component {
  render() {
    const { loggedInUser, loginHandler } = this.props;
    return (
      <div>
        {loggedInUser ? `Logged in as ${loggedInUser}` : "Not Logged in"}
        <button onClick={loginHandler}>
          {loggedInUser ? "Logout" : "Login"}
        </button>
      </div>
    );
  }
}
