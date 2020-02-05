import React from "react";
import { Link } from "@reach/router";
import BreadditLogo from "../../images/breaddit_logo.png";
import LoginDisplay from "../Login/LoginDisplay";
import NavBar from "../Navigation/NavBar";

export default function Header({ loggedInUser, loginHandler }) {
  return (
    <header>
      <div>
        <Link to="/">
          <img src={BreadditLogo} alt="breaddit-logo" height="60px" />
          <h1>BREADDIT</h1>
        </Link>
      </div>
      <NavBar />
      <div>
        <LoginDisplay loggedInUser={loggedInUser} loginHandler={loginHandler} />
      </div>
    </header>
  );
}
