import React, { Component } from "react";
import { Link } from "@reach/router";
import { MdClose, MdMenu } from "react-icons/md";
import { GoPerson } from "react-icons/go";

export default class HamburgerMenu extends Component {
  state = {
    showMenu: false
  };
  render() {
    const { showMenu } = this.state;
    const { loggedInUser, loginHandler } = this.props;
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

        <section
          className={
            showMenu
              ? "hamburger-menu-container-open"
              : "hamburger-menu-container-closed"
          }
        >
          <p
            onClick={this.menuToggler}
            className="hamburger-menu-blankspace"
          ></p>
          <p className="hamburger-menu">
            {loggedInUser ? (
              <Link
                to={`/users/${loggedInUser}`}
                onClick={this.menuToggler}
                className="hamburger-link"
              >
                <GoPerson />
              </Link>
            ) : (
              <button onClick={loginHandler} className="hamburger-link-button">
                LOGIN
              </button>
            )}

            <Link
              onClick={this.menuToggler}
              className="hamburger-link"
              to="/articles"
            >
              ARTICLES
            </Link>

            <Link
              onClick={this.menuToggler}
              className="hamburger-link"
              to="/topics"
            >
              TOPICS
            </Link>
          </p>
        </section>
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
