import React, { Fragment } from "react";
import { Link } from "@reach/router";

export default function NavBar() {
  return (
    <Fragment>
      <ul>
        <li>
          <Link className="navbar-link" to="/articles">
            ARTICLES
          </Link>
        </li>
        <li>
          <Link className="navbar-link" to="/topics">
            TOPICS
          </Link>
        </li>
        {/* <li>
          <Link className="navbar-link" to="/">
            ABOUT
          </Link>
        </li> */}
      </ul>
    </Fragment>
  );
}
