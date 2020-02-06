import React from "react";
import { Link } from "@reach/router";
import BreaditLogo from "../../images/breadit_logo.png";
import LoginDisplay from "./LoginDisplay";
import NavBar from "./NavBar";

export default function Header({ loggedInUser, loginHandler }) {
  return (
    <header className="header-container">
      <p className="header-title">
        <Link to="/">
          <img
            src={BreaditLogo}
            alt="breadit-logo"
            height="60px"
            className="title-logo"
          />
        </Link>
        <h1 className="site-title">
          <Link to="/">BREADIT</Link>
        </h1>
      </p>
      <nav className="header-navbar">
        <NavBar />
      </nav>
      <p className="header-login">
        <LoginDisplay loggedInUser={loggedInUser} loginHandler={loginHandler} />
      </p>
    </header>
  );
}
