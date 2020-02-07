import React, { Fragment } from "react";
import { Link } from "@reach/router";

export default function NavBar() {
  return (
    <Fragment>
      <Link className="navbar-link" to="/articles">
        ARTICLES
      </Link>
      &nbsp;
      <Link className="navbar-link" to="/topics">
        TOPICS
      </Link>
    </Fragment>
  );
}
