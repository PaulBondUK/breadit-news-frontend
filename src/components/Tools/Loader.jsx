import React, { Component } from "react";
import donutLoader from "../../images/donut_loader.gif";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

// export default function Loader() {
//   return (
//     <section className="loader">
//       <img className="loader-image" src={donutLoader} alt="donut loader" />
//     </section>
//   );
// }

export default class LoaderSpinner extends Component {
  render() {
    return (
      <Loader
        className="loader"
        type="TailSpin"
        color="#00BFFF"
        height={50}
        width={50}
        timeout={3000} //3 secs
      />
    );
  }
}
