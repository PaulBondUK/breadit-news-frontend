import React, { Fragment } from "react";
import { Link } from "@reach/router";

export default function LoginDisplay({ loggedInUser, loginHandler }) {
  return (
    <Fragment>
      {loggedInUser ? (
        <Fragment>
          Logged in as <Link to={`/users/${loggedInUser}`}>{loggedInUser}</Link>
        </Fragment>
      ) : (
        <Fragment>Not Logged in</Fragment>
      )}
      <button className="header-login-button" onClick={loginHandler}>
        {loggedInUser ? "Logout" : "Login"}
      </button>
    </Fragment>
  );
}
