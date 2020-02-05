import React from "react";
import { Link } from "@reach/router";

export default function LoginDisplay({ loggedInUser, loginHandler }) {
  return (
    <div>
      {loggedInUser ? (
        <span>
          Logged in as <Link to={`/users/${loggedInUser}`}>{loggedInUser}</Link>
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
