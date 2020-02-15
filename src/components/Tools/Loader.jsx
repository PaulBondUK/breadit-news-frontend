import React, { Component } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default class LoaderSpinner extends Component {
  render() {
    return (
      <Loader
        className="loader"
        type="TailSpin"
        color="#00BFFF"
        height={50}
        width={50}
        timeout={15000}
      />
    );
  }
}
