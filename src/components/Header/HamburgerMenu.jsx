import React, { Component } from "react";
import { Link } from "@reach/router";
import { MdClose, MdMenu } from "react-icons/md";

export default class HamburgerMenu extends Component {
  state = {
    showMenu: false
  };
  render() {
    const { showMenu } = this.state;
    return (
      <nav className="hamburger-nav-container">
        {showMenu ? (
          <button onClick={this.menuToggler} className="hamburger-button-close">
            <MdClose />
          </button>
        ) : (
          <button onClick={this.menuToggler} className="hamburger-button-open">
            <MdMenu />
          </button>
        )}
        {showMenu && (
          <section className="hamburger-menu-container">
            <p
              onClick={this.menuToggler}
              className="hamburger-menu-blankspace"
            ></p>
            <p className="hamburger-menu">
              <Link
                onClick={this.menuToggler}
                className="hamburger-link"
                to="/articles"
              >
                ARTICLES
              </Link>
              &nbsp;
              <Link
                onClick={this.menuToggler}
                className="hamburger-link"
                to="/topics"
              >
                TOPICS
              </Link>
            </p>
          </section>
        )}
      </nav>
    );
  }
  menuToggler = () => {
    window.scrollTo(0, 0);
    this.setState(currentState => {
      return { showMenu: !currentState.showMenu };
    });
  };
}
