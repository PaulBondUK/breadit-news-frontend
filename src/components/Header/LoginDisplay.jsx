import React, { Fragment } from "react";
import { Link } from "@reach/router";

export default function LoginDisplay({ loggedInUser, loginHandler }) {
  return (
    <Fragment>
      {loggedInUser && (
        <Fragment>
          Logged in as&nbsp;
          <Link to={`/users/${loggedInUser}`}>{loggedInUser}</Link>
        </Fragment>
      )}
      &nbsp;
      <button className="header-login-button" onClick={loginHandler}>
        {loggedInUser ? "Logout" : "Click to Login"}
      </button>
    </Fragment>
  );
}
