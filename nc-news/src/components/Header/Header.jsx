import React from "react";
import { Link } from "@reach/router";
import LoginDisplay from "../Login/LoginDisplay";

export default function Header(props) {
  const { loggedInUser, loginHandler } = props;
  return (
    <header>
      <div>
        <Link to="/">NC-NEWS</Link>
      </div>
      <div>
        <LoginDisplay loggedInUser={loggedInUser} loginHandler={loginHandler} />
      </div>
    </header>
  );
}
