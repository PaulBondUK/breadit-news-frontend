import React from "react";
import { Link } from "@reach/router";
import BreaditLogo from "../../images/breadit_logo_small.png";
import LoginDisplay from "./LoginDisplay";
import NavBar from "./NavBar";
import HamburgerMenu from "./HamburgerMenu";

export default function Header({ loggedInUser, loginHandler }) {
  return (
    <header className="header-container">
      <section className="header-title">
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
      </section>
      <NavBar />
      <HamburgerMenu loggedInUser={loggedInUser} />
      <section className="header-login">
        <LoginDisplay loggedInUser={loggedInUser} loginHandler={loginHandler} />
      </section>
    </header>
  );
}
