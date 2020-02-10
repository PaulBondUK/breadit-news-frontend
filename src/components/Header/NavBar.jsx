import React from "react";
import { Link } from "@reach/router";

export default function NavBar() {
  return (
    <nav className="header-navbar">
      <Link className="navbar-link" to="/articles">
        ARTICLES
      </Link>
      &nbsp;
      <Link className="navbar-link" to="/topics">
        TOPICS
      </Link>
    </nav>
  );
}
