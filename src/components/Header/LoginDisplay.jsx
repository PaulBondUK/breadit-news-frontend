import React, { Fragment } from "react";
import { Link } from "@reach/router";
import { GoPerson } from "react-icons/go";

export default function LoginDisplay({ loggedInUser, loginHandler }) {
  return (
    <Fragment>
      {loggedInUser && (
        <Fragment>
          <GoPerson />
          &nbsp;
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
