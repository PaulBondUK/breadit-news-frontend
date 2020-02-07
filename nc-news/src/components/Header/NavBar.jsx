import React, { Fragment } from "react";
import { Link } from "@reach/router";

export default function NavBar() {
  return (
    <Fragment>
      <ul>
        <li className="navbar-link-articles">
          <Link to="/articles">ARTICLES</Link>
        </li>
        <li className="navbar-link-topics">
          <Link to="/topics">TOPICS</Link>
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
