import React, { Fragment } from "react";
import { Link } from "@reach/router";

export default function NavBar() {
  return (
    <Fragment>
      <Link to="/articles">Articles</Link>
      <Link to="/topics">Topics</Link>
    </Fragment>
  );
}
