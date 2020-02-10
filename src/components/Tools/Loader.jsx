import React from "react";
import donutLoader from "../../images/donut_loader.gif";

export default function Loader() {
  return (
    <section className="loader">
      <img className="loader-image" src={donutLoader} alt="donut loader" />
    </section>
  );
}
